import angular from 'angular'
import uiRouter from 'angular-ui-router'

import app from '@/App'
import router from '@/router'

// pages
import homePage from '@/views/HomePage'
import aboutPage from '@/views/aboutPage'

angular
.module('app', [ uiRouter ])
.components({ app, homePage, aboutPage })
.config(['$stateProvider', router ])

// bootstrap aplication
angular.bootstrap(document, ['app'])