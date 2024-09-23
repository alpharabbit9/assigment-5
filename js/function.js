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

    const fundAmount =  getTextValueById('fundAmount');

    const newFund = fundAmount + donationAmount ;

    // console.log(newFund);

    const newBudget = totalBalance - donationAmount ;
    // console.log(newBudget);

    document.getElementById('total-budget').innerText = newBudget ;
    document.getElementById('fundAmount').innerText = newFund
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
        return ;
    }

    const feniFund = getTextValueById('feniFund');
    // console.log(feniFund)
    const newFeniFund = feniFund + inputAmount ;
    
    console.log(newFeniFund);

    const newBudget = totalBalance - inputAmount ;

    console.log(newBudget);

    document.getElementById('total-budget').innerText = newBudget ;
    document.getElementById('feniFund').innerText = newFeniFund ;



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
        return ;
    }

    const quotaFund = getTextValueById('quota-fund');
    // console.log(quotaFund);

    const newQuotaFund = quotaDonation + quotaFund ;

    // console.log(newQuotaFund);

    const newBudget = totalBalance - quotaDonation ;

    // console.log(newBudget);

    document.getElementById('total-budget').innerText = newBudget ;
    document.getElementById('quota-fund').innerText = newQuotaFund ;

})
