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
90 : "z",
32: "",
8 : returnDelete()

}


var heiroglyphics = {
  65: "<img src='images/heiroglyphics/a.gif'>",
  66: "<img src='images/heiroglyphics/b.gif'>",
  67: "<img src='images/heiroglyphics/c.gif'>",
  68: "<img src='images/heiroglyphics/d.gif'>",
  69: "<img src='images/heiroglyphics/e.gif'>",
  70: "<img src='images/heiroglyphics/f.gif'>",
  71: "<img src='images/heiroglyphics/g.gif'>",
  72: "<img src='images/heiroglyphics/h.gif'>",
  73: "<img src='images/heiroglyphics/i.gif'>",
  74: "<img src='images/heiroglyphics/j.gif'>",
  75: "<img src='images/heiroglyphics/k.gif'>",
  76: "<img src='images/heiroglyphics/l.gif'>",
  77: "<img src='images/heiroglyphics/m.gif'>",
  78: "<img src='images/heiroglyphics/n.gif'>",
  79: "<img src='images/heiroglyphics/o.gif'>",
  80: "<img src='images/heiroglyphics/p.gif'>",
  81: "<img src='images/heiroglyphics/q.gif'>",
  82: "<img src='images/heiroglyphics/r.gif'>",
  83: "<img src='images/heiroglyphics/s.gif'>",
  84: "<img src='images/heiroglyphics/t.gif'>",
  85: "<img src='images/heiroglyphics/u.gif'>",
  86: "<img src='images/heiroglyphics/v.gif'>",
  87: "<img src='images/heiroglyphics/w.gif'>",
  88: "<img src='images/heiroglyphics/x.gif'>",
  89: "<img src='images/heiroglyphics/y.gif'>",
  90: "<img src='images/heiroglyphics/z.gif'>",
  32: "",
  8: ""
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
else if ($("input:checked").val() == "heiroglyphics"){
  var answer = heiroglyphics[e.keyCode];
  $('#textArea').append(answer);
}



});




//NOT PART OF KEYDOWN EVENT!
$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});
//DELETE BUTTON
function returnDelete() {
var textVal = $('#textArea').val();
$('#textArea').val(textVal.substring(0,textVal.length - 1));
}
