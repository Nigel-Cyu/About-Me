require('../css/style.css');
//require('../css/style.scss');
$( document ).ready(function() {
  
  var $hi = $('.about-myself .content h2');
  var $developmentWrapper = $('.development-wrapper');  //能力值那块
  var developmentIsVisible = false;

  $('.theme .content .header').delay(500).animate({   //实现主题部分动态效果
    'opacity':'1',
    'top': '50%'     //使“About me” 微微上升并逐渐浮现的效果
  },1000);


  $(window).scroll( function(){   //实现鼠标下滑时的动画效果

    var bottom_of_window = $(window).scrollTop() + $(window).height();  //可视区底部对于初始窗口顶部的距离

    //关于自我介绍部分
    if( bottom_of_window > ($hi.offset().top + $hi.outerHeight())){  //改变"hi"的样式，动态显示"hi"
      $hi.addClass('aboutTitleVisible');
    } 

    // 关于经历部分
    $('.experience .content .hidden').each( function(i){

        var bottom_of_div = $(this).offset().top + $(this).outerHeight();  //offset是相对于文档顶部的定位

        if( bottom_of_window > bottom_of_div ){

          $(this).animate({   //淡入效果
            'opacity':'1',
            'margin-left': '0'
          },600);
        }
    });

    //能力值动态效果
    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var progress = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          }else {
            width++;
            progress.css("width", width + "%");
            percent.html(width + " %");
          }
        }
      });
      developmentIsVisible = true;
    }
  }); 
});