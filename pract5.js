$(function(){
//Завдання 1
//$('#about-moto').addClass('new');
//Завдання 2
/*
$('#about-moto').before("<p id='as'>Цей абзац доданий за допомогою методу 'before'</p>");
$('#about-moto').after("<p id='as'>Цей абзац доданий за допомогою методу 'after'</p>");
$('#about-moto').html("<p id='as'>Цей абзац доданий за допомогою методу 'html'</p>"+$('#about-moto').text()+"<p id='as'>Цей абзац доданий за допомогою методу 'html'</p>");
$('.head #as').addClass('fon_yellow');
*/
//Завдання 3
/*
$('li').each(function(){
$(this).mouseenter(function(){
	$(this).addClass('svitlo');
});
$('li').mouseleave(function(){
$("li").removeClass('svitlo');
});
});
*/
//Завдання 4
/*
$('.features-grids img').click(function(){
$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
});
*/
//Завдання 5
/*
$('.features-grids img').click(function(){
$(this).remove()
$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
});	
*/
//Завдання 6
/*
$('.features-grids img').click(function(){
if($(this).attr('nomer')=="1"){
$('.koshik-wrapper-items[nomer=1]').prepend($(this).clone());
}
else if($(this).attr('nomer')=="2"){
$('.koshik-wrapper-items[nomer=2]').prepend($(this).clone());
}
else if($(this).attr('nomer')=="3"){
$('.koshik-wrapper-items[nomer=3]').prepend($(this).clone());
}
else if($(this).attr('nomer')=="4"){
$('.koshik-wrapper-items[nomer=4]').prepend($(this).clone());
}
$('.koshik-wrapper').addClass('full-koshik');
$(this).remove();
});
*/ 
//Завдання 7
/*
var a=0;
var UAH=0;
$('.features-grids img').click(function(){
$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
a+=1;
UAH += parseInt($(this).attr('price'));
$('.info').text("Всього " + a + " мотоциклів на суму " + UAH + " UAH");
});
$('.koshik-wrapper').on('click', 'img', function(){
$(this).remove();
a-=1;
UAH-=parseInt($(this).attr('price'));
$('.info').text("Всього " + a + " мотоциклів на суму " + UAH + " UAH");
});
*/
});