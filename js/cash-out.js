document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    if(isNaN(cashOut))
    {
        alert('Failed to cash out')
        return;
    }
    if(pinNumber===123)
    {
        const balance = getTextFieldValueById('account-balance');
        if(cashOut>balance){
            alert('you do not have enough money to cash out');
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText=newBalance;
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML=`
        <h4 class="text-2xl font-bold">cash out</h4>
        <p>${cashOut} withdraw. New balance ${newBalance}`
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('failed to cash out please try again')
    }

})