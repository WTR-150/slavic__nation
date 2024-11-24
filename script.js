document.addEventListener('DOMContentLoaded', () => {
    // Przykładowe dane dla wydarzeń, rankingów, galerii i aktualności
    const events = [
        { title: 'Wojna o Teren', date: '2024-12-01', description: 'Wielka bitwa o zasoby na wyspie!' },
        { title: 'Ekspedycja na Wschód', date: '2024-12-05', description: 'Podróż w nieznane w poszukiwaniu skarbów!' }
    ];

    const rankings = [
        { name: 'Gracz1', role: 'DPS', score: 1500 },
        { name: 'Gracz2', role: 'Tank', score: 1400 }
    ];

    const news = [
        { title: 'Nowa wojna nadchodzi!', content: 'Zbliżają się intensywne walki w regionie...' },
        { title: 'Wielka ekspedycja', content: 'Dołącz do ekspedycji, aby zdobyć potężne nagrody!' }
    ];

    const gallery = [
        { img: 'https://yourimageurl.com/1.jpg', caption: 'Bitwa w lesie' },
        { img: 'https://yourimageurl.com/2.jpg', caption: 'Eksploracja ruin' }
    ];

    // Generowanie wydarzeń
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

    // Generowanie rankingów
    const rankingsList = document.getElementById('rankingsList');
    rankings.forEach(player => {
        const rankingItem = document.createElement('div');
        rankingItem.classList.add('ranking-item');
        rankingItem.innerHTML = `
            <h3>${player.name}</h3>
            <p>Rola: ${player.role}</p>
            <p>Punkty: ${player.score}</p>
        `;
        rankingsList.appendChild(rankingItem);
    });

    // Generowanie galerii
    const galleryList = document.getElementById('galleryList');
    gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
            <img src="${item.img}" alt="${item.caption}" />
            <p>${item.caption}</p>
        `;
        galleryList.appendChild(galleryItem);
    });

    // Generowanie aktualności
    const newsList = document.getElementById('newsList');
    news.forEach(newsItem => {
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `
            <h3>${newsItem.title}</h3>
            <p>${newsItem.content}</p>
        `;
        newsList.appendChild(newsElement);
    });

    // Generowanie mapy świata (symulacja)
    const worldMap = document.getElementById('worldMap');
    worldMap.innerHTML = '<p>Interaktywna mapa świata pojawi się tutaj...</p>';
});
