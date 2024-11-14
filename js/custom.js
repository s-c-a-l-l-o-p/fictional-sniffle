let currentStep = 0;
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progress-bar");

function showStep(step) {
    steps.forEach((el, index) => {
        el.classList.toggle("active", index === step);
    });
    updateProgressBar();
}

function updateProgressBar() {
    const progress = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = progress + "%";
    progressBar.textContent = `Step ${currentStep + 1} of ${steps.length}`;
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

document.getElementById("wizardForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
});

// Initialize the first step
showStep(currentStep);