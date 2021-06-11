/* Now we want to create variables to access the variables or things that we made in html and css that is(access dinasour,cactus) or
 to access(character and block*/

    var character = document.getElementById("character");
    var block = document.getElementById("block");

 /* Now we are gonna create our function "jump"*/   
 /*So this access our character grab its class list and add to it animate*/

 function jump(){
     if(character.classList != "animate"){
     character.classList.add("animate");
     }
     setTimeout(function(){
          character.classList.remove("animate");
     },500);
}

 /* our fuction or the jumping action after we click will not happen yet. To make it happen we need to go to html file and there 
 we have to add onclick thing in html tag*/

 /* Our dinasour jumped only once when we clicked because When I clicked javascript fuction added the animation and animation ran once
  as we can not readd the same class twice, so now we need to remove the class once we are done running the animation*/

 /* So we are gonna set an interval and I am gonna run a function and I am going to do it after 500 miliseconds as that is how long 
 the animation takes place to run as after 500 ms our animation is done and removes the animation class.*/

 /* the exact the same way we add the class, we remove the class. Except just we change "add" to "remove" */

 /* Now we can jump as many as we want but there the problem is that it(javascript function) will keep adding the class over and over again so we only wonna add the class animate if it has not already been added*/  
 
 /* Now we have to hit detction thing to detect it they (character) dinasour and (block) cactus are on top of each other or not. If they are top of each other then you will loose*/
 
 /* So we are gonna run a function that runs every 10 milliseconds that checks whether you have lost or not.*/


 var checkDead = setInterval(function(){
     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

     var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     if(blockleft<20 && blockLeft>0 &&  characterTop>=130){
     block.style.animation = "none";/*It stops the animaation after dinasour or red character and the cactus or the blue block hit eaach other*/
     block.style.display = "none"; /* Now we don't see it anymore*/
     alert("u lose.");
      }   
    },10);           /*that is cactus or blue block is directly under the dinasour or the red character*/
                  /* that is the user have jumped less than 20px so the user have to jumped over the entire block*/
                  /* if all three conditions are met that means the two blocks are hitting each other hence you lose*/ 



 /* Now the first thing that we wonna do inside the function is to get the top position of the character and the left position of the block*/
 /* so we get the top position of the character by doing this */
/*above all code will return the top position of the character */
/* Top position of the still character is 150px and when I click it goes up to 100px and then it goes back to 50px and every single time we evaluates this function the top postion will be bit higher and then go down back and then again up and down*/
/* So basically we are calculating the top position and then we want to calculate the left position of the block and then we compare them each other and we see if they are inside of each other or not i.e if they are hitting each other or not.*/
   