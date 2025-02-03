document.addEventListener('click', function(event) {
    let isClickInside = event.target.closest('.menu');
    if (!isClickInside) {
        document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none');
    }
});
