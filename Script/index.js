// elemts

const scroll_button = document.getElementById('float-button');

scroll_button.addEventListener('click', (e)=>{
     document.getElementById('roadmap').scrollIntoView({behavior: 'smooth'});
});

// ekran

window.addEventListener('scroll', ()=>{
     const scrolY = window.scrollY;

     if(scrolY > 700){
          scroll_button.style.transform = 'scale(0)'
     }
     else{
           scroll_button.style.transform = 'scale(1)'
     }
});