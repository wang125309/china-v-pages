(function(){
$(function(){
    var index=document.location.hash||'';
    index=index.length>0?index.substr(1):0;
    index+=1;
    mapleque.rotate({
      contbox:$('.section-list'),
      dotbox:$('.dot-bar'),
      dotcur:'cur',
      index:index,
      rotate:25
    });
  });
})();
