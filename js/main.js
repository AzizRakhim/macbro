let elRamSum = 10000000;
let elMemorySum = 2497000;

let elBigImgHolder = document.querySelector(".hero__big-img-holder");

elBigImgHolder.innerHTML = `<img src="${macObject[0].bigPicGold}" alt="computer">`;

let elHeroBtns = document.querySelectorAll(".hero__btn");

elHeroBtns.forEach((item, index) => {
  item.innerHTML = `
    <img src="${macObject[0].gold[index]}" alt="laptop">  
  `;
});

let elTitleHolder = document.querySelector(".title-holder");

elTitleHolder.innerHTML = `
  <h2 class="hero__title">
    ${macObject[0].title} M1/<span class="ram-title">${macObject[0].ram}</span>/<span class="memory-title">${macObject[0].spec[0].memory}</span> <span class="color-name">${macObject[0].color[0]}</span>
  </h2>
`;

let elRamBtns = document.querySelectorAll(".ram-btn");

elRamBtns.forEach((item, index) => {
  item.innerHTML = `
    ${macObject[index].ram}GB
  `;
});

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

          elMemorySum = 6935000;
        } else if(index == 1){
          item.classList.add("active");
          arr[0].classList.remove("active");
          arr[2].classList.remove("active");

          elMemorySum = 9270500;
        } else{
          item.classList.add("active");
          arr[0].classList.remove("active");
          arr[1].classList.remove("active");

          elMemorySum = 10438500;
        } 
      } else{
        if(index == 0){
          item.classList.add("active");
          arr[1].classList.remove("active");
          elMemorySum = 2497000;
        } else if(index == 1){
          item.classList.add("active");
          arr[0].classList.remove("active");
          elMemorySum = 6066000;
        }
      }
     
      let elMemoryTitle = document.querySelector(".memory-title");
  
      elMemoryTitle.innerText = `${macObject[1].spec[index].memory}`;

      let elResult = elMemorySum + elRamSum;
      let elRealPrice = document.querySelector(".real-price");
      elRealPrice.innerText = elResult;
    });

  });
}

let elColorBtns = document.querySelectorAll(".color-btn");

elColorBtns.forEach((item, index, arr) => {
  item.addEventListener("click", () => {
    if(index == 0){
      elBigImgHolder.innerHTML = `<img src="${macObject[0].bigPicGold}" alt="computer">`;

      elHeroBtns.forEach((value, idx) => {
        value.innerHTML = `
          <img src="${macObject[0].gold[idx]}" alt="laptop">  
        `;
      });

      item.classList.add("active");
      arr[1].classList.remove("active");
      arr[2].classList.remove("active");
    } else if(index == 1){
      elBigImgHolder.innerHTML = `<img src="${macObject[0].bigPicSilver}" alt="computer">`;

      elHeroBtns.forEach((value, idx) => {
        value.innerHTML = `
          <img src="${macObject[0].silver[idx]}" alt="laptop">  
        `;
      });

      item.classList.add("active");
      arr[0].classList.remove("active");
      arr[2].classList.remove("active");
    } else{
      elBigImgHolder.innerHTML = `<img src="${macObject[0].bigPicGrey}" alt="computer">`;

      elHeroBtns.forEach((value, idx) => {
        value.innerHTML = `
          <img src="${macObject[0].spaceGray[idx]}" alt="laptop">  
        `;
      });
      item.classList.add("active");
      arr[0].classList.remove("active");
      arr[1].classList.remove("active");
    }
    
    let elClassName = document.querySelector(".color-name");

    elClassName.innerText = `${macObject[0].color[index]}`;
  });
});

let count = 0;

let elRamTitle = document.querySelector(".ram-title");
elRamBtns.forEach((item, index, arr) => {
  item.addEventListener("click", () => {
    if(index == 0){
      elRamTitle.innerText = macObject[index].ram;

      item.classList.add("active");
      arr[1].classList.remove("active");

      elRamSum = 10000000;
    } else{
      elRamTitle.innerText = macObject[index].ram;

      item.classList.add("active");
      arr[0].classList.remove("active");
      elRamSum = 10000000;
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

if(count == 0){
  elMemorySum = 2497000;
  count=1;
} else{
  elMemorySum = 6935000;
  count=0;
}

let elResult = elMemorySum + elRamSum;
let elRealPrice = document.querySelector(".real-price");
elRealPrice.innerText = elResult;
