document.addEventListener('DOMContentLoaded', function() {
    // Formularz rekrutacyjny
    const recruitmentForm = document.getElementById('recruitmentForm');
    
    recruitmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nickname = document.getElementById('nickname').value;
        const discord = document.getElementById('discord').value;
        const role = document.getElementById('role').value;

        // Wyświetlenie alertu po zapisaniu
        alert(`Dziękujemy ${nickname} za rejestrację! Zostałeś zapisany jako ${role}.`);
        
        // Czyszczenie formularza
        recruitmentForm.reset();
    });

    // Animacja pojawiania się elementów
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.classList.add('visible');
    });
});
