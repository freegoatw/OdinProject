var j = [];
var consoleLine = "<p class=\"console-line\"></p>";
j[0]=0;
j[1]=1;
console = {
    log: function (text) {
        $("#console-log").append($(consoleLine).html(text));
    }
};
console.log(j[0]);
console.log(j[1]);
for(var i=2;i<4000000;i++) {
    j[i] = j[i-1] + j[i-2];
    console.log(j[i]);
	}
console.log("terminé");
