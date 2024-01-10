let clickMenu = document.querySelector(".clickMenu");
console.log(clickMenu)
        const navlinks = document.querySelector(".nav-links");
      
        clickMenu.addEventListener('click',()=>{
          navlinks.classList.toggle('active');
        })