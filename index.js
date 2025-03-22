import { generateDescHTML, generateDialogHTML, generateDescVideoHTML, generateDialogHTML2} from "./script.js";
import {data,data2, data3, data4} from "./script2.js";

const menuHamburger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');

menuHamburger.addEventListener('click', ()=>{
  navBar.classList.toggle('mobile-menu');
})


// const productsContainer = document.querySelector(".contener-contener-img-services");
const dialog = document.querySelector("dialog");
let currentItem = null;

const actionService = () => {
  // ajout de l'action pour afficher la boite de dialogue
  const services = document.querySelectorAll(".img-service");

  services.forEach((service) => {
    service.addEventListener("click", () =>{
      // selection des elements
      const dialog = document.querySelector("dialog");
      const dialogContent = document.querySelector(".dialog-menu");
      dialogContent && dialogContent.remove();
      dialog.showModal();
      dialog.scrollTo(0, 0);
      const section = document.createElement("section");
      section.classList.add("dialog-menu");
      currentItem = data.filter((i) => i.id == service.dataset.id)[0];
      section.innerHTML = generateDialogHTML(currentItem);
      dialog.appendChild(section);
    });
  });
};
  
actionService();

// close popover
const btnClose = document.querySelector(".close");
btnClose.addEventListener("click", () => {
  dialog.close();
});

const descContainer = document.querySelector(".contener-img-desc .desc");
descContainer.innerHTML = `
      <div>
        <p>Le <span style="color:red; font-weight:bold;">Marketing Digital</span> est un outil puissant et indispensable pour étendre, engager et fideliser les consommateurs; il offre aux entreprises de toutes tailles des opportunités considérables pour développer leur activités et leur notorité.</p>
      </div>
`;

// IMAGES EMPILEES

const actionFormations = () => {
  // ajout de l'action pour faire basculer les images

  const circleConteneur = document.querySelectorAll(".circle");
  // let position = 4;
  circleConteneur.forEach((circle) => {
    circle.addEventListener("click",() => {
      document.querySelector(".desc div p").style.display = 'none'
      
      const img = document.querySelectorAll(".img")
      img.forEach((el) =>{
        
        if(circle.dataset.id === el.dataset.id){
          el.style.zIndex = 4;
          el.style.opacity = 1;
          el.style.width = '100%';
          el.style.height = '80%';
          el.style.position = '';
          el.style.left = '50%';
          el.style.top = '50%';
          el.style.transform = 'translate(-50%,-50%)';
          const actionP = (a) =>{
            
            const descContainer = document.querySelector(".contener-img-desc .desc");
            const divP = document.querySelector(".paragraph");
            divP && divP.remove();
            const div = document.createElement("div");
            div.classList.add("paragraph");
            div.innerHTML = generateDescHTML(data2[a]);
            descContainer.appendChild(div);
            
          };
          actionP(el.dataset.id);
        
          
        } else {
          const index = (el.style.zIndex);
          el.style.zIndex = index - 1;
        } 
      });
    });
  });   
};
actionFormations();


// section 5
const pVideo = document.querySelector('.contener .desc');
pVideo.innerHTML = `

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
       incidunt? Voluptatem molestias repellendus tenetur commodi voluptate,
        accusantium nulla numquam, soluta asperiores laborum, enim perspiciatis sequi eligendi quia. 
        Incidunt minima aperiam ut eaque, sit porro vero, reprehenderit atque vel hic aut ex, 
        iste magni iusto laudantium ad laboriosam sed facilis! Similique culpa qui, repudiandae incidunt eligendi placeat id vitae?
        Est pariatur explicabo nisi reiciendis fugit! Consequuntur neque ad pariatur laboriosam, 
        eius quibusdam mollitia ducimus quasi veritatis culpa inventore aliquam similique soluta magni natus iure unde corrupti laudantium provident?
        Aut neque molestias labore itaque aliquid blanditiis asperiores, voluptatum at adipisci dolor rem?
      </p>

`;
const videoProjet = document.querySelector(".video-project");
videoProjet.innerHTML =`
      <video src="ASSETS/Cours Figma GRATUIT - Design d un site web sur Figma en moins de 42 minutes.mp4" controls autoplay muted></video>
`;

// const clicprojet1 = () =>{
// const extBox = document.querySelector('.ext-box');
// extBox.addEventListener('click', () =>{
//   const pVideo = document.querySelector('.contener .desc');
// pVideo.innerHTML = `

//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
//        incidunt? Voluptatem molestias repellendus tenetur commodi voluptate,
//         accusantium nulla numquam, soluta asperiores laborum, enim perspiciatis sequi eligendi quia. 
//         Incidunt minima aperiam ut eaque, sit porro vero, reprehenderit atque vel hic aut ex, 
//         iste magni iusto laudantium ad laboriosam sed facilis! Similique culpa qui, repudiandae incidunt eligendi placeat id vitae?
//         Est pariatur explicabo nisi reiciendis fugit! Consequuntur neque ad pariatur laboriosam, 
//         eius quibusdam mollitia ducimus quasi veritatis culpa inventore aliquam similique soluta magni natus iure unde corrupti laudantium provident?
//         Aut neque molestias labore itaque aliquid blanditiis asperiores, voluptatum at adipisci dolor rem?
//       </p>

// `;
// const videoProjet = document.querySelector(".video-project");
// videoProjet.innerHTML =`
//       <video src="ASSETS/Cours Figma GRATUIT - Design d un site web sur Figma en moins de 42 minutes.mp4" controls></video>
// `;
// })

// };
// clicprojet1();



const changeColor = () =>{
  for(let i=0; i<=3; i++){
    const extBox = document.querySelectorAll('.ext-box');
    extBox.forEach((box)=>{
        if(box.dataset.id == i){
          box.style.backgroundColor = 'transparent';
          box.style.height = '100%';
          box.style.borderBottom = "none";
      };
    });
  };
};
changeColor();

const extBox = document.querySelector('.ext-box');
extBox.style.height = '130%';
extBox.style.backgroundColor = '#243447';


const project2 = ()=>{
  const extBox = document.querySelectorAll('.ext-box');
  const extBox1 = document.querySelector('.ext-box');
  extBox1.style.borderBottom = "2px solid #fff";
  extBox.forEach((box) => {
    box.addEventListener('click', ()=>{
       document.querySelector(".contener .desc p").style.display = 'none'
       
        if(box.dataset.id == 0){
          changeColor();
          box.style.backgroundColor = '#243447';
          box.style.height = '130%';
          box.style.borderBottom = "2px solid #fff";
          const videoProjet = document.querySelector('.contener .video-project');
          videoProjet.innerHTML =`
                <video src="ASSETS/Cours Figma GRATUIT - Design d un site web sur Figma en moins de 42 minutes.mp4" controls autoplay muted></video> 
            `;
            const actionP2 = (a) =>{
            
              const descContainerVideo = document.querySelector(".contener .desc");
              
              const divP = document.querySelector(".para");
              divP && divP.remove();
              const div = document.createElement("div");
              div.classList.add("para");
              div.innerHTML = generateDescVideoHTML(data3[a]);
              
              descContainerVideo.appendChild(div);
              
            };
            actionP2(0);
            const lineBottom = document.querySelector('.line-bottom span');
            lineBottom.style.left = '0%';

      } else if(box.dataset.id == 1){
        changeColor();
          box.style.backgroundColor = '#243447';
          box.style.height = '130%';
          box.style.borderBottom = "2px solid #fff";
          const videoProjet = document.querySelector('.contener .video-project');
          videoProjet.innerHTML =`
                <video src="ASSETS/Shi Guang Dai Li Ren  S01 E02 VF.mp4" controls autoplay muted></video> 
            `;
          const actionP2 = (a) =>{
            
            const descContainerVideo = document.querySelector(".contener .desc");
            
            const divP = document.querySelector(".para");
            divP && divP.remove();
            const div = document.createElement("div");
            div.classList.add("para");
            div.innerHTML = generateDescVideoHTML(data3[a]);
            
            descContainerVideo.appendChild(div);
            
          };
          actionP2(1);

          const lineBottom = document.querySelector('.line-bottom span');
            lineBottom.style.left = '25%';
          
      }else if(box.dataset.id == 2){
        changeColor();
          box.style.backgroundColor = '#243447';
          box.style.height = '130%';
          box.style.borderBottom = "2px solid #fff";
          const videoProjet = document.querySelector('.contener .video-project');
          videoProjet.innerHTML =`
                <video src="ASSETS/Naruto Shippuden 340 VF.MP4" controls autoplay muted></video> 
            `;
            const actionP2 = (a) =>{
            
              const descContainerVideo = document.querySelector(".contener .desc");
              
              const divP = document.querySelector(".para");
              divP && divP.remove();
              const div = document.createElement("div");
              div.classList.add("para");
              div.innerHTML = generateDescVideoHTML(data3[a]);
              
              descContainerVideo.appendChild(div);
              
            };
            actionP2(2);

            const lineBottom = document.querySelector('.line-bottom span');
            lineBottom.style.left = '50%';

      }else if(box.dataset.id == 3) {
        changeColor();
          box.style.backgroundColor = '#243447';
          box.style.height = '130%';
          box.style.borderBottom = "2px solid #fff";
          const videoProjet = document.querySelector('.contener .video-project');
          videoProjet.innerHTML =`
                <video src="ASSETS/Naruto Shippuden 340 VF.MP4" controls autoplay muted></video> 
            `;
            const actionP2 = (a) =>{
            
              const descContainerVideo = document.querySelector(".contener .desc");
              
              const divP = document.querySelector(".para");
              divP && divP.remove();
              const div = document.createElement("div");
              div.classList.add("para");
              div.innerHTML = generateDescVideoHTML(data3[a]);
              
              descContainerVideo.appendChild(div);
              
            };
            actionP2(3);

            const lineBottom = document.querySelector('.line-bottom span');
            lineBottom.style.left = '75%';

      }else{
        changeColor();
    };
  });
});
};
project2();

const more = document.querySelectorAll('.more');
more.forEach((mr) => {
  mr.addEventListener('click', function testimony() {

    const dialog = document.querySelector("dialog");
    const dialogContent = document.querySelector(".dialog-menu");
    dialogContent && dialogContent.remove();
    dialog.showModal();
    dialog.scrollTo(0, 0);
    const section = document.createElement("section");
    section.classList.add("dialog-menu");
    section.innerHTML = generateDialogHTML2(data4[mr.id]);
    dialog.appendChild(section);
  
    // close popover
    const btnClose = document.querySelector(".close");
    btnClose.addEventListener("click", () => {
      dialog.close();
    });
  });
});


//   const changeColor2 = () =>{
//     for(let i=0; i<=4; i++){
//       const eclipse0 = document.querySelectorAll('.eclipses .eclipse0');
//       eclipse0.forEach((clip)=>{
//           if(clip.dataset.id == i){
//             clip.style.backgroundColor = 'transparent';
//         };
//       });
//     };
//   };
// changeColor2();

// const supp = () =>{
  
//     for(let i=1; i<=4; i++){
//       document.querySelectorAll('.eclipse0').forEach((el) =>{
//         if( el.dataset.id == i){
//           el.style.backgroundColor ='#fff';
//       }
//     });
//   };
// };

// const eclipse1 = document.querySelector('.eclipse0');
// eclipse1.style.backgroundColor = '#000';

// const changeColorEclipse = () =>{
//   const eclipse2 = document.querySelectorAll('.eclipse0');
//   eclipse2.forEach((eclip) =>{
//     eclip.addEventListener('click', () =>{
//       // document.querySelector('.eclipse0').style.backgroundColor ="#fff"
      
//       if(eclip.dataset.id == 1){
//         supp();
//         eclip.style.backgroundColor = '#000';
//         eclip.style.height ='20PX';
//         eclip.style.width = '20PX';
//         const containerTestimonies = document.querySelector('.contener-contener-testimonies');
//         containerTestimonies.style.transform = 'translateX(-20%)';
        

//       }else if(eclip.dataset.id == 2){
//         supp();
//         // eclip.style.backgroundColor.remove();
//         eclip.style.backgroundColor = '#000';
//         eclip.style.height ='20PX';
//         eclip.style.width = '20PX';
//         const containerTestimonies = document.querySelector('.contener-contener-testimonies');
//         containerTestimonies.style.transform = 'translateX(-30%)';
        

//       }else if(eclip.dataset.id == 3){
//         supp();
//         // eclip.style.backgroundColor.remove();
//         // document.querySelector('#eclip2').style.backgroundColor = '#fff';
//         eclip.style.backgroundColor = '#000';
//         eclip.style.height ='20PX';
//         eclip.style.width = '20PX';
//         const containerTestimonies = document.querySelector('.contener-contener-testimonies');
//         containerTestimonies.style.transform = 'translateX(-40%)';
        

//       }else if(eclip.dataset.id == 4){
//         supp();
//         eclip.style.backgroundColor = '#000';
//         eclip.style.height ='20PX';
//         eclip.style.width = '20PX';
//         const containerTestimonies = document.querySelector('.contener-contener-testimonies');
//         // containerTestimonies.style.transform = 
        
//       }
//     });
//   });
// };
// changeColorEclipse();

// let scrollContainer = document.querySelector('.contener-testimonies')
// let nextBtn = document.getElementById('nextBtn');
// let backBtn = document.getElementById('backBtn');

  // nextBtn.addEventListener('click', () => {
  //   scrollContainer.style.scrollBehavior = "smooth";
  //   scrollContainer.scrollLeft += 500;
  //   document.querySelector('.eclipses span').style.transform = 'translate(50%)';
  //   if(scrollContainer.scrollLeft == 1000){
  //     document.querySelector('.eclipses span').style.transform = 'translate(100%)';
  //   };
  // });



// backBtn.addEventListener('click', () => {
//   scrollContainer.style.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft -= 500;
//   if(scrollContainer.scrollLeft == 0){
//     document.querySelector('.eclipses span').style.transform = 'translate(0%)';
//   } else {
//     document.querySelector('.eclipses span').style.transform = 'translate(0%)';
//   }
  
// });

// function slideContinu() {
//   const element = document.querySelector('.');
//   const largeur = element.offsetWidth;
//   const vitesse = 0.3; // pixels par milliseconde

//   let position = 0;

//   function anim() {
//     position += vitesse;
//     if (position > largeur) {
//       position = largeur - 3500;
//     }
//     element.style.transform = `translateX(${position}px)`;
//     requestAnimationFrame(anim);
//   }

//   anim();
// }

// slideContinu();
