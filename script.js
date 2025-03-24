function showonly(n){
  const about=document.getElementById("about-me");
  const resume=document.getElementById("resume");
  const contact=document.getElementById("contact-me");
  if(n==1){
    about.style.display="block"
    resume.style.display="none"
    about.style.backgroundColor="transparent"
    contact.style.display="none";
  }
  else if(n==2){
    about.style.display="none";
    resume.style.display="block";
    resume.style.backgroundColor="transparent";
    contact.style.display="none";
  }
  else if(n==4){
    about.style.display="none";
    resume.style.display="none";
    contact.style.display="block";
    contact.style.backgroundColor="transparent";
  }
}

function changeBackground(n){
  const about=document.getElementById("about-me");
  const resume=document.getElementById("resume");
  const contact=document.getElementById("contact-me");
  if(n==1) about.style.backgroundColor="#2f2c2c"
  else if(n==2) resume.style.backgroundColor="#2f2c2c"
  else if(n==4) contact.style.backgroundColor='#2f2c2c'
}