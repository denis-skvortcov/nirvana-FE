export default class GalleryService {
    constructor($http) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            $http
        });
    }

    getListGallery() {
        const vm = this;
        return vm.$http({method: 'GET', url: 'api/gallery/'}).then((response) => {
            return response.data;
        });
    }

    getImagesGallery(parentId) {
        const vm = this;
        return vm.$http({method: 'GET', url: `api/gallery/${parentId}`}).then((response) => {
            return response.data;
        });
    }
}

