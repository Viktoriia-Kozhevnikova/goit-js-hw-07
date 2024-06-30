const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);

    const elements = event.currentTarget.elements;

    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    };
    console.log(info);

    if (info.email === "" || info.password === "") {
        alert("All form fields must be filled in");
        return;
    }
    
    event.currentTarget.reset();
}