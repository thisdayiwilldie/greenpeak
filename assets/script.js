const configuratorPrice = document.querySelector('.configurator__cost');
configuratorPrice.innerText = 0

const configuratorPicture = document.querySelector('.configurator__picture__extension')

const configurePictureModels = document.querySelector('.configurator__pictures__models')
const configurePictureAdditionals = document.querySelector('.configurator__pictures__additionals')

let configurePictureLayersArray = [];




const totalPrice = () => [...document.querySelectorAll('.configurator__button input:checked')]
    .reduce((acc, {
        dataset: {
            cost
        }
    }) => acc + +cost, 0);




const configurationPicturesTemplate = (htmlStructure, whichPlace, nameWhereContentWillIncluded) => {
      
    whichPlace.innerHTML = configurePictureLayersArray.map((item, index) => {
        if(item.name == nameWhereContentWillIncluded)
            return htmlStructure(item,index)

        // if(item.name == 'configurator__element models')
        //     return htmlStructure(item,index)

    }).join('')


}



const configuratorSwitch = (className) => {

    [...document.querySelectorAll(className)].forEach((button, index) => {

        button.addEventListener('click', (e) => {
            let configurePictureStructure = {
                name: button.labels[0].parentNode.parentNode.className,
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
                    // return document.getElementById(`${index}`).parentElement.remove()
                    
               
            }
           
       

            //Template Pictures for Models
            if(configurePictureStructure.name == "configurator__element models")
            configurationPicturesTemplate((item, index)=> `<figure class="configurator__figure configurator__figure--layer">
                <img class="configurator__pictures__layer" src=${item.url} style="left:${item.positionX}; top:${item.positionY}" id="${index}"/>
                </figure>`, 
                configurePictureModels, 'configurator__element models')


            //Template Pictures for Additionals
            if(configurePictureStructure.name == "configurator__element additionals")
            configurationPicturesTemplate((item, index)=> `<figure class="configurator__figure configurator__figure--layer">
                <img class="configurator__pictures__layer" src=${item.url} style="left:${item.positionX}; top:${item.positionY}" id="${index}"/>
                </figure>`, 
                configurePictureAdditionals, 'configurator__element additionals')
            

            changeSizeLayers()
    
        });
    });
}


//If clicked od Model (radio)
configuratorSwitch(".configurator__radio")

//If clicked on Additionals (checkbox)
configuratorSwitch(".configurator__checkbox")





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









document.querySelectorAll('.configurator__switches').forEach((element)=>{
    element.addEventListener('change', (e) => {
        configuratorPrice.textContent = totalPrice()
    });
    
})




















