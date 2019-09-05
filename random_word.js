var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","rg","rd","pl","ll","dr","bl","vl"];
var vowels = ["a","e","i","o","u","oo","au","oi","y","ei","ee","ia","eo","ie"];

var letter = false;
if(Math.random() > 0.5) letter = true;
var word = "";
var i = 0;
var chancef = -0.05;

while(i === 0) {
	if(chancef < Math.random()) {
		if(letter === true){
			word = word + consonants[Math.floor(Math.random()*consonants.length)];
			letter = false;
		} else {
			word = word + vowels[Math.floor(Math.random()*vowels.length)];
			letter = true;
		}
		chancef = chancef + .05;
	} else {
		i++;
	}
}

console.log(word);