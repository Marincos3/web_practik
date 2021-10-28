$(function(){
//Завдання 1
	/*
$('.slide-btn ').click(function(){
alert("Була натиснута кнопка з класом slide-btn.");
});
*/
//Завдання 2
/*
$('.features-grids').click(function(){
$('.features-grids img[src*=images]').slideUp(3000);
});
*/
//Завдання 3
/*
$('.features-grids').click(function(){
$('.features-grids img[src*=images]').slideToggle(2000);
});
*/
//Завдання 4
/*
$('.features-grids img[src*=images]').each(function(){
$(this).click(function(){
$(this).fadeToggle(2000);
});
});
*/
//Завдання 5
/*$('.header').mouseenter(function(){
$('.slide-text').hide(3000);
$('.top-nav ul').hide(3000);
});
$('.header').mouseleave(function(){
$('.slide-text').show(3000);
$('.top-nav ul').show(3000);
});
*/
/*/Завдання 6
$(".slide-btn").click(function(){
$(".slide-text a").text('Оберіть мотоцикл нище на сторінці.');
});
*/
//Завдання 7
/*
$('.features-grids #p').click(function(){
$('.col-md-3 img').hide(3000);
});
*/
//Завдання 8
/*
  $("#p").click(function(){
   $("img[src*=moto]").slideToggle(2000, function(){
      if ($("img[src*=moto]").is(":visible")){
        $("#p").text("Сховати фото");
      } else {
        $("#p").text("Подивитись фото");
      }
    });
  });
*/
//Завдання 9
/*
$('.blog-post').each(function(){
$(this).mouseenter(function(){
	$(this).find('span:hidden').fadeIn(3000);
});
$('.col-md-2 span').mouseleave(function(){	
	$('.categorie').fadeOut(3000);
});
});
*/
//Завдання 10
 /* $(".contatct-active a").click(function(){
      if ($(".contatct-active a").text() == "eng"){
		$(".m1 a").text('Home');
		$(".m2 a").text('Motorcycles');
		$(".m3 a").text('Sale');
		$(".m4 a").text('Forum');
		$(".m5 a").text('Contacts');
        $(".contatct-active a").text("ua");
      } else {
        $(".contatct-active a").text("eng");
		$(".m1 a").text('Головна');
		$(".m2 a").text('Мотоцикли');
		$(".m3 a").text('Розпродаж');
		$(".m4 a").text('Форум');
		$(".m5 a").text('Контакти');
      }
    });
 */
});

