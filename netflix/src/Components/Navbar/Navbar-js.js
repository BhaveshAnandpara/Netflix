

window.onscroll = () =>{

    let offset = window.pageYOffset ;
    if (  offset === 0 ){
        document.getElementById("Navbar").style.background = "linear-gradient(to top , transparent 0%, rgb(0,0,0,0.3) 50%)"
        offset = null;
    }   
    else{
        document.getElementById("Navbar").style.background = "#111111"
    }
    

}
