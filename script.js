window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.getElementById("xyz");
    let logo = document.getElementById("logos");
    let main_li = document.getElementsByClassName("nav-link");
    if(scrolled >=1){
        header.setAttribute("style","background: #333333d9 !important;\n" +
            "    transition: 0.5s;");
        logo.setAttribute("style","color: white !important");
        for (let li of main_li) {
            li.setAttribute("style","color: white !important");
        }
    }
    else {
        header.setAttribute("style","background: #ffffff00 ;\n" +
            "    transition: 0.5s; @media (max-width: 768px) { background: #333333d9 !important; }");
        logo.setAttribute("style","color: #293a6b  ;  @media (max-width: 768px) { color: white !important; }");
        for (let li of main_li) {
            li.setAttribute("style","color: #293a6b ; @media (max-width: 768px) { color: white !important; }");
        }
    }
};