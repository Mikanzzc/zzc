define(['config'],function(){
	require(['jquery','jqcookie'],function(){
		var $sid=location.search.substring(5);
		$.ajax({
			url:"http://localhost/gjw/php/detail.php",
			datatype:"json",
			data:{
				sid:$sid
			}
		}).done(function(data){
			data=JSON.parse(data);
			$('.fdj').find('img').attr('src',data.big);
			$('.itemtitle').html(data.title);
			$('.priceup em').html(data.price);
			$('.shuliang input').val(data.sailnumber);
			var $arr=[];
			$arr=data.urls.split(',')
			for(i=0;i<data.urls.length;i++){
				$('.buyleft li img').eq(i).attr('src',$arr[i]);
			}
		});
		
		//2.鼠标点击改变图片
		var $piclist=$('.list').find('li');
		$piclist.hover(function(){
			$(this).css('border','2px orange solid');
		},function(){
			$(this).css('border','none');
		});
	})
})