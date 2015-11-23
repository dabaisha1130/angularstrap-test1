/**
 *@class index
 *@description App主模块,所有的模块被主模块引用
 *@time 2014-09-20 10:53
 *@author StarZou
 **/


var App = angular.module('App', ['mgcrea.ngStrap', 'App.controllers', 'App.services', 'App.directives', 'App.filters']);
console.log(App);