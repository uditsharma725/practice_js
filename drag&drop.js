console.log("Drag and Drop feature in html 5");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.querySelectorAll('.whiteBox');

//drag start on image box:
imgBox.addEventListener('dragstart', (e)=> {
    console.log('drag start has been triggered');
    e.target.className += ' hold';                  //space before hold to seperate classes
    setTimeout(()=> {
        e.target.className = ' hide';    
    }, 0);                          //'0'-> means it would execute at the end 
});

//drag stop on image box:
imgBox.addEventListener('dragend', (e)=> {
    console.log('drag end has been triggered');
    e.target.className = 'imgBox';                  //this would remove the border

});


//drag over on white boxes:
for(box of whiteBoxes) {
    box.addEventListener('dragover', (e)=> {
        e.preventDefault();
        console.log('drag over has been triggered');
    });
    
    box.addEventListener('dragenter', (e)=> {
        console.log('drag enter has been triggered');
        e.target.className += ' dashed';
    });
    
    box.addEventListener('dragleave', (e)=> {
        console.log('drag leave has been triggered');
        e.target.className = 'whiteBox';
    });
    
    box.addEventListener('drop', (e)=> {
        console.log('drop has been triggered');
        e.target.append(imgBox);
        e.target.className = 'whiteBox';
    });
}