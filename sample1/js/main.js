console.log("hello world");

window.onload = (function() {  
    const menus = ['NEW10%', 'BEST100', 'PANTS', '+PLUS SIZE','TOP']
    menus.map((menu) => {
        const li = document.createElement("LI");
        const a = document.createElement("A");
        const ul = document.querySelector(".nav ul");
    
        ul.appendChild(li)
        li.appendChild(a)
        a.innerText=menu
    })   
})




