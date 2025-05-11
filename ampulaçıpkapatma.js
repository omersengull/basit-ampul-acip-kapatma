let ac=document.getElementById("isikAc");
let kapat=document.getElementById("isikKapat");
let ampulResim=document.getElementById("resim");
ac.onclick=function (){
    ampulResim.src="pic_bulbon.gif";
}
kapat.onclick=function (){
    ampulResim.src="pic_bulboff.gif";
}