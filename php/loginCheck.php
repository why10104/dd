<?php
	header("Content-type: text/html; charset=utf-8");
	//1、接收客户端的数据
	$vipnum = $_POST['vipnum'];
    $vippsword = $_POST['vippsword'];
	
	//2、处理数据
	//1）、搭桥（连接数据库）
	$conn = mysql_connect("localhost","root","123456");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//2）、选择目的地（选择操作的数据库）
		mysql_select_db("dd",$conn);
		//3）、运输数据（执行SQL语句，传输数据）
		$sqlstr="select * from vip where vipnum='".$vipnum."' and vippsword='".$vippsword."'";
		//echo $sqlstr;
		//函数mysql_query()里面执行的查询语句，所以，它的返回值是表格
		$result = mysql_query($sqlstr,$conn);
		$rowCount = mysql_num_rows($result);
		//4）、拆桥（关闭数据库）
		mysql_close($conn);
		
		//3、响应
		if($rowCount==1){
			//echo "登录成功！";
			header("location:index.html");
		}else{
			echo "用户名或者密码错误！";
		}
	}
?>