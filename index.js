const bDayInputs = document.querySelectorAll('.birthday-input');

console.log(bDayInputs)

for(let i =0;i<bDayInputs.length;i++){
    bDayInputs[i].addEventListener('keyup',function(e){
        let key = e.key;
        if(key >= 0 && key <= 9){
            if(bDayInputs[i].value.length==1){
                e.preventDefault()
                if(i+1!=8){
                    bDayInputs[i].nextElementSibling.focus()
                }
            }
        }
        else if(key === 'Backspace'){
            if(i-1!=-1){
                bDayInputs[i].previousElementSibling.focus()
            }
        }
        console.log(key)
    })
}