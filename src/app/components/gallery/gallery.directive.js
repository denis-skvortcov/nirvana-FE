export default function GalleryDirective() {
    return {
        templateUrl: './app/components/gallery/gallery.template.html',
        controller: 'GalleryController',
        controllerAs: 'galleryCtrl'
    };
}
