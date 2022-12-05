/*I used w3 school javascript as a resource*/
let textarea=document.getElementById("textarea");
function Bigger(){
    alert("Hello, world!");
    textarea.style.fontSize="2em";
}
document.getElementsByName("fancify")[0].addEventListener("change",function(){
    textarea.style.fontWeight="bold";
    textarea.style.color="blue";
    textarea.style.textDecoration="underline"
    alert("Fancy");
})
document.getElementsByName("fancify")[1].addEventListener("change",function(){
    textarea.style.fontWeight="normal";
    textarea.style.color="black";
    textarea.style.textDecoration="none"
    alert("Boring");
})
function Moo(){
    textarea.style.textTransform="uppercase"
    let parts=textarea.value.split(".");
    let str=parts.join("-Moo");
    textarea.value=str;
}