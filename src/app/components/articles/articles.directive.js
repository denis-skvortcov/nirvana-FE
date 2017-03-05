export default function ArticlesDirective() {
    return {
        templateUrl: './app/components/articles/articles.template.html',
        controller: 'ArticlesController',
        controllerAs: 'articlesCtrl',
        bindToController: true,
        scope: {
            articleId: '<'
        }
    };
}
