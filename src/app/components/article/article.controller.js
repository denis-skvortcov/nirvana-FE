export default class ArticleController {
    constructor(article) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            articleData: {}
        });
        // TODO: move to separate method
        article.getArticle(vm.groupName, vm.articleId).then(function(list) {
            vm.articleData = list;
            return list;
        });
    }
}
