export default function ImageGalleryDirective() {
    return {
        templateUrl: './app/components/imageGallery/imageGallery.template.html',
        controller: 'ImageGalleryController',
        controllerAs: 'imageGalleryCtrl',
        bindToController: true,
        scope: {
            imageGalleryId: '<',
            galleryInfoId: '<',
            buttonClasses: '<'
        }
    };
}
