export default class PageContainerService {
    constructor($q) {
        'ngInject';
        this.getPages = function() {
            return $q.when({
                page1: {
                    title: 'hello',
                    template: 'my-projects.template.html'
                },
                page2: {
                    title: 'joint Projects',
                    template: 'joint-projects.template.html'
                },
                page3: {
                    title: 'gallery',
                    template: 'gallery.template.html'
                }
            });
        };
    }
}
