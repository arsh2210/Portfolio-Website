

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('view-works-btn').addEventListener('click', function() {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    });
});

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const subject = `New message from ${name}`;
    const body = `${message}%0D%0A%0D%0AReply to: ${email}`;

    window.location.href = `mailto:arshdeep2210@gmail.com?subject=${subject}&body=${body}`;
}
