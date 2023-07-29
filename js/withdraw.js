document.getElementById("withdrawBtn").addEventListener("click", function(){
     const withdrawAmmount = getInputValueById('withdrawAmmount');

     const withdraw_Total = getElementTextById('withdraw_Total');
     const new_total_withdraw = withdraw_Total + withdrawAmmount;
     setElementById('withdraw_Total',new_total_withdraw);

     const main_balance = getElementTextById('main_balance');
     const new_main_balance = main_balance - withdrawAmmount;
     setElementById('main_balance',new_main_balance);

})