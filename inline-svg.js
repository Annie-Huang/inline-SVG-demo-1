// Delay visual feedback for invalid from items until initial submit or blue event
document.querySelectorAll('.Form input').forEach(i => {
    i.addEventListener('invalid', () => {
        i.dataset.touched = true;
    });
    i.addEventListener('blur', () => {
        if(i.value !== '') {
            i.dataset.touched = true;
        }
    });
});
