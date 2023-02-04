function insertImgPiece()
{
    document.querySelectorAll('.box').forEach(img=>{
        
        if(img.innerText.length !== 0)
        {
            img.innerHTML = `${img.innerText} <img class='img' src="${img.innerText}.png" alt="">`
            img.style.cursor = 'pointer'
             
        }
    })
}

insertImgPiece();


function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = ' rgb(209, 188, 142)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(80, 43, 9)'
        }

    })
}



//matrix of chess squares
let matrix = []
let j = 0
let n = 7

//pushing all box Id's in an array
var boxesIdArr = new Array()
document.querySelectorAll('.box').forEach(box=>{
    
    boxesIdArr.push(box.id)
    
})

console.log(boxesIdArr)

//filling the matrix of the chess board with box Id's
for (var i = 0; i<8;i++)
{
    temp = boxesIdArr.splice(0,8)
    matrix[i] =temp;
    j+=7
    n+=7

}



//turn counter
var moveCount = 1
function checkTurn()
{
    if(moveCount %2 != 0)
    {
        tog = document.getElementById('tog');
        tog.innerText = "White's turn"
        tog.style.color = "white"
        console.log("Usao u muv kaunt if")
        pieceMovement('w')
        
    }

    if(moveCount %2 == 0)
    {
        tog = document.getElementById('tog');
        tog.innerText = "Black's turn"
        tog.style.color = "black"
        console.log('Usao u muv kaunt crni if')
        pieceMovement('b')
        
    }

}


//Function that shows where the pieces can move and moves them
function pieceMovement(toggle)
{
     
    console.log('Toggle : ' + toggle)
    var text;
    var rowId;
    var rowIdTemp;
    var columnIdTemp;
    var columnId;
    var id;
    var counterClc = 0
    
    var item = document.querySelectorAll('.box').forEach(item=>{
        
            

        item.addEventListener('click',function(){
             id = item.id;
               
             
            for(let i = 0;i<matrix.length;i++)
            {
                var innerArrayLength = matrix[i].length;

                for(let j = 0; j < innerArrayLength; j ++)
                {
                    if (matrix[i][j] == id)
                    {
                        rowId = i;
                        rowIdTemp = i;
                        columnIdTemp = j
                        columnId = j;
                        console.log(i,j)
                    }

                    
                }
            }
            text = new String(item.innerText)
            firstLetter = text.substring(0,1)
            console.log("First letter is : " + firstLetter)
            console.log(id);
            console.log(text)
            if(text != '')
            {
                
              
                    
                    //Movement for the white player pawns
                    if(text == 'wPawn')
                    {

                       console.log("Usao u if whitePawn")
                        if(rowId == 1 && document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).innerText =='')
                        {                           
                            document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'
                            document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).style.backgroundColor = 'green'
                            rowIdTemp-=2
                                                                    

                        }
                            
                        if(rowId != 7)
                        {
                            if(rowId!=1 && document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).innerText =='') 
                            {                          
                                document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'


                            }
                        }

                        rowIdTemp-=1
                        //White pawn eat pattern                       
                        if(columnId != 7 && rowId!=7)
                        {
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '')
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp-=1
                             columnIdTemp-=1
                        }
                       
                        
                        if(columnId != 0 && rowId != 7)
                        {

                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' )
                            {
                                
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            columnIdTemp+=1
                            rowIdTemp-=1
                        }
                       
                    }


                      if(text == 'wKnight')
                    {
                        //forward for the white
                        if(columnId != 0)
                        {
                        document.getElementById(`${matrix[rowId+=2][columnId-=1]}`).style.backgroundColor = 'green'
                        rowId -=2
                        columnId += 1
                        }
                        //forward for the white
                        if(columnId != 7)
                        {
                        document.getElementById(`${matrix[rowId+=2][columnId+=1]}`).style.backgroundColor = 'green'
                        rowId -=2
                        columnId -= 1
                        }    
                        if(rowId != 0 && columnId != 7)
                        {
                        // back for the white
                        document.getElementById(`${matrix[rowId-=2][columnId+=1]}`).style.backgroundColor = 'green'
                        rowId +=2
                        columnId -= 1
                        }

                        if(rowId != 0 && columnId != 0)
                        {
                        // back for the white
                        document.getElementById(`${matrix[rowId-=2][columnId-=1]}`).style.backgroundColor = 'green'
                        rowId +=2
                        columnId +=1
                        }

                        if(rowId != 0 && columnId == 0)
                        {
                        document.getElementById(`${matrix[rowId+=1][columnId+=2]}`).style.backgroundColor = 'green'
                            rowId -= 1
                            columnId -= 2
                            document.getElementById(`${matrix[rowId-=1][columnId+=2]}`).style.backgroundColor = 'green'
                            rowId += 1
                            columnId -= 2
                        }

                        if(rowId != 0 && columnId == 7)
                        {
                        document.getElementById(`${matrix[rowId+=1][columnId-=2]}`).style.backgroundColor = 'green'
                        rowId -= 1
                        columnId += 2
                        document.getElementById(`${matrix[rowId-=1][columnId-=2]}`).style.backgroundColor = 'green'
                        rowId += 1
                        columnId += 2
                        }

                        

                    }


                

                
                //Movement for the black player pawns

                   
                     if (text == 'bPawn' )
                    {

                        if(rowId == 6 && document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).innerText =='')
                        {
                            document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'
                            document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).style.backgroundColor = 'green'
                            rowIdTemp+=2
                        }

                        if(rowId != 0)
                        {
                             if(rowId != 6 && document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).innerText =='' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'

                            }
                        }
                        rowIdTemp+=1
                        //Black pawn eating pattern
                        if(columnId != 7 && rowId != 0)
                        {
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '')
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp+=1
                            columnIdTemp-=1
                        }
                        
                        
                        if(columnId != 0 && rowId != 0)
                        {
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '')
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            columnIdTemp+=1
                            rowIdTemp+=1
                        }

                        
                        
                    }
               

                         
            }
            else
            {
                console.log('break')
               
            }
           
        })
        
        //code for moving the piece
        document.querySelectorAll('.box').forEach(item2=>{
            item2.addEventListener('click',function(){                                                         
                
                if(item2.style.backgroundColor == 'green')
                {
                                                              
                    var audio = document.getElementById('audio');
                    audio.play()
                    document.getElementById(id).innerText = ''
                    item2.innerText = text                    
                    insertImgPiece()
                    coloring()
                    moveCount += 1
                                    
                                                                                                                     
                   
                }

                
            })           
                    
        })
        
    });
    
    
         
}





 
 checkTurn()
    

// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        console.log('Ovo je : ' + z)
        if (z % 2 == 0) {
            coloring()
            
        }
    })
})

