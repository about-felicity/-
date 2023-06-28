const thumb=document.getElementById('thumb');
const coin=document.getElementById('coin');
const collect=document.getElementById('collect');
const share=document.getElementById('share');
var thumbimg2="images/推荐2.png";
var thumbimg1="images/推荐1.png";
thumb.addEventListener('click',()=>{
    thumb.classList.toggle('thumb_after');
})
const galleryMask = document.querySelector(".gallery-mask");
const maskImage = document.querySelector(".mask-image");
const galleryImgs = document.querySelectorAll(".image-1");
galleryMask.addEventListener("click", () => {
	galleryMask.classList.add("mask-off");
});
galleryImgs.forEach((item) => {
	item.addEventListener("click", () => {
		let styleValue = item.getAttribute("style");
		maskImage.setAttribute(
			"src",
			styleValue.slice(styleValue.indexOf(": url(") + 7, -3)
		);
		galleryMask.classList.remove("mask-off");
	});
});