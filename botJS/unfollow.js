let cont = 0;
document.querySelectorAll('._8A5w5').forEach((v,i) => {
    setTimeout(() => {
        if(v.innerText == 'Following') {
            v.click();
            document.querySelectorAll('.-Cab_').forEach((v,i) => {
                if(v.innerText == "Unfollow"){
                    v.click();
                    cont++
                    console.log('Numero de desseguidas ' + cont);
                }
            })
        }
    }, i * 10000)
})
