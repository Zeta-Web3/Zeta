if(screen.width < 700){
    const Body=document.querySelector("#Bodys")
    Body.setAttribute("style","width: 415px;")
}
pdtb=()=>{
    const btn =document.querySelector("#pdtb1")
    btn.style.backgroundColor="rgb(247, 241, 241)";
    btn.innerHTML=`<p id="login">Loding... </p> `
    btn.style.cursor="";
}
