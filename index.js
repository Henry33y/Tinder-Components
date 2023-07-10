const bDayInputs = document.querySelectorAll('.birthday-input');
const imgArea = document.querySelectorAll('.img-area');
const imageUploader = document.querySelectorAll('.image-uploader')
const cancelButton = document.querySelectorAll('.cancel-button');
const purposes = document.querySelectorAll('.purpose')
const imageUploadPage = document.querySelector('.imageUpload-page')
const birthdayPage = document.querySelector('.birthday-page')
const purposePage = document.querySelector('.purpose-page')
const preferencePage = document.querySelector('.preference-page')
const next0 = document.getElementById('Next0')
const next1 = document.getElementById('Next1')
const next2 = document.querySelector('#Next2')
const next3 = document.getElementById('Next3')
const backIcon0 = document.querySelector('#backIcon0')
const backIcon1 = document.querySelector('#backIcon1')
const backIcon2 = document.querySelector('#backIcon2')
const backIcon3 = document.querySelector('#backIcon3')
const user = new Object()

console.log(user);



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
    })
    bDayInputs[i].addEventListener('input',()=>{
        if(bDayInputs[i].value.length > bDayInputs[i].maxLength){
            bDayInputs[i].value = bDayInputs[i].value.slice(0,bDayInputs[i].maxLength)
        }
        checkInputFields()
        if(bDayInputs[bDayInputs.length-1].value != '' && checkInputFields()){
            next0.classList.add('minLimit')
            next0.disabled = false
        }
        else{
            next0.classList.remove('minLimit')
            next0.disabled = true
        }
    })
}
function checkInputFields(){
    for(let j = 0; j<bDayInputs.length;j++){
        if(bDayInputs[j].value.trim() === ''){
            return false
        }
    }
    return true
}
next0.addEventListener('click',()=>{
    birthdayPage.style.display='none'
    purposePage.style.display = 'block'
})
next1.addEventListener('click',()=>{
    purposePage.style.display = 'none'
    preferencePage.style.display = 'block'
})
next2.addEventListener('click',()=>{
    preferencePage.style.display = 'none'
    imageUploadPage.style.display = 'block'
})
backIcon0.addEventListener('click',()=>{
    
})
backIcon1.addEventListener('click',()=>{
    purposePage.style.display = 'none'
    birthdayPage.style.display = 'block'
})
backIcon2.addEventListener('click',()=>{
    preferencePage.style.display = 'none'
    purposePage.style.display = 'block'
})
backIcon3.addEventListener('click',()=>{
    imageUploadPage.style.display = 'none'
    preferencePage.style.display = 'block'
})


imageUploader.forEach(uploader => uploader.addEventListener('change',function(e){
    const image = this.files[0]
    const imgUrl = URL.createObjectURL(image)
    const uploadedImage = document.createElement('img');
    const Area = this.parentElement
    uploadedImage.classList.add('image')
    uploadedImage.src = imgUrl
    Area.append(uploadedImage)
    Area.classList.add('uploaded')
    const imageArray = document.querySelectorAll('.image')
    if(imageArray.length >= 2){
        next3.classList.add('minLimit')
        next3.disabled = false
    }
    else{
        next3.classList.remove('minLimit')
        next3.disabled = true
    }
    cancelButton.forEach(button => button.addEventListener('click',function(e){
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.remove()
        e.target.parentElement.classList.remove('uploaded')
        if(imageArray.length >= 2){
            next3.classList.add('minLimit')
        }
        else{
            next3.classList.remove('minLimit')
        }

    }))
    
}))

purposes.forEach(purpose => purpose.addEventListener('click',function(){
    for(let i = 0; i < purposes.length;i++){
        purposes[i].classList.remove('selected-purpose')
    }
    purpose.classList.add('selected-purpose')
    next1.classList.add('minLimit')
    next1.disabled=false;
}))
const allPreferences = document.querySelector('.preference-wrapper')
const preferences = Array.from(allPreferences.children)
preferences.forEach(choice => choice.addEventListener('click',function(){
    choice.classList.toggle('selected-preference')
    let counter = document.querySelectorAll('.selected-preference').length
    const nextCounter = document.querySelector('#one')
    if(counter<=5){
        nextCounter.innerText = counter
    }
    if(counter>=5){
        next2.classList.add('minLimit')
        next2.disabled=false
    }
    else{
        next2.classList.remove('minLimit')
        next2.disabled=true
    }
}))
function slide(){

}