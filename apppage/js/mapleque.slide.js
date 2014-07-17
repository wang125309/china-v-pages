(function(){
if (window.mapleque===undefined)window.mapleque={};
if (window.mapleque.slide!==undefined)return;
mapleque.slide=function(conf){
  var 
  $contbox=conf.contbox,
  $contlist=$contbox?$contbox.children():[],
  $dotlist=conf.dotbox?conf.dotbox.children():[],
  dotcur=conf.dotcur,
  index=conf.index,
  $leftarr=conf.leftarr||$(),
  $rightarr=conf.rightarr||$(),
  maxnum=4;
  var step=$contbox.parent().width()/maxnum;
  var totalwidth=step*$contlist.length;
  $contlist.each(function(){
    $(this).css('width',step+'px');
  });
  $contbox.css({'width':totalwidth+'px'});

  var moveto=function(toindex){
    index=toindex<0?0:toindex;
    index=index>($contlist.length-4)?($contlist.length-4):index;
    var toleft=-index*step+'px';
    $contbox.css({left:toleft});

    if ($dotlist&&$dotlist.length>index){
      $($dotlist[index]).addClass(dotcur);
      $($dotlist[index]).siblings().removeClass(dotcur);
    }
    document.location.hash=index;
  };
  moveto(index);
  var move=function(start,moving){
    var left=start+moving;
    $contbox.css('left',left+'px');
  };
  var moveend=function(){
    $contbox.css({
      '-webkit-transition':'all 0.5s ease 0',
      '-moz-transition':'all 0.5s ease 0',
      'transition':'all 0.5s ease 0'
    });
    var curleft=-parseInt($contbox.css('left'));
    if (curleft%step>0){
      var toindex=curleft%step*2>step?Math.floor(curleft/step)+1:Math.floor(curleft/step);
      moveto(toindex);
    }else if (curleft<0){
      moveto(0);
    }
  }
  var sliding=false,
  startX,startLeft;
  $leftarr.click(function(){
    moveto(index-1);
  });
  $rightarr.click(function(){
    moveto(index+1);
  });
  /*
  $($contbox).mousedown(function(e){
    $contbox.css({
      '-webkit-transition':'none',
      '-moz-transition':'none',
      'transition':'none'
    });
    sliding=true;
    startX=e.pageX;
    startLeft=parseInt($contbox.css('left'));
  });
  $(document.body).mouseup(function(e){
    if (!sliding)return;
    sliding=false;
    moveend();
  });
  $(document.body).mousemove(function(e){
    if (!sliding)return;
    var cur=e.pageX;
    var moving=cur-startX;
    move(startLeft,moving);
  });
  */
  $($contbox).bind('touchstart',function(e){
    $contbox.css({
      '-webkit-transition':'none',
      '-moz-transition':'none',
      'transition':'none'
    });
    sliding=true;
    startX=e.targetTouches[0].pageX;
    startLeft=parseInt($contbox.css('left'));
  })
  $(document.body).bind('touchend',function(e){
    if (!sliding)return;
    sliding=false;
    moveend();
  })
  $(document.body).bind('touchmove',function(e){
    if (!sliding)return;
    var cur=e.targetTouches[0].pageX;
    var moving=cur-startX;
    move(startLeft,moving);
  })
};

})();
