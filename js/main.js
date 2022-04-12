// Creating the price variables. The calculation will be done whereever it is needed

let elPrice;
let elCrossedPrice;
let elRealPrice = document.querySelector(".real-price");
let elHeroCrossedPrice = document.querySelector(".hero__crossed-price");

// Setting the big img

let elBigImgHolder = document.querySelector(".hero__big-img-holder");

macObject[0].gold.forEach((item) => {
  let elImgKeeper = document.createElement("div");
  elImgKeeper.className = "hero__img-keeper";

  elImgKeeper.innerHTML = `
    <img src="${item}" alt="laptop">
  `;

  elBigImgHolder.appendChild(elImgKeeper);
}); 

// Setting the small imgs in carousel

let elHeroList = document.querySelector(".hero__list");

macObject[0].gold.forEach((item) => {
  let elImgitem = document.createElement("li");
  elImgitem.className = "hero__item";

  elImgitem.innerHTML = `
    <button class="hero__btn">
      <img src="${item}" alt="laptop">
    </button>
  `;

  elHeroList.appendChild(elImgitem);
}); 

let elImgSmallItems = elHeroList.querySelectorAll("li");
elImgSmallItems[0].classList.add("active");
carousel();

// Setting the title of the product

let elTitleHolder = document.querySelector(".title-holder");

elTitleHolder.innerHTML = `
  <h2 class="hero__title">
    ${macObject[0].title} M1/<span class="ram-title">${macObject[0].ram}</span>/<span class="memory-title">${macObject[0].spec[0].memory}</span> <span class="color-name">${macObject[0].color[0]}</span>
  </h2>
`;

// Setting the Rams of the product

let elRamBtns = document.querySelectorAll(".ram-btn");

elRamBtns.forEach((item, index) => {
  item.innerHTML = `
    ${macObject[index].ram}GB
  `;
});

// Setting the memories of the product

let elMemoryList = document.querySelector(".memory-list");

macObject[0].spec.forEach((item) => {
  let elItem = document.createElement("li");
  elItem.className = "hero__choice-item col-4";

  elItem.innerHTML = `
    <button class="hero__choice-btn memory-btn">
      ${item.memory}
    </button>
  `;

  elMemoryList.appendChild(elItem);
});

let elMemoryBtns = document.querySelectorAll(".memory-btn");
elMemoryBtns[0].classList.add("active");

elPrice = macObject[0].spec[0].price;
elRealPrice.innerText = elPrice;

elCrossedPrice = macObject[0].spec[0].discount;
elHeroCrossedPrice.innerText = elCrossedPrice;

// Changing the memories and active state on memory and ram buttons 

memoryFunc(elMemoryBtns);

function memoryFunc(elMemoryBtns){
  let elMemoryTitle = document.querySelector(".memory-title");
  
  elMemoryTitle.innerText = `${macObject[0].spec[0].memory}`;

  elMemoryBtns.forEach((item, index, arr) => {
    item.addEventListener("click", () => {
      if(arr.length > 2){
        if(index == 0){
          item.classList.add("active");
          arr[1].classList.remove("active");
          arr[2].classList.remove("active");

          elPrice = macObject[1].spec[index].price;
          elRealPrice.innerText = elPrice;

          elCrossedPrice = macObject[1].spec[index].discount;
          elHeroCrossedPrice.innerText = elCrossedPrice;
        } else if(index == 1){
          item.classList.add("active");
          arr[0].classList.remove("active");
          arr[2].classList.remove("active");

          elPrice = macObject[1].spec[index].price;
          elRealPrice.innerText = elPrice;

          elCrossedPrice = macObject[1].spec[index].discount;
          elHeroCrossedPrice.innerText = elCrossedPrice;
        } else{
          item.classList.add("active");
          arr[0].classList.remove("active");
          arr[1].classList.remove("active");

          elPrice = macObject[1].spec[index].price;
          elRealPrice.innerText = elPrice;

          elCrossedPrice = macObject[1].spec[index].discount;
          elHeroCrossedPrice.innerText = elCrossedPrice;
        } 
      } else{
        if(index == 0){
          item.classList.add("active");
          arr[1].classList.remove("active");

          elPrice = macObject[0].spec[index].price;
          elRealPrice.innerText = elPrice;

          elCrossedPrice = macObject[0].spec[index].discount;
          elHeroCrossedPrice.innerText = elCrossedPrice;
        } else if(index == 1){
          item.classList.add("active");
          arr[0].classList.remove("active");

          elPrice = macObject[0].spec[index].price;
          elRealPrice.innerText = elPrice;

          elCrossedPrice = macObject[0].spec[index].discount;
          elHeroCrossedPrice.innerText = elCrossedPrice;
        }
      }
     
      let elMemoryTitle = document.querySelector(".memory-title");
  
      elMemoryTitle.innerText = `${macObject[1].spec[index].memory}`;
    });
  });
}

// Changing the imgs in colour buttons

let elColorBtns = document.querySelectorAll(".color-btn");

elColorBtns.forEach((item, index, arr) => {
  item.addEventListener("click", () => {
    if(index == 0){
      elBigImgHolder.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      }); 

      elHeroList.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });
      
      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      carousel();

      item.classList.add("active");
      arr[1].classList.remove("active");
      arr[2].classList.remove("active");
    } else if(index == 1){
      elBigImgHolder.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      });

      elHeroList.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });

      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      carousel();

      item.classList.add("active");
      arr[0].classList.remove("active");
      arr[2].classList.remove("active");
    } else{
      elBigImgHolder.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      });

      elHeroList.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });

      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      carousel();

      item.classList.add("active");
      arr[0].classList.remove("active");
      arr[1].classList.remove("active");
    }
    
    let elClassName = document.querySelector(".color-name");

    elClassName.innerText = `${macObject[0].color[index]}`;
  });
});

// Changing the ram properties on Ram button

let elRamTitle = document.querySelector(".ram-title");
elRamBtns.forEach((item, index, arr) => {
  item.addEventListener("click", () => {
    if(index == 0){
      elRamTitle.innerText = macObject[index].ram;

      item.classList.add("active");
      arr[1].classList.remove("active");

      elPrice = macObject[index].spec[0].price;
      elRealPrice.innerText = elPrice;

      elCrossedPrice = macObject[index].spec[0].discount;
      elHeroCrossedPrice.innerText = elCrossedPrice;
    } else{
      elRamTitle.innerText = macObject[index].ram;

      item.classList.add("active");
      arr[0].classList.remove("active");

      elPrice = macObject[index].spec[0].price;
      elRealPrice.innerText = elPrice;
      
      elCrossedPrice = macObject[index].spec[0].discount;
      elHeroCrossedPrice.innerText = elCrossedPrice;
    }
    
    elMemoryList.innerHTML = "";

    macObject[index].spec.forEach((item) => {
      let elItem = document.createElement("li");
      elItem.className = "hero__choice-item col-4";
    
      elItem.innerHTML = `
        <button class="hero__choice-btn memory-btn">
          ${item.memory}
        </button>
      `;
    
      elMemoryList.appendChild(elItem);
    });

    let elMemoryBtns = document.querySelectorAll(".memory-btn");
    elMemoryBtns[0].classList.add("active");

    memoryFunc(elMemoryBtns);
  });
});

// Adding plus and minus buttons

let elMinus = document.querySelector(".minus");
let elPlus = document.querySelector(".plus");
let elInput = document.querySelector(".hero__input");

elPlus.addEventListener("click", () => {
  let elValue = Number(elInput.value);
  elInput.value = elValue += 1;
  elRealPrice.innerText = elPrice *= 2;

  elHeroCrossedPrice.innerText = elCrossedPrice *= 2;
});

elMinus.addEventListener('click', () => {
  let elValue = Number(elInput.value);
  if(elValue > 1){
    elInput.value = elValue -= 1;
    elRealPrice.innerText = elPrice /= 2;

    elHeroCrossedPrice.innerText = elCrossedPrice /= 2;
  }
});

// Slider

function carousel(){
  let arr = document.querySelectorAll(".hero__item");
  arr.forEach((item, index) => {
    item.addEventListener("click", () => {
      arr.forEach((value, idx) => {
        if(index == idx){
          value.classList.add("active");
        } else{
          value.classList.remove("active");
        }
      });
    
      elBigImgHolder.style.transform = `translateX(${-index * 550}px)`;
    });
  });  
}


