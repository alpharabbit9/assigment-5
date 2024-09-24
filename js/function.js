const modal = document.getElementById('my_modal_1');

// ! Noakhali Donation
document.getElementById('btn-flood').addEventListener('click' , function(event)
{
    event.preventDefault();
    // const donationValue = document.getElementById('floodAmount').value ;
    // const donationNumber = parseFloat(donationValue);

    const donationAmount = getInputById('floodAmount');
    const totalBalance = getTextValueById('total-budget');
   

    if(donationAmount <= 0 || isNaN(donationAmount) || donationAmount > totalBalance)
    {
        
        alert('Enter a valid amount ');
        return ;
    }
    modal.showModal();
   

    const fundAmount =  getTextValueById('fundAmount');

    const newFund = fundAmount + donationAmount ;

    // console.log(newFund);

    const newBudget = totalBalance - donationAmount ;
    // console.log(newBudget);

    document.getElementById('total-budget').innerText = newBudget ;
    document.getElementById('fundAmount').innerText = newFund 
   


    // add to history log

    const div = document.createElement('div');
    // div.classList.add('bg-white border border-spacing-2 py-3 rounded-2xl')
    div.innerHTML = `
    <h3 class = "text-2xl font-semibold  "> ${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
    <p> Date : ${new Date().toLocaleString()} </p>
    <div class="divider"></div>
    `
    document.getElementById('history-section').appendChild(div)
    
})

// ? Feni Donation

document.getElementById('btn-feni').addEventListener('click',function(event){
    event.preventDefault() ;

    const inputAmount = getInputById('inputFeni');
    // console.log(inputAmount);

    const totalBalance = getTextValueById('total-budget'); 
    // console.log(totalBalance);

    if(inputAmount <= 0 || isNaN(inputAmount) || totalBalance < inputAmount){
        alert("Enter a valid amount");
        // modal.showModal();

        return ;
    }
    modal.showModal();

    const feniFund = getTextValueById('feniFund');
    // console.log(feniFund)
    const newFeniFund = feniFund + inputAmount ;
    
    console.log(newFeniFund);

    const newBudget = totalBalance - inputAmount ;

    console.log(newBudget);

    document.getElementById('total-budget').innerText = newBudget ;
    document.getElementById('feniFund').innerText = newFeniFund ;

    const div = document.createElement('div');
    // div.classList.add('bg-white border border-spacing-2 py-3 rounded-2xl')
    div.innerHTML = `
    <h3 class = "text-2xl font-semibold  "> ${inputAmount}Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
    <p> Date : ${new Date().toLocaleString()} </p>
    <div class="divider"></div>
    `
    document.getElementById('history-section').appendChild(div)



})

// * Quota Movement

document.getElementById('btn-quota').addEventListener('click',function(event){
    event.preventDefault();

    const quotaDonation = getInputById('quota-donation');
    // console.log(quotaDonation);

    const totalBalance = getTextValueById('total-budget');
    // console.log(totalBalance)

    if(quotaDonation <= 0 || isNaN(quotaDonation) || totalBalance < quotaDonation){
        alert("Enter a valid amount");
        // modal.showModal();
        return ;
    }
    modal.showModal();

    const quotaFund = getTextValueById('quota-fund');
    // console.log(quotaFund);

    const newQuotaFund = quotaDonation + quotaFund ;

    // console.log(newQuotaFund);

    const newBudget = totalBalance - quotaDonation ;

    // console.log(newBudget);

    document.getElementById('total-budget').innerText = newBudget ;
    document.getElementById('quota-fund').innerText = newQuotaFund ;

    const div = document.createElement('div');
    // div.classList.add('bg-white border border-spacing-2 py-3 rounded-2xl')
    div.innerHTML = `
    <h3 class = "text-2xl font-semibold  "> ${quotaDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
    <p> Date : ${new Date().toLocaleString()} </p>
    <div class="divider"></div>
    `
    document.getElementById('history-section').appendChild(div)

})

// ! Donation Page show

document.getElementById('show-donation-page')
.addEventListener('click',function(){
    
    showSectionById('donation-section');
    changeButtonColor('show-donation-page');

})

// ! Show history page

document.getElementById('show-history-page')
.addEventListener('click',function(){

    showSectionById('history-section');
    changeButtonColor('show-history-page');

})
