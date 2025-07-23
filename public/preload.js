(function() {
    const imagesToPreload = [
        '/assets/hotel.jpg',
        '/assets/map-summer.webp',
        '/assets/living.svg',
        '/assets/test.svg',
        '/assets/testimfonts.svg',
        '/assets/hotel.jpg',
        '/assets/logo.png',
        '/assets/emoji.png',
        '/assets/dresscode.jpg',
        '/assets/gala-dinner-seat.png',

        // Добавьте остальные URL-адреса изображений
    ];

    imagesToPreload.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
})();
