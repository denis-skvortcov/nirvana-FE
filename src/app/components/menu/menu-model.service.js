export default class MenuService {
    constructor($q) {
        'ngInject';
        this.getMenu = function() {
            return $q.when({
                menuItem1: {
                    caption: 'Home',
                    id: '0',
                    menuSubItem11: {
                        caption: 'One',
                        id: '00'
                        // menuSubItem111: {
                        //     caption: 'Two2',
                        //     id: '000',
                        //     menuSubItem1111: {
                        //         caption: 'Two21',
                        //         id: '0000'
                        //     },
                        //     menuSubItem1112: {
                        //         caption: 'Tree31',
                        //         id: '0001'
                        //     },
                        //     menuSubItem1113: {
                        //         caption: 'For41',
                        //         id: '0002'
                        //     }
                        // },
                        // menuSubItem112: {
                        //     caption: 'Tree3',
                        //     id: '001'
                        // },
                        // menuSubItem113: {
                        //     caption: 'For4',
                        //     id: '002'
                        // }
                    },
                    menuSubItem12: {
                        caption: 'Two',
                        id: '01'
                    },
                    menuSubItem13: {
                        caption: 'Tree',
                        id: '02'
                    },
                    menuSubItem14: {
                        caption: 'For',
                        id: '03'
                    }
                },
                menuItem2: {caption: 'About', id: '1'},
                menuItem3: {caption: 'Service', id: '2'}
            });
        };
    }
}
