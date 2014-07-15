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
    });
    $box.css('max-height',totalHeight+'px');
  },function(){
    $(this).html('展开');
    var $box=$(this).parent().parent().siblings('.cont');
    $box.css('max-height',baseHeight)
  });
},
//轮播
initScroll=function(){},
init=function(){
  initFolder();
  initScroll();
};
$(init);
})();
