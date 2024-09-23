function getInputById(id)
{
    const inputValue = document.getElementById(id).value ;
    const inputNumber =parseFloat(inputValue);

    return inputNumber ;

}

function getTextValueById(id)
{
    const donationValue = document.getElementById(id).innerText ;
    const donationNumber = parseFloat(donationValue);
    return donationNumber ;
}