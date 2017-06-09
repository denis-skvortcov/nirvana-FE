export default class SliderController {
    constructor(slider) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            slider,
            idsList: {},
            currentPageNumber: 0,
            recordsCount: 0
        });
    }

    getViewConfiguration() {
        const vm = this;
        return vm.idsList;
    }

    getQueryParameters(pageNumber) {
        const vm = this;
        return {
            groupType: vm.groupType,
            groupName: vm.groupName,
            pageSize: vm.pageSize,
            pageNumber
        };
    }

    goToPageNumber(number) {
        const vm = this;
        vm.slider.get(vm.getQueryParameters(number)).$promise.then(({records, recordsCount}) => {
            vm.idsList = records;
            vm.recordsCount = recordsCount;
        });
    }

    startInitialization() {
        const vm = this;
        if (!!vm.groupName) {
            vm.goToPageNumber(vm.pageNumber);
        }
    }

    get lastPageNumber() {
        const vm = this;
        return Math.floor(vm.recordsCount / vm.pageSize);
    }

    get isFirstPage() {
        const vm = this;
        return vm.currentPageNumber <= 0;
    }

    get isLastPage() {
        const vm = this;
        return vm.currentPageNumber >= vm.lastPageNumber;
    }

    goToPriorPage() {
        const vm = this;
        if (vm.isFirstPage) {
            vm.currentPageNumber = vm.lastPageNumber;
            vm.goToPageNumber(vm.currentPageNumber);
        } else {
            vm.currentPageNumber--;
            vm.goToPageNumber(vm.currentPageNumber);
        }
    }

    goToNextPage() {
        const vm = this;
        if (vm.isLastPage) {
            vm.currentPageNumber = 0;
            vm.goToPageNumber(vm.currentPageNumber);
        } else {
            vm.currentPageNumber++;
            vm.goToPageNumber(vm.currentPageNumber);
        }
    }

    goToFirstPage() {
        const vm = this;
        if (vm.isFirstPage) {
            return;
        }
        vm.currentPageNumber = 0;
        vm.goToPageNumber(vm.currentPageNumber);
    }

    goToLastPage() {
        const vm = this;
        if (vm.isLastPage) {
            return;
        }
        vm.currentPageNumber = vm.lastPageNumber;
        vm.goToPageNumber(vm.currentPageNumber);
    }

    $onChanges(changesObj) {
        const vm = this;
        vm.startInitialization();
    }
}
