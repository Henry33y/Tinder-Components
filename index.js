const bDayInputs = document.querySelectorAll('.birthday-input');
const imgArea = document.querySelectorAll('.img-area');
const imageUploader = document.querySelectorAll('.image-uploader')
const cancelButton = document.querySelectorAll('.cancel-button');
const purposes = document.querySelectorAll('.purpose')

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
    bDayInputs[i].addEventListener('input',()=>{
        if(bDayInputs[i].value.length > bDayInputs[i].maxLength){
            bDayInputs[i].value = bDayInputs[i].value.slice(0,bDayInputs[i].maxLength)
        }
    })
}

imageUploader.forEach(uploader => uploader.addEventListener('change',function(e){
    const image = this.files[0]
    const imgUrl = URL.createObjectURL(image)
    const uploadedImage = document.createElement('img');
    const Area = this.parentElement
    uploadedImage.classList.add('image')
    uploadedImage.src = imgUrl
    Area.append(uploadedImage)
    Area.classList.add('uploaded')
    cancelButton.forEach(button => button.addEventListener('click',function(e){
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.remove()
        e.target.parentElement.classList.remove('uploaded')

    }))
    console.log(imgUrl)
}))
console.log(cancelButton);

purposes.forEach(purpose => purpose.addEventListener('click',function(){
    for(let i = 0; i < purposes.length;i++){
        purposes[i].classList.remove('selected-purpose')
    }
    purpose.classList.toggle('selected-purpose')
}))