/**
 * Created by liuhuan on 11/17/16.
 */
var requireConfig = {

  devFlag: true,

  urlArgs: "var=1.1.1",

  baseUrl: '',

  waitSeconds: 15,

  prdPaths: {
    "app": "prd_js/app.min",

    "config": "prd_js/config.min",

    "utils": "prd_js/utils.min", //include md5,utils

    "logicGalaxy": "prd_js/logic.min"//include all logic module,eg:route,controller,service,directive
  },
  devPaths: {
    'jquery': 'lib/jQuery/jquery-2.1.4',

    'angular': 'lib/angular/angular',

    'ui.router': 'lib/angular-ui/angular-ui-router',

    'app': 'js/app',

    'config': 'js/config',

    "logicMoon": "js/logic.require",

    // "utils": "js/utils/utils",

    "md5": "js/utils/md5",

    /**
     * 为了开发遍历清楚，这里对 controller,service,route 进行了细粒度的划分，后期会进行部分合并，部分按需加载
     */
    'controllers': 'js/controller/controllers',

    'services': 'js/service/services',

    'route': 'js/route/route',

    'directives': 'js/directive/directives'
  },
  paths: {

    'local-storage': 'lib/angular/angular-local-storage'

  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    "ui.router": {
      deps: ['angular']
    },
    "local-storage": {
      deps: ['angular'],
      exports: ""
    },
    "utils": {
      export: "util"
    },
    "md5": {
      export: "md5"
    }
  }

};

requireConfig.devFlag ? $.extend(requireConfig.paths, requireConfig.devPaths)
 : $.extend(requireConfig.paths, requireConfig.prdPaths);


//开始引用 2个js文件 jquery 和requirejs requirejs初始化是调用req({}). 主要将环境配置好 (通过newContext 生成的上下文.)
// requirejs 已经是一个函数   var req = requirejs = function(){}

//requirejs.config 执行require的配置文件.
requirejs.config(requireConfig);


// require(..) 实际就是 req(deps, callback)
require(["app", "config"], function() {
  angular.bootstrap(document.body, ['moon']);
});


