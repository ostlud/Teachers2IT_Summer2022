$(document).ready(function(){
	$('.header').height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
scrollTop:$("#" + $(this).data('value')).offset().top
},1000)

})
function GenerateRandom ()
{
	let minVal= Number(document.querySelector('.numMin').value);
	let maxVal=Number(document.querySelector('.numMax').value);
    let result= Math.floor(Math.random()*(maxVal-minVal+1)) + minVal; //Number(minVal)+ Number(maxVal);
    let pElem = document.querySelector('.textRand');
    pElem.value = result;

}

