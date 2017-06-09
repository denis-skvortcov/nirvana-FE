export default class ImageGalleryService {
    constructor($http) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            $http
        });
    }

    getImageGallery(galleryInfoId, imageGalleryId) {
        const vm = this;
        return vm.$http({method: 'GET', url: `api/gallery/${galleryInfoId}/${imageGalleryId}`}).then((response) => {
            return response.data;
        });
    }
}

