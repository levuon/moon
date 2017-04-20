/**
 * Created by liuhuan on 11/17/16.
 */
/*
 * Route:
 * 注意 angularJS 的 路由配置 是由config函数传入，必须在app启动之前全部读入
 * 所以无法如controller,service,directive那样通过requireJS按需加载
 */
define( [ 'angular' ], function () {

  //route需要依赖ui.router
  var route = angular.module( 'route', [ "ui.router" ] );

  route
  .config( [ '$stateProvider', '$urlRouterProvider', '$httpProvider', function ( $stateProvider ) {
    $stateProvider
    .state( 'home', {
      url: "/home",
      templateUrl: "template/home.html",
      controller: 'homeCtrl'
    } )

  } ] );
  return route;
} );