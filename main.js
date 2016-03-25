var game_name;
/* functon to pick a random game to pop up */
function game(url) {
window.location=url;
}
function rand_game() {
var a;
a = Math.floor((Math.random()*3) +1 );   // a = random number between 1-3
if (a==1) return("games/dots/Dots II/dots-ii.swf", game_name = "games/dots/Dots II/dots-ii.swf" );
if (a==2) return("games/assembots/Assembots/assembots.swf", game_name = "games/assembots/Assembots/assembots.swf");
if (a==3) return("games/bedazzled/Bedazzled/bedazzled.swf", game_name = "games/bedazzled/Bedazzled/bedazzled.swf");
}

function name_of_game(){
    return game_name;
}