
function getQuotes() {
    var myShows = ['“Every child is an artist, the problem is staying an artist when you grow up” – Pablo Picasso', '“If you hear a voice within you say, ‘You cannot paint,’ then by all means paint, and that voice will be silenced” – Vincent Van Gogh', '“Have no fear of perfection, you’ll never reach it” – Salvador Dali', '“Curiosity about life in all of its aspects, I think, is still the secret of great creative people” – Leo Burnett', 
    '“You can’t wait for inspiration, you have to go after it with a club” – Jack London'];
    var show = myShows[Math.floor(Math.random() * myShows.length)];
    document.getElementById("message_container").innerHTML=show;
}