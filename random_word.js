var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","x","y","z","rg","rd","pl","qu","dr","bl","vl"];
var vowels = ["a","e","i","o","u","oo","au","oi","ei","ee","ia","eo","ie"];
var verbs = ["be","have","do","see","eat","kill","say","go","get","make","know","think","take","come","want","look","use","find","give","tell","work","call","try","ask","need","feel","become","explode","shit","ache","lie about","tunnel","open","construct","understand","know","live"];
var prepositions = ["about","above","across","after","against","along","among","around","at","because of","before","behind","below","beneath","beside","between","beyond","by","despite","down","during","except","with","without"];
var nouns = ["society","ingot","history","way","art","world","information","map","family","government","health","system","computer","meat","year","hug","orchard","music","person","reading","method","data","food","understanding","theory","law","bird","literature","building"];
var adjectives = ["good","new","first","last","long","great","little","other","old","right","big","high","different","small","large","next","early","young","important","few","public","bad","same","dead","red","orange","yellow","cyan","green","blue","purple","neon","dark","understandable","right wing","left wing","racist"];

var letter = 0;
if(Math.random() > 0.5) letter = 1;
var word = "";
var type = "verb";
var def = "";
var wurd = "";
var x = 0;
var y = 0;
var chance = 1.05;

while(x === 0) {
	if(chance > Math.random()) {
		if(letter === 1){
			word = word + consonants[Math.floor(Math.random()*consonants.length)];
			letter = 0;
		} else {
			word = word + vowels[Math.floor(Math.random()*vowels.length)];
			letter = 1;
		}
		chance = chance - .05;
	} else {
		x++;
	}
}

if(letter === 1 && Math.random < .5) word = word + "e";
let f = Math.random();
if(f <= .33) type = "noun";
if (f >= .66) type = "adjective"


console.log(word + " - " + type);

//definition

chance = 1;
if(type === "verb") def = "to";
if(type === "noun") def = "a(n)";
if(type === "adjective") def = "something";

while(y === 0) {
	if(chance > Math.random()) {
		//verbs
		if(type === "verb") {
			if(chance != 1) def = def.concat(" ",new Array("or","and","but not")[Math.floor(Math.random()*3)]);
			def = def.concat(" ",verbs[Math.floor(Math.random()*verbs.length)]);
			if(Math.random() <= .5) def = def.concat(" ",prepositions[Math.floor(Math.random()*prepositions.length)]);
			def = def.concat(" the ",nouns[Math.floor(Math.random()*nouns.length)]);
			chance = chance - .5;
		}
		//adjectives
		if(type === "adjective") {
			if(chance != 1) def = def.concat(" ",new Array("or","and","but not")[Math.floor(Math.random()*3)]);
			if(Math.random() <= .5) def = def.concat(" not");
			def = def.concat(" ",prepositions[Math.floor(Math.random()*prepositions.length)]);
			def = def.concat(" a(n) ",nouns[Math.floor(Math.random()*nouns.length)]);
			
			chance = chance - .5;
		}
		//nouns
		if(type === "noun") {
			if(chance != 1) def = def.concat(" ",prepositions[Math.floor(Math.random()*prepositions.length," a(n) ")]);
			def = def.concat(" ",adjectives[Math.floor(Math.random()*adjectives.length)]);
			def = def.concat(" ",nouns[Math.floor(Math.random()*nouns.length)]);
			chance = chance - .5;
		}
	} else {
		y++;
	}
}



console.log(def);