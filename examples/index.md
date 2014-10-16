# Demo

---

## plot back

````html

<div id="c1"></div>

````

````javascript
seajs.use(['achart-canvas','index'], function(Canvas,Plot) {

  var canvas = new Canvas({
    id : 'c1',
    width : 500,
    height : 500
  });

  var back = canvas.addGroup(Plot.Back,{
    marin : 50,
    border : {
      stroke : '#ddd'
    },
    background : {
      stroke : 'red',
      fill : '#ddd'
    }
  });

});
````

## plot image

````html

<div id="c2"></div>

````

````javascript
seajs.use(['achart-canvas','index'], function(Canvas,Plot) {

  var canvas = new Canvas({
    id : 'c2',
    width : 500,
    height : 500
  });

  var back = canvas.addGroup(Plot.Back,{
    marin : 50,
    border : {
      stroke : '#ddd'
    },
    background : {
      image : "http://gtms03.alicdn.com/tps/i3/TB1bAqAGXXXXXXbXpXXvKyzTVXX-520-280.jpg"
    }
  });

});
````


## 获取分组默认值


````html

<div id="c3"></div>


````
<h2>默认属性</h2>
<div id="log"></div>

````javascript
seajs.use(['achart-canvas','index','achart-util','jquery'], function(Canvas,Plot,Util,$) {

  var canvas = new Canvas({
    id : 'c3',
    width : 50,
    height : 50
  });
  
  //声明类A
  var  A = function(cfg){
    A.superclass.constructor.call(this,cfg);
  };

  A.ATTRS = {
    a : 'a1'
  };

  //继承自Plot.Item
  Util.extend(A,Plot.Item);
  
  //类B继承类A
  var B = function(cfg){
     B.superclass.constructor.call(this,cfg);
  };

  B.ATTRS = {
    a : 'a2',
    b : {
      c : {
        d : 1
      },
      c2 : [1,2]
    }
  };

  Util.extend(B,A);
  
  //mixin的代码片段
  var AMix = function(){

  };

  AMix.ATTRS = {
    am : 'am'
  }

  var C = function(cfg){
     C.superclass.constructor.call(this,cfg);
  };

  C.ATTRS = {
    a : 'a2',
    b : {
      c : {
        d : 2,
        d1 : 3
      },
      c2 : [2],
      c3 : 'c3'
    }
  };

  Util.extend(C,B);

  Util.mixin(C,[AMix]);

  var c = canvas.addGroup(C,{
    a : 'c'
  });

  $('#log').html(JSON.stringify({
    a : c.get('a'),
    b : c.get('b'),
    am : c.get('am')
  }));

});

````
