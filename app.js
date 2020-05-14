const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');


let totalExpenses = 0;

const clear = () =>{
    reasonInput.value = '';
    reasonAmount.value= '';
}

confirmBtn.addEventListener('click',() =>{
 
const enterdReason = reasonInput.value;
const enterdAmount = reasonAmount.value;

if (enterdReason.trim().length <=0 || 
    enterdAmount <= 0 || 
    enterdAmount.trim().length <=0)
    {
        
            const alert = document.createElement('ion-alert');
            alert.header = 'Invalid data';
            alert.message = 'Please enter a valid reason and amount';
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();
          

            return;
}       

const newItem = document.createElement('ion-item');
newItem.textContent = enterdReason + ': $' + enterdAmount;

expenseList.appendChild(newItem);

totalExpenses += +enterdAmount;
totalExpensesOutput.textContent = totalExpenses;

clear ();
});

cancelBtn.addEventListener('click', clear);
