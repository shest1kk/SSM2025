(function() {
    const imagesToPreload = [
        '/assets/hotel.jpg',
        '/assets/1.png',
        '/assets/2.png',
        '/assets/3.png',
        '/assets/4.png',
        '/assets/5.png',
        '/assets/6.png',
        '/assets/7.png',
        '/assets/8.png',
        '/assets/9.png',
        '/assets/10.png',
        '/assets/11.png',
        '/assets/12.png',
        '/assets/13.png',
        '/assets/14.png',
        '/assets/15.png',
        '/assets/16.png',
        '/assets/17.png',
        '/assets/18.png',
        '/assets/19.png',
        '/assets/20.png',
        '/assets/21.png',
        '/assets/logo.svg',
        '/assets/dresscode.svg',
        '/assets/FaqAbout_frame.svg',
        '/assets/living.svg',
        '/assets/test.svg',
        '/testimfonts.svg',
        '/assets/1.png',
        '/assets/hotel.jpg',
        // Добавьте остальные URL-адреса изображений
    ];

    imagesToPreload.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
})();
