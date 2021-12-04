$(function(){
//Завдання 1
//$('.slide-text h1').addClass('fon_yellow');
//Завдання 2
/*
$('.slide-text span:last').css('fontSize', function(index, value){
        var newSize = value.replace('px','')*4;
        return newSize;
});
*/
//Завдання 3
//$("#bag").prop("checked", true);

//Завдання 4
//$('#inch_yes').prop('checked', true);
//Завдання 5
/*
$('#my_form').click(function(){
getInfoMoto();
});
function getInfoMoto(){
var moto = $("#motoSelect option:selected").text();
var days = $("#daysSelect option:selected").text();
var email = $("#email").val();
var shlem = "";
var bag = "";
var od = "";
var inch = "";
if($('input[type="checkbox"]').eq(0).prop("checked")==true){
shlem = $("label[for='shlem']").text();
}
if($('input[type="checkbox"]').eq(1).prop("checked")==true){
bag = $("label[for='bag']").text();
}
if($('input[type="checkbox"]').eq(2).prop("checked")==true){
od = $("label[for='od']").text();
}
if($("#inch_yes").prop("checked")==true){
inch = "Так";
}else{
inch = "Ні";}
$("textarea").text(moto+" на "+days+" днів\n"+email+"\nАксесуари: "+shlem+" "+bag+" "+od+"\nСтраховка: "+inch);
};
*/
});