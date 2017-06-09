export default class ArticleService {
    constructor($http) {
        'ngInject';
        const vm = this;
        Object.assign(vm, {
            $http
        });
    }

    getArticle(groupName, articleId) {
        const vm = this;
        return vm.$http({method: 'GET', url: `api/articles/${groupName}/${articleId}`}).then((response) => {
            return response.data;
        });
    }
}

