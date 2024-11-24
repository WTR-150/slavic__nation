document.addEventListener('DOMContentLoaded', function () {
    // Pobranie danych z LocalStorage i ich wyświetlanie
    const membersList = document.getElementById('membersList');
    const members = JSON.parse(localStorage.getItem('members')) || [];

    function displayMembers() {
        membersList.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');
            memberElement.innerHTML = `
                <h3>${member.name}</h3>
                <p>Rola: ${member.role}</p>
            `;
            membersList.appendChild(memberElement);
        });
    }

    // Formularz rekrutacji
    const recruitForm = document.getElementById('recruitForm');
    recruitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;

        if (name && role) {
            const newMember = { name, role };
            members.push(newMember);
            localStorage.setItem('members', JSON.stringify(members));
            recruitForm.reset();
            displayMembers();
        } else {
            alert('Wszystkie pola muszą być wypełnione');
        }
    });

    // Inicjalizacja listy członków
    displayMembers();

    // Przykładowe wydarzenia
    const events = [
        { title: 'Bitwa o Fort Zima', date: '15 grudnia 2024', description: 'Bitwa o strategiczny fort w północnej części mapy.' },
        { title: 'Wielki Najazd', date: '20 grudnia 2024', description: 'Wielka ekspedycja w głąb nieznanych terytoriów.' }
    ];

    const eventsList = document.getElementById('eventsList');
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
        `;
        eventsList.appendChild(eventItem);
    });
});
