export default class MenuService {
    constructor($http) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            $http
        });
    }

    getMenu(menuName, level) {
        const vm = this;
        return vm.$http({method: 'GET', url: `api/menu/${menuName}?level=${level}`}).then((response) => {
            return response.data;
        });
    }

    getSubMenu(menuName, operator, parentId) {
        const vm = this;
        return vm.$http({method: 'GET', url: `api/menu/${menuName}?operator=${operator}&parentId=${parentId}`}).then((response) => {
            return response.data;
        });
    }
}
