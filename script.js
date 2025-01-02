function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Close modal when clicking the x button or outside the modal
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.getElementsByClassName('modal');
    var closes = document.getElementsByClassName('close');

    for (let close of closes) {
        close.onclick = function() {
            this.parentElement.parentElement.style.display = "none";
        }
    }

    window.onclick = function(event) {
        for (let modal of modals) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});