document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Ustawienia formularza rekrutacyjnego
    const recruitForm = document.getElementById('recruitForm');
    recruitForm.addEventListener('submit', handleRecruitmentFormSubmit);

    // 2. Zarządzanie formularzem - zapis do "lokalnej bazy danych" (localStorage)
    function handleRecruitmentFormSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const role = document.getElementById('role').value.trim();

        if (name && role) {
            // Zapisz dane użytkownika w localStorage
            let members = JSON.parse(localStorage.getItem('members')) || [];
            members.push({ name, role });
            localStorage.setItem('members', JSON.stringify(members));

            // Powiadomienie
            showNotification(`Dziękujemy za rejestrację, ${name}! Twoja rola: ${role}.`, 'success');

            // Resetowanie formularza
            recruitForm.reset();
            updateMembersList();
        } else {
            showNotification('Proszę wypełnić wszystkie pola!', 'error');
        }
    }

    // 3. Funkcja wyświetlania powiadomień
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.textContent = message;

        // Dodanie do DOM
        document.body.appendChild(notification);

        // Automatyczne usuwanie powiadomienia po 4 sekundach
        setTimeout(() => notification.remove(), 4000);
    }

    // 4. Aktualizacja listy członków
    function updateMembersList() {
        const membersList = document.getElementById('members-list');
        membersList.innerHTML = ''; // Wyczyść aktualną listę

        let members = JSON.parse(localStorage.getItem('members')) || [];
        
        if (members.length === 0) {
            membersList.innerHTML = '<li>Brak zarejestrowanych członków.</li>';
        } else {
            members.forEach((member, index) => {
                const memberElement = document.createElement('li');
                memberElement.innerHTML = `${index + 1}. <strong>${member.name}</strong> - <em>${member.role}</em>`;
                membersList.appendChild(memberElement);
            });
        }
    }

    // 5. Inicjalizacja danych
    updateMembersList();
    
    // 6. Dynamiczne dodawanie wydarzeń
    const eventsContainer = document.getElementById('events-list');
    const eventsData = [
        { title: 'Wojna Terytorialna', date: '25 grudnia, 18:00' },
        { title: 'Ekspedycja Bossa', date: '27 grudnia, 20:00' },
        { title: 'Event PVP', date: '30 grudnia, 17:00' },
    ];

    function loadEvents() {
        eventsContainer.innerHTML = ''; // Wyczyść poprzednie wydarzenia
        eventsData.forEach(event => {
            const eventElement = document.createElement('li');
            eventElement.innerHTML = `<strong>${event.title}</strong>: ${event.date}`;
            eventsContainer.appendChild(eventElement);
        });
    }

    loadEvents();

    // 7. Formularz logowania
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLoginFormSubmit);

    function handleLoginFormSubmit(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Prosty mechanizm sprawdzający login
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('loggedIn', true);
            showNotification('Zalogowano pomyślnie!', 'success');
            document.getElementById('loginModal').style.display = 'none';
        } else {
            showNotification('Nieprawidłowy login lub hasło', 'error');
        }
    }

    // 8. Wykrywanie zalogowanego użytkownika i aktualizacja UI
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'inline-block';
    }

    // 9. Obsługa logowania/wylogowywania
    document.getElementById('logoutBtn').addEventListener('click', function () {
        localStorage.removeItem('loggedIn');
        location.reload(); // Odświeżenie strony po wylogowaniu
    });

});

// Wysuwanie okna logowania
function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

