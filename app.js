var i=0, typing1;
text = welcome 

function typing(){
    if(i<text.length){
        document.getElementById("typing-1").innerHTML += typing-1,charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
    
}
var typed = new Typed(".auto-type", {
    strings: ["Hi, I'm Akshay", " I am currently a Computer Science Student", "attending"],
    typeSpeed: 300,
    backSpeed: 300,
    loop: true
})

Element.scrollIntoView({
    behaviour: "smooth"  ,
    block:"start",
    inline: "nearest"
})