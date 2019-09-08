

//дублирование товара в попапе
function oplata() {
	const cartWrapper = document.querySelector('.oplata');
cartWrapper.style.display='flex';
}


function hideName() {
	const cartWrapper = document.querySelector('.name-of-good');
	cartWrapper.textContent='';
}
// end дублирование товара в попапе

// именование названий товаров
let category = document.querySelectorAll('.korabelniy-brus');
for (let i = 0; i < category.length; i++) {
	const title = category[i].querySelector('h3');
	const price = category[i].querySelector('.kart-price');
	price.textContent ='от' + price.textContent;
	title.textContent='Корабельный брус';
}
category = document.querySelectorAll('.brus-lux');
for (let i = 0; i < category.length; i++) {
	const title = category[i].querySelector('h3');
	const price = category[i].querySelector('.kart-price');
	price.textContent ='от' + price.textContent;
	title.textContent='Брус LUX';
}
category = document.querySelectorAll('.block-house-lux');
for (let i = 0; i < category.length; i++) {
	const title = category[i].querySelector('h3');
	const price = category[i].querySelector('.kart-price');
	price.textContent ='от' + price.textContent;
	title.textContent='Брус хаус LUX';
}
category = document.querySelectorAll('.elochka');
for (let i = 0; i < category.length; i++) {
	const title = category[i].querySelector('h3');
	const price = category[i].querySelector('.kart-price');
	price.textContent ='от' + price.textContent;
	title.textContent='Ёлочка';
}
category = document.querySelectorAll('.block-house');
for (let i = 0; i < category.length; i++) {
	const title = category[i].querySelector('h3');
	const price = category[i].querySelector('.kart-price');
	price.textContent ='от' + price.textContent;
	title.textContent='Блок Хаус';
}

// end именование названий товаров