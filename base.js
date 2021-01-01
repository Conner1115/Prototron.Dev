const $ = (prop, all) => {
  if(!all)
    return document.querySelector(prop);
  else
    return document.querySelectorAll(prop);
}
function animateElement(element, animation){
  $(element).style.animation = animation;
  $(element).style.animationFillMode = "forwards";
}
function cssVar(Var, Val){
  $(":root").style.setProperty(Var, Val);
}

function toggleUserNavbar(){
  $("#navbar-user").classList.toggle("nav-down");
  $("#navbar-user").classList.toggle("nav-up");
  if(window.innerWidth <= 375){
  $("#navbar").className = "nav-out";
  }
}
function toggleSidebar(){
  $("#navbar").classList.toggle("nav-in");
  $("#navbar").classList.toggle("nav-out");
  if(window.innerWidth <= 375){
  $("#navbar-user").className = "nav-up";
  }
}

function adjustSize(){
  if(window.innerWidth <= 375){
    $("#navbar").className = ('nav-out');
  }else{
    $("#navbar").className = ('nav-in');
  }
}
document.documentElement.onload = adjustSize;
window.onload = function(){
  adjustSize();
  $("#loader").style.display = "none";
}
window.onresize = adjustSize;
