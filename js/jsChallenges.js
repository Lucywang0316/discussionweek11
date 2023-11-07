// function challenge1(){
//     let checkBox= document.querySelector("#subscribe")
//     if (checkBox.checked){
        
//         document.querySelector("#emailDiv").style.display="block";
//     }
//     else{
//         document.querySelector('#emailDiv').style.display='none';
//     }
// }
// question 1
// let check= document.querySelector("#subscribe");
// check.addEventListener('click',function() {
//     if (check.checked){
//         document.querySelector("#emailDiv").style.display="block";

//     }
//     else{
//         document.querySelector("#emailDiv").style.display="none";
//     }
    

// })

// question 2
// When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field
// Fix the Accessibility Error on the page
let checkBox = document.querySelector('#sameAddress');
let homeAddressInput = document.querySelector('#home');
let billingAddressInput = document.querySelector('#bill');

checkBox.addEventListener('click', function() {
    if (checkBox.checked) {
        homeAddressInput.value = billingAddressInput.value;
        homeAddressInput.setAttribute('disabled', 'disabled');
        // homeAddressInput.style.display = "block";
        // homeAddressInput.removeAttribute('disabled');
    } else {
        homeAddressInput.removeAttribute('disabled'); 
    
        // homeAddressInput.style.display = "none"; // Hide the Home Address field
    }
});

//color of the day is tangerine

