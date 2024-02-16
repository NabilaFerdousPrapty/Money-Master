// console.log('connected');
 const totalExpanse=0;
function calculateExpanse() {
    
    const income=getElementValueById("income-value");
    // console.log(income);
    const food=getElementValueById("food-value");
    // console.log(food);
    const rent=getElementValueById('rent-value');
    // console.log(rent);
    const cloths=getElementValueById('cloths-value');
    // console.log(cloths);
    const totalExpanse=food+rent+cloths;
    // console.log(totalExpanse);
    const remaining=income-totalExpanse;
    document.getElementById('total-expanse').innerText=totalExpanse;
    document.getElementById('balance').innerText=income;
    document.getElementById('remaining').innerText=remaining;
    return remaining;
    

}
function calculateSavings() {
    const savingPercentage=getElementValueById('saving-percentage');
    // console.log(savingPercentage);
    const remaining=calculateExpanse();
    const saving=remaining*(savingPercentage/100);
   const remain=remaining-saving;
    document.getElementById('saving').innerText=saving;
    document.getElementById('remaining').innerText=remain;

}


function getElementValueById(elementId) {
    const element=document.getElementById(elementId);
    // console.log(element);
    const elementText=element.value ;
    // console.log(elementText);
    const elementValue=parseInt(elementText);
    // console.log(elementValue);
    return elementValue;
}
