document.addEventListener('DOMContentLoaded', () => {
    const recruitmentForm = document.getElementById('recruitmentForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const membersList = document.getElementById('membersList');
    const eventsList = document.getElementById('eventsList');
    const guidesList = document.getElementById('guidesList');
    const galleryList = document.getElementById('galleryList');

    // Funkcja do dodawania członków do listy
    function updateMembers() {
        fetch('/members.json')
            .then(response => response.json())
            .then(data => {
                membersList.innerHTML = data.map(member => `
                    <div class="member">
                        <h3>${member.nickname}</h3>
                        <p>Discord: ${member.discord}</p>
                        <p>Rola: ${member.role}</p>
                    </div>
                `).join('');
            });
    }

    // Funkcja do obsługi formularza rekrutacyjnego
    recruitmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nickname = document.getElementById('nickname').value;
        const discord = document.getElementById('discord').value;
        const role = document.getElementById('role').value;

        const data = { nickname, discord, role };

        fetch('/rekrutacja', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(() => {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            recruitmentForm.reset();
            updateMembers(); // Odświeżenie listy członków
        })
        .catch(() => {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        });
    });

    // Wywołanie funkcji na starcie, aby załadować listę członków
    updateMembers();
});
