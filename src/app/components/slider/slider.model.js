export default class SliderModel {
    constructor($resource) {
        'ngInject';
        const vm = this;
        Object.assign(
            vm,
            $resource('/api/:groupType/:groupName?pageSize=:pageSize&pageNumber=:pageNumber')
        );
    }
}
