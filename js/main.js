import * as ContactService from '../services/ContactService.js';
/**
 * When the page is loaded get the contacts loaded or get the data from sever
 */



window.addEventListener('DOMContentLoaded', ()=>{
    ContactService.getAllContacts().then((response)=>{
        console.log("this is from the amin js file it is loading the data");
       const contacts=response.data;
       displaycards(contacts);
    }).catch((error)=>{
        console.log(error);

    });

});


/**
  Display Card on Ui 
 */
const displaycards=(contacts)=>{
   const cardrowElement =document.querySelector("#card-row");
    let cardElement =""
    for(let contact of contacts){
        cardElement+=`<div class="col-sm-6 mt-3">
        <div class="card sha">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-sm-3">
                        <img class="img-fluid rounded-circle imgfix" src="${contact.imageurl}" alt="">

                    </div>
                    <div class="col-sm-8">
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name : <span class="fw-bold">${contact.name}</span>
                            </li>
                            <li class="list-group-item">
                                E-mail : <span class="fw-bold">${contact.email}</span>
                            </li>
                            <li class="list-group-item">
                                Mobile.no : <span class="fw-bold">${contact.mobile}</span>
                            </li>
                           
                            
                        </ul>

                    </div>
                    <div class="col-sm-1 d-flex flex-column align-items-center">
                        <a href="viewcontact.html?contactId=${contact.id}" class="btn btn-warning fixlogicicon">
                            <i class="bi bi-eye-fill"></i>
                        </a>
                        <a href="update.html?contactId=${contact.id}" class="btn btn-primary mt-2 fixlogicicon">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                        <a href="delete.html?contactId=${contact.id}" class="btn btn-danger mt-2 fixlogicicon">
                        <i class="bi bi-trash"></i>
                    </a>

                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
    cardrowElement.innerHTML=cardElement;   
}

function searchContact() {
    let searchValue = document.querySelector('input[name="query"]').value; // Getting the search input value
    ContactService.getAllContacts().then((response) => {
        const contacts = response.data;
        const filteredContacts = contacts.filter(contact => contact.name.includes(searchValue)); // Filtering contacts based on the search input
        displaycards(filteredContacts); // Displaying only the filtered contacts
    }).catch((error) => {
        console.log(error);
    });
}