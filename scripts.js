/* 1. Homepage - Add Date and Time */

window.onload = function() {

    var footer = document.getElementById("home-footer");

    if (footer) {

        var newParagraph = document.createElement("p");

        var currentDate = new Date();

        var message = document.createTextNode(
            "Page loaded on: " + currentDate
        );

        newParagraph.appendChild(message);

        footer.appendChild(newParagraph);
    }
};


/* 2. Contact - Form Validation */

function validateForm() {

    var firstName = document.getElementById("firstName").value;

    var email = document.getElementById("email").value;

    if (firstName.trim() === "" || email.trim() === "") {

        alert("Please fill out all required fields.");

        return false;

    } else {

        return true;
    }
}


/* 3. Projects - Show and Hide Description */

function toggleDescription(id) {

    var description = document.getElementById(id);

    if (description.style.display === "none") {

        description.style.display = "block";

    } else {

        description.style.display = "none";
    }
}


/* 4. CV - Interactive Blockquote */

var quote = document.querySelector("blockquote");

if (quote) {

    quote.addEventListener("mouseover", function() {

        quote.style.backgroundColor = "#d8eef0";

    });

    quote.addEventListener("mouseout", function() {

        quote.style.backgroundColor = "#f0f5f7";

    });
}
