const image = document.querySelector('#image');
const button = document.querySelector('#btn');

button.addEventListener('click', ()=>{
    // image.setAttribute('src', 'on1.jpg');
    if(button.textContent == "On"){
        image.src = "on1.jpg";
        button.textContent = "Off";

    }else{
        image.src = "off.jpg";
        button.textContent = "On";

    }
})

