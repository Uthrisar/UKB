var my_name = new Typed(".text1",{
    strings: ["Mathematics and Computing", "At IIT Guwahati."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 800,
    loop: true
})
var typed = new Typed(".text2", {
    strings: ["Coder.", "a CP Enthusiast.", " a Web Developer."],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});


var about_me_1 = new Typed(".text3", {
    strings: ["I am a skilled web designer with over 2 years of experience, eager to dive deep into the Machine Learning, love to think roots and problems of Mathematics, want to solve Real World Problem to various field using technology."],
    typeSpeed: 15,
    backSpeed: 5,
    backDelay: 1000,
    loop: true
})

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        document.querySelector(".header").classList.remove("hide-navbar");
    } else {
        document.querySelector(".header").classList.add("hide-navbar");
    }
    
    prevScrollPos = currentScrollPos;
};
