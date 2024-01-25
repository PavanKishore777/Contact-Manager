
import * as ContactService from '../services/ContactService.js';

/**
  When the page is loaded get contact Id from url and send it to the server
 */

  window.addEventListener("DOMContentLoaded",()=>{
    const contactId = document.baseURI.split("?")[1].split("=")[1];
   // ContactService.getContact(contactId);

   if(contactId && contactId.length>0){
    ContactService.getContact(contactId).then((response)=>{
        const contact=response.data;
        //console.log(response.data);

        ContactService.getGroup(contact).then((grpresponse)=>{
           const group=grpresponse.data;

            displayContactInfo(contact, group);

        }).catch((error)=>{
            console.error(error);
        });

       
        

    }).catch((error)=>{
        console.error(error);
    });
   }
  });

  /**
     Display contact information on UI
   */

     const displayContactInfo=(contact,group)=>{
        const  contactRowElement=document.querySelector("#contact-row")
        if(contact && group && Object.keys(contact).length>0 && Object.keys(group).length>0){
            const contactInfoElement =` <div class="col-sm-3">
            <img class="img-fluid rounded-circle shadow-lg bg-white" src="${contact.imageurl}" alt="" >

        </div>
        <div class="col-sm-8 offset-1 fixingmedia">
            <ul class="list-group">
                <li class="list-group-item">
                <span class="fw-bold text-warning  outlined-text"> NAME</span> : ${contact.name}
                </li>
                <li class="list-group-item">
                <span class="fw-bold text-warning  outlined-text"> E-MAIL</span> : ${contact.email}
                </li>
                <li class="list-group-item">
                <span class="fw-bold text-warning  outlined-text">  MOBILE.NO</span> : ${contact.mobile}
                </li>
                <li class="list-group-item">
                <span class="fw-bold text-warning  outlined-text"> COMPANY</span> : ${contact.company}
                </li>
                <li class="list-group-item">
                <span class="fw-bold text-warning  outlined-text"> GROUP</span> : ${group.name}
                </li>
                <li class="list-group-item">
                <span class="fw-bold text-warning  outlined-text"> TITLE</span> : ${contact.title}
                </li>
               
                
            </ul>

        </div>`;
        contactRowElement.innerHTML=contactInfoElement;
        }

     };