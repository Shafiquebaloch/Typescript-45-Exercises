//Making Function
function make_album(artist, title, tracks) {
    var album = {
        artistName: artist,
        albumtitle: title, //Function Body
    };
    if (album.tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling  functions three time.
var album2 = make_album("shafique", "Story of Life");
console.log(album2);
//Calling Functions
var album4 = make_album("Sahil", "Old Memories");
console.log(album4);
var album5 = make_album("Fahim", "Freindship");
console.log(album5);
