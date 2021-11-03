$(function(){
//Завдання 1
/*
$('li').click(function(){
alert($(this).html());
});
*/
//Завдання 2
/*
alert($('#email').val());
*/
//Завдання 3
/*
$('.link-moto').click(function(){
alert($(this).attr('href'));
});
*/
//Завдання 4
/*
$('.col-md-3 img').click(function(){
alert($(this).attr('src'));
});
*/
//Завдання 5
/*
 $('#p').click(function(){
$(this).html('<i>Зараз функція недоступна<br> Спробуйте пізніше');
});
*/
//Завдання 6
/*
 $('.contatct-active').click(function(){
$(this).html("<img width='70' src='images/engl.png'>");
});
*/
//Завдання 7
/*
$('.col-md-3').click(function(){
$("h3", this).html("<a href='#'>Ви обрали: "+$('h3', this).text()+"</a>");
});
*/
//Завдання 8
/*
$('.col-md-3').click(function(){
$("h3", this).html("<a href='#'>Ви обрали:<br><br> "+$('h3', this).text()+"</a>");
});
*/
//Завдання 9
/*
$('.blog-post').each(function(){
$(this).mouseenter(function(){
	$(".categorie", this).fadeIn(3000).html("<span>Бажаєте замовити? "+ $('.categorie', this).text()+"</span>");
});
$(this).mouseleave(function(){	
	$('.categorie').fadeOut(3000);
});
});
*/
//Завдання 10
/*
$('.blog-post').each(function(){
$(this).click(function(){
	$("textarea").html($(".post-head", this).text()+" "+$(".categorie", this).text()+"\n"+$("textarea").text());
});
});
*/
});