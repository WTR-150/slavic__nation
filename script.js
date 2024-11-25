// Elementy DOM
const welcomeScreen = document.getElementById('welcomeScreen');
const formScreen = document.getElementById('formScreen');
const joinButton = document.getElementById('joinButton');
const recruitmentForm = document.getElementById('recruitmentForm');
const membersList = document.getElementById('membersList');

// Lista członków
let members = JSON.parse(localStorage.getItem('members')) || [];

// Przejście do formularza po kliknięciu przycisku
joinButton.addEventListener('click', () => {
    // Dodaj klasę "hidden" do ekranu powitalnego
    welcomeScreen.classList.add('hidden');
    // Usuń klasę "hidden" z ekranu formularza
    formScreen.classList.remove('hidden');
});

// Wyświetlanie listy członków
function displayMembers() {
    membersList.innerHTML = '';
    members.forEach((member, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${member.gameNick} (${member.discordNick}) - Klasa: ${member.class}`;
        membersList.appendChild(li);
    });
}

// Obsługa formularza rekrutacyjnego
recruitmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Pobranie danych z formularza
    const gameNick = document.getElementById('gameNick').value.trim();
    const discordNick = document.getElementById('discordNick').value.trim();
    const selectedClass = document.querySelector('input[name="class"]:checked').value;

    // Walidacja i dodanie użytkownika
    if (gameNick && discordNick && selectedClass) {
        members.push({ gameNick, discordNick, class: selectedClass });
        localStorage.setItem('members', JSON.stringify(members));
        displayMembers();
        recruitmentForm.reset();
    }
});

// Inicjalizacja listy członków
displayMembers();
