export default class ArticlesController {
    constructor(articles) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            articlesList: {}
        });

        // TODO: move to separate method
        articles.getArticles(vm.articleId).then(function(list) {
            vm.articlesList = list;
            return list;
        });
    }

    getRootArticlesItems() {
        const vm = this;
        return Object.keys(vm.articlesList).map((articleItem) => vm.articlesList[articleItem]);
    }

    // getMenuItemSubItems(parentMenuItem) {
    //     return Object.values(parentMenuItem).filter((menuItemName) => angular.isObject(menuItemName));
    // }
    //
    // isHasChildren(menuItem) {
    //     return Object.values(menuItem).find((item) => angular.isObject(item));
    // }
}
