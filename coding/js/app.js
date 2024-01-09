const age =+prompt('Yoshingiz nechida ?', "")

if(age>30){
    alert(`saytga kirishingiz mumkin linkni consoldan olishingiz mumkin!`)
    console.log(`saytga kirishingiz mumkin link https://yandex.uz`);
}
else if(age> 20){
    alert("xali kichkina ekansiz");
}
else if(age == 18){
    alert("keyinroq urinib koring");
}
else{
   alert("sizga ruxsat berilmadi!");
}