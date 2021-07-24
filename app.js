'use strict'



let form = document.getElementById('myform')  

let tabel = document.getElementById('elctroTabel')  


let mainHeader = ['cust name','elctro type','price','condtion']


elctro.item =[]

function elctro(custName,type,price){

this.custName = custName 

this.type = type 

this.price = randomPrice(100,700)

elctro.item.push(this)

saveLocal ();

}




function randomPrice(min,max) {
    
   return Math.floor(Math.random()*(max-min)) +  min 
}


function tabelHeader() {
    
let headerRow = document.createElement('tr')

tabel.appendChild(headerRow)  

for (let i = 0; i < mainHeader.length; i++) {
    

    let headerTh = document.createElement('th')

    headerTh.textContent = mainHeader[i] 

    headerRow.appendChild(headerTh)
}


}

tabelHeader();



elctro.prototype.render = function () {
    

    let elctroRow = document.createElement('tr') 

    tabel.appendChild(elctroRow)  

    for (let i = 0; i < elctro.item.length; i++) {

        elctroRow.textContent=''
        
        let custTd = document.createElement('td')

        custTd.textContent =this.custName 


        let typeTd = document.createElement('td') 

        typeTd .textContent = this.type 


        let priceTd = document.createElement('td') 

        priceTd.textContent = this.price 



        let condTd = document.createElement('td')

        if (this.price > 400) {
            
            condTd.textContent ='New'
        }


        else {
            condTd.textContent ='old'

        }


        elctroRow.appendChild(custTd)

        elctroRow.appendChild(typeTd)

        elctroRow.appendChild(priceTd) 

        elctroRow.appendChild(condTd)


    }
}




function saveLocal (){


    let data = JSON.stringify(elctro.item) 

    localStorage.setItem('elctroNew',data) 
}


function readLocal (){

    let data = localStorage.getItem('elctroNew')  

    let normalObj = JSON.parse(data) 

if (normalObj !== null) {

    for (let i = 0; i < normalObj.length; i++) {
    
       
       
        let theItem = new elctro (normalObj[i].custName,normalObj[i].type,normalObj[i] .price)
        
        theItem.render();
    }
}

   
}


readLocal();  




















































form.addEventListener('submit',sendInfo) 

function  sendInfo(event) {
    
    event.preventDefault();

    let clineName =event.target.custName.value

    let typeElctro =event.target.kind.value 

    let item = new elctro (clineName,typeElctro)


item.render();

}