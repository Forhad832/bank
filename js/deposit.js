document.getElementById("depositBtn").addEventListener("click", function(){
    const newDepositValue = getInputValueById('depositAmmount');

    
    const newDepositAmmount = getElementTextById('deposit_Main_balance');
    const result = newDepositAmmount + newDepositValue;
    setElementById('deposit_Main_balance',result);

   const main_balance = getElementTextById('main_balance');
   const total_main_balance = main_balance + newDepositValue;
   setElementById('main_balance',total_main_balance);
});