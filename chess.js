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
    console.log("Usao u coloring")
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



//Function that shows where the pieces can move and moves them
function pieceMovement()
{
   
    
    var toggle = 'w';
    var text;
    var rowId;
    var rowIdTemp;
    var columnIdTemp;
    var columnId;
    var id;
    
    
    var item = document.querySelectorAll('.box').forEach(item=>{
        
            

             item.addEventListener('click',function(e){
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
                    if(text == 'wPawn' && toggle == 'w')
                    {

                       console.log("Usao u if whitePawn")
                        if(rowId == 1 && document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).innerText == '' )
                        {                           
                            document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'                           
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).innerText == '')
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'
                                
                            }
                                                                                              
                            rowIdTemp-=2
                        }
                        
                        
                     else if(rowId != 1)
                        {
                            if(rowId!=1 && document.getElementById(`${matrix[rowIdTemp+=1][columnId]}`).innerText =='') 
                            {                          
                                document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'
                                

                            }

                            rowIdTemp-=1
                        }
                        
                     else
                     {
                         rowIdTemp -= 1
                     }                        
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

                    //knights movement logic
                      if(text == 'wKnight' && toggle == 'w' || text == 'bKnight' && toggle == 'b')
                    {
                      
                        if(rowId > 1 && rowId < 6 && columnId > 1 && columnId < 6)
                        {
                            // + 1 row two columns right jump
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp -= 1
                            columnIdTemp -= 2
                            // + 1 row two columns left jump
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp -= 1
                            columnIdTemp += 2
                            // + 2 rows 1 column jump right
                            if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp -= 2
                            columnIdTemp -= 1
                            // + 2 rows 1 column jump left
                            if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp -= 2
                            columnIdTemp += 1

                            // - 1 row 2 columns jump right
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 1
                            columnIdTemp -= 2

                            // - 1 row 2 columns jump left
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 1
                            columnIdTemp += 2

                            // - 2 rows 1 column jump right
                            if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 2
                            columnIdTemp -= 1

                            // - 2 rows 1 column jump left
                            if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 2
                            columnIdTemp += 1

                        }


                        if(rowId == 0 && columnId == 6)
                        {
                             
                               // + 1 row two columns left jump
                              if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                              {
                                  document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                              }
  
                              rowIdTemp -= 1
                              columnIdTemp += 2
                              // + 2 rows 1 column jump right
                              if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                              {
                                  document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                              }
  
                              rowIdTemp -= 2
                              columnIdTemp -= 1
                              // + 2 rows 1 column jump left
                              if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                              {
                                  document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                              }
  
                              rowIdTemp -= 2
                              columnIdTemp += 1
                        }

                        if(rowId == 0 && columnId == 1)
                        {
                             // + 1 row two columns right jump
                             if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp -= 1
                             columnIdTemp -= 2

                             // + 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp -= 1
                             // + 2 rows 1 column jump left
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp += 1

                        }

                        if(rowId == 1 && columnId > 1 && columnId < 6)
                        {
                            // + 1 row two columns right jump
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp -= 1
                            columnIdTemp -= 2
                            // + 1 row two columns left jump
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp -= 1
                            columnIdTemp += 2
                            // + 2 rows 1 column jump right
                            if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp -= 2
                            columnIdTemp -= 1
                            // + 2 rows 1 column jump left
                            if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp -= 2
                            columnIdTemp += 1

                             // - 1 row 2 columns jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 1
                             columnIdTemp -= 2
 
                             // - 1 row 2 columns jump left
                             if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 1
                             columnIdTemp += 2
                        }

                        if(rowId == 7 && columnId == 1)
                        {
                             // - 1 row 2 columns jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 1
                             columnIdTemp -= 2
                              
                             // - 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 2
                             columnIdTemp -= 1
 
                             // - 2 rows 1 column jump left
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 2
                             columnIdTemp += 1
                        }

                        if(rowId == 7 && columnId == 6)
                        {
                             
                              // - 1 row 2 columns jump left
                              if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                              {
                                  document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                              }
                              rowIdTemp += 1
                              columnIdTemp += 2
  
                              // - 2 rows 1 column jump right
                              if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                              {
                                  document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                              }
                              rowIdTemp += 2
                              columnIdTemp -= 1
  
                              // - 2 rows 1 column jump left
                              if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                              {
                                  document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                              }
                              rowIdTemp += 2
                              columnIdTemp += 1
                        }

                        if(rowId == 6 && columnId > 1 && columnId < 6)
                        {
                            // - 1 row 2 columns jump right
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 1
                            columnIdTemp -= 2

                            // - 1 row 2 columns jump left
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 1
                            columnIdTemp += 2

                            // - 2 rows 1 column jump right
                            if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 2
                            columnIdTemp -= 1

                            // - 2 rows 1 column jump left
                            if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 2
                            columnIdTemp += 1


                             // + 1 row two columns right jump
                             if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp -= 1
                             columnIdTemp -= 2
                             // + 1 row two columns left jump
                             if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 1
                             columnIdTemp += 2
                        }

                        if(rowId == 0 && columnId == 0)
                        {
                             // + 1 row two columns right jump
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp -= 1
                            columnIdTemp -= 2
                            
                             // + 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp -= 1
                        }

                        if(columnId == 1 && rowId > 1 && rowId < 6)
                        {
                             // + 1 row two columns right jump
                             if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp -= 1
                             columnIdTemp -= 2
                        
                             // + 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp -= 1
                             // + 2 rows 1 column jump left
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp += 1
 
                             // - 1 row 2 columns jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 1
                             columnIdTemp -= 2
 
                           
 
                             // - 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 2
                             columnIdTemp -= 1
 
                             // - 2 rows 1 column jump left
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 2
                             columnIdTemp += 1
                        }


                        if(columnId == 6 && rowId > 1 && rowId < 6)
                        {
                            
                             // + 1 row two columns left jump
                             if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 1
                             columnIdTemp += 2
                             // + 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp -= 1
                             // + 2 rows 1 column jump left
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp += 1
 
                             
 
                             // - 1 row 2 columns jump left
                             if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 1
                             columnIdTemp += 2
 
                             // - 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 2
                             columnIdTemp -= 1
 
                             // - 2 rows 1 column jump left
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 2
                             columnIdTemp += 1
                        }

                        if(rowId == 0 && columnId == 7)
                        {
                             // + 1 row two columns left jump
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp -= 1
                            columnIdTemp += 2
                            
                             // + 2 rows 1 column left right
                             if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp -= 2
                             columnIdTemp += 1
                        }

                        if(rowId == 7 && columnId == 7)
                        {
                             // - 1 row two columns left jump
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 1
                            columnIdTemp += 2
                            
                             // - 2 rows 1 column left right
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp += 2
                             columnIdTemp += 1
                        }

                        if(rowId == 7 && columnId == 0)
                        {
                             // - 1 row two columns right jump
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 1
                            columnIdTemp -= 2
                            
                             // - 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp += 2
                             columnIdTemp -= 1
                        }

                        if(columnId == 0 && rowId > 1 && rowId < 6)
                        {
                             // + 1 row two columns right jump
                             if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp -= 1
                             columnIdTemp -= 2

                              // + 2 rows 1 column jump right
                            if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp -= 2
                            columnIdTemp -= 1

                              // - 1 row two columns right jump
                              if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                              {
                                  document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                              }
                              rowIdTemp += 1
                              columnIdTemp -= 2

                               // - 2 rows 1 column jump right
                             if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
 
                             rowIdTemp += 2
                             columnIdTemp -= 1
                        }

                        if(columnId == 7 && rowId > 1 && rowId < 6)
                        {
                            // + 1 row two columns left jump
                            if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp -= 1
                            columnIdTemp += 2

                             // + 2 rows 1 column left right
                           if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                           {
                               document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                           }

                           rowIdTemp -= 2
                           columnIdTemp += 1

                             // - 1 row two columns left jump
                             if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                             {
                                 document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                             }
                             rowIdTemp += 1
                             columnIdTemp += 2

                              // - 2 rows 1 column jump left
                            if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                            }

                            rowIdTemp += 2
                            columnIdTemp += 1
                        }

                        if(columnId == 1 && rowId == 1)
                        {
                               // + 2 rows 1 column jump left
                               if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                               {
                                   document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                               }
   
                               rowIdTemp -= 2
                               columnIdTemp += 1

                                // + 2 rows 1 column jump right
                                if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
    
                                rowIdTemp -= 2
                                columnIdTemp -= 1

                                  // +1 row two columns right jump
                                if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp -= 1
                                columnIdTemp -= 2

                                // - 1 row two columns right jump
                                if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp += 1
                                columnIdTemp -= 2
                        }

                        if(columnId == 6 && rowId == 1)
                        {
                               // + 2 rows 1 column jump left
                               if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                               {
                                   document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                               }
   
                               rowIdTemp -= 2
                               columnIdTemp += 1

                                // + 2 rows 1 column jump right
                                if(document.getElementById(`${matrix[rowIdTemp+=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
    
                                rowIdTemp -= 2
                                columnIdTemp -= 1

                                  // +1 row two columns right jump
                                if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp -= 1
                                columnIdTemp += 2

                                // - 1 row two columns left jump
                                if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp += 1
                                columnIdTemp += 2
                        }


                        if(columnId == 6 && rowId == 6)
                        {
                               // - 2 rows 1 column jump left
                               if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                               {
                                   document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                               }
   
                               rowIdTemp += 2
                               columnIdTemp += 1

                                // - 2 rows 1 column jump right
                                if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
    
                                rowIdTemp += 2
                                columnIdTemp -= 1

                                  // -1 row two columns right jump
                                if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp += 1
                                columnIdTemp += 2

                                // + 1 row two columns left jump
                                if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp-=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp -= 1
                                columnIdTemp += 2
                        }


                        if(columnId == 1 && rowId == 6)
                        {
                               // - 2 rows 1 column jump left
                               if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp-=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                               {
                                   document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                               }
   
                               rowIdTemp += 2
                               columnIdTemp += 1

                                // - 2 rows 1 column jump right
                                if(document.getElementById(`${matrix[rowIdTemp-=2][columnIdTemp+=1]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
    
                                rowIdTemp += 2
                                columnIdTemp -= 1

                                  // -1 row two columns right jump
                                if(document.getElementById(`${matrix[rowIdTemp-=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp += 1
                                columnIdTemp -= 2

                                // + 1 row two columns right jump
                                if(document.getElementById(`${matrix[rowIdTemp+=1][columnIdTemp+=2]}`).innerText[0] != firstLetter && document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText != '' ||document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).innerText == '' )
                                {
                                    document.getElementById(`${matrix[rowIdTemp][columnIdTemp]}`).style.backgroundColor = 'green'
                                }
                                rowIdTemp -= 1
                                columnIdTemp -= 2
                        }


                    }
               
               
                //Movement for the black player pawns

                   
                     if (text == 'bPawn' && toggle == 'b' )
                    {

                        if(rowId == 6 && document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).innerText =='')
                        {
                            document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'
                            if(document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).innerText == '')
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'
                            }
                            rowIdTemp += 2
                        }

                        else if(rowId != 6)
                        {
                             if( document.getElementById(`${matrix[rowIdTemp-=1][columnId]}`).innerText =='' )
                            {
                                document.getElementById(`${matrix[rowIdTemp][columnId]}`).style.backgroundColor = 'green'

                            }
                            rowIdTemp += 1
                        }

                        else
                        {
                            rowIdTemp += 1
                        }
                        
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
                    if(moveCount %2 != 0)
                    {
                        tog = document.getElementById('tog');
                        tog.innerText = "White's turn"
                        tog.style.color = "white"
                        console.log("Usao u muv kaunt if")
                        toggle = 'w'
                       
                        
                    }
                
                    if(moveCount %2 == 0)
                    {
                        tog = document.getElementById('tog');
                        tog.innerText = "Black's turn"
                        tog.style.color = "black"
                        console.log('Usao u muv kaunt crni if')
                        toggle = 'b'
                                                
                    }
                                      
                                                                                                                                                                                                                 
                }

                
            })           
                    
        })
        
    });
    
    
         
}


//main function of the program call
pieceMovement()

 

    

// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        console.log('Ovo je : ' + z)
        if (z % 2 == 0) {
            z = 0
            coloring()
           
            
        }
    })
})

