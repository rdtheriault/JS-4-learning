$(document).ready(function(){

	var counter = 1;
	var game;


	  $("#a1").click(function(){
		move("a1");
	  });
	  $("#a2").click(function(){
		move("a2");
	  });
	  $("#a3").click(function(){
		move("a3");
	  });
	  $("#a4").click(function(){
		move("a4");
	  });
    $("#a5").click(function(){
    move("a5");
    });
    $("#a6").click(function(){
    move("a6");
    });
    $("#a7").click(function(){
    move("a7");
    });
    $("#a8").click(function(){
    move("a8");
    });
    $("#a9").click(function(){
    move("a9");
    });
    $("#a10").click(function(){
    move("a10");
    });
    $("#a11").click(function(){
    move("a11");
    });
    $("#a12").click(function(){
    move("a12");
    });
    
  function move(old){
  var str = '#';
  var trans = str.concat(old);
  var rand = Math.floor((Math.random() * 12) + 1); 
  var name = $(trans).attr('name');
  changeAnswer(rand, old, trans, name);
  resetLast(trans);
   }    
        
  function changeAnswer(rand, old, trans, name){
    var src = $(trans).attr('src');
		if (rand == 1){
			if (name == 'yes' && $('#a1').attr('name') == "'meh'") {$('#a1').attr('src', 'files/yes.png');$('#a1').attr('name', 'yes');}
      else if (name == 'no' && $('#a1').attr('name') == 'meh') {$('#a1').attr('src', 'files/no.png');$('#a1').attr('name', 'no');}
			else {move(old);}
		}   
		if (rand == 2){
    if (name == 'yes' && $('#a2').attr('name') == 'meh') {$('#a2').attr('src', 'files/yes.png');$('#a2').attr('name', 'yes');}
    else if (name == 'no' && $('#a2').attr('name') == 'meh') {$('#a2').attr('src', 'files/no.png');$('#a2').attr('name', 'no');}
    else {move(old);}
		} 
		if (rand == 3){
    if (name == 'yes' && $('#a3').attr('name') == 'meh') {$('#a3').attr('src', 'files/yes.png');$('#a3').attr('name', 'yes');}
    else if (name == 'no' && $('#a3').attr('name') == 'meh') {$('#a3').attr('src', 'files/no.png');$('#a3').attr('name', 'no');}
    else {move(old);}
		} 
		if (rand == 4){
    if (name == 'yes' && $('#a4').attr('name') == 'meh') {$('#a4').attr('src', 'files/yes.png');$('#a4').attr('name', 'yes');}
    else if (name == 'no' && $('#a4').attr('name') == 'meh') {$('#a4').attr('src', 'files/no.png');$('#a4').attr('name', 'no');}
    else {move(old);}
		}
    if (rand == 5){
      if (name == 'yes' && $('#a5').attr('name') == 'meh') {$('#a5').attr('src', 'files/yes.png');$('#a5').attr('name', 'yes');}
      else if (name == 'no' && $('#a5').attr('name') == 'meh') {$('#a5').attr('src', 'files/no.png');$('#a5').attr('name', 'no');}
      else {move(old);}
    }   
    if (rand == 6){
    if (name == 'yes' && $('#a6').attr('name') == 'meh') {$('#a6').attr('src', 'files/yes.png');$('#a6').attr('name', 'yes');}
    else if (name == 'no' && $('#a6').attr('name') == 'meh') {$('#a6').attr('src', 'files/no.png');$('#a6').attr('name', 'no');}
    else {move(old);}
    } 
    if (rand == 7){
    if (name == 'yes' && $('#a7').attr('name') == 'meh') {$('#a7').attr('src', 'files/yes.png');$('#a7').attr('name', 'yes');}
    else if (name == 'no' && $('#a7').attr('name') == 'meh') {$('#a7').attr('src', 'files/no.png');$('#a7').attr('name', 'no');}
    else {move(old);}
    } 
    if (rand == 8){
    if (name == 'yes' && $('#a8').attr('name') == 'meh') {$('#a8').attr('src', 'files/yes.png');$('#a8').attr('name', 'yes');}
    else if (name == 'no' && $('#a8').attr('name') == 'meh') {$('#a8').attr('src', 'files/no.png');$('#a8').attr('name', 'no');}
    else {move(old);}
    }
    if (rand == 9){
      if (name == 'yes' && $('#a9').attr('name') == 'meh') {$('#a9').attr('src', 'files/yes.png');$('#a9').attr('name', 'yes');}
      else if (name == 'no' && $('#a9').attr('name') == 'meh') {$('#a9').attr('src', 'files/no.png');$('#a9').attr('name', 'no');}
      else {move(old);}
    }   
    if (rand == 10){
    if (name == 'yes' && $('#a10').attr('name') == 'meh') {$('#a10').attr('src', 'files/yes.png');$('#a10').attr('name', 'yes');}
    else if (name == 'no' && $('#a10').attr('name') == 'meh') {$('#a10').attr('src', 'files/no.png');$('#a10').attr('name', 'no');}
    else {move(old);}
    } 
    if (rand == 11){
    if (name == 'yes' && $('#a11').attr('name') == 'meh') {$('#a11').attr('src', 'files/yes.png');$('#a11').attr('name', 'yes');}
    else if (name == 'no' && $('#a11').attr('name') == 'meh') {$('#a11').attr('src', 'files/no.png');$('#a11').attr('name', 'no');}
    else {move(old);}
    } 
    if (rand == 12){
    if (name == 'yes' && $('#a12').attr('name') == 'meh') {$('#a12').attr('src', 'files/yes.png');$('#a12').attr('name', 'yes');}
    else if (name == 'no' && $('#a12').attr('name') == 'meh') {$('#a12').attr('src', 'files/no.png');$('#a12').attr('name', 'no');}
    else {move(old);}
    }
  }
  function resetLast(old){
  	$(old).attr('src', 'files/white.png');
        $(old).attr('name', 'meh');
  }  

});
