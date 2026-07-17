// ======================================
// Ocean Blue Systems Website JavaScript
// ======================================


// Website Loaded Message

console.log(
"🌊 Ocean Blue Systems Website Loaded Successfully"
);




// Form Validation

const contactForm = document.querySelector(".contact-form");


if(contactForm){


contactForm.addEventListener("submit", function(event){


const name = document.querySelector('input[name="name"]').value;

const email = document.querySelector('input[name="email"]').value;

const message = document.querySelector('textarea[name="message"]').value;



if(name.trim() === "" || email.trim() === "" || message.trim() === ""){


event.preventDefault();


alert(
"Please complete all required fields before submitting your business assessment."
);


return;


}



console.log(
"Ocean Blue Systems Assessment Submitted"
);



});


}






// Smooth scrolling for navigation links


document.querySelectorAll('a[href^="#"]').forEach(link => {


link.addEventListener("click", function(e){


e.preventDefault();


document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});


});


});







// Future Ocean Blue Systems Animation Function

function showMessage(message){


console.log(message);


}