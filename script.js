export const generateDialogHTML = (product) => {
   return `
      <div class="container">
         <div class="top"><img src="${product.img}" alt="" style="height: 100PX; width: 300PX;"></div>
         <div class="bottom">
            <p>${product.description}</p>
            <p>${product.description}</p>
         </div>
      </div>
   `;
};


export const generateDescHTML = (prod) => {
   return `
    
      <p>${prod.description}</p>
  
     `;
};

export const generateDescVideoHTML = (prod) => {
   return `
    
      <p>${prod.description}</p>
  
     `;
};


export const generateDialogHTML2 = (desc)=>{
   return `
   <div class="desc-avis">
      <div class="image">
         <img src="${desc.img}" alt="">                           
      </div>
      
      <h2>${desc.nom}</h2>
      <h3 style="color:rgb(255, 0, 123);">${desc.prof}</h3>
      <div class="notes"><i class="fa-solid fa-star" style="color: #E29000;"></i><i class="fa-solid fa-star" style="color: #E29000;"></i><i class="fa-solid fa-star" style="color: #E29000;"></i><i class="fa-solid fa-star${desc.noteHalf4}" style="color: #E29000;"></i><i class="fa-solid fa-star${desc.noteHalf5}" style="color:${desc.note5};"></i></div>  
         
      <div class="desc">${desc.description}</div>
   </div>
   `;
};

// export const generateDescProfilsHTML3 = (profil)=>{
//    return`
//       <div class="desc">
                        
//          <h1>${profil.nom}</h1>
//          <p>${profil.desc}</p>
    
//       </div>
//    `;
// };
