/*
1 - 100 unit - 1.5/= 
101-200 unit - 2.5/= 
201-300 unit - 4/= 
300 - 350 unit - 5/=
above 300 - fixed charge 1500/=
for example
*/


let input = document.getElementById('input')
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let fourth = document.getElementById('fourth')
let fifth = document.getElementById('fifth')
let fixedvalue = document.getElementById('fixedvalue')
let totalbillvalue = document.getElementById('totalbillvalue')
let consumedunits = document.getElementById('consumedunits')
let billsection = document.querySelector('.billvalue')
let table = document.getElementById('table')
let tbody = document.getElementById('tbody')
let print = document.getElementById('print')
let copy = document.getElementById('copy')
let row;




let totalbill = 0;

let createrow = (range, units, cost, total) => {
    row = document.createElement('tr')
    row.innerHTML = `
    <td>${range}</td>
    <td>${units}</td>
    <td>${cost}/-</td>
    <td>${total}/-</td>
    `
    tbody.append(row)

}


let billvalue = () => {

    billsection.classList.remove('hide')
    print.classList.remove('hide')
    let result;
    let units = input.value;
    consumedunits.innerHTML = `Total consumed units is : ${units}`;


    if (units > 0 && units <= 100) {
        totalbill = units * 1.5;

        createrow('0-100', units, '1.5', totalbill)
    }
    else if (units > 100 && units <= 200) {
        result = (units - 100) * 2.5;
        totalbill = (150 + result)

        tbody.innerHTML = ''

        createrow('0-100', '100', '1.5', '150')
        createrow('101-200', units - 100, '2.5', result)
    }

    else if (units > 200 && units <= 300) {
        result = ((units - 200) * 4)
        totalbill = 150 + 250 + result;

        tbody.innerHTML = ''

        createrow('0-100', '100', '1.5', '150')
        createrow('101-200', '100', '2.5', '250')
        createrow('201-300', units - 200, '4', result)
    }
    else if (units > 300 && units <= 350) {
        result = ((units - 300) * 5);
        totalbill = 1500 + 150 + 250 + 400 + result;

        tbody.innerHTML = ''

        fixedvalue.innerHTML = 'Fixed value above 300 units is 1500/-'
        createrow('0-100', '100', '1.5', '150')
        createrow('101-200', '100', '2.5', '250')
        createrow('201-300', '100', '4', '400')
        createrow('301-350', units - 300, '5', result)
    }
    else if (units > 350) {
        result = ((units - 350) * 6);
        totalbill = 1500 + 150 + 250 + 400 + 250 + result;

        tbody.innerHTML = ''

        createrow('0-100', '100', '1.5', '150')
        createrow('101-200', '100', '2.5', '250')
        createrow('201-300', '100', '4', '400')
        createrow('201-300', '100', '4', '400')
        createrow('>350', units - 350, '6', result)
        fixedvalue.innerHTML = 'Fixed value above 300 units is 1500/-'

    }

    console.log(input.value);
    input.value = "";
    console.log(totalbill);
    totalbillvalue.innerHTML = `Total bill value is: ${totalbill}`;


}


function printPageArea(printarea) {
    var printContent = document.getElementById(printarea).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    console.log("print");
    input.value = "";

}





