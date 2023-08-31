var typed = new Typed(".text", {
    strings: [" exploring....", "a CP Enthusiast.", " a Web Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var my_name = new Typed(".tet",{
    strings: ["Uthrisar Kh Boro"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
})

var about_me = new Typed(".tet2", {
    strings: ["I am a skilled web designer with over 2 years of experience, Eager to dive deep into the Machine Learning, love to think roots and problems of Mathematics, want to solve Real World Problem to various field using technology."],
    typeSpeed: 20,
    backSpeed: 10,
    backDelay: 2000,
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
