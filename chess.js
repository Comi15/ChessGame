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

//Function that shows where the pieces can move
function pieceMovement(toggle)
{
    var text;
    var rowId;
    var rowIdTemp;
    var columnId;
    var id;
    var item = document.querySelectorAll('.box').forEach(item=>{
        
            

        item.addEventListener('click',function(){
             id = item.id;

             if(item.innerText != '')
             {
                document.querySelectorAll('.box').forEach(item3=>{
                   if(id != item3.id && item3.innerText != '')
                   {
                       item3.style.backgroundColor = 'rgb(90, 6, 6)'
                   }
                })
             }
            for(let i = 0;i<matrix.length;i++)
            {
                var innerArrayLength = matrix[i].length;

                for(let j = 0; j < innerArrayLength; j ++)
                {
                    if (matrix[i][j] == id)
                    {
                        rowId = i;
                        rowIdTemp = i;
                        columnId = j;
                        console.log(i,j)
                    }

                    
                }
            }
            text = new String(item.innerText)
            console.log(id);
            console.log(text)
            if(text != '')
            {

                if(toggle == 'w')
                {
                    //Movement for the white player pawns
                    if(text == 'wPawn' && document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).innerText =='')
                    {

                        if(rowId == 1 && document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).innerText =='')
                        {
                            document.getElementById(`${matrix[rowId+=1][columnId]}`).style.backgroundColor = 'green'
                            document.getElementById(`${matrix[rowId+=1][columnId]}`).style.backgroundColor = 'green'                                              

                        }

                        else
                        {
                            document.getElementById(`${matrix[rowId+=1][columnId]}`).style.backgroundColor = 'green'
                        }
                    }


                    else  if(text == 'wKnight')
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
                        columndId +=1
                        }

                        if(rowId != 0 && columnId == 0)
                        {
                        document.getElementById(`${matrix[rowId+=1][columnId+=2]}`).style.backgroundColor = 'green'
                            rowId -= 1
                            columnId -= 2
                        }

                        if(rowId != 0 && columnId == 7)
                        {
                        document.getElementById(`${matrix[rowId+=1][columnId-=2]}`).style.backgroundColor = 'green'
                        rowId -= 1
                        columnId += 2
                        }

                    }


                }

                
                //Movement for the black player pawns

                else if(toggle == 'b')
                {
                     if (text == 'bPawn' && document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).innerText =='')
                    {

                        if(rowId == 6 && document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).innerText =='')
                        {
                            document.getElementById(`${matrix[rowId-=1][columnId]}`).style.backgroundColor = 'green'
                            document.getElementById(`${matrix[rowId-=1][columnId]}`).style.backgroundColor = 'green'
                        }

                        else
                        {
                            document.getElementById(`${matrix[rowId-=1][columnId]}`).style.backgroundColor = 'green'

                        }
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
                if(item2.style.backgroundColor == 'green' && item2.innerText == '')
                {
                    var audio = document.getElementById('audio');
                    audio.play()
                    document.getElementById(id).innerText = ''
                    item2.innerText = text                    
                    insertImgPiece()
                    coloring()
                    moveCount += 1
                    document.getElementById('event').innerText += 'sadsa'
                    
                                                                                                   
                   
                }
                
            })
           
                    
        })
        
    });
    
    
        
}





 
 checkTurn()   


//Preventing from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})






console.log(moveCount)
console.log(matrix)