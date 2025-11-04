let inp1 = document.getElementsByClassName('dishName')[0];
let inp2 = document.getElementsByClassName('cuisine')[0];
let inp3 = document.getElementsByClassName('type')[0];
let inp4 = document.getElementsByClassName('price')[0];
let inp5 = document.getElementsByClassName('spiceLvl')[0];
let tableEle = document.getElementsByClassName('table-body')[0];

let foodNames = document.getElementsByClassName('foodName');
let foodPrices = document.getElementsByClassName('foodPrice');
let filterInput = document.getElementById('filter-input')

function addMenu(){
    if(inp1.value === '' || inp2.value === '' || inp3.value === '' || inp4.value === '' || inp5.value === ''){
        alert('Fill all the Input Fields');
        return
    }
    tableEle.innerHTML += `
    <tr>
        <td class='foodName'>${inp1.value}</td>
        <td>${inp2.value}</td>
        <td>${inp3.value}</td>
        <td class='foodPrice'>$${inp4.value}</td>
        <td>${inp5.value}</td> 
    </tr>
    `

    inp1.value = ''
    inp2.value = ''
    inp3.value = ''
    inp4.value = ''
    inp5.value = ''
}


function filterMenu(){
    if(foodNames.length === 0) return
    for(let i = 0; i < foodNames.length; i++){        
        if(foodNames[i].innerHTML.toLowerCase().indexOf(filterInput.value.toLowerCase()) !== -1
            || foodPrices[i].innerHTML.indexOf(filterInput.value) !== -1
        )
        {
            foodNames[i].parentElement.style.display = 'table-row'
        }
        else{
            foodNames[i].parentElement.style.display = 'none'
        }
    }
}