console.log('welcome to my music player');


//audioElement.play();

//initialise song index
let songIndex=0;
let audioElement = new Audio('../songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgessBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songInfo =document.getElementById('songInfo');



let songs=[{songName:"Years & Years - Desire ft. Tove Lo",filePath:'../songs/1.mp3',coverPath:"../images/covers/1.jpg"},
{songName:"Charlie Puth - The Way I Am",filePath:'../songs/2.mp3',coverPath:"../images/covers/2.jpg"},
{songName:"INNA - Nirvana",filePath:'../songs/3.mp3',coverPath:"../images/covers/3.jpg"},
{songName:"Selena Gomez - Back To You",filePath:'../songs/4.mp3',coverPath:"../images/covers/4.jpg"},
{songName:"Troye Sivan – Bloom ",filePath:'../songs/5.mp3',coverPath:"../images/covers/5.jpg"},
{songName:"Avicii - Wake Me Up",filePath:'../songs/6.mp3',coverPath:"../images/covers/6.jpg"},]

songItem.forEach((element,i)=> {
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
        
    })


//listen to event

audioElement.addEventListener('timeupdate',()=>{

    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myProgessBar.value=progress;

})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        songInfo.innerHTML=songs[songIndex].songName;
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;    
        songInfo.innerHTML='Paused';
    }   
        
   
})

myProgessBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgessBar.value*audioElement.duration/100;
})


function otherPause(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

       console.log(element.classList);
      
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');

       
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
      
        songIndex = parseInt(e.target.id);
        otherPause();
        e.target.classList.remove('fa-play-circle');    
        e.target.classList.add('fa-pause-circle'); 
      
        audioElement.src=`../songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       console.log(songInfo);
       songInfo.innerHTML=songs[songIndex].songName;
       gif.style.opacity=1;
    })
})

document.getElementById('previousSong').addEventListener('click',()=>{
if(songIndex<=0){
    songIndex=5;
}
else{
    songIndex -=1;
    

}

audioElement.src=`../songs/${songIndex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
console.log(songInfo);
songInfo.innerHTML=songs[songIndex].songName;
gif.style.opacity=1;

otherPause();
document.getElementById(songIndex).classList.remove('fa-play-circle');
document.getElementById(songIndex).classList.add('fa-pause-circle');

////.target.classList.remove('fa-play-circle');    
//e.target.classList.add('fa-pause-circle'); 

})

document.getElementById('nextSong').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex +=1;
        
    
    }
    songInfo.innerHTML=songs[songIndex].songName;
    audioElement.src=`../songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    console.log(songInfo);
   //    songInfo.innerHTML='Playing....';
    gif.style.opacity=1;

    otherPause();
document.getElementById(songIndex).classList.remove('fa-play-circle');
document.getElementById(songIndex).classList.add('fa-pause-circle');
    })