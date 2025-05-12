const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("user-input");
const result = document.getElementById("results-div");

const isValidPhoneNumber = (number) => {
    const regex = /^1?\s*(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(number);
}

checkBtn.addEventListener("click", () => {
    const { value } = input;

    if (!value) {
        alert("Please provide a phone number");
        return;
    }

    result.innerText = `${isValidPhoneNumber(value) ? "Valid" : "Invalid"} US number: ${ value }`
});

clearBtn.addEventListener("click", () => {
    input.value = "";
    result.innerText = "";
});

