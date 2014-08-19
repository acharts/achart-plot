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
_$jscoverage_init(_$jscoverage, "/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js",[6,9,12,21,22,23,27,31,33,34,37,38,39,43,44,45,47,48,49,52,53,54,56,57,58,67,68,69,78,79,80,82,86,95,96,99,103,112,113,116,120,127,129,136,138,143]);
_$jscoverage_init(_$jscoverage_cond, "/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js",[78,95,112]);
_$jscoverage["/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js"].source = ["/**"," * @fileOverview 坐标轴区域"," * @ignore"," */","","var Util = require('achart-util');\t","","function min(x,y){","\treturn x > y ? y : x;","}","function max(x,y){","\treturn x > y ? x : y;","}","","/**"," * @class Chart.PlotRange"," * 用于计算是否在坐标轴内的帮助类"," * @protected"," */","function PlotRange(start,end){","\tthis.start = start;","\tthis.end = end;","\tthis.init();","};","","","Util.augment(PlotRange,{","","\t//初始化","\tinit : function(){","\t\tvar plotRange = this;","","\t\tstart = plotRange.start;","  \tend = plotRange.end;","","  \t//top-left","  \t  var tl = plotRange.tl = {};","  \t  tl.x = min(start.x,end.x);","  \t  tl.y = min(start.y,end.y);","  \t","","  \t//top-right","  \t\tvar tr = plotRange.tr = {};","  \t\ttr.x = max(start.x,end.x);","  \t\ttr.y = min(start.y,end.y);","  \t//bottom-left","  \t\tvar bl = plotRange.bl = {};","  \t\tbl.x = min(start.x,end.x);","  \t\tbl.y = max(start.y,end.y);","","  \t//bottom-right","  \t\tvar br = plotRange.br = {};","  \t\tbr.x = max(start.x,end.x);","  \t\tbr.y = max(start.y,end.y);","","  \t\tvar cc = plotRange.cc = {};","  \t\tcc.x = (br.x - tl.x)/2 + tl.x;","  \t\tcc.y = (br.y - tl.y)/2 + tl.y;","  \t","\t},","  /**","   * 重置","   * @param  {Object} start 开始点","   * @param  {Object} end   结束点","   */","  reset : function(start,end){","    this.start = start;","    this.end = end;","    this.init();","  },","\t/**","\t * 是否在范围内","\t * @param {Number} x x坐标","\t * @param {Number} y y坐标","\t * @return {Boolean}   是否在范围内","\t */","\tisInRange : function(x,y){","\t\tif(Util.isObject(x)){","\t\t\ty = x.y;","\t\t\tx = x.x;","\t\t}","\t\tvar  plotRange = this,","\t\t\ttl = plotRange.tl,","\t\t\tbr = plotRange.br;","","\t\treturn x >= tl.x && x <= br.x && y >= tl.y && y <= br.y;","\t},","\t/**","\t * 是否在垂直范围内","\t * @param  {Number}  y y坐标","\t * @return {Boolean} 在垂直范围内","\t */","\tisInVertical : function(y){","","\t\tif(Util.isObject(y)){","\t\t\ty = y.y;","\t\t}","","\t\tvar  plotRange = this,","\t\t\ttl = plotRange.tl,","\t\t\tbr = plotRange.br;","","\t\treturn y >= tl.y && y <= br.y;","\t},","\t/**","\t * 是否在水平范围内","\t * @param  {Number}  x x坐标","\t * @return {Boolean}  是否在水平范围内","\t */","\tisInHorizontal : function(x){","","\t\tif(Util.isObject(x)){","\t\t\tx = x.x;","\t\t}","","\t\tvar  plotRange = this,","\t\t\ttl = plotRange.tl,","\t\t\tbr = plotRange.br;","","\t\treturn x >= tl.x && x <= br.x;","\t},","\t/**","\t * 获取宽度","\t * @return {Number} 宽度","\t */","\tgetWidth : function(){","\t\tvar tl = this.tl,","\t\t\tbr = this.br;","\t\treturn br.x - tl.x;","\t},","\t/**","\t * 获取宽度","\t * @return {Number} 宽度","\t */","\tgetHeight : function(){","\t\tvar tl = this.tl,","\t\t\tbr = this.br;","\t\treturn br.y - tl.y;","\t}","","});","","module.exports = PlotRange;",""];
_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 6);
var Util = require("achart-util");

function min(x, y) {
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 9);
    return x > y ? y : x;
}

function max(x, y) {
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 12);
    return x > y ? x : y;
}

function PlotRange(start, end) {
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 21);
    this.start = start;
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 22);
    this.end = end;
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 23);
    this.init();
}

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 27);
Util.augment(PlotRange, {
    init: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 31);
        var plotRange = this;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 33);
        start = plotRange.start;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 34);
        end = plotRange.end;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 37);
        var tl = plotRange.tl = {};
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 38);
        tl.x = min(start.x, end.x);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 39);
        tl.y = min(start.y, end.y);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 43);
        var tr = plotRange.tr = {};
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 44);
        tr.x = max(start.x, end.x);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 45);
        tr.y = min(start.y, end.y);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 47);
        var bl = plotRange.bl = {};
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 48);
        bl.x = min(start.x, end.x);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 49);
        bl.y = max(start.y, end.y);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 52);
        var br = plotRange.br = {};
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 53);
        br.x = max(start.x, end.x);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 54);
        br.y = max(start.y, end.y);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 56);
        var cc = plotRange.cc = {};
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 57);
        cc.x = (br.x - tl.x) / 2 + tl.x;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 58);
        cc.y = (br.y - tl.y) / 2 + tl.y;
    },
    reset: function(start, end) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 67);
        this.start = start;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 68);
        this.end = end;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 69);
        this.init();
    },
    isInRange: function(x, y) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 78);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 78, Util.isObject(x))) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 79);
            y = x.y;
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 80);
            x = x.x;
        }
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 82);
        var plotRange = this, tl = plotRange.tl, br = plotRange.br;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 86);
        return x >= tl.x && x <= br.x && y >= tl.y && y <= br.y;
    },
    isInVertical: function(y) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 95);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 95, Util.isObject(y))) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 96);
            y = y.y;
        }
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 99);
        var plotRange = this, tl = plotRange.tl, br = plotRange.br;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 103);
        return y >= tl.y && y <= br.y;
    },
    isInHorizontal: function(x) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 112);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 112, Util.isObject(x))) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 113);
            x = x.x;
        }
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 116);
        var plotRange = this, tl = plotRange.tl, br = plotRange.br;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 120);
        return x >= tl.x && x <= br.x;
    },
    getWidth: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 127);
        var tl = this.tl, br = this.br;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 129);
        return br.x - tl.x;
    },
    getHeight: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 136);
        var tl = this.tl, br = this.br;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 138);
        return br.y - tl.y;
    }
});

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotrange.js", 143);
module.exports = PlotRange;