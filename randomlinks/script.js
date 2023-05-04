// Version 1

const links = [
	'https://fez7yoe.github.io/',
	'https://ouoholly.github.io/',
	'https://zrn-code.github.io/'
];

const linkBtn = document.getElementById('link-btn');

// 取得目前所在的頁面路徑
const currentPath = window.location.pathname;

// 選取所有的連結項目
const linkItems = document.querySelectorAll('nav li');

linkBtn.addEventListener('click', function() {
	const linkIndex = Math.floor(Math.random() * links.length);
	window.open(links[linkIndex], '_blank');
});

// 迭代每個連結項目，如果其 href 屬性的值等於目前頁面的路徑，就加上 active 類別
linkItems.forEach(function(linkItem) {
    if (linkItem.querySelector('a').getAttribute('href') === currentPath) {
      linkItem.classList.add('active');
    }
  });

//
