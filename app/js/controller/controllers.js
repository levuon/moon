/**
 * Created by liuhuan on 11/21/16.
 */
define( [ 'angular' ], function () {
  var controllers = angular.module( "controllers", [] );


  controllers
  .controller( 'homeCtrl', [ '$scope', function ( $scope ) {
    $scope.home = "liuhuan"
  } ] );

  return controllers;
} );