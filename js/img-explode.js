$(function () {

    $("#explode-me").css('position','relative');
    setTimeout(() => {

        let i = 0;
        let m = 1;
      let myInterval = setInterval(() => {
             if(m === 1) {

                 let random = Math.random()*1.5;

                 $("#explode-me").css('top',`${random}rem`);
                 m = 0;
             } else {
                 let random = Math.random()*2;
                 $("#explode-me").css('left',`${random}rem`);
                 m = 1;
             }
             i++;
             // console.log(m);

             if(i > 10){
                 $("#explode-me").css('filter','saturate(800%)');
             }


          if(i > 20){
              $("#explode-me").css('filter','saturate(2200%)');
          }

             if(i === 60) {

                 $("#explode-me").explode({
                     "minWidth": 3,
                     "maxWidth": 12,
                     "radius": 400,
                     "minRadius": 15,
                     "release": false,
                     "fadeTime": 300,
                     "recycle": false,
                     "recycleDelay": 500,
                     "explodeTime": 400,
                     "round": false,
                     "minAngle": 0,
                     "maxAngle": 360,
                     "gravity": 10,
                     "groundDistance": 400
                 });

                 clearInterval(myInterval);

             }


         },50);






    },500);





});


