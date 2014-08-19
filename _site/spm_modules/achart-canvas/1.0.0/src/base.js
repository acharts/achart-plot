  
var 
 
  Util = require('achart-util');

/**
 * @class Chart.Canvas.Base
 * 图形控件或者分组的基类
 */
var Base = function(cfg){
  this.cfg = cfg;
  this._attrs = {
    autoRender : true,
    visible : true
  };
  this.events = {};
  var defaultCfg = this.getDefaultCfg();
  Util.mix(this._attrs,defaultCfg,cfg);
  if(this.get('autoRender')){
    this.render();
  }
      
};

Base.ATTRS = {
      /**
       * 所在父元素中的优先级，仅在父元素排序时有效
       * @type {Number}
       */
  zIndex : null,
  /**
   * @protected
   * 底层使用了raphael 所以此属性对应raphael的对对象
   */
  el : null,
  /**
   * svg或者vml对象
   * @type {HTMLElement}
   */
  node : null,
  /**
   * 画布
   * @type {Chart.Canvas}
   */
  canvas : null,
  /**
   * 是否显示
   * @type {Boolean}
   */
  visible : true  
};

Util.augment(Base,{

  /**
   * 获取默认的配置信息
   * @return {Object} 默认的属性
   */
  getDefaultCfg : function(){
    return {};
  },
  /**
   * 设置属性信息
   * @protected
   */
  set : function(name,value){
    this._attrs[name] = value;
  },
  /**
   * 获取属性信息
   * @protected
   */
  get : function(name){
    return this._attrs[name];
  },
  /**
   * 获取初始配置的信息
   * @param  {String} name 配置项名称
   * @return {*}  初始值
   */
  getCfgAttr : function(name){
      return this.cfg[name];

  },
  /**
   * 显示
   */
  show : function(){
      this.get('el').show();
      this.set('visible',true);
  },
  /**
   * 隐藏
   */
  hide : function(){
      this.get('el').hide();
      this.set('visible',false);
  },  
  /**
   * 设置或者设置属性，有一下3中情形：
   *
   *   - name为字符串，value 为空，获取属性值
   *   - name为字符串，value不为空，设置属性值，返回this
   *   - name为键值对，value 为空，设置属性值
   *   
   * @param  {String|Object} name  属性名
   * @param  {*} value 属性值
   * @return {*} 属性值
   */
  attr : function(name,value){
    var _self = this,
      el = _self.get('el');
    if(Util.isObject(name)){
      Util.each(name,function(v,k){
        _self.attr(k,v);
      });
      return _self;
    }
    if(value !== undefined){
      return _self._setAttr(name,value);
    }
    return _self._getAttr(name);
  },
  /**
   * 附加事件
   * @param  {String}   eventType 事件类型
   * @param  {Function} fn  事件处理函数
   */
  on : function(eventType,fn){
    var _self = this,
      node = _self.get('node'),
      events = this.events,
      callbacks = events[eventType];

    Util.addEvent(node,eventType,fn);
    if(!callbacks){
      callbacks = events[eventType] = [];
    }
    callbacks.push(fn);
    return this;
  },
  /**
   * 移除事件
   * @param  {String}   eventType 事件类型
   * @param  {Function} fn  事件处理函数
   */
  off : function(eventType,fn){
    var _self = this,
      node = _self.get('node'),
      events = this.events,
      callbacks = events[eventType];
    if(!eventType){
      Util.each(events,function(callbacks,type){
          Util.each(callbacks,function(m){
            Util.removeEvent(node,type,m);
          });
      });
      this.events = {};
      return this;
    }
    Util.removeEvent(node,eventType,fn);
    
    if(callbacks){
      Util.remove(callbacks,fn);
    }
    return this;
  },
  /**
   * 触发事件
   * @param  {String} eventType 事件类型
   */
  fire : function(eventType,eventObj){
    var _self = this,
      events = _self.events,
      callbacks = events[eventType];
    if(callbacks){
      Util.each(callbacks,function(m){
        m(eventObj);
      });
    }
  },
  //获取属性值
  _getAttr : function(name){
    var _self = this,
      el = _self.get('el'),
      value = el.attr ? el.attr(name) : '',
      m = '__get' + Util.ucfirst(name);
    if(_self[m]){
      value = _self[m](value);
    }
    return value;
  },
  //设置属性值
  _setAttr : function(name,value){
    var _self = this,
      el = _self.get('el'),
      m = '__set' + Util.ucfirst(name);
    if(_self[m]){
      _self[m](value);
    }else{
      el.attr && el.attr(name,value);
    }
    return _self;
  },
  /**
   * @protected
   * 渲染控件
   */
  beforeRenderUI : function(){

  },
  /**
   * 渲染控件/图形
   */
  render : function(){
    var _self = this,
      cls = _self.get('elCls'),
      zIndex = _self.get('zIndex'),
      node;

    if(!_self.get('rendered')){
          _self.beforeRenderUI();

      _self.renderUI();
      _self.set('rendered',true);
          node = _self.get('node');
          if(this.get('visible') == false){
              this.hide();
          }
          if(cls){
              var oldCls = node.getAttribute('class');
                  
              if(oldCls){
                 node.setAttribute('class',oldCls + ' ' + cls); 
              }else{
                 node.setAttribute('class',cls); 
              }
              
          }
          if(zIndex != null){
              node.setAttribute('zIndex',zIndex);
              if(Util.vml){
                  node.style.zIndex = zIndex;
              }
          }
          _self.bindUI();
    }
  },

  /**
   * @protected
   * 渲染控件
   */
  renderUI : function(){

  },
  /**
   * @protected
   * 绑定事件
   */
  bindUI : function(){

  },
  /**
   * 移除，从父元素中移除
   * @param  {Boolean} [destroy=true] 
   */
  remove : function(destroy){
    if(destroy == undefined){
      destroy = true;
    }
    var _self = this;
    if(_self.get('parent')){
      _self.get('parent').removeChild(_self,destroy);
          _self.set('parent',null);
    }
    if(destroy){
      _self.destroy();
    }
  },
  /**
   * 析构函数
   */
  destroy : function(){
    var _self = this,
      el = _self.get('el'),
          destroyed = _self.get('destroyed'),
          node = _self.get('node');

    if(destroyed){
        return;
    }
    el.remove && el.remove();
    _self._attrs = {};
    _self.events = {};
    _self.set('destroyed',true);
  }

});
  
module.exports = Base;
