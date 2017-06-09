export default class ImageGalleryController {
    constructor(imageGallery) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            imageData: {}
        });
        // TODO: move to separate method
        imageGallery.getImageGallery(vm.galleryInfoId, vm.imageGalleryId).then(function(list) {
            vm.imageData = list;
            return list;
        });
    }
}
