export default function SliderDirective() {
    return {
        templateUrl: './app/components/slider/slider.template.html',
        controller: 'SliderController',
        controllerAs: 'sliderCtrl',
        bindToController: true,
        scope: {
            groupType: '<',
            groupName: '<',
            pageSize: '<',
            pageNumber: '<',
            slideContentTemplate: '<'
        }
    };
}
