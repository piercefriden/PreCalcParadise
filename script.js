$(document).ready(function(){
	$("#hide").click(function(){
		$(".title1").hide();
		$(".palm").hide();
		$(".btn").hide();
		$(".quiz1").html("question 1");
		$(".question").html("what transformation occured from the parent function in this equation? y=(x+2)^2");
		$(".btn1").html("left twice");
		$(".btn2").html("up twice");
		$(".btn3").html("right twice");
	});
	$("#answerW").click(function(){
		$(".quiz1").hide("question 1");
	}};
	$("#answerW2").click(function(){
		$(".quiz1").hide("question 1");
	}};
	$("#answerR").click(function(){
		$(".quiz1").hide("question 1");
	}};
 });