//Making Function
function make_album(artist:string, title:string, tracks?: number){
    let album:{artistName:string, albumtitle:string, tracks?:number}={
        artistName:artist,
        albumtitle:title,                                       //Function Body
        
    }

        if(album.tracks !== undefined){
            album.tracks=tracks;
        }
        

    return album
}

//Calling  functions three time.
let album2=make_album("shafique", "Story of Life")
console.log(album2);
//Calling Functions
let album4=make_album("Sahil", "Old Memories")
console.log(album4);

let album5=make_album("Fahim", "Freindship")
console.log(album5);

