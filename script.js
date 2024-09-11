$(document).ready(function(){
	$("#hide").click(function(){
		$(".title1").hide();
		$(".palm").hide();
		$(".btn").hide();
		$(".quiz1").html("question 1");
		$(".question").html("what transformation occured from the parent function in this equation? y=(x+2)^2");
		$(".btn1").show();
		$(".btn2").show();
		$(".btn3").show();
	});
	$("#answerW").click(function(){
		$(".quiz1").hide();
		$(".question").hide();
		$(".btn1").hide();
		$(".btn2").hide();
		$(".btn3").hide();
		$(".wrong").html("You're wrong. apply yourself.");
		$(".btnwrong").show();
	});
	$("#answerW2").click(function(){
		$(".quiz1").hide();
		$(".question").hide();
		$(".btn1").hide();
		$(".btn2").hide();
		$(".btn3").hide();
		$(".wrong").html("You're wrong. apply yourself.");
		$(".btnwrong").show();
	});
	$("#answerR").click(function(){
		$(".quiz1").hide();
		$(".question").hide();
		$(".btn1").hide();
		$(".btn2").hide();
		$(".btn3").hide();
		$(".right").html("You're Right!");
		$(".btnwrong").show();
	});
 });