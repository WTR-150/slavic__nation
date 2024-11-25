// Elementy HTML
const welcomeScreen = document.getElementById('welcomeScreen');
const formScreen = document.getElementById('formScreen');
const joinButton = document.getElementById('joinButton');
const recruitmentForm = document.getElementById('recruitmentForm');
const membersList = document.getElementById('membersList');

// Lista członków (inicjalizacja z LocalStorage)
let members = JSON.parse(localStorage.getItem('members')) || [];

// Przejście z ekranu powitalnego do formularza
joinButton.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    formScreen.classList.remove('hidden');
});

// Wyświetlanie listy członków
function displayMembers() {
    membersList.innerHTML = '';
    members.forEach((member, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${member.gameNick} (Discord: ${member.discordNick}) - Klasa: ${member.class}`;
        membersList.appendChild(li);
    });
}

// Obsługa formularza
recruitmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Pobranie danych z formularza
    const gameNick = document.getElementById('gameNick').value.trim();
    const discordNick = document.getElementById('discordNick').value.trim();
    const selectedClass = document.getElementById('class').value;

    if (gameNick && discordNick && selectedClass) {
        // Dodanie nowego członka
        members.push({ gameNick, discordNick, class: selectedClass });

        // Zapisanie w LocalStorage
        localStorage.setItem('members', JSON.stringify(members));

        // Wyczyszczenie formularza
        recruitmentForm.reset();

        // Aktualizacja listy
        displayMembers();
    }
});

// Wyświetlenie członków przy załadowaniu strony
displayMembers();
