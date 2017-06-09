export default function ArticleDirective() {
    return {
        templateUrl: './app/components/article/article.template.html',
        controller: 'ArticleController',
        controllerAs: 'articleCtrl',
        bindToController: true,
        scope: {
            articleId: '<',
            groupName: '<',
            buttonClasses: '<'
        }
    };
}
