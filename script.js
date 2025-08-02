//myth_card_toggler.
document.querySelectorAll('.myth_card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});
