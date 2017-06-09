export default function MenuDirective() {
    return {
        templateUrl: './app/components/menu/menu.template.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        bindToController: true,
        scope: {
            menuName: '<',
            level: '<',
            operator: '<'
        }
    };
}
