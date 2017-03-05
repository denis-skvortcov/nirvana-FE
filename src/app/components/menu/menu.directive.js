export default function MenuDirective() {
    return {
        templateUrl: './app/components/menu/menu.template.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        scope: {},
        link
    };
    function link($scope, $element, $attributes, menuCtrl) {
        // $element
    }
}
