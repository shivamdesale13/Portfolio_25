$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i ').toggleClass("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const text1 = "Hey Folks, I am ";
    const text2 = "Shivam Desale";
    const text3 = "And I am a Master's Student";
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    function typeText1() {
        if (index1 < text1.length) {
            document.getElementById("text-1").innerHTML += text1.charAt(index1);
            index1++;
            setTimeout(typeText1, 100);
        } else {
            typeText2();
        }
    }

    function typeText2() {
        if (index2 < text2.length) {
            document.getElementById("text-2").innerHTML += text2.charAt(index2);
            index2++;
            setTimeout(typeText2, 100);
        } else {
            document.getElementById("text-2").innerHTML = text2; // Ensure the entire HTML is set
            typeText3();
        }
    }

    function typeText3() {
        if (index3 < text3.length) {
            document.getElementById("text-3").innerHTML += text3.charAt(index3);
            index3++;
            setTimeout(typeText3, 100);
        }
    }

    typeText1();
});