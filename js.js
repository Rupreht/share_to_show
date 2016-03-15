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
