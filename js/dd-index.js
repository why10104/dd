$(function(){
//   头部
    setTimeout(function(){
        setTimeout(function(){
            $(".header .head").css("display","none");
        },2000);
        $(".header .head").css("height","200px");
    },3000);

    //地地址栏显示隐藏  //北京
      $(".address").hover( function () {
          $(".address > ul").css("display", "block").hover(function(){
              $(this.children).hover(function () {
                  $(this).css("color", "red");
              }, function () {
                  $(this).css("color", "#646464");
              });
          });
      },
      function () {
          $(".address > ul").css("display", "none");
      });


      //搜索框
    $(".soucuo").focus(function(){
        $(this).val("");
    })
    $(".soucuo").blur(function(){
        $(this).val(function(){
            if($(this).val()==""){
                return "美特斯班威";
            }else{}
                return $(this).val();
        });
    }) ;

    //bannwer

    var mySwiper1 = new Swiper ('.cont1 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        effect : 'fade',

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick :true,
        },

    });

    var mySwiper2 = new Swiper ('.cont2 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        effect : 'fade',

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick :true,
        },

    });

    var mySwiper3 = new Swiper ('.b-r-t .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        effect : 'fade',
        speed: 2000,

        // 如果分页符
        pagination: {
            el: '.btt1 .swiper-pagination',
            clickable:true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick :true,
        },
    });

    //侧边栏效果
    $(".as1").hover(function(){
        $(this).children().css("left","-79px");
    },function(){
        $(this).children().css("left","100px");
    });


    $(".ass1").hover(function(){
        $(".imms").css("left","-350px");
    },function(){
        $(".imms").css("left","100px");
    });

    $(window).scroll(function(){//滚动事件获取//判断滚动条高度
        var $scroll = $(document).scrollTop();
        if($scroll>700){//判断滚动条高度
            $(".asids3").show().children().hover(function(){
                $(this).children().css("left","30px");
            },function(){
                $(this).children().css("left","-500px");
            });
        }else{
            $(".asids3").hide();
        }
    });


    //吸顶效果
    $(window).scroll(function(){//滚动事件获取//判断滚动条高度
        var $scroll = $(document).scrollTop();
        if($scroll>600){//判断滚动条高度
            $(".top-dd").css("display","block");
        }else{
            $(".top-dd").css("display","none");
        }
    });

    //选显卡
    $(".rct11-1b").mouseover(function(){
        $(".rct11-2b").css("background","#fff");
        $(".rct11-1b").css("background","#e6e6e6");
        $(".rct11-1").css("display","block");
        $(".rct11-2").css("display","none");

    });
    $(".rct11-2b").mouseover(function(){
        $(".rct11-1b").css("background","#fff");
        $(".rct11-2b").css("background","#e6e6e6");
        $(".rct11-2").css("display","block");
        $(".rct11-1").css("display","none");

    });

    $(".ss-c1r1b").mouseover(function(){
        $(".ss-c1r1b").css("background","#ff2832");
        $(".ss-c1r2b").css("background","#e6e6e6");
        $(".box11").css("display","block");
        $(".box12").css("display","none");

    });
    $(".ss-c1r2b").mouseover(function(){
        $(".ss-c1r1b").css("background","#e6e6e6");
        $(".ss-c1r2b").css("background","#ff2832");
        $(".box11").css("display","none");
        $(".box12").css("display","block");

    });

    //选项卡
    $('.ban-boxleft').on('mouseenter', function() {
        $('.nav-right').css("display","block");
        $(".nav-right").removeClass('hide');
    }).on('mouseleave', function() {
        $('.nav-right').css("display","none");
        $(".nav-right").addClass('hide');
        $(".sub").addClass('hide');
    }).on('mouseenter',"li", function(e) {
        var li_data = $(this).attr('data-id');
        $(".sub").addClass('hide');
        $('.sub[data-id="' + li_data + '"]').removeClass('hide');
    });

    $(".ban-boxleft ul li a") .hover(function(){
        $(this).parent().css("border","1px solid #ff2832");
    },function(){
        $(this).parent().css("border","1px solid #fff");
    });

    // 选显卡2
    $('.c3l-top ul li').on('mouseenter',function(){
        $(this).siblings().removeClass('show-t');
        $(this).addClass('show-t');
    }).on('mouseenter', function(e) {
        var li_dat = $(this).attr('dat-id');
        $(".c3B1").addClass('c3l-b1');
        $('.c3B1[dat-id="' + li_dat + '"]').removeClass('c3l-b1');
    });

    //选显卡3
    $('.c3-right ul li').on('mouseenter',function(){
        $(this).siblings().removeClass('show11');
        $(this).addClass('show11');
    }).on('mouseenter', function(e) {
        var li_dates = $(this).attr('dates-id');
        $('.c3r31').addClass('c3r11');
        $('.c3r31[dates-id="' + li_dates + '"]').removeClass('c3r11');
    });
    
});


