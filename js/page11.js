let box = document.getElementsByClassName('box')
let imglogo = document.getElementById('imglogo')
function ToOpen(){
    Show();
}
let showBool = true
function Show(){    
    if(showBool){
        imglogo.src = './img/团购11_slices/g@2x(1).png'
        imglogo.width = 5
        imglogo.height = 8
        console.log(imglogo);
        box[0].style.display = 'none'
        box[1].style.display = 'none'
        box[2].style.display = 'none'
    }else{
        imglogo.src = './img/团购11_slices/g@2x(2).png'
        imglogo.width = 8
        imglogo.height = 5
        console.log(imglogo);
        box[0].style.display = 'flex'
        box[1].style.display = 'flex'
        box[2].style.display = 'flex'

    }
    showBool=!showBool
}