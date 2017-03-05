/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';

import MenuController from './components/menu/menu.controller';
import MenuDirective from './components/menu/menu.directive';
import MenuService from './components/menu/menu-model.service';
import MenuScrollDirective from './components/menu-scroll/menu-scroll.directive';
import ArticlesController from './components/articles/articles.controller';
import ArticlesDirective from './components/articles/articles.directive';
import ArticlesService from './components/articles/articles-model.service';
import MainServicesDirective from './components/main-services/main-services.directive';

angular.module('nirvana', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)

    .controller('MenuController', MenuController)
    .service('menu', MenuService)
    .directive('nrvMenu', MenuDirective)
    .directive('nrvMenuScroll', MenuScrollDirective)
    .controller('ArticlesController', ArticlesController)
    .service('articles', ArticlesService)
    .directive('nrvArticles', ArticlesDirective)
    .directive('nrvMainServices', MainServicesDirective);
