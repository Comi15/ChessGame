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