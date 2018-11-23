//抽奖代码
$(function() {
	var $btn = $('.g-lottery-img'); // 旋转的div
	var cishu = 1; //初始次数，由后台传入
	$('#cishu').html(cishu); //显示还剩下多少次抽奖机会
	var isOk = true; //是否正在抽奖
	var clickfunc = function() {
		if(cishu <= 0){
				alert('机会用完了哟～')	
		}else{
			var data = [1, 2, 3, 4, 5, 6, 7, 8, ]; //抽奖
			//data为随机出来的结果，根据概率后的结果
			// data = data[Math.floor(Math.random() * data.length)]; //1~8的随机数
			data = 4;	//指定转到4
			switch (data) {
				case 1:
					rotateFunc(1, 25, '双季丰0.1%加息红包');
					break;
				case 2:
					rotateFunc(2, 70, '双季丰满减红包10元');
					break;
				case 3:
					rotateFunc(3, 115, '1元现金红包');
					break;
				case 4:
					rotateFunc(4, 160, '财金币20枚');
					break;
				case 5:
					rotateFunc(5, 203, '20元现金红包');
					break;
				case 6:
					rotateFunc(6, 245, '双季丰0.5%加息红包');
					break;
				case 7:
					rotateFunc(7, 290, '双季丰满减红包50元');
					break;
				case 8:
					rotateFunc(8, 340, '5元现金红包');
					break;
			};
		}
		
	}
	$(".zhizhen").click(function() {
		if(isOk){
			clickfunc();
			isOk=false;
		}
	});
	var rotateFunc = function(awards, angle, text) {
		isOk = true;
		$btn.stopRotate();
		$btn.rotate({
			angle: 0, //旋转的角度数
			duration: 4000, //旋转时间
			animateTo: angle + 1440, //给定的角度,让它根据得出来的结果加上1440度旋转
			callback: function() {
				isOk = true; // 标志为 执行完毕
				// alert(text);
				$('.dp_over').addClass('active');
				console.group('得出结果：');
					console.log('第-', awards);
					console.log('中奖礼品角度-', angle);
					console.log('中奖内容', text);
				console.groupEnd();
				cishu = cishu-1;	//转一次减一次机会
				$('#cishu').html(cishu);	//赋值
				// console.log('cishu', cishu)
				
			}
		});
	};
});