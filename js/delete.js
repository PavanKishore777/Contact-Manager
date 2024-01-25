import * as ContactService from '../services/ContactService.js';

window.addEventListener("DOMContentLoaded",()=>{
    const contactId = document.baseURI.split("?")[1].split("=")[1];
   // ContactService.getContact(contactId);

   if(contactId && contactId.length>0){
    ContactService.deleteContact(contactId).then((response)=>{
        if(response.data){
            window.location.href="index.html";
        }       

    }).catch((error)=>{
        console.error(error);
    });
   }
  });