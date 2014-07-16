(function(){
if (window.mapleque===undefined)window.mapleque={};
if (window.mapleque.rotate!==undefined)return;
mapleque.rotate=function(conf){
console.log('init rotate',conf);
var
  $contbox=conf.contbox,
  $contlist=$contbox?$contbox.children():[],
  $dotlist=conf.dotbox?conf.dotbox.children():[],
  dotcur=conf.dotcur,
  index=conf.index,
  rotate=conf.rotate,
  step=$contlist.length>0?$($contlist[0]).width():1;
  step=step||1;
  
  $contlist.each(function(){
    $(this).css({
      'position':'absolute'
    });
  });
  var moveto=function(toindex){
    var oldindex=index;
    index=toindex<0?0:toindex;
    index=index>($contlist.length-1)?($contlist.length-1):index;
    console.log('move to',oldindex,index);
    $contlist.each(function(i,e){
      var torotate=(index-i)*rotate;
      $(e).css({
        '-webkit-transform':'rotate('+torotate+'deg)',
        '-moz-transform':'rotate('+torotate+'deg)',
        'transform':'rotate('+torotate+'deg)',
      });
    });
    if ($dotlist&&$dotlist.length>index){
      $($dotlist[index]).addClass(dotcur);
      $($dotlist[index]).siblings().removeClass(dotcur);
    }
    document.location.hash=index;
  };
  moveto(index);
  var currotate=0,nextindex;
  var move=function(moving){
    var deltarotate=-2*180*Math.asin(moving/step)/Math.PI;
    console.log(deltarotate);
    $contlist.each(function(i,e){
      var torotate=(index-i)*rotate+deltarotate;
      $(e).css({
        '-webkit-transform':'rotate('+torotate+'deg)',
        '-moz-transform':'rotate('+torotate+'deg)',
        'transform':'rotate('+torotate+'deg)',
      });
    });
    currotate=deltarotate;
  };
  var moveend=function(){
    console.log('set transition rotate');
    $contlist.css({
      '-webkit-transition':'all 0.5s ease 0',
      '-moz-transition':'all 0.5s ease 0',
      'transition':'all 0.5s ease 0'
    });
    console.log('move end',currotate,rotate/3);
    if (Math.abs(currotate)>rotate/3){
      var nextindex=currotate>0?index+1:index-1;
      moveto(nextindex);
    }else{
      moveto(index);
    }
  };

  var sliding=false,
  startX,startLeft;
  /*
  $(document.body).mousedown(function(e){
    console.log('set transition none');
    $contlist.each(function(){
      $(this).css({
        '-webkit-transition':'all 0s ease',
        '-moz-transition':'all 0s ease',
        'transition':'all 0s ease'
      });
    });
    sliding=true;
    startX=e.pageX;
  });
  $(document.body).mouseup(function(e){
    if (!sliding)return;
    sliding=false;
    moveend();
  });
  $(document.body).mouseleave(function(e){
    if (!sliding)return;
    sliding=false;
    moveend();
    console.log(e);
  });
  $(document.body).mousemove(function(e){
    if (!sliding)return;
    var cur=e.pageX;
    var moving=cur-startX;
    move(moving);
  });
  */
  $(document.body).bind('touchstart',function(e){
    console.log(e);
    $contlist.css({
      '-webkit-transition':'all 0s ease',
      '-moz-transition':'all 0s ease',
      'transition':'all 0s ease'
    });
    sliding=true;
    startX=e.targetTouches[0].pageX;
  });
  $(document.body).bind('touchend',function(e){
    if (!sliding)return;
    sliding=false;
    moveend();
  });
  $(document.body).bind('touchmove',function(e){
    if (!sliding)return;
    var cur=e.targetTouches[0].pageX;
    var moving=cur-startX;
    move(moving);
  });
};
})();
