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
_$jscoverage_init(_$jscoverage, "/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js",[7,17,18,21,48,50,53,54,58,59,60,63,64,65,69,75,76,78,79,84,85,87,96,105,106,107,108,109,115,117,118,119,121,122,124,126,134,147,148,150,151,152,153,154,157,158,159,160,161,163,171]);
_$jscoverage_init(_$jscoverage_cond, "/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js",[75,78,105,115,117,147,150,159]);
_$jscoverage["/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js"].source = ["/**"," * @fileOverview 坐标系内部区域,用于显示背景"," * @ignore"," */","","","var Util = require('achart-util'),","\tPlotItem = require('./plotitem'),","\tPlotRange = require('./plotrange');","","/**"," * @class Chart.PlotBack"," * @protected"," * 决定图表的边框、背景"," * @extends Chart.PlotItem"," */","var PlotBack = function(cfg){","\tPlotBack.superclass.constructor.call(this,cfg);","};","","PlotBack.ATTRS = {","","\telCls : 'x-chart-back',","\t","\tzIndex : 0,","\t/**","\t * 边距，来决定绘图范围,如果是一个值那么4个边框都是统一的数字，如果是一个数组，则4个边框分别对应值","\t * @type {Array|Number}","\t */","\tmargin : 20,","\t/**","\t * 绘图的范围","\t * @type {Object}","\t */","\tplotRange : null,","\t/**","\t * 背景","\t * @type {Object}","\t */","\tbackground : null,","\t/**","\t * 最外层边框的配置项","\t * @type {Object}","\t */","\tborder : null","};","","Util.extend(PlotBack,PlotItem);","","Util.augment(PlotBack,{","","\tbeforeRenderUI : function(){","\t\tPlotBack.superclass.beforeRenderUI.call(this);","\t\tthis._calculateRange();","\t},","","\trenderUI : function(){","\t\tPlotBack.superclass.renderUI.call(this);","\t\tthis._renderBorder();","\t\tthis._renderBackground();","\t},","\trepaint : function(){","\t\tthis._calculateRange();","\t\tthis._renderBorder();","\t\tthis._renderBackground();","\t},","\t//渲染边框","\t_renderBorder : function(){","\t\tvar _self = this,","\t\t\tborder = _self.get('border'),","\t\t\tcanvas = _self.get('canvas'),","\t\t\trect = _self.get('borderShape'),","\t\t\tcfg;","","\t\tif(border){","\t\t\tvar width = canvas.get('width'),","\t\t\t\t\theight = canvas.get('height');","\t\t\tif(!rect){","\t\t\t\tcfg = Util.mix({","\t\t\t\t\twidth : width,","\t\t\t\t\theight :height","\t\t\t\t},border);","","\t\t\t  rect = this.addShape('rect',cfg);","\t\t\t\tthis.set('borderShape',rect);","\t\t\t}else{","\t\t\t\trect.attr({","\t\t\t\t\twidth : width,","\t\t\t\t\theight : height","\t\t\t\t});","\t\t\t}","\t\t}","\t},","\t//渲染背景","\t_renderBackground : function(){","\t\tvar _self = this,","\t\t\tbackground = _self.get('background'),","\t\t\tplotRange = _self.get('plotRange'),","\t\t\tbackShape = _self.get('backShape'),","\t\t\twidth,","\t\t\theight,","\t\t\ttl,","\t\t\tcfg;","","\t\tif(background){","\t\t\twidth = plotRange.getWidth();","\t\t\theight = plotRange.getHeight();","\t\t\ttl = plotRange.tl;","\t\t\tcfg = {","\t\t\t\tx : tl.x,","\t\t\t\ty : tl.y,","\t\t\t\twidth : width,","\t\t\t\theight :height","\t\t\t};","\t\t\tif(!backShape){","\t\t\t\t//图片","\t\t\t\tif(background.image){","\t\t\t\t\tcfg.src = background.image;","\t\t\t\t  backShape =\t_self.addShape('image',cfg);","\t\t\t\t}else{//矩形","\t\t\t\t\tUtil.mix(cfg,background);","\t\t\t\t\tbackShape = _self.addShape('rect',cfg);","\t\t\t\t}","\t\t\t\t_self.set('backShape',backShape);","\t\t\t}else{","\t\t\t\tbackShape.attr(cfg);","\t\t\t}","\t\t\t","\t\t}","\t},","\t//计算，设置绘图区域","\t_calculateRange : function(){","","\t\tvar _self = this,","\t\t\tmargin = _self.get('margin'),","\t\t\tcanvas = _self.get('canvas'),","\t\t\twidth = canvas.get('width'),","\t\t\theight = canvas.get('height'),","\t\t\tplotRange = _self.get('plotRange'),","\t\t\ttop = 0, //上方的边距","\t\t\tleft = 0, //左边 边距","\t\t\tright = 0,","\t\t\tbottom = 0,","\t\t\tstart, //坐标系开始的节点，从左下，到右上","\t\t\tend; //结束的节点","","\t\tif(Util.isNumber(margin)){","\t\t\ttop = left = right = bottom = margin;","\t\t}","\t\tif(Util.isArray(margin)){","\t\t\ttop = margin[0];","\t\t\tright = margin[1] != null ? margin[1] : margin[0];","\t\t\tbottom = margin[2] != null ? margin[2] : margin[0];","\t\t\tleft = margin[3] != null ? margin[3] : right;","\t\t}","","\t\tstart = canvas.getRelativePoint(left,height - bottom);","\t\tend = canvas.getRelativePoint(width - right,top);","\t\tif(!plotRange){","\t\t\tplotRange = new PlotRange(start,end);","\t\t\t_self.set('plotRange',plotRange);","\t\t}else{","\t\t\tplotRange.reset(start,end);","\t\t}","\t\t","","\t}","});","","","module.exports = PlotBack;",""];
_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 7);
var Util = require("achart-util"), PlotItem = require("./plotitem"), PlotRange = require("./plotrange");

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 17);
var PlotBack = function(cfg) {
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 18);
    PlotBack.superclass.constructor.call(this, cfg);
};

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 21);
PlotBack.ATTRS = {
    elCls: "x-chart-back",
    zIndex: 0,
    margin: 20,
    plotRange: null,
    background: null,
    border: null
};

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 48);
Util.extend(PlotBack, PlotItem);

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 50);
Util.augment(PlotBack, {
    beforeRenderUI: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 53);
        PlotBack.superclass.beforeRenderUI.call(this);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 54);
        this._calculateRange();
    },
    renderUI: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 58);
        PlotBack.superclass.renderUI.call(this);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 59);
        this._renderBorder();
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 60);
        this._renderBackground();
    },
    repaint: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 63);
        this._calculateRange();
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 64);
        this._renderBorder();
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 65);
        this._renderBackground();
    },
    _renderBorder: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 69);
        var _self = this, border = _self.get("border"), canvas = _self.get("canvas"), rect = _self.get("borderShape"), cfg;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 75);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 75, border)) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 76);
            var width = canvas.get("width"), height = canvas.get("height");
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 78);
            if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 78, !rect)) {
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 79);
                cfg = Util.mix({
                    width: width,
                    height: height
                }, border);
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 84);
                rect = this.addShape("rect", cfg);
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 85);
                this.set("borderShape", rect);
            } else {
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 87);
                rect.attr({
                    width: width,
                    height: height
                });
            }
        }
    },
    _renderBackground: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 96);
        var _self = this, background = _self.get("background"), plotRange = _self.get("plotRange"), backShape = _self.get("backShape"), width, height, tl, cfg;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 105);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 105, background)) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 106);
            width = plotRange.getWidth();
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 107);
            height = plotRange.getHeight();
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 108);
            tl = plotRange.tl;
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 109);
            cfg = {
                x: tl.x,
                y: tl.y,
                width: width,
                height: height
            };
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 115);
            if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 115, !backShape)) {
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 117);
                if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 117, background.image)) {
                    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 118);
                    cfg.src = background.image;
                    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 119);
                    backShape = _self.addShape("image", cfg);
                } else {
                    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 121);
                    Util.mix(cfg, background);
                    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 122);
                    backShape = _self.addShape("rect", cfg);
                }
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 124);
                _self.set("backShape", backShape);
            } else {
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 126);
                backShape.attr(cfg);
            }
        }
    },
    _calculateRange: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 134);
        var _self = this, margin = _self.get("margin"), canvas = _self.get("canvas"), width = canvas.get("width"), height = canvas.get("height"), plotRange = _self.get("plotRange"), top = 0, left = 0, right = 0, bottom = 0, start, end;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 147);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 147, Util.isNumber(margin))) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 148);
            top = left = right = bottom = margin;
        }
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 150);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 150, Util.isArray(margin))) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 151);
            top = margin[0];
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 152);
            right = margin[1] != null ? margin[1] : margin[0];
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 153);
            bottom = margin[2] != null ? margin[2] : margin[0];
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 154);
            left = margin[3] != null ? margin[3] : right;
        }
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 157);
        start = canvas.getRelativePoint(left, height - bottom);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 158);
        end = canvas.getRelativePoint(width - right, top);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 159);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 159, !plotRange)) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 160);
            plotRange = new PlotRange(start, end);
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 161);
            _self.set("plotRange", plotRange);
        } else {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 163);
            plotRange.reset(start, end);
        }
    }
});

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotback.js", 171);
module.exports = PlotBack;