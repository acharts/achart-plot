var expect = require('expect.js'),
  Util = require('achart-util'),
  sinon = require('sinon'),
  simulate = require('event-simulate'),
  Canvas = require('achart-canvas'),
  $ = require('jquery');
var Item = require('../src/plotitem'),
  PlotBack = require('../src/plotback'),
  PlotRange = require('../src/plotrange'); 

var node = Util.createDom('<div id="p1"></div>');
document.body.appendChild(node);

describe('achart-plotItem', function() {
  var canvas = new Canvas({
    id : 'p1',
    width : 500,
    height : 500
  });

  var  A = function(cfg){
      A.superclass.constructor.call(this,cfg);
    };

    A.ATTRS = {
      a : 'a1'
    };

    Util.extend(A,Item);


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

  it('inherit', function() {
    

    var c = canvas.addGroup(C,{
      a : 'c'
    });

    expect(c.get('a')).to.be('c');
    expect(c.get('b').c.d).to.be(2);
    expect(c.get('b').c2.length).to.be(1);
  });

  it('events',function(){
    var callback = sinon.spy(),
      callback1 = sinon.spy(),
      c = canvas.addGroup(C,{
      events : {
        click : function(){
          callback();
        },
        custom : function(){
          callback1();
        }
      }
    });

    simulate.simulate(c.get('node'),'click');

    c.fire('custom');
    expect(callback.called).to.be(true);
    expect(callback1.called).to.be(true);
  });

  it('fireup',function(){
    var callback = sinon.spy(),
      chart = {
      fire : function(ev){
        callback();
      }
    };

    canvas.chart = chart;

    var c = canvas.addGroup(C);
    c.addShape('circle',{
      r : 50,
      cx : 100,
      cy : 100,
      stroke : 'red'
    });

    c.fireUp('click');

    expect(callback.called).to.be(true);
    callback.called = false;
    c.fireUpGroup('click');
    expect(callback.called).to.be(true);

  });

  it('get visible children',function(){
    var c = canvas.addGroup(C);
    c.addGroup(A);
    c.addGroup(A);
    c.addGroup(A);

    expect(c.getVisibleChildren().length).to.be(3);

    var first = c.getFirst();
    c.hideChild(first);
    expect(first.get('visible')).to.be(false);
    expect(c.getVisibleChildren().length).to.be(2);
    c.showChild(first);

    expect(first.get('visible')).to.be(true);
    expect(c.getVisibleChildren().length).to.be(3);
  });

});

describe('achart-plotrange',function(){
  var  range = new PlotRange({
    x : 20,y : 280
  },{x : 280,y : 20});

  it('init test',function(){
    expect(range.start).not.to.be(undefined);
    expect(range.end).not.to.be(undefined);
  });

  it('tl,bl,tr,br',function(){
    expect(range.tl.x).to.be(20);
    expect(range.tl.y).to.be(20);

    expect(range.tr.x).to.be(280);
    expect(range.tr.y).to.be(20);

    expect(range.bl.x).to.be(20);
    expect(range.bl.y).to.be(280);

    expect(range.br.x).to.be(280);
    expect(range.br.y).to.be(280);

    expect(range.cc.x).to.be(150);
    expect(range.cc.y).to.be(150);
  });

  it('in horizontal',function(){
    expect(range.isInHorizontal(10)).not.to.be(true);

    expect(range.isInHorizontal(20)).to.be(true);

    expect(range.isInHorizontal(50)).to.be(true);

        expect(range.isInHorizontal({x : 50})).to.be(true);


    expect(range.isInHorizontal(290)).not.to.be(true);
  });

  it('in vertical',function(){
    expect(range.isInVertical(10)).not.to.be(true);

    expect(range.isInVertical(280)).to.be(true);

    expect(range.isInVertical(50)).to.be(true);
    expect(range.isInVertical({y :50})).to.be(true);


    expect(range.isInVertical(290)).not.to.be(true);
  });

  it('in range',function(){
    expect(range.isInRange(10,10)).not.to.be(true);

    expect(range.isInRange(100,100)).to.be(true);

    expect(range.isInRange(20,20)).to.be(true);

    expect(range.isInRange({
      x : 20,
      y : 20
    })).to.be(true);
  });

  it('width',function(){
    expect(range.getWidth()).to.be(260);
  });

  it('height',function(){
    expect(range.getHeight()).to.be(260);
  });
});


describe('achart-plotback',function(){

  describe('plotback rect',function () {

    $('<div id="pb1"></div>').appendTo('body');

    var canvas = new Canvas({
      id : 'pb1',
      width : 500,
      height : 500
    });

    var back = canvas.addGroup(PlotBack,{
      margin : 30,
      border : {
        stroke : '#ededed'
      },
      background : {
        fill : '#eee',
        border : '#fff'
      }
    });

    var plotRange = back.get('plotRange');

    it('plotrange',function(){
      expect(plotRange).not.to.be(undefined);
    }); 

    it('margin',function(){
      expect(plotRange.tl.x).to.be(30);

      expect(plotRange.tl.y).to.be(30);

      expect(plotRange.br.x).to.be(470);

      expect(plotRange.br.y).to.be(470);
    });

    it('border',function(){
      var rect = back.get('borderShape');

      expect(rect).not.to.be(undefined);

      expect(rect.attr('x')).to.be(0);
      expect(rect.attr('y')).to.be(0);
      expect(rect.attr('width')).to.be(canvas.get('width'));
    });

    it('background',function(){
      var backShape = back.get('backShape');

      expect(backShape.attr('x')).to.be(30);
      expect(backShape.attr('y')).to.be(30);
      expect(backShape.attr('width')).to.be(canvas.get('width') - 30 * 2);
    });

    it('change margin',function(done){
      setTimeout(function(){
        back.set('margin',[20,40]);
        back.repaint();
        expect(plotRange.tl.x).to.be(40);

        expect(plotRange.tl.y).to.be(20);

        expect(plotRange.br.x).to.be(460);

        expect(plotRange.br.y).to.be(480);
        done();
      },500);
      
    });

    it('change canvas width,height',function(done){

      setTimeout(function(){
        canvas.setSize(300,300);
        back.repaint();
        expect(plotRange.tl.x).to.be(40);

        expect(plotRange.tl.y).to.be(20);

        expect(plotRange.br.x).to.be(260);

        expect(plotRange.br.y).to.be(280);
        done();
      },500);
      
    });/**/

  });

  describe('plotback image',function () {

    $('<div id="pb2"></div>').appendTo('body');

    var canvas = new Canvas({
      id : 'pb2',
      width : 500,
      height : 500
    });

    var back = canvas.addGroup(PlotBack,{
      margin : 30,
      border : {
        stroke : '#ededed'
      },
      background : {
        image : "http://builive.com/assets/img/java.png"
      }
    });

    var plotRange = back.get('plotRange');
    it('image',function(){
      var backShape = back.get('backShape');

      expect(backShape.attr('x')).to.be(30);
      expect(backShape.attr('y')).to.be(30);
      expect(backShape.attr('width')).to.be(canvas.get('width') - 30 * 2);
      expect(backShape.attr('src')).not.to.be(undefined);

    });

    it('change',function(done){
       setTimeout(function(){
        canvas.setSize(300,300);
        back.repaint();
        expect(plotRange.tl.x).to.be(30);

        expect(plotRange.tl.y).to.be(30);

        expect(plotRange.br.x).to.be(270);

        expect(plotRange.br.y).to.be(270);
        done();
      },500);
    });
  });

});