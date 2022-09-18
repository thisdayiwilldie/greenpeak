const configuratorPrice = document.querySelector('.configurator__cost');
configuratorPrice.innerText = 0

const configuratorPicture = document.querySelector('.configurator__picture__extension')

const configurePictureModels = document.querySelector('.configurator__pictures__models')
const configurePictureTrims = document.querySelector('.configurator__pictures__trims')
const configurePictureAdditionals = document.querySelector('.configurator__pictures__additionals')

let configurePictureLayersArray = [];



const configurationPicturesTemplate = (htmlStructure, whichPlace, nameWhereContentWillIncluded) => {
      
    whichPlace.innerHTML = configurePictureLayersArray.map((item, index) => {
        if(item.name == nameWhereContentWillIncluded)
            return htmlStructure(item,index)

    
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
                otherOptions: button.dataset.other_options,

            }

            console.log(configurePictureStructure.otherOptions)
           
            if (button.dataset.checked == "false") {
                button.dataset.checked = true
                    if(configurePictureStructure.name == "configurator__element models"){
                        configurePictureLayersArray.pop()
                         button.dataset.checked = false
                         
                        document.querySelectorAll(".configurator__button--model").forEach(element=> element.classList.remove("configurator__button--active"))
                         button.parentNode.classList.add("configurator__button--active");

                    }

                    if(configurePictureStructure.name == "configurator__element trims"){
                        configurePictureLayersArray.pop()
                         button.dataset.checked = false
                         
                        document.querySelectorAll(".configurator__button--trim").forEach(element=> element.classList.remove("configurator__button--active"))
                         button.parentNode.classList.add("configurator__button--active");

                    }
                    
                configurePictureLayersArray.push(configurePictureStructure)

                    
    
            } else {
                button.dataset.checked = false
              
                    configurePictureLayersArray = configurePictureLayersArray.filter(function (el) {
                        return el.id != index
                    })
                    // return document.getElementById(`${index}`).parentElement.remove()
                    
               
            }
           
        

                // if(button.className == 'configurator__radio configurator__radio--trim')
                //     {      
                //         document.querySelectorAll(".configurator__switches.configurator__switches--second").forEach(element=>{
                //         element.style.display = "flex"
                //         console.log(element)
                //     })  
                //     }

                //     else
                //         {      
                //             document.querySelectorAll(".configurator__switches.configurator__switches--second").forEach(element=>{
                //             element.style.display = "none"
                //             console.log(element)
                //         })  
                //     }

              

                
           
            //Template Pictures for Models
            if(configurePictureStructure.name == "configurator__element models"){
            configurationPicturesTemplate((item, index)=> {
                return `<figure class="configurator__figure">
                <a href="${item.url}" data-lbwps-width="0" data-lbwps-srcsmall="${item.url}"><img class="configurator__picture" src=${item.url} id="${index}"/></a>
                </figure>`
                
            }, 
                configurePictureModels, 'configurator__element models')

                    document.querySelectorAll(".configurator__radio--model").forEach((element)=>{
                        element.checked = false
                    })
                 button.checked = true
            }


             //Template Pictures for Trims
             if(configurePictureStructure.name == "configurator__element trims"){
                let imagesInGallery = [configurePictureStructure.url.split(" ")][0].slice(0, -1)
                // let otherOptions = [configurePictureStructure.otherOptions.split(" ")][0].slice(0, -1)
                
                configurationPicturesTemplate((item, index)=> {
                    return imagesInGallery.map((imageURL)=>{
                       
                  
                    return `<figure class="configurator__figure swiper-slide">
                    <a class="swiper-slide" href="${imageURL}" data-lbwps-width="0" data-lbwps-srcsmall="${imageURL}"><img class="configurator__picture" src=${imageURL} id="${index}"/></a>
                    </figure>`
                }).join('')
                }, 
                    configurePictureTrims, 'configurator__element trims')
    
                        document.querySelectorAll(".configurator__radio--trim").forEach((element, index)=>{
                            element.checked = false
                            // if(index == 1){
                            //   console.log(element.parentElement)
                            // }
                        })
                     button.checked = true
                       

                }



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
configuratorSwitch(".configurator__radio--model")



//If clicked od Trim (radio)
configuratorSwitch(".configurator__radio--trim")

window.onload = ()=>{
    document.querySelector(".configurator__radio--model:first-child").click()
    document.querySelector(".configurator__radio--trim:first-child").click()

}

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





//totalPrice 

const totalPrice = () => [...document.querySelectorAll('.configurator__button input:checked')]
    .reduce((acc, {
        dataset: {
            cost
        }
    }) => acc + +cost, 0);


document.querySelectorAll('.configurator__switches').forEach((element)=>{
    element.addEventListener('change', (e) => {
        configuratorPrice.textContent = totalPrice()
    });
    
})











const swiper = new Swiper(".swiper", {});


