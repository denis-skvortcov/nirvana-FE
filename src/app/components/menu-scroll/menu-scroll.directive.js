export default function MenuScrollDirective($window) {
    'ngInject';
    return {
        scope: {},
        templateUrl: './app/components/menu-scroll/menu-scroll.template.html',
        link
    };
    function link($scope, $element) {
        $window.onscroll = function() {
            if ($window.pageYOffset > 75) {
                $element.addClass('menu-scroll-none__view');
            } else {
                $element.removeClass('menu-scroll-none__view');
            }
        };
    }
}
