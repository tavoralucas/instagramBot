let arr = document.querySelectorAll('.L3NKy');
arr.forEach((v,i) => {
    setTimeout(() => {
        if(!v.classList.contains('._8A5w5')){
            v.click();
            cont++;
            console.log('Profile follow ' + cont + 'profiles');
       } else{
            console.log('U already followed this profile');}
       }, i * 15000) //amount follows
});
