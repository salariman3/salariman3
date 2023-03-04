<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="utf-8">
		<title>登录</title>
		<meta name="description" content="particles.js is a lightweight JavaScript library for creating particles.">
		<meta name="author" content="Vincent Garreau" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<link rel="stylesheet" media="screen" href="sa-frame/login/style.css">
		<link rel="stylesheet" href="static/sa.css">
		<style type="text/css">
			/* 背景图片 */
			#particles-js{
				background-image: url(sa-frame/login/bg.jpg);
			}
			
			/* 样式调整 */
			.login-box{display: flex; justify-content: center; align-items: center; position: fixed; width: inherit; height: 100%; pointer-events: none;}
			.login{height: auto; padding: 50px 50px; position: static; margin: 0 auto !important; pointer-events: all; border-radius: 0px;}
			.login-top{margin-top: 0px; margin-bottom: 30px;}
			.logo-img{width: 50px; height: 50px; vertical-align: middle; position: relative; top: -3px; border-radius: 50%; margin-left: -10px; margin-right: 10px;}
			.logo-img{display: none;}
			.login-button{width: 270px; border-radius: 0px; transition: all 0.2s;}
			.login-button:hover{background-color: #0E80eF;}
			/* .page-title{line-height: 50px;} */
			.sk-rotating-plane{}
			/* 动画相关 */
			/* .login{background-color: rgba(0,0,0,0); } */
			.login{opacity: 0;}
			
		</style>
	</head>
	<body>

		<div id="particles-js">
			<div class="login-box">
				<div class="login">
					<div class="login-top">
						<img src="" class="logo-img" alt="">
						<span class="page-title">登录</span>
					</div>
					<div class="login-center clearfix">
						<div class="login-center-img"><img src="sa-frame/login/name.png" /></div>
						<div class="login-center-input">
							<input type="text" name="key" value="" placeholder="请输入账号" />
							<div class="login-center-input-text">账号</div>
						</div>
					</div>
					<div class="login-center clearfix">
						<div class="login-center-img"><img src="sa-frame/login/password.png" /></div>
						<div class="login-center-input">
							<input type="password" name="password" value="" placeholder="请输入密码" />
							<div class="login-center-input-text">密码</div>
						</div>
					</div>
					<div class="login-button">登录</div>
				</div>
			</div>
			<div class="sk-rotating-plane"></div>
		</div>

		<!-- scripts -->
		<script src="sa-frame/login/particles.min.js"></script>
		<script src="sa-frame/login/app.js"></script>
		<script src="https://unpkg.com/jquery@3.4.1/dist/jquery.min.js"></script>
		<script src="https://www.layuicdn.com/layer-v3.1.1/layer.js"></script>
		<script src="static/sa.js"></script>
		<script type="text/javascript">
			
			// 你所有要改的代码全在这里   ↓↓↓↓↓ 
			
			// 所有参考属性  
			var page_title = 'Sa-Admin 登录';		// 页面标题 
			var key = 'admin';						// 默认的账号
			var password = 'admin';					// 默认的password  
			var logo = 'sa-frame/admin-logo.png';	// logo地址，为空字符串则不显示 
			
			// 点击登录按钮 
			document.querySelector(".login-button").onclick = function() {
				// 1、取值 
				var p = {
					key: $('[name=key]').val(),
					password: $('[name=password]').val()
				}
				// 2、判断
				if(p.key == '' || p.password == ''){
					return layer.msg('请输入任意内容即可');
				}
				// 3、请求后台
				sa.ajax2('/acc/doLogin', p, function(res) {
					sa.msg('登录成功，欢迎你：' + p.key);
					setTimeout(function () {
						if(parent == window){
							location.href = "index.html";
						}else{
							sa.closeCurrIframe();
							parent.location.reload();
						}
					}, 500);
				})
			}
			// 你所有要改的代码全在这里   ↑↑↑↑↑	
			
		</script>
		<script type="text/javascript">
			// 替换属性 
			$('.page-title').html(page_title);
			$('title').html(page_title);
			$('[name=key]').val(key);
			$('[name=password]').val(password);
			if(logo != null && logo != '') {
				$('.logo-img').attr('src', logo);
				$('.logo-img').show();
			}
			// 绑定回车事件
			$('[name=password]').bind('keypress', function(event){
				if(event.keyCode == "13") {
					$('.login-button').click();
				}
			});
			// 去掉透明
			setTimeout(function() {
				// document.querySelector('.login').style.backgroundColor = 'rgba(256,256,256,1)';
				document.querySelector('.login').style.opacity = '1';
			}, 0)
			
			console.log('本页面参考于jq22，原作者：http://www.jq22.com/jquery-info20074');
		</script>
	</body>
</html>
