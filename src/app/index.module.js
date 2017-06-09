/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';

import NirvanaConstantsConfiguration from './components/nirvanaConstantConfiguration/nirvanaConstant.configurations';
import MenuController from './components/menu/menu.controller';
import MenuDirective from './components/menu/menu.directive';
import MenuService from './components/menu/menu.service';
import MenuScrollDirective from './components/menu-scroll/menu-scroll.directive';
import PageContainerController from './components/page-container/page-container.controller';
import PageContainerDirective from './components/page-container/page-container.directive';
import PageContainerService from './components/page-container/page-container.service';
import SliderController from './components/slider/slider.controller';
import SliderDirective from './components/slider/slider.directive';
import SliderModel from './components/slider/slider.model';
import ArticleController from './components/article/article.controller';
import ArticleDirective from './components/article/article.directive';
import ArticleService from './components/article/article.service';
import GalleryController from './components/gallery/gallery.controller';
import GalleryDirective from './components/gallery/gallery.directive';
import GalleryService from './components/gallery/gallery.service';
import ImageGalleryController from './components/imageGallery/imageGallery.comtroller';
import ImageGalleryDirective from './components/imageGallery/imageGallery.directive';
import ImageGalleryService from './components/imageGallery/imageGallery.service';

angular.module('nirvana', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)

    .constant('nrvConstConfig', NirvanaConstantsConfiguration)
    .directive('nrvMenu', MenuDirective)
    .controller('MenuController', MenuController)
    .service('menu', MenuService)
    .directive('nrvMenuScroll', MenuScrollDirective)
    .directive('nrvPageContainer', PageContainerDirective)
    .controller('PageContainerController', PageContainerController)
    .service('pageContainer', PageContainerService)
    .directive('nrvSlider', SliderDirective)
    .controller('SliderController', SliderController)
    .service('slider', SliderModel)
    .directive('nrvArticle', ArticleDirective)
    .controller('ArticleController', ArticleController)
    .service('article', ArticleService)
    .directive('nrvGallery', GalleryDirective)
    .controller('GalleryController', GalleryController)
    .service('gallery', GalleryService)
    .directive('nrvImageGallery', ImageGalleryDirective)
    .controller('imageGalleryController', ImageGalleryController)
    .service('imageGallery', ImageGalleryService);
