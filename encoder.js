//var textVal = $('#inputText').val();
var echoTranslations = {
64 : "z",  
65 : "a",
66 : "b",
67 : "c",
68 : "d",
69 : "e",
70 : "f",
71 : "g",
72 : "h",
73 : "i",
74 : "j",
75 : "k",
76 : "l",
77 : "m",
78 : "n",
79 : "o",
80 : "p",
81 : "q",
82 : "r",
83 : "s",
84 : "t",
85 : "u",
86 : "v",
87 : "w",
88 : "x",
89 : "y",
90 : "z"
//8 : $('#inputText').val(textVal.substring(0,textVal.length - 1))

}


$("#inputText").keydown(function(e) {

if ($("input:checked").val() == "echo"){
  var answer = echoTranslations[e.keyCode];
  $('#textArea').append(answer);
}
else if ($("input:checked").val() == "caesarCipher"){
  var answer = echoTranslations[e.keyCode - 1];
  $('#textArea').append(answer);
}



});




//NOT PART OF KEYDOWN EVENT!
$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});
