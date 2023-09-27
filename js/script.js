let burgerBtn = document.querySelector('#header__burger-btn');
let menu = document.querySelector('#header__nav');
console.log(burgerBtn);
console.log(menu);
function burgerOpen(){
    
    menu.classList.toggle('header__nav-open');
    burgerBtn.classList.toggle('header__burger-open');

};
burgerBtn.addEventListener('click',burgerOpen);

let countryBlock = document.querySelector(".reproduction__header-country");
let franceCountry = document.querySelector("#country__France");
let franceBlock = document.querySelector(".reproduction__france");
let germanyCountry = document.querySelector("#country__Germany");
let germanyBlock = document.querySelector('.reproduction__Germany');
let englandCountry = document.querySelector("#country__England");
let englandBlock = document.querySelector('.reproduction__England');



function viewCountryGermany(){
    franceBlock.style.display = "none";                                                                                                                                                                                                                                                                                                                        
    englandBlock.style.display = "none";  
    germanyBlock.style.display = "block";
    franceCountry.classList.remove("reproduction__country-onclick");
    germanyCountry.classList.add("reproduction__country-onclick");
    englandCountry.classList.remove('reproduction__country-onclick');
}

function viewCountryEngland(){
    franceBlock.style.display = "none";                                                                                                                                                                                                                                                                                                                        
    englandBlock.style.display = "block";  
    germanyBlock.style.display = "none";
    franceCountry.classList.remove("reproduction__country-onclick");
    germanyCountry.classList.remove("reproduction__country-onclick");
    englandCountry.classList.add('reproduction__country-onclick');
}

function viewCountryFrance(){
    franceBlock.style.display = "block";                                                                                                                                                                                                                                                                                                                        
    englandBlock.style.display = "none";  
    germanyBlock.style.display = "none";
    franceCountry.classList.add("reproduction__country-onclick");
    germanyCountry.classList.remove("reproduction__country-onclick");
    englandCountry.classList.remove('reproduction__country-onclick');
}

germanyCountry.addEventListener('click',viewCountryGermany );
englandCountry.addEventListener('click',viewCountryEngland);
franceCountry.addEventListener('click',viewCountryFrance);