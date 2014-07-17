(function(){
var
//展开
initFolder=function(){
  $('article .cont').css({
    '-webkit-transition':'all 0.5s ease',
    '-moz-transition':'all 0.5s ease',
    'transition':'all 0.5s ease'
  });
  var baseHeight='1.625em';
  $('.folder a').toggle(function(){
    $(this).html('收起');
    var $box=$(this).parent().parent().siblings('.cont');
    baseHeight=$box.height()+'px';
    var $contlist=$box.children();
    var totalHeight=0;
    $contlist.each(function(){
      totalHeight+=$(this).height();
      console.log(totalHeight,$(this).height());
    });
    $box.css('max-height',totalHeight+'px');
  },function(){
    $(this).html('展开');
    var $box=$(this).parent().parent().siblings('.cont');
    $box.css('max-height',baseHeight)
  });
},
//轮播
initScroll=function(){
  var speed=3000,//自动切换时间
  curClass='cur';
  $('.scroll-banner').css({
    width:'100%',
    overflow:'hidden'
  });
  var $box=$('.scroll-banner .box'),
  $btnlist=$('.btn .dot');
  if ($box.length<1)return;
  var $bannerlist=$box.children(),
  min=0,
  max=$bannerlist.length-1;
  if (max<1)return;
  var step=$box.width(),
  totalWidth=step*(max+1);
  $bannerlist.css('width',step+'px');
  $box.css({
    width:totalWidth+'px',
    left:0,
    '-webkit-transition':'all 0.5s ease',
    '-moz-transition':'all 0.5s ease',
    'transition':'all 0.5s ease'
  });
  var curindex=0;
  var moveto=function(index){
    var toindex=index;
    toindex=toindex>min?toindex:min;
    toindex=toindex<max?toindex:max;
    $box.css({
      left:-toindex*step+'px'
    });
    $btnlist.each(function(i,e){
      if(i==toindex)
        $(e).addClass(curClass);
      else
        $(e).removeClass(curClass);
    });
    $($bannerlist[toindex]).show();
    $('.scroll-banner .name').hide();
    $($('.scroll-banner .name')[toindex]).show();
    curindex=toindex;
  };
  moveto(curindex);
  var timer=setInterval(function(){
    var toindex=(curindex+1)%(max+1);
    moveto(toindex);
  },speed);
},
init=function(){
  initFolder();
  initScroll();
};
$(init);
})();
