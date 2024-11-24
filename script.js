document.addEventListener('DOMContentLoaded', function () {

    const recruitForm = document.getElementById('recruitForm');
    const eventsContainer = document.getElementById('events-list');
    const membersList = document.getElementById('members-list');
    const events = [
        { title: 'Wojna o Terytorium', date: '25 grudnia, 18:00' },
        { title: 'Expedycja na Bossów', date: '27 grudnia, 20:00' },
        { title: 'PVP - Bitwa Królewska', date: '30 grudnia, 17:00' },
    ];

    recruitForm.addEventListener('submit', handleRecruitmentFormSubmit);

    function handleRecruitmentFormSubmit(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;

        if (name && role) {
            let members = JSON.parse(localStorage.getItem('members')) || [];
            members.push({ name, role });
            localStorage.setItem('members', JSON.stringify(members));

            recruitForm.reset();
            showNotification('Zarejestrowano pomyślnie!', 'success');
            updateMembersList();
        } else {
            showNotification('Proszę wypełnić wszystkie pola!', 'error');
        }
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => notification.remove(), 4000);
    }

    function updateMembersList() {
        membersList.innerHTML = '';
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

    function loadEvents() {
        eventsContainer.innerHTML = '';
        events.forEach(event => {
            const eventElement = document.createElement('li');
            eventElement.innerHTML = `<strong>${event.title}</strong>: ${event.date}`;
            eventsContainer.appendChild(eventElement);
        });
    }

    loadEvents();
    updateMembersList();
});
