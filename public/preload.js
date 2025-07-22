(function() {
    const imagesToPreload = [
        '/assets/hotel.jpg',
        '/assets/logo.svg',
        '/assets/FaqAbout_frame.svg',
        '/assets/living.svg',
        '/assets/test.svg',
        '/testimfonts.svg',
        '/assets/hotel.jpg',
        '/assets/logo.png',
        
        // Добавьте остальные URL-адреса изображений
    ];

    imagesToPreload.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
})();
