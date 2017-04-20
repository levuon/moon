/**
 * Created by liuhuan on 11/21/16.
 */
define( function ( require ) {
  //定义moon项目的所有逻辑js 要在require_config.js 定义

  //basic dependency
  require( "md5" );

  //galaxy logic dependency
  require( 'controllers' );
  require( 'services' );
  require( 'route' );
  require( 'directives' );


} );