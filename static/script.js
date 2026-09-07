const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");


// --------------------------------
// Character Counter
// --------------------------------

messageInput.addEventListener("input", function () {

    charCount.textContent = this.value.length;

});


// --------------------------------
// Example Messages
// --------------------------------

const examples = [

    "Congratulations! You have won a free prize. Click now to claim your reward!",

    "Hey, are we meeting for lunch today?"
];


function useExample(index) {

    messageInput.value = examples[index];

    charCount.textContent =
        messageInput.value.length;

    messageInput.focus();

}


// --------------------------------
// Check Message
// --------------------------------

async function checkMessage() {

    const message =
        messageInput.value.trim();


    // Validate input

    if (!message) {

        alert("Please enter an SMS message.");

        return;
    }


    // Elements

    const checkBtn =
        document.getElementById("checkBtn");

    const loading =
        document.getElementById("loading");

    const result =
        document.getElementById("result");

    const probabilityBox =
        document.getElementById("probabilityBox");


    // Show loading

    checkBtn.disabled = true;

    loading.classList.remove("hidden");

    result.classList.add("hidden");

    probabilityBox.classList.add("hidden");


    try {

        // Send request to Flask

        const response =
            await fetch("/predict", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    message: message
                })

            });


        const data =
            await response.json();


        if (!data.success) {

            alert(data.error);

            return;
        }


        // Result elements

        const resultIcon =
            document.getElementById("resultIcon");

        const resultTitle =
            document.getElementById("resultTitle");

        const resultDescription =
            document.getElementById(
                "resultDescription"
            );


        // Remove previous classes

        result.classList.remove(
            "spam",
            "legitimate"
        );


        // Check prediction

        if (data.result === "SPAM") {

            result.classList.add("spam");

            resultIcon.textContent = "🚨";

            resultTitle.textContent =
                "Spam Message";

            resultDescription.textContent =
                "This message is likely to be spam.";

        } else {

            result.classList.add(
                "legitimate"
            );

            resultIcon.textContent = "✅";

            resultTitle.textContent =
                "Legitimate Message";

            resultDescription.textContent =
                "This message appears to be legitimate.";

        }


        // Display probabilities

        document.getElementById(
            "spamProbability"
        ).textContent =
            data.spam_probability + "%";


        document.getElementById(
            "spamProbability2"
        ).textContent =
            data.spam_probability + "%";


        document.getElementById(
            "legitimateProbability"
        ).textContent =
            data.legitimate_probability + "%";


        document.getElementById(
            "progressBar"
        ).style.width =
            data.spam_probability + "%";


        // Show results

        result.classList.remove(
            "hidden"
        );

        probabilityBox.classList.remove(
            "hidden"
        );


    } catch (error) {

        console.error(error);

        alert(
            "Something went wrong. Please check the Flask server."
        );

    } finally {

        loading.classList.add("hidden");

        checkBtn.disabled = false;

    }

}