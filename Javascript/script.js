var alert_container = document.getElementById('alert-container');
document.getElementById('contact').addEventListener('click', function (e) {
    e.preventDefault(); // prevents the form from submitting
    alert_container.innerHTML = '<div class="alert">Message sent!</div>';
});


