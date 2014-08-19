// instrument by jscoverage, do not modifly this file
(function () {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (!BASE._$jscoverage) {
    BASE._$jscoverage = {};
    BASE._$jscoverage_cond = {};
    BASE._$jscoverage_done = function (file, line, express) {
      if (arguments.length === 2) {
        BASE._$jscoverage[file][line] ++;
      } else {
        BASE._$jscoverage_cond[file][line] ++;
        return express;
      }
    };
    BASE._$jscoverage_init = function (base, file, lines) {
      var tmp = [];
      for (var i = 0; i < lines.length; i ++) {
        tmp[lines[i]] = 0;
      }
      base[file] = tmp;
    };
  }
})();
_$jscoverage_init(_$jscoverage, "/Users/dxq613/Desktop/work/acharts/achart-plot/index.js",[1,3,4,5,7]);
_$jscoverage_init(_$jscoverage_cond, "/Users/dxq613/Desktop/work/acharts/achart-plot/index.js",[]);
_$jscoverage["/Users/dxq613/Desktop/work/acharts/achart-plot/index.js"].source = ["var Plot = {};","","Plot.Item = require('./src/plotitem');","Plot.Back = require('./src/plotback');","Plot.Range = require('./src/plotrange');","","module.exports = achartBase;",""];
_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/index.js", 1);
var Plot = {};

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/index.js", 3);
Plot.Item = require("./src/plotitem");

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/index.js", 4);
Plot.Back = require("./src/plotback");

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/index.js", 5);
Plot.Range = require("./src/plotrange");

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/index.js", 7);
module.exports = achartBase;