const nav_top=document.getElementById('nav_top');
const height=665;
window.onscroll=function(){
    if(window.pageYOffset>=height){
        nav_top.style.position='fixed';
        nav_top.style.top='0';
    }
    else if(window.pageYOffset<height){
        nav_top.style.position='absolute';
        nav_top.style.top='';
        nav_top.style.bottom='0';
    }
    const heightpg2=400;
    const heightpg2_=25;
    const scrollheightpg=document.documentElement.scrollTop || window.pageYOffset;
    const pg1_chengdu_text=document.getElementById('pg1_chengdu_text');
    const pg1_chengdu_image=document.getElementById('pg1_chengdu_image');
    if(scrollheightpg>heightpg2){
        pg1_chengdu_text.classList.add('pg1_chengdu_text_');
        pg1_chengdu_image.classList.add('pg1_chengdu_image_');
    }
    if(scrollheightpg<=heightpg2_){
        pg1_chengdu_text.classList.remove('pg1_chengdu_text_');
        pg1_chengdu_image.classList.remove('pg1_chengdu_image_');
    }
    const heightpg3=2000;
    const heightpg3_=1800;
    const pg3_back=document.getElementById('pg3_back');
    const pg3_text=document.getElementById('pg3_text');
    const heightpg4=2700;
    const heightpg4_=2500;
    const pg4_back=document.getElementById('pg4_back');
    const pg4_text=document.getElementById('pg4_text');
    const heightpg5=3400;
    const heightpg5_=3200;
    const pg5_back=document.getElementById('pg5_back');
    const pg5_text=document.getElementById('pg5_text');
    if(scrollheightpg>heightpg3){
        pg3_back.classList.add('images_back_after');
        pg3_text.classList.add('text_after');
    }
    else if(scrollheightpg<=heightpg3_){
        pg3_back.classList.remove('images_back_after');
        pg3_text.classList.remove('text_after');
    }
    if(scrollheightpg>heightpg5){
        pg5_back.classList.add('images_back_after');
        pg5_text.classList.add('text_after');
    }
    else if(scrollheightpg<=heightpg5_){
        pg5_back.classList.remove('images_back_after');
        pg5_text.classList.remove('text_after');
    }
    if(scrollheightpg>heightpg4){
        pg4_back.classList.add('images_back_after');
        pg4_text.classList.add('text_after');
    }
    else if(scrollheightpg<=heightpg4_){
        pg4_back.classList.remove('images_back_after');
        pg4_text.classList.remove('text_after');
    }
    const panda_head=document.querySelector('.panda_head');
    const heightpg6=4500;
    const heightpg6_=4300;
    if(scrollheightpg>heightpg6){
        panda_head.classList.add('panda_head_after');
    }
    else if(scrollheightpg<=heightpg6_){
        panda_head.classList.remove('panda_head_after');
    }
    const chuan1=7600;
	const chuan1_=7400;
	const c1=document.getElementById('c1');
	const c7=document.getElementById('c7');
	const c3=document.getElementById('c3');
	const c4=document.getElementById('c4');
	const c5=document.getElementById('c5');
	if(scrollheightpg>chuan1){
		c1.classList.add("img-chuanju_after1");
		c7.classList.add("img-chuanju_after7");
		c3.classList.add("img-chuanju_after3");
		c4.classList.add("img-chuanju_after4");
		c5.classList.add("img-chuanju_after5");
	}
	if(scrollheightpg<=chuan1_){
		c1.classList.remove("img-chuanju_after1");
		c7.classList.remove("img-chuanju_after7");
		c3.classList.remove("img-chuanju_after3");
		c4.classList.remove("img-chuanju_after4");
		c5.classList.remove("img-chuanju_after5");
	}
    const chuanjut1=document.getElementById('chuanjut1');
    const chuanjut2=document.getElementById('chuanjut2');
    const chuanjut3=document.getElementById('chuanjut3');
    const chuanjut4=document.getElementById('chuanjut4');
    const chuanjup1=document.getElementById('chuanjup1');
    const chuanjup2=document.getElementById('chuanjup2');
    const chuanjup3=document.getElementById('chuanjup3');
    const chuanjup4=document.getElementById('chuanjup4');
    const chuan3=9000;
    const chuan3_=8800;
    const chuan4=9400;
    const chuan4_=9200;
    const chuan5=9800;
    const chuan5_=9600;
    const chuan6=10200;
    const chuan6_=10000;
    if(scrollheightpg>chuan3){
        chuanjut1.classList.add("chuanju_text1");
        chuanjup1.classList.add("piece1");
    }
    else if(scrollheightpg<=chuan3_){
        chuanjut1.classList.remove("chuanju_text1");
        chuanjup1.classList.remove("piece1");
    }
    if(scrollheightpg>chuan4){
        chuanjut2.classList.add("chuanju_text2");
        chuanjup2.classList.add("piece2");
    }
    else if(scrollheightpg<=chuan4_){
        chuanjut2.classList.remove("chuanju_text2");
        chuanjup2.classList.remove("piece2");
    }
    if(scrollheightpg>chuan5){
        chuanjut3.classList.add("chuanju_text3");
        chuanjup3.classList.add("piece3");
    }
    else if(scrollheightpg<=chuan5_){
        chuanjut3.classList.remove("chuanju_text3");
        chuanjup3.classList.remove("piece3");
    }
    if(scrollheightpg>chuan6){
        chuanjut4.classList.add("chuanju_text4");
        chuanjup4.classList.add("piece4");
    }
    else if(scrollheightpg<=chuan6_){
        chuanjut4.classList.remove("chuanju_text4");
        chuanjup4.classList.remove("piece4");
    }
}
const nav_top_choose=document.querySelectorAll('.nav_top_choose');
const Arraynav_top_choose=Array.from(nav_top_choose);
const nav_top_child=document.querySelectorAll('.nav_top_child');
const Arraynav_top_child=Array.from(nav_top_child);
nav_top_child.forEach(item=>{
    item.addEventListener('click',()=>{
        nav_top_choose.forEach(item_=>{
            if(item_.style.display==='block'){
                item_.style.display='none';
            }
            else{
                item_.style.display='block';
            }
        })
    })
})
const more=document.getElementById('more');
const intro_more=document.querySelector('.intro_more');
const triggle_before=document.querySelector('.triggle_before');
more.addEventListener('click',()=>{
    if(intro_more.style.display==='block')intro_more.style.display='none';
    else{
        intro_more.style.display='block';
    }
    if(triggle_before.classList.contains('triggle_after')){
        triggle_before.classList.remove('triggle_after');
        triggle_before.classList.add('triggle_after2');
    }
    else{
        triggle_before.classList.remove('triggle_after2');
        triggle_before.classList.add('triggle_after');
    }
})