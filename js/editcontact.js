import * as ContactService from '../services/ContactService.js';

/**
  When the page is loaded get contact Id from url and send it to the server
 */

  window.addEventListener("DOMContentLoaded",()=>{
    /***
  get  groups data from server as dropdown when the page is loaded
 */
    ContactService.getAllGroups().then((grpresponse)=>{
        const groups=grpresponse.data;
        populatedropdown(groups);
}).catch((error)=>{
        console.error(error);
});


    const contactId = document.baseURI.split("?")[1].split("=")[1];
   // ContactService.getContact(contactId);
  console.log(contactId)
   if(contactId && contactId.length>0){
    ContactService.getContact(contactId).then((response)=>{
        const contact=response.data;
        //console.log(response.data);

        ContactService.getGroup(contact).then((grpresponse)=>{
           const group=grpresponse.data;
           populateFormData(contact,group);

        }).catch((error)=>{
            console.error(error);
        }); 

    }).catch((error)=>{
        console.error(error);
    });
   }
  })


    /**
   populate dropdown
 */

   const populatedropdown=(groups)=>{
    const  selectElement = document.querySelector("#group-select-input");
    let optionElement=`<option value="">Select a Group</option>`;

    for(let group of groups){
        optionElement+=`<option value="${group.id}">${group.name}</option>`;

    }
    selectElement.innerHTML=optionElement;
   }


  /**
   * populate contact data in form
   */
  const populateFormData=(contact,group)=>{
    document.querySelector("#name-input").value=contact.name;
    document.querySelector("#mobile-input").value=contact.mobile;
    document.querySelector("#image-input").value=contact.imageurl;
    document.querySelector("#email-input").value=contact.email
    document.querySelector("#title-input").value=contact.title;
    document.querySelector("#company-input").value=contact.company;
    document.querySelector("#group-select-input").value=contact.groupId;
    document.querySelector("#display-image").setAttribute('src',contact.imageurl);
  };

  /**
    * 
    *  change on input of image to display 
    * 
    *
    */
  const imageurlElement=document.querySelector("#image-input");
  imageurlElement.addEventListener("input",()=>{
      const imageurl=imageurlElement.value;
      const displayimageElement=document.querySelector("#display-image");
      displayimageElement.setAttribute('src',imageurl);
  })


   /**
      when form is submitted
    * 
    */
      const addContactForm=document.querySelector("#edit-contact-form");
      addContactForm.addEventListener("submit",(event)=>{
        event.preventDefault();
   
        const contact={
           name:document.querySelector("#name-input").value,
           mobile:document.querySelector("#mobile-input").value,
           imageurl:document.querySelector("#image-input").value,
           email:document.querySelector("#email-input").value,
           title:document.querySelector("#title-input").value,
           company:document.querySelector("#company-input").value,
           groupId:document.querySelector("#group-select-input").value,
        };
        const contactId = document.baseURI.split("?")[1].split("=")[1];
        if(Object.keys(contact).length>0 && contactId && contactId.length>0){

            console.log(contact);
   
            ContactService.updateContact(contact,contactId).then((response)=>{
               if(response.data){
                   window.location.href="index.html";
               }
       
            }).catch((error)=>{
               console.log(error);
            })
        }
    
   
      })
   