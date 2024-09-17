document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.email-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const email = this.getAttribute('data-email');
            window.location.href = `mailto:${email}`;
        });
    });
});