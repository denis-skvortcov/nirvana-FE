export default class PageContainerController {
    constructor(pageContainer) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            pages: {}
        });

        // TODO: move to separate method
        pageContainer.getPages().then(function(list) {
            vm.pages = list;
            return list;
        });
    }

    getPageList() {
        const vm = this;
        return Object.keys(vm.pages).map((pageNumber) => vm.pages[pageNumber]);
    }
}
