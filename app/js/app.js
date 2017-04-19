define(["angular", "logicMoon", 'ui.router', "local-storage"], function() {
		
		
		//依赖的controllers, directives, services, route, 通过logicMoon获取.
		// local-storage 对应的angular module是LocalStorageModule
		var moon = angular.module("moon", ["ui.router", "controllers", "directives", "services", "route", "LocalStorageModule"]);
		
		moon.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', "sessionStorageServiceProvider", "localStorageServiceProvider", "$sceDelegateProvider",
				function($stateProvider, $urlRouterProvider, $httpProvider, sessionStorageServiceProvider, localStorageServiceProvider, $sceDelegateProvider) {
						//初始化 设置sessionStorage prefix为moonSession, localStorage prefix为moonLocal.
						
						sessionStorageServiceProvider.setPrefix("moonSession");
						localStorageServiceProvider.setPrefix('moonLocal');
						
						// $urlRouterProvider.when('/tabs/selected', "/tabs/fund");
						// $urlRouterProvider.when('/asset/recharge', "/recharge");
						
						$urlRouterProvider.otherwise('/home');
				}]);
		
		
		return moon;
});