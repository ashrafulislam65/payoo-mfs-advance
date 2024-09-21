document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // const addMoney=getInputFieldValueById();
    // console.log(addMoney);
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    if(pinNumber===123)
    {
        const balance =getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText= newBalance;
    }
    else{
        alert('failed to add Money please try again')
    }
})