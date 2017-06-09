export default class MenuController {
    constructor(menu) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            menu,
            mainMenu: {},
            subMenuStatus: {},
            subMenu: []
        });

        // TODO: move to separate method
        menu.getMenu(vm.menuName, vm.level).then((result) => {
            vm.mainMenu = result;
            return result;
        });
    }

    get rootMenuItems() {
        const vm = this;
        return vm.mainMenu;
    }

    getIsHoverRootMenuItem(parentMenuId) {
        const vm = this;
        const operator = 'more-or-equal';
        if (!vm.subMenuStatus[parentMenuId]) {
            vm.subMenuStatus[parentMenuId] = true;
            vm.menu.getSubMenu(vm.menuName, operator, parentMenuId).then((result) => {
                if (result.length === 0) {
                    return;
                }
                vm.subMenu[parentMenuId] = result;
                return result;
            });
        }
    }

    getSubMenuItem(menuItem) {
        const vm = this;
        return !menuItem.parentId && vm.subMenu[menuItem.id] || menuItem[menuItem.id];
    }

    isHasChildren(menuItem) {
        const vm = this;
        return !!vm.getSubMenuItem(menuItem);
    }
}
