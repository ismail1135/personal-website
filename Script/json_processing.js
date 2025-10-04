const stitle = document.getElementById('s-title');
const scontent =document.getElementById('s-content');
const shtitle = document.getElementById('sh-title');
const shcontent =document.getElementById('sh-content');
const bottomSheet = document.getElementById('sheet');
const close = document.getElementById('close');
const content = document.getElementById('main-content');

fetch("my_road_map.json").then(res => res.json())
.then(data => {
     //liste yazdırma
     const list = document.getElementById('road-map-list');

     data.forEach((item, index )=>{
          const li = document.createElement('li');
          const itemSection = document.createElement('div');
          const line = document.createElement('div');
          const point = document.createElement('div');
          const row = document.createElement('div');
          const title = document.createElement('p');
          const time = document.createElement('p');

          itemSection.className ='itemSection';
          row.className ='row';
          time.className='time';
          title.className='title';
          line.className ='line';
          point.className ='point';

          row.appendChild(title);
          row.appendChild(time);
          itemSection.appendChild(row);
          itemSection.appendChild(line);
          itemSection.appendChild(point);

          //işlem rengi
          if(item.type == 'progress'){
               point.style.background = '#fbde37'
          }

          //hover

          title.addEventListener('mouseenter', ()=>{
               time.style.transform ='translateY(0)'
               time.style.opacity = 0.3
               
          });

          title.addEventListener('mouseleave', ()=>{
               time.style.transform ='translateY(2rem)'
               time.style.opacity = 0.0
          });


          //click

          close.addEventListener('click', (e)=>{
                window.scrollTo(0,700);
                   bottomSheet.style.transform ='scale(0) translateY(-100vh)';
                   bottomSheet.style.opacity = 0;
                   content.style.opacity = 1;
                   content.style.transform = 'scale(1)'

                   
                   
          })

          title.addEventListener('click', (e) =>{

               if(window.innerWidth <= 768){
                    window.scrollTo(0,0);
                   bottomSheet.style.transform ='scale(1) translateY(0)';
                   bottomSheet.style.opacity = 1;
                   document.body.style.overflow = 'hidden';
                   

                    shtitle.textContent = item.title + ' | ' + item.projectName;

               shcontent.textContent = item.content;
                   
               }

               stitle.style.transform = 'scale(0.7)'
               scontent.style.transform = 'scale(0.7)'
               
               stitle.style.opacity = 0.7
               scontent.style.opacity = 0.7

                  stitle.style.filter = 'blur(0.5rem)'
                  scontent.style.filter = 'blur(0.5rem)'


               setTimeout(()=>{
                    stitle.style.transform = 'scale(1)'
               scontent.style.transform = 'scale(1)'
                  stitle.style.opacity = 1
               scontent.style.opacity = 1
               stitle.style.filter = 'blur(0.0rem)'
                  scontent.style.filter = 'blur(0.0rem)'
               }, 200);

               

               stitle.textContent = item.title + ' | ' + item.projectName;

               scontent.textContent = item.content;
          });

          //son item ise 
          if(index === data.length - 1)
          {
              line.style.display='none'
          }
     

          li.appendChild(itemSection);
          title.textContent = item.title;
          time.textContent = item.time
          list.appendChild(li);
     })
})