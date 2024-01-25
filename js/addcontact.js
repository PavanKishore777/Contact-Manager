import * as ContactService from '../services/ContactService.js';
/***
  get  groups data from server as dropdown when the page is loaded
 */
window.addEventListener("DOMContentLoaded",()=>{
    ContactService.getAllGroups().then((grpresponse)=>{
            const groups=grpresponse.data;
            populatedropdown(groups);
    }).catch((error)=>{
            console.error(error);
    });
});


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
/**  this code is for if myimage is atext type and only used when it on the web  */

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
////////////////////////////////////////////////////////////////////////////////////////////
        /**             the below code is for if my image is an file type to upload  */

        /**
 * change on input of image to display
 */
/*const imageurlElement = document.querySelector("#image-input");
const displayimageElement = document.querySelector("#display-image");
imageurlElement.addEventListener("change", () => {
  const file = imageurlElement.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    displayimageElement.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
});
*/
/////////////////////////////////////////////////////////////////////////////////////////////




   /**
      when form is submitted
    * 
    */
   const addContactForm=document.querySelector("#add-contact-form");
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
     console.log(contact);

     ContactService.createContact(contact).then((response)=>{
        if(response.data){
            window.location.href="index.html"
        }

     }).catch(()=>{
        console.error(error);
     });

   })

