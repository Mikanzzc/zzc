define(['config'],function(){
	require(['jquery','jqcookie'],function(){
		//1.菜单
		var $sedNav=$('.sednav');
		var $sedNavp=$('.sednav p');
		var $third=$('.third');
		var $thirdDiv=$('.third div');
		$sedNav.hover(function(){
			$third.css("display","block");
			$sedNavp.on('mousemove',function(){
				$sedNavp.css("opacity",'1');
				$(this).css("opacity",'0.5');
				$thirdDiv.css("display","none");//鼠标没有离开$sedNav的情况下清空$thirdDiv
				$thirdDiv.eq($(this).index()).css("display","block");//显示根据下标数据
			})
		},function(){
			$sedNavp.css("opacity",'1');
			$third.css("display","none");
			$thirdDiv.css("display","none");
		});	
		
		
		//2.轮播图
		var $lbtleft=$('#banner .left');
		var $lbtright=$('#banner .right');
		var $lbtolli=$('#banner ol li');
		var $lbt=$('.lbt');
		var $banner=$('#banner');
		var $lbtPic=$('.lbt img');
		var $lbtnum=0;
		var $lbttimer=null;
		//箭头出现
		$banner.hover(function(){
			clearInterval($lbttimer);
			$("#banner .left,#banner .right").show();
		},function(){
			$lbttimer=setInterval(function(){
				$lbtright.click();
			},5000);
			$("#banner .left,#banner .right").hide();
		});
		//圆圈改变图片
		$lbtolli.hover(function(){
			$lbtnum=$(this).index();
			change();
		});
		//箭头事件
		$lbtright.on('click',function(){
			$lbtnum++;
			if($lbtnum>4){
				$lbtnum=0;
			}
			change();
		});
		$lbtleft.on('click',function(){
			$lbtnum--;
			if($lbtnum>0){
				$lbtnum=4;
			}
			change();
		});
		
		$lbttimer=setInterval(function(){
			$lbtright.click();
		},5000)
		
		change=()=>{
			$lbtolli.eq($lbtnum).addClass("active").siblings("li").removeClass("active");
			$lbtPic.eq($lbtnum).stop(true).animate({opacity:1},800).css('display','block').siblings('img').stop(true).animate({opacity:0},800).css('display','none');
		}
		
		
		//3.页面底部ppt
		var $slbul=$('.s7lbt ul');
		var $slbli=$('.s7lbt ul li');
		var $slbleft=$('.s7bottonleft');
		var $slbright=$('.s7bottonright');
		var $wid=$slbli.width()*$slbli.length;
		var $slbnum=0;
		$slbul.css('width',$wid);
		$slbleft.on('click',function(){
			if($slbul.position().left>=-480){
				$slbul.stop().animate({left:'-=240'});
			}else{
				$slbul.stop().animate({left:'0'});
			}
		});
		$slbright.on('click',function(){
			if($slbul.position().left<0){
				$slbul.stop().animate({left:'+=240'});
			}else{
				$slbul.stop().animate({left:'-480'});
			}
		});
		
		//4。鼠标经过a浮起
		var $s2li=$('#seccion_2 li');
		var $s2a=$('#seccion_2 li a');
		$s2li.hover(function(){
			$s2a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s2a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		var $s3li=$('#seccion_3 li');
		var $s3a=$('#seccion_3 li a');
		$s3li.hover(function(){
			$s3a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s3a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		var $s4li=$('#seccion_4 li');
		var $s4a=$('#seccion_4 li a');
		$s4li.hover(function(){
			$s4a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s4a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		var $s5li=$('#seccion_5 li');
		var $s5a=$('#seccion_5 li a');
		$s5li.hover(function(){
			$s5a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s5a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		var $s6li=$('#seccion_6 li');
		var $s6a=$('#seccion_6 li a');
		$s6li.hover(function(){
			$s6a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s6a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		var $s7li=$('#seccion_7 li');
		var $s7a=$('#seccion_7 li a');
		$s7li.hover(function(){
			$s7a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s7a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		var $s8li=$('#seccion_8 li');
		var $s8a=$('#seccion_8 li a');
		$s8li.hover(function(){
			$s8a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s8a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		var $s9li=$('#seccion_9 li');
		var $s9a=$('#seccion_9 li a');
		$s9li.hover(function(){
			$s9a.eq($(this).index()).stop(true).animate({top:'-10'}).css('box-shadow','0 10px 10px 10px #ccc');
		},function(){
			$s9a.eq($(this).index()).stop(true).animate({top:'0'}).css('box-shadow','none');;
		});
		
		//底部ul
		var $dibuul=$('.footerbottomlbt ul');
		var dibutimer=setInterval(function(){
			$dibuul.animate({top:-30},500);
			$dibuul.animate({top:0},500);
		},3000);
		
		//数据库
		var oBox=$('#seccion_1');
		var ali=oBox.find('li');
		$.ajax({
			url:'http://localhost/gjw/php/data.php',
			datatype:"json"
		}).done(function(data){
			data=JSON.parse(data);
			for(i=0;i<data.length;i++){
				ali.eq(i).find('img').attr('src',data[i].url);
				ali.eq(i).find('.title').html(data[i].title);
				ali.eq(i).find('.price').html(data[i].price);
				ali.eq(i).find('a').attr('href',`details.html?sid=${data[i].sid}`);
			}
		})
	}); 
})