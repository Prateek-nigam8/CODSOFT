function nav_top_toggle(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav_top.style.display = "block";
      } else {
        nav_top.style.display = "none";
      }
}