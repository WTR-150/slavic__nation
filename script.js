// Pobranie elementów HTML
const membersList = document.getElementById('membersList');
const recruitmentForm = document.getElementById('recruitmentForm');

// Inicjalizacja listy członków z LocalStorage
let members = JSON.parse(localStorage.getItem('members')) || [];

// Funkcja do wyświetlania listy członków
function displayMembers() {
    membersList.innerHTML = '';
    members.forEach((member, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${member.gameNick} (Discord: ${member.discordNick}) - Klasa: ${member.class}`;
        membersList.appendChild(li);
    });
}

// Obsługa formularza rekrutacyjnego
recruitmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Pobranie danych z formularza
    const gameNick = document.getElementById('gameNick').value.trim();
    const discordNick = document.getElementById('discordNick').value.trim();
    const selectedClass = document.getElementById('class').value;

    if (gameNick && discordNick && selectedClass) {
        // Dodanie nowego członka
        members.push({ gameNick, discordNick, class: selectedClass });

        // Zapis do LocalStorage
        localStorage.setItem('members', JSON.stringify(members));

        // Wyczyszczenie formularza
        recruitmentForm.reset();

        // Aktualizacja listy członków
        displayMembers();
    }
});

// Wyświetlenie listy członków przy załadowaniu strony
displayMembers();
