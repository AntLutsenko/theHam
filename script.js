// Our Services

document
	.querySelector(".content-menu-list")
	.addEventListener("click", (event) => {
		if (event.target.classList.contains("content-menu-item")) {
			const activeMenuItem = document.querySelector(".active-menu-item");
			activeMenuItem.classList.remove("active-menu-item");
			const currentMenuItem = event.target.closest(".content-menu-item");
			currentMenuItem.classList.add("active-menu-item");

			const dataName = currentMenuItem.dataset.name;
			const contentTabs = document.querySelectorAll(".content-tabs > li");

			contentTabs.forEach((element) => {
				element.classList.add("hidden");
				if (element.classList.contains(dataName)) {
					element.classList.remove("hidden");
				}
			});
		}
	});

// Our Amazing Work

const workContentBtn = document.querySelectorAll(".work-content-menu-item");
workContentBtn.forEach((item) => {
	item.addEventListener("click", (event) => {
		workContentBtn.forEach((item) => {
			item.classList.remove("active-work-menu-item");
			event.target.classList.add("active-work-menu-item");
		});
	});
});

// hover Our Amazing Work

const imgContainer = document.querySelector(".img-container");

imgContainer.onmouseover = (event) => {
	let target = event.target;
	if (target.classList.contains("work-img")) {
		target.classList.add("js-description");
		target.insertAdjacentHTML(
			"afterend",
			`<div class="hover-block-img">
			<div class="icons"><a href="#" class="link icon-link link-chain">
			<svg class="chain-svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/></svg> </a><a href="#" class="link icon-link link-square"></a></div>
			<div class="text">
		<span class="hover-block-name">creative design</span>
		<span class="hover-block-description">"${document
			.querySelector(".js-description")
			.getAttribute("alt")}"</span></div>`
		);
		document.querySelectorAll(".img-wrapper").forEach((item) => {
			item.addEventListener("mouseleave", function () {
				target.classList.remove("js-description");
				document.querySelector(".hover-block-img").remove(".hover-block-img");
			});
		});
	}
};

// work content menu list
document
	.querySelector(".work-content-list")
	.addEventListener("click", (event) => {
		const currentItem = event.target.closest(".work-content-menu-item");
		const dataName = currentItem.dataset.name;
		const tabs = document.querySelectorAll(".work-img");
		const currentDescription = document.querySelector(`img.${dataName}`);
		tabs.forEach((element) => {
			element.classList.add("hidden");
			if (element.classList.contains(dataName))
				element.classList.remove("hidden");
		});
	});

// img for upload

const arr = [
	`class="work-img graphic-design allImg hidden"
	src="./IMG/graphic design/graphic-design4.jpg"
	alt="Graphic Design"`,
	`class="work-img graphic-design allImg hidden"
	src="./IMG/graphic design/graphic-design5.jpg"
	alt="Graphic Design"`,
	`class="work-img graphic-design allImg hidden"
	src="./IMG/graphic design/graphic-design6.jpg"
	alt="Graphic Design"`,
	`class="work-img web-design allImg hidden"
	src="./IMG/web design/web-design4.jpg"
	alt="Web Design"`,
	`class="work-img web-design allImg hidden"
	src="./IMG/web design/web-design5.jpg"
	alt="Web Design"`,
	`class="work-img web-design allImg hidden"
	src="./IMG/web design/web-design6.jpg"
	alt="Web Design"`,
	`class="work-img landing-pages allImg hidden"
	src="./IMG/landing page/landing-page4.jpg"
	alt="Landing Pages"`,
	`class="work-img landing-pages allImg hidden"
	src="./IMG/landing page/landing-page5.jpg"
	alt="Landing Pages"`,
	`class="work-img landing-pages allImg hidden"
	src="./IMG/landing page/landing-page6.jpg"
	alt="Landing Pages"`,
	`class="work-img wordpress allImg hidden"
	src="./IMG/wordpress/wordpress4.jpg"
	alt="Wordpress"`,
	`class="work-img wordpress allImg hidden"
	src="./IMG/wordpress/wordpress5.jpg"
	alt="Wordpress"`,
	`class="work-img wordpress allImg hidden"
	src="./IMG/wordpress/wordpress6.jpg"
	alt="Wordpress"`,
];

// btn add more img

function loadImg(event) {
	let activeItem = document.querySelector(".active-work-menu-item");
	let activeDataImg = activeItem.dataset.name;
	document.querySelector(".img-container").insertAdjacentHTML(
		"beforeend",
		arr
			.map((item) => {
				return `<div class="img-wrapper"><img ${item}></div>`;
			})
			.join("")
	);
	let allImg = document.querySelectorAll(".allImg");
	allImg.forEach((element) => {
		if (element.classList.contains(activeDataImg)) {
			element.classList.remove("hidden");
		}
	});
	document.querySelector(".btn-load").classList.add("hidden");
}

document.querySelector(".btn-load").addEventListener("click", loadImg);

// slick

$(".rev-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: ".rev-slider-nav",
	autoplay: false,
	autoplaySpeed: 3000,
	cssEase: "linear",
});
$(".rev-slider-nav").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: ".rev-slider",
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	centerPadding: "0",
	cssEase: "linear",
});

function loadBestImg(event) {
	const contentConteinerBest = document.querySelector(".container-galery-img");
	contentConteinerBest.classList.remove("div");
	contentConteinerBest.classList.add("div-add-img");

	const allGrid = document.querySelectorAll(".grid-hover");
	console.log(allGrid);
	allGrid.forEach((element) => {
		console.log(element);
		if (element.classList.contains("galery-hover-img")) {
			element.classList.remove("galery-hover-img");
		}
	});

	document.querySelector(".btn-best-img").classList.add("hidden");
}

document.querySelector(".btn-best-img").addEventListener("click", loadBestImg);
