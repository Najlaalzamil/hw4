/* 1. Homepage - Add Date and Time */

window.onload = function() {

    var footer = document.getElementById("home-footer");

    if (footer) {

        var newParagraph = document.createElement("p");

        var currentDate = new Date();

        var formattedDate = currentDate.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });

        newParagraph.textContent = "Page loaded: " + formattedDate;

        newParagraph.className = "page-load-time";

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
