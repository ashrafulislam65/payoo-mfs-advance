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
        //add to transaction history
        const p = document.createElement('p');
        p.innerText=`Added: ${addMoney} Tk. Balance: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('failed to add Money please try again')
    }
})