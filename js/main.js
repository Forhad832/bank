let depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function(){
   
    //deposit  feild take a value from input field
    const depositAmmount = document.getElementById("depositAmmount").value;
    const newDepositammount = parseFloat(depositAmmount);

    //width total balance update
    const deposit_Main_balance = document.getElementById("deposit_Main_balance").innerText;
    const newDeposit_Main_balance = parseFloat(deposit_Main_balance);

    //result total deposit
    const result = newDepositammount + newDeposit_Main_balance;

    document.getElementById("deposit_Main_balance").innerHTML = result;

    //increase main balance
    const main_balance = document.getElementById("main_balance").innerText;
    const new_Main_balance = parseFloat(main_balance);
    const total_balance = new_Main_balance + newDepositammount;
    document.getElementById("main_balance").innerHTML= total_balance;

    document.getElementById("depositAmmount").value= '';

});


document.getElementById("withdrawBtn").addEventListener("click", function(){
    //take input withdraw balance from input field
    const withdrawAmmount = document.getElementById("withdrawAmmount").value;
    const newWithdrawAmmount = parseFloat(withdrawAmmount);

    //take total balance in your bank balance
    const withdraw_Total = document.getElementById("withdraw_Total").innerText;
    const newWithdraw_total = parseFloat(withdraw_Total);

if(isNaN(newWithdrawAmmount)){
    alert("please input a valid number");
    return;
}
 //check widthdraw ammount 


    //calculate your balance
    const total_withdraw_balance = newWithdrawAmmount + newWithdraw_total;
    document.getElementById("withdraw_Total").innerText = total_withdraw_balance;
  
  


    //after calculate show balance in your main account
    const main_balance = document.getElementById("main_balance").innerText;
    const new_Main_balance = parseFloat(main_balance);
    const total_balance = new_Main_balance - newWithdrawAmmount;
    document.getElementById("main_balance").innerText = total_balance;

   

    //after click button then input field empty
    document.getElementById("withdrawAmmount").value = '';
})