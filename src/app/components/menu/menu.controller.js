export default class MenuController {
    constructor(menu) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            menuList: {}
        });

        // TODO: move to separate method
        menu.getMenu().then(function(list) {
            vm.menuList = list;
            return list;
        });
    }

    getRootMenuItems() {
        const vm = this;
        return Object.keys(vm.menuList).map((menuItemName) => vm.menuList[menuItemName]);
    }

    getMenuItemSubItems(parentMenuItem) {
        return Object.values(parentMenuItem).filter((menuItemName) => angular.isObject(menuItemName));
    }

    isHasChildren(menuItem) {
        return Object.values(menuItem).find((item) => angular.isObject(item));
    }
}
