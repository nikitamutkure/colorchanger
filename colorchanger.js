
document.getElementById("but").addEventListener("click",function(){
    const randomnumber = Math.floor(Math.random() * 1677215);
    const randomcode = "#" + randomnumber.toString(16);
    
    document.body.style.backgroundColor = randomcode;
    document.getElementById("colornames").innerText = randomcode;
})




