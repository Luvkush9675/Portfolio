var typed = new Typed(".text", {
    strings: ['Frontend Developer','MERN Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    // loop:false

});

const form = document.querySelector('form');
function sendEmail() {
    Email.send({
        Host : "smtp.elasticmail.com",
        Username : "luvkushdivakar846@gmail.com",
        Password : "D61104AC270C6C1BE122BC634EB52BE9A22D",
        To : 'luvkushdivakar846@gmail.com',
        From : "luvkushdivakar846@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body",
    
    }).then(
    message => alert(message)
    );

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function toggleMenu() {
    const navLinks = document.querySelector('.navbar');
    if (navLinks.style.display === 'grid') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'grid';
        navLinks.style.Body='grid'
    }
}
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";b
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function sendMail() {
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        Id: document.getElementById("id").value            

    };
    emailjs.send('service_m8npl2w', 'template_vh3c0mf', parms)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Email failed to send');
        });
} 
}