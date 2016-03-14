$(document).ready(function() {
    $('.to-share').hover(
        function() {
            var o = $(this);
            o.css({
                position: 'relative'
            });
            var s = o.find('.block-share');
            s.show(500);
        },
        function() {
            var o = $(this);
            var s = o.find('.block-share');
            s.hide(500);
        });
});

Ya.share2('ya-share', {
    content: {
        url: 'http://www.photo-a.ru/portfolio/beline/',
        title: 'Фотостудия на крыше - рекламная фотосъемка',
        description: 'Фотосъемка для Билайн',
        image: 'http://www.photo-a.ru/wa-data/public/photos/30/02/230/230.1080.jpg'   
    },
    theme: {
        services: 'vkontakte,facebook,odnoklassniki,twitter,lj,gplus,evernote,viber,whatsapp',
        limit: 4,
    }
}
);
