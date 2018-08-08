$(function(){
    //初始化验真码
    $('.simg').text(getMa());
    
  //  手机号验证
  $('.int01').on("focus",function(){
      $(".pa1").text("手机号码用于登陆，找回密码，订单服务等业务");
      if($(this).val() == "请输入你的手机号码"){
         $(this).val("");
      } ;
  }).on('blur',function(){
      var regObj = /^1[0-9]{10}$/;
      if(regObj.test($(this).val())){
          $(".pand1").text("√");
          $(".pa1").text("");
      }else{
          $(".pand1").text("×");
          $(".pa1").text("号码输入错误，请重新输入");
      };
      if($(this).val() == ""){
          $(this).val("请输入你的手机号码");
          $(".pa1").text("");
          $(".pand").text("");
      };
  });

    //密码验证
    $('.int02').on('focus',function(){
        $(".pa2").text("密码由6-20位字符，由字母，数字和符号组成");
    }).on('blur',function(){
        //用户名的规则：6-20位，数字字母下划线组成，必须包含字母，必须要有大写。
        var regObj = /^\w{6,19}$/;
        if(regObj.test($(this).val())){
            $(".pand2").text("√");
        }else{
            $(".pand2").text("×");
        }
    });


    //确认密码
    $('.int03').on('focus',function(){
        $(".pa3").text("请再次输入密码");
    }).on('blur',function(){
        //用户名的规则：6-20位，数字字母下划线组成，必须包含字母，必须要有大写。
        if($(this).val() == $('.int02').val()){
            $(".pand3").text("√");
            $(".pa3").text("");
        }else{
            $(".pand3").text("×");
            $(".pa3").text("两次密码不不一致,请重新输入");
        }
    });



    //随机数组
    function getMa(){
        var arr=["a","b","c","d","e","f","g","h","i","0","1","2","3","4","5","6","7","8","9",];
        var str="";
        for(var i=0;i<6;i++){
            //随机下标
            var index = parseInt(Math.random()*arr.length);
            //根据下标取出对应的元素
            str+=arr[index];
        }
        return str;
    }
    //显示验证码
    $(".pst1").click(function(){
        $('.simg').text(getMa());
    });
    

    //验证码
    $('.pi1').on('focus',function(){
        $(".pa4").text("请填写方框里的字符串，不区分大小写");
    }).on('blur',function(){
        //用户名的规则：6-20位，数字字母下划线组成，必须包含字母，必须要有大写。
        if($(this).val() == $('.simg').text()){
            $(".pa4").text("输入正确");
        }else{
            $(".pa4").text("验真码错误，请重新输入");
        }
    });

});