

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
                console.log("33");
                
            }else if(parseInt( number.value ) === 33 ){
                navigator.vibrate([700])
                // document.querySelector('.box-number').value = 0;
                document.querySelector('#zikr').innerText = "Alhamdulillah";
                console.log("33");
            }
            else if(parseInt( number.value ) === 66){
                navigator.vibrate([700])
                document.querySelector('#zikr').innerText = "Allahu Akbar";
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
