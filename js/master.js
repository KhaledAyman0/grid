// اختفاء ال ul في الميديا

let icon = document.querySelectorAll(".icon")


// Toggle spin class on Icon
document.querySelector('.toogle-setteings .fa-gear').onclick = function () {
    // Toggle class fa-spin for rotation on Icon
    this.classList.toggle("fa-spin")
    document.querySelector('.Seteing-Box').classList.toggle("open")
};




// Check If There Local Storge Color Option
let mainColors = localStorage.getItem("color-option")

if (mainColors !== null) {
    // console.log(localStorage.getItem("color-option"))
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem("color-option"))

}

// Swith Colors 
const colorList = document.querySelectorAll(".color-list li")
    
//Loop on all list items
colorList.forEach( li =>{
    //Click on every list item
    li.addEventListener("click", (e) => {
        //Set Color On Root
        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color) 
        //set color on local storage
    let mainColors = localStorage.setItem("color-option" , e.target.dataset.color)
    //Remove Class Active List
    e.target.parentElement.querySelectorAll(".active").forEach(ele => { 
        ele.classList.remove("active")
    })
    
    //Add Class Active List
    e.target.classList.add("active")
    });
})





// Random Background option
let backgroundOption = true;

// Variables To Control The Background Interval
let backgroundInterval;

// Chek if there Local Storage Random BackgroundItem
let backgroundLocalItem = localStorage.getItem("background-option");

// Chek if Random Background Local Storage Is NOT empty 

if (backgroundLocalItem !== null) {
    
    if (backgroundLocalItem === 'true') {

        backgroundOption = true;

    }else {

        backgroundOption = false;

    }  
    //Remove Active class From All Spans
    document.querySelectorAll(".random-background span").forEach(ele => {
        ele.classList.remove("active")
    });
    if(backgroundLocalItem === 'true') {
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        document.querySelector(".random-background .no").classList.add("active");
    }
}



// Swith Random Background option 
const RandomBackEl = document.querySelectorAll(".random-background span")
//Loop on all spans
RandomBackEl.forEach( span =>{


    //Click on every spans
    span.addEventListener("click", (e) => {


    //Remove Class Active spans
    e.target.parentElement.querySelectorAll(".active").forEach(ele => { 
        ele.classList.remove("active")


    })

    //Add Class Active spans
    e.target.classList.add("active")

    if(e.target.dataset.background === "yes") {
        backgroundOption = true;
        randomizeBackground()
        localStorage.setItem("background-option", true)
    }
    else {
        backgroundOption = false;
        clearInterval(backgroundInterval)
        localStorage.setItem("background-option", false)
    }

    });
})

// Select landing Page Element
let landingPage = document.querySelector('.landing-page');
// Get Array of Images
let imagesArray = ["pexels-photo-619419.jpg" , "pexels-photo-1714341.jpg" , "pexels-photo-6476587.jpg" , "pexels-photo-6476587.jpg"] 



// Function to Randomize Imgs

function randomizeBackground() {
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() =>{
            //Get Random Number
            let randomNumber = Math.floor(Math.random() * imagesArray.length)
        //Change background-image Url
            landingPage.style.backgroundImage = 'url("images/' + imagesArray[randomNumber] + '")'
        }, 1000)        
    } else {
        
    }
}
// Select Skills Seslector

let ourSlills = document.querySelector(".our-skills")

// Scroll Event
window.onscroll = function ()  {

    //Skills ofset Top
    let skillsOfsetTop = ourSlills.offsetTop;

    
    
    //Skills Outer Height
    let skillsOuterHeight = ourSlills.offsetHeight;
    
    //window Heigtht
    let windowHight = this.innerHeight;
    
    //window Scroll top
    let windowScrollTop = this.pageYOffset;
    

    if (windowScrollTop < (skillsOfsetTop + skillsOuterHeight - windowHight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progres span")
        
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progres;
        })

    } 
};
// create popup  with The Image

let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach((img) => {
    img.addEventListener("click", (e) => {
        // create overlay element 
        let overlay = document.createElement("div");
        // Add Class To overlay 
        overlay.className = "popup-overlay";
        //Append overlay OF tHE Body
        document.body.appendChild(overlay);
        //Create The Popup
        let popupBox = document.createElement("div");
        //Add Class To popupBox
        popupBox.className = "popup-box"
        //Create The Close Span
        let closeButton = document.createElement("span");
        //Create The Close Button Text
        let closeButtonText = document.createTextNode("x")
        //Appen Text Close Button
        closeButton.appendChild(closeButtonText);
        //Add Class To close Button
        closeButton.className = "close-button"
        //Add close Button To The Popup box
        popupBox.appendChild(closeButton);
        if (img.alt !== null) {
            //Create Heading 
            let imgHeading = document.createElement("h2");
            imgHeading.className = "imgHeading"
            //Create Text For Heading 
            let imgText = document.createTextNode(img.alt)
            // Append The Text To The Heading
            imgHeading.appendChild(imgText);
            // Append The Heading  To The Popup Box
            popupBox.appendChild(imgHeading);
        }
        // create The Img
        let popupImage = document.createElement("img")
        //Set Image Source
        popupImage.src = img.src;
        //Add Image To Popup Box
        popupBox.appendChild(popupImage)
        //Append The popup to the Body
        document.body.appendChild(popupBox);
    })
})
// Close the Popup
document.addEventListener("click" , (e) => {
    if (e.target.className == "close-button" ) {
        //Remove the Current Popup
        e.target.parentNode.remove();
        //Remove Overlay Pop
        document.querySelector(".popup-overlay").remove();

    } 
})