const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    for (let key in values) {
        values[key] = values[key].trim();
    }

    if (!values.email || !values.password) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(values);
    form.reset();
});
