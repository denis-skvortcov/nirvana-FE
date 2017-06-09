export default class GalleryController {
    constructor(gallery, nrvConstConfig) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            gallery,
            nrvConstConfig,
            status: '',
            galleryView: [],
            imageGallery: {}
        });

        vm.status = nrvConstConfig.listGallery;

        gallery.getListGallery().then((list) => {
            vm.galleryView = list;
            return list;
        });
    }

    get statusListGallery() {
        const vm = this;
        return vm.status === vm.nrvConstConfig.listGallery;
    }

    get statusImagesGallery() {
        const vm = this;
        return vm.status === vm.nrvConstConfig.imagesGallery;
    }

    get statusSliderGallery() {
        const vm = this;
        return vm.status === vm.nrvConstConfig.sliderGallery;
    }

    get albumsList() {
        const vm = this;
        vm.gallery.getListGallery().then((list) => {
            vm.galleryView = list;
            vm.status = vm.nrvConstConfig.listGallery;
            return list;
        });
    }

    getImagesGallery(parentId) {
        const vm = this;
        vm.gallery.getImagesGallery(parentId).then((list) => {
            vm.galleryView = list;
            vm.status = vm.nrvConstConfig.imagesGallery;
            return list;
        });
    }

    getImageGallery(parentId, index) {
        const vm = this;
        vm.imageGallery = {
            index,
            parentId
        };
        vm.status = vm.nrvConstConfig.sliderGallery;
    }

    eventClickGalleryElement(id, index) {
        const vm = this;
        if (vm.statusListGallery) {
            vm.status = vm.nrvConstConfig.imagesGallery;
            vm.getImagesGallery(id);
        } else if (vm.statusImagesGallery) {
            vm.status = vm.nrvConstConfig.sliderGallery;
            vm.getImageGallery(id, index);
        }
    }
}
