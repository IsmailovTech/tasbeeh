        const audio = new Audio();
        audio.src = "./mp3/zikr.mp3"

        const audio1 = new Audio();
        audio1.src = "./mp3/alhamdulillah.mp3"

        const audio2 = new Audio();
        audio2.src = "./mp3/allohuakbar.mp3"

        function vibrate (ms){
            navigator.vibrate(ms)
        }

        
        document.querySelector('.count').addEventListener('click', function(){
            var number = document.querySelector('.box-number');
            console.log( typeof parseInt( number.value ) );
            number.value = parseInt( number.value ) + 1 ;
            

            if( parseInt( number.value ) === 1 && parseInt( number.value ) > 0){
                navigator.vibrate([100])
                // document.querySelector('.box-number').value = 0;
                document.querySelector('#zikr').innerText = "Subhanalloh";
                document.querySelector('#play').audio = audio;
                console.log("33");
                
            }else if(parseInt( number.value ) === 33 ){
                navigator.vibrate([700])
                // document.querySelector('.box-number').value = 0;
                document.querySelector('#zikr').innerText = "Alhamdulillah";
                document.querySelector('#play').audio = audio1;
                console.log("33");
            }
            else if(parseInt( number.value ) === 66){
                navigator.vibrate([700])
                document.querySelector('#zikr').innerText = "Allahu Akbar";
                document.querySelector('#play').audio = audio2;
                console.log("66");
            }
            else if(parseInt( number.value ) === 99){
                navigator.vibrate([700])
                document.querySelector('#zikr').innerText = "";
                console.log("99");
            }
            
        });


        document.querySelector('.reset').addEventListener('click', function(){
            navigator.vibrate([100])
            document.querySelector('.box-number').value = 0;
            document.querySelector('#zikr').innerText = "";
        })
