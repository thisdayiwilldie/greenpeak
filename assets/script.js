const configuratorPrice = document.querySelector('.configurator__cost');
configuratorPrice.innerText = 0

const configuratorPicture = document.querySelector('.configurator__picture__extension')
// const primaryPictureURL =  document.querySelector('.configurator__picture__extension').src
const configurePictureLayers = document.querySelector('.configurator__pictures__layers')
let configurePictureLayersArray = [];




const totalPrice = () => [...document.querySelectorAll('.configurator__switch__slider input[type=checkbox]:checked')]
    .reduce((acc, {
        dataset: {
            cost
        }
    }) => acc + +cost, 0);




[...document.querySelectorAll(".configurator__switches input")].forEach((button, index) => {

    button.addEventListener('click', () => {
        let configurePictureStructure = {
            id: index,
            url: button.dataset.url,
            positionX: button.dataset.positionx,
            positionY: button.dataset.positiony,
        }

        if (button.dataset.checked == "false") {
            button.dataset.checked = true
            configurePictureLayersArray.push(configurePictureStructure)


        } else {
            button.dataset.checked = false
            configurePictureLayersArray = configurePictureLayersArray.filter(function (el) {
                return el.id != index
            })

        }

        configurePictureLayers.innerHTML = configurePictureLayersArray.map((item, index) => {

            return `<figure class="configurator__figure configurator__figure--layer"><img class="configurator__pictures__layer" src=${item.url} style="left:${item.positionX}; top:${item.positionY}" id="${index}"/></figure>`


        }).join('')

        changeSizeLayers()

    });
});




document.querySelector('.configurator__switches').addEventListener('change', (e) => {
    configuratorPrice.textContent = totalPrice()


});





// Scale additional Element on Model
const scalePictureLayer = (getChangeSize) => {
    document.querySelectorAll(".configurator__pictures__layer").forEach((item) => {
        item.style.transform = `scale(${getChangeSize}) `
    })
}

const changeSizeLayers = (size = 600, changeSize, imageContainer) => {

    imageContainer = document.querySelector(".configurator__pictures").clientWidth
    if (document.querySelector(".configurator__pictures").clientWidth != size) {
        changeSize = imageContainer / size
        scalePictureLayer(changeSize)

    } else {
        changeSize = 1
        scalePictureLayer(changeSize)
    }

};

onresize = (event) => {
    changeSizeLayers()
}






























// const output = document.querySelector('.configurator__cost');
// output.innerText = 0

// const totalPrice = () => [...document.querySelectorAll('.switch input[type=checkbox]:checked')]
//   .reduce((acc, {
//     dataset: {
//       cost
//     }
//   }) => acc + + cost, 0);

//   const configuratorPicture = () => [...document.querySelectorAll('.switch input[type=checkbox]:checked')]
//   .reduce((acc, {
//     dataset: {
//       url
//     }
//   }) => url, 0);

// document.querySelector('.configurator__switches').addEventListener('change', () => output.textContent = totalPrice());

// document.querySelector('.configurator__switches').addEventListener('change', () => document.querySelector('.configurator__picture').src = configuratorPicture());