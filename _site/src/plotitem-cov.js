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
_$jscoverage_init(_$jscoverage, "/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js",[7,11,12,15,16,17,19,21,22,32,33,36,57,59,62,66,71,73,74,75,84,86,87,95,102,110,113,114,115,116,127,130,131,132,133,135,139]);
_$jscoverage_init(_$jscoverage_cond, "/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js",[11,11,16,16,73,114,132]);
_$jscoverage["/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js"].source = ["/**"," * @fileOverview 所有图表内部元素的基类，继承自group"," * @ignore"," */","","","var Util = require('achart-util'),","\tCanvas = require('achart-canvas');","","function initClassAttrs(c){","  if(c._attrs || c == Canvas.Group){","    return;","  }","","  var superCon = c.superclass.constructor;","  if(superCon && !superCon._attrs){","    initClassAttrs(superCon);","  }","  c._attrs =  {};","  ","  Util.mix(true,c._attrs,superCon._attrs);","  Util.mix(true,c._attrs,c.ATTRS);","}","","/**"," * @class Chart.PlotItem"," * 图表内部元素的基类"," * @extends Chart.Canvas.Group"," * "," */","function Item(cfg){","\tinitClassAttrs(this.constructor);","\tItem.superclass.constructor.call(this,cfg);","};","","Item.ATTRS = {","  /**","   * 活动子项的名称，用于组成 itemactived,itemunactived的事件","   * @protected","   * @type {String}","   */","  itemName : 'item',","  /**","   * 所属分组的名称,用于事件中标示父元素","   * @protected","   * @type {String}","   */","  groupName : 'group',","","  /**","   * 事件回调，支持dom的所有事件和自定义事件","   * @type {Object}","   */","  events : null","};","","Util.extend(Item, Canvas.Group);","","Util.augment(Item,{","\t//获取默认的属性","\tgetDefaultCfg : function(){","\t\tvar _self = this,","\t\t\tcon = _self.constructor,","\t\t\tattrs = con._attrs,","\t\t\trst = Util.mix(true,{},attrs);","\t\treturn rst;","\t},","","  //绑定事件","  bindUI : function(){","    var _self = this,","      events = _self.get('events');","    if(events){","      Util.each(events,function(v,k){","        _self.on(k,v);","      });","    }","  },","  /**","   * 获取显示的子项","   * @return {Array} 显示的子项","   */","  getVisibleChildren : function(){","    var _self = this,","      children = _self.get('children');","    return Util.filter(children,function(item){","      return item.get('visible');","    });","  },","  /**","   * 显示子项","   * @param  {Chart.Canvas.Base} child 子项","   */","  showChild : function(child){","    child && child.show();","  },","  /**","   * 隐藏子项","   * @param  {Chart.Canvas.Base} child 子项","   */","  hideChild : function(child){","    child && child.hide();","  },","  /**","   * 在顶层图表控件上触发事件","   * @param {String} name 事件名称","   * @param  {Object} ev 事件对象","   */","  fireUp : function(name,ev){","    var _self = this,","      canvas = _self.get('canvas'),","      chart = canvas.chart;","    ev = ev || {};","    if(chart){","      ev.target = ev.target || chart;","      chart.fire(name,ev);","    }","  },","  /**","   * @protected","   * 在分组上触发事件","   * @param  {String} name 事件名称","   * @param  {Object} item 触发事件的子项","   * @param  {Object} obj  事件对象","   */","  fireUpGroup : function(name,item,obj){","    var _self = this,","      itemName = _self.get('itemName'),","      groupName = _self.get('groupName');","    obj = obj || {};","    obj[itemName] =  item;","    if(groupName){","      obj[groupName] = _self.get('parent')","    }","    _self.fireUp(itemName.toLowerCase() + name,obj);","  }","});","","module.exports = Item;",""];
_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 7);
var Util = require("achart-util"), Canvas = require("achart-canvas");

function initClassAttrs(c) {
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 11);
    if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 11, c._attrs) || _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 11, c == Canvas.Group)) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 12);
        return;
    }
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 15);
    var superCon = c.superclass.constructor;
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 16);
    if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 16, superCon) && _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 16, !superCon._attrs)) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 17);
        initClassAttrs(superCon);
    }
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 19);
    c._attrs = {};
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 21);
    Util.mix(true, c._attrs, superCon._attrs);
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 22);
    Util.mix(true, c._attrs, c.ATTRS);
}

function Item(cfg) {
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 32);
    initClassAttrs(this.constructor);
    _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 33);
    Item.superclass.constructor.call(this, cfg);
}

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 36);
Item.ATTRS = {
    itemName: "item",
    groupName: "group",
    events: null
};

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 57);
Util.extend(Item, Canvas.Group);

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 59);
Util.augment(Item, {
    getDefaultCfg: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 62);
        var _self = this, con = _self.constructor, attrs = con._attrs, rst = Util.mix(true, {}, attrs);
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 66);
        return rst;
    },
    bindUI: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 71);
        var _self = this, events = _self.get("events");
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 73);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 73, events)) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 74);
            Util.each(events, function(v, k) {
                _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 75);
                _self.on(k, v);
            });
        }
    },
    getVisibleChildren: function() {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 84);
        var _self = this, children = _self.get("children");
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 86);
        return Util.filter(children, function(item) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 87);
            return item.get("visible");
        });
    },
    showChild: function(child) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 95);
        child && child.show();
    },
    hideChild: function(child) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 102);
        child && child.hide();
    },
    fireUp: function(name, ev) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 110);
        var _self = this, canvas = _self.get("canvas"), chart = canvas.chart;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 113);
        ev = ev || {};
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 114);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 114, chart)) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 115);
            ev.target = ev.target || chart;
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 116);
            chart.fire(name, ev);
        }
    },
    fireUpGroup: function(name, item, obj) {
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 127);
        var _self = this, itemName = _self.get("itemName"), groupName = _self.get("groupName");
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 130);
        obj = obj || {};
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 131);
        obj[itemName] = item;
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 132);
        if (_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 132, groupName)) {
            _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 133);
            obj[groupName] = _self.get("parent");
        }
        _$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 135);
        _self.fireUp(itemName.toLowerCase() + name, obj);
    }
});

_$jscoverage_done("/Users/dxq613/Desktop/work/acharts/achart-plot/src/plotitem.js", 139);
module.exports = Item;