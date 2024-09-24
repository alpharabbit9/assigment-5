//  ! Function to get value by id
function getInputById(id)
{
    const inputValue = document.getElementById(id).value ;
    const inputNumber =parseFloat(inputValue);

    return inputNumber ;

}

// ! function to get innerText by id
function getTextValueById(id)
{
    const donationValue = document.getElementById(id).innerText ;
    const donationNumber = parseFloat(donationValue);
    return donationNumber ;
}

// ! Function to show clicked section


function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}

function changeButtonColor(id){
    
    document.getElementById('show-donation-page').classList.remove('color1');
    document.getElementById('show-history-page').classList.remove('color1');
   
    document.getElementById(id).classList.add('color1');
}
