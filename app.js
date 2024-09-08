document.getElementById('email').addEventListener('input', function() {
    let email = this.value;
    if (validateEmail(email)) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
document.getElementById('dropdown').addEventListener('change', function() {
    if (this.value === 'option1') {
        document.getElementById('additional-questions').style.display = 'block';
    } else {
        document.getElementById('additional-questions').style.display = 'none';
    }
});

document.querySelectorAll('.tooltip').forEach(item => {
    item.addEventListener('mouseenter', function() {
        let tooltipText = this.getAttribute('data-tooltip');
        let tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltip-box';
        tooltipElement.innerText = tooltipText;
        document.body.appendChild(tooltipElement);

        let rect = this.getBoundingClientRect();
        tooltipElement.style.left = rect.left + 'px';
        tooltipElement.style.top = rect.bottom + 'px';
    });

    item.addEventListener('mouseleave', function() {
        document.querySelector('.tooltip-box').remove();
    });
});

let progress = 0;
const totalFields = document.querySelectorAll('#survey-form input').length;
document.querySelectorAll('#survey-form input').forEach(input => {
    input.addEventListener('change', function() {
        if (this.value !== '') {
            progress += 1;
        }
        updateProgressBar(progress / totalFields);
    });
});

function updateProgressBar(percentage) {
    document.getElementById('progress-bar').style.width = (percentage * 100) + '%';
}

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showConfirmation();
});

function showConfirmation() {
    document.getElementById('survey-form').innerHTML = '<h2>Thank you for your feedback!</h2>';
    confettiEffect();
}

function confettiEffect() {
    // Confetti animation logic here
}
