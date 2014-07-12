(function(){
if (window.mapleque===undefined)window.mapleque={};
if (window.mapleque.slide!==undefined)return;
mapleque.slide=function(conf){
  console.log('init slide',conf);
  var 
  $contbox=conf.contbox,
  $contlist=$contbox?$contbox.children():[],
  $dotlist=conf.dotbox?conf.dotbox.children():[],
  dotcur=conf.dotcur,
  index=conf.index,
  $leftarr=conf.leftarr||$(),
  $rightarr=conf.rightarr||$(),
  step=$contlist.length>0?$($contlist[0]).width():1;

  step=step||1;
  var moveto=function(toindex){
    var toleft=-toindex*step+'px';
    index=toindex;
    console.log('will move to',toleft,toindex,step);
    $contbox.stop();
    $contbox.animate({left:toleft},500);

    if ($dotlist&&$dotlist.length>toindex){
      $($dotlist[toindex]).addClass(dotcur);
      $($dotlist[toindex]).siblings().removeClass(dotcur);
    }
  };
  moveto(index);
  var move=function(start,moving){
    var left=start+moving;
    console.log('move from ',start,left);
    $contbox.css('left',left+'px');
  };
  var moveend=function(){
    var curleft=-parseInt($contbox.css('left'));
    console.log('moveend',curleft,step);
    if (curleft%step>0){
      var toindex=curleft%step*2>step?Math.floor(curleft/step)+1:Math.floor(curleft/step);
      moveto(toindex);
    }
  }
  var sliding=false,
  startX,startLeft;
  $($contbox).mousedown(function(e){
    sliding=true;
    startX=e.pageX;
    startLeft=parseInt($contbox.css('left'));
  });
  $leftarr.click(function(){
    moveto(index-1);
  });
  $rightarr.click(function(){
    moveto(index+1);
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
    console.log(moving);
    move(startLeft,moving)

  });
  
};

})();
