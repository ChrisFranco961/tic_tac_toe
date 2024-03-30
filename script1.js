let game={
    chooseplayer: function(){
        let player1;
        player1=document.getElementById('player1')
        playerone=player1.value
        let player2
        player2=document.getElementById('player2')
        playertwo=player2.value
        let start
        start=document.getElementById('start')
        start.style.display='none'
        document.getElementById('name1').innerText=playerone
        document.getElementById('name2').innerHTML=playertwo

    },
    X:document.createTextNode('X'),
    O:document.createTextNode('O'),
    turn:1,
    gamecontainer:document.getElementById('game_container'),
    
    increment: function(){
        game.turn++
    },

    draw: function(){
        if(game.square1.innerText && game.square2.innerText && game.square3.innerText && game.square4.innerText && game.square5.innerText && game.square6.innerText && game.square7.innerText && game.square8.innerText && game.square9.innerText !=''){
            document.getElementById('result').innerText='Draw!'
            game.roundend()
        }
    },

        
    square1:document.getElementById('1'),
    square2:document.getElementById('2'),
    square3:document.getElementById('3'),
    square4:document.getElementById('4'),
    square5:document.getElementById('5'),
    square6:document.getElementById('6'),
    square7:document.getElementById('7'),
    square8:document.getElementById('8'),
    square9:document.getElementById('9'),

    roundend: function(){
        game.square1.innerText=game.square2.innerText=game.square3.innerText=game.square4.innerText=game.square5.innerText=game.square6.innerText=game.square7.innerText=game.square8.innerText=game.square9.innerText=''
    
    },
    Resetgame:function(){
        game.square1.innerText=game.square2.innerText=game.square3.innerText=game.square4.innerText=game.square5.innerText=game.square6.innerText=game.square7.innerText=game.square8.innerText=game.square9.innerText=''
        document.getElementById('result').innerText=''
        document.getElementById('score_x').innerHTML='0'
        document.getElementById('score_o').innerHTML='0'

    },
    xwin: function (){
        document.getElementById('score_x').innerHTML++
    },
    owin: function (){
        document.getElementById('score_o').innerHTML++
    },




check: function(){
    
    
        if(game.square1.innerText=='X' && game.square2.innerText=='X' && game.square3.innerText=='X'){
            document.getElementById('result').innerText=playerone +' Wins!'
            game.xwin()
            game.roundend()}
            else if(game.square4.innerText=='X' && game.square5.innerText=='X' && game.square6.innerText=='X'){
                document.getElementById('result').innerText=playerone +' Wins!'
                game.xwin()
                game.roundend()}
                else  if(game.square7.innerText=='X' && game.square8.innerText=='X' && game.square9.innerText=='X'){
                    document.getElementById('result').innerText=playerone +' Wins!'
                    game.xwin()
                    game.roundend()}
                    else  if(game.square1.innerText=='X' && game.square5.innerText=='X' && game.square9.innerText=='X'){
                        document.getElementById('result').innerText=playerone +' Wins!'
                        game.xwin()
                        game.roundend()}
                        else  if(game.square3.innerText=='X' && game.square5.innerText=='X' && game.square7.innerText=='X'){
                            document.getElementById('result').innerText=playerone +' Wins!'
                            game.xwin()
                            game.roundend()}
                           else if(game.square1.innerText=='X' && game.square4.innerText=='X' && game.square7.innerText=='X'){
                            document.getElementById('result').innerText=playerone +' Wins!'
                            game.xwin()
                            game.roundend()}
                           else if(game.square2.innerHTML=='X' && game.square5.innerHTML=='X' && game.square8.innerHTML=='X'){
                            document.getElementById('result').innerText=playerone +' Wins!'
                            game.xwin() 
                            game.roundend()}else if(game.square3.innerHTML=='X' && game.square6.innerHTML=='X' && game.square9.innerHTML=='X'){
                            document.getElementById('result').innerText=playerone +' Wins!'
                            game.xwin()
                            game.roundend()}
                            else if(game.square1.innerText=='O' && game.square2.innerText=='O' && game.square3.innerText=='O'){
                                 document.getElementById('result').innerText=playertwo +' Wins!'
                                 game.owin()
                                 game.roundend()}
                                else if(game.square4.innerText=='O' && game.square5.innerText=='O' && game.square6.innerText=='O'){
                                     document.getElementById('result').innerText=playertwo +' Wins!'
                                     game.owin()
                                     game.roundend()}
                                    else if(game.square7.innerText=='O' && game.square8.innerText=='O' && game.square9.innerText=='O'){
                                         document.getElementById('result').innerText=playertwo +' Wins!'
                                         game.owin()
                                         game.roundend()}
                                        else if(game.square1.innerText=='O' && game.square5.innerText=='O' && game.square9.innerText=='O'){
                                             document.getElementById('result').innerText=playertwo +' Wins!'
                                             game.owin()
                                             game.roundend()}
                                            else if(game.square3.innerText=='O' && game.square5.innerText=='O' && game.square7.innerText=='O'){
                                                 document.getElementById('result').innerText=playertwo +' Wins!'
                                                 game.owin()
                                                 game.roundend()}
                                                 else  if(game.square1.innerText=='O' && game.square4.innerText=='O' && game.square7.innerText=='O'){
                                                    document.getElementById('result').innerText=playertwo +' Wins!'
                                                    game.owin()
                                                    game.roundend()}
                                                    else  if(game.square2.innerText=='O' && game.square5.innerText=='O' && game.square8.innerText=='O'){
                                                        document.getElementById('result').innerText=playertwo +' Wins!'
                                                        game.owin()
                                                        game.roundend()}
                                                        else  if(game.square3.innerText=='O' && game.square6.innerText=='O' && game.square9.innerText=='O'){
                                                            document.getElementById('result').innerText=playertwo +' Wins!'
                                                            game.owin()
                                                            game.roundend()}
                            
                                                
                            },

                            playerclick:function(square){
                                let value=square.innerText
                                
                    
                                if(value==''){
                                    
                                    if(game.turn%2==0){
                                        square.innerText='X'
                                         
                                     
                                    }else {square.innerText="O"
                                     }

                                    game.check()
                                    game.draw()
                                    game.increment()
                        
                                    
                            }
                        },
                   
                            
}
            

