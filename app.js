const DOG_API = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsE = document.querySelector('.random-dogs');
const goButton = document.querySelector('.go-button');


async function getRandomDogs() {
    const res = await (await fetch(DOG_API)).json();
    randomDogsE.innerHTML = '';
    //    <div class="container mt-4">
    //    <div class="row">
    //      <div class="col-sm">
    //        One of three columns
    //        <div class="card" style="width: 18rem;">
    //          <img src="..." class="card-img-top" alt="...">

    //        </div>
    //      </div>

    //    </div>
    //  

    res.message.forEach(dogImage => {
        

        const row = document.createElement('div');
        row.classList.add('row');

        const col = document.createElement('div');
        col.classList.add('col');
        row.appendChild(col);

        const card = document.createElement('div');
        card.classList.add('card');
        

        const img = document.createElement('img');
        img.src = dogImage;
        img.classList.add('rounded');
        img.setAttribute('style','max-width: 300px;');
        card.appendChild(img);

        col.appendChild(card);

        randomDogsE.appendChild(row);
    });

}

goButton.addEventListener('click', getRandomDogs);
