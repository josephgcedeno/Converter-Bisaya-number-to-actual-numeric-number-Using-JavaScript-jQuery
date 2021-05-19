var num_convert_data = {"isa":1,"osa":1,"doha":2,"duha":2,"tolo":3,"tulo":3,"upat":4,"opat":4,"lima":5,"lema":5,"unom":6,"onum":6,"onom":6,"pito":7,"peto":7,"pitu":7,"petu":7,"walo":8,"walu":8,"siyam":9,"seyam":9,"pulo":10,"sampo":10,"sampu":10,"napu'o":10,"onse":11,"dose":12,"trese":13,"katorse":14,"kinse":15,"disesays":16,"disesyete":17,"disiotso":18,"disenuybe":19,"bayente":20,"baynte uno":21,"baynte dos":22,"baynte tres":23,"baynte kwatro":24,"baynte singko":25,"baynte sais":26,"baynte syete":27,"baynte otso":28,"baynte nuybe":29,"trayenta":30,"trayntay uno":31,"trayntay dos":32,"trayntay tres":33,"trayntay kwatro":34,"trayntay singko":35,"trayntay sais":36,"trayntay siyete":37,"trayntay otso":38,"trayntay nuwebe":39,"kwarenta":40,"kwarenta'y uno":41,"kwarenta'y dos":42,"kwarenta'y tres":43,"kwarenta'y kwatro":44,"kwarenta'y singko":45,"kwarenta'y sais":46,"kwarenta'y siyete":47,"kwarenta'y otso":48,"kwarenta'y nuwebe":49,"singkwenta":50}

$('form').on('submit', function(e){

  e.preventDefault();

  var numTextLowerCase = $(`#form1Example1`).val().toLowerCase();

  /*get the key for matching*/
  var pattern_to_base = '';

  const last_key = Object.keys(num_convert_data)[Object.keys(num_convert_data).length-1];

  for(var k in num_convert_data) (last_key!=k) ? pattern_to_base+=`${k}|` : pattern_to_base+=`${k}` ;

  var match_found_result = numTextLowerCase.match(new RegExp(pattern_to_base, "i"));

  if(match_found_result!=undefined)
  {
  	$(`#form1Example2`).val(num_convert_data[match_found_result])
  }
  else
  {
  	alert("walay makita pasensya")
  }

});