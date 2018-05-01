
document.addEventListener("scroll", function() {

  const nav = document.getElementById('navBar')
  const logo = document.getElementById('navLogo')

    if (window.pageYOffset > 300){
      // nav.classList.remove('uk-hidden')
      nav.classList.add('bg-purple')
      logo.classList.remove('uk-invisible')
    }
    if (window.pageYOffset < 300){
      nav.classList.remove('bg-purple')
      nav.classList.add('bg-clear')
      logo.classList.add('uk-invisible')
    }
  })

  
  const shiftWindow = function() { scrollBy(0, -60) };
  if (location.hash) shiftWindow() 

  window.addEventListener("hashchange", shiftWindow);
 

  setTimeout(function(){
    UIkit.modal("#modal-center").show();
  }, 3000)