const serverurl ="http://localhost:9000";



                                /**                        CONTACTS  MANGING THROUGH AXIOS                                      */



/**
  @usage : to get all contacts
  @method : GET
  @params : no - person
  @url : http://localhost:9000/contacts
  */
 
  export const getAllContacts= ()=> {
    let dataUrl =`${serverurl}/contacts`;
    return axios.get(dataUrl);
  }

  /**
  @usage : to get a contact
  @method : GET
  @params : contactId
  @url : http://localhost:9000/contacts/contactId
  */

  export const getContact= (contactId)=> {
    let dataUrl =`${serverurl}/contacts/${contactId}`;
    return axios.get(dataUrl);
  }



   /**
  @usage : Create a contact
  @method : POST
  @params : name,imageurl,email,mobile,company,title,gropuid
  @url : http://localhost:9000/contacts
  */

  export const createContact= (contact)=> {
    let dataUrl =`${serverurl}/contacts/`;
    return axios.post(dataUrl,contact);
  }


    /**
  @usage : Update a contact
  @method : PUT
  @params : name,imageurl,email,mobile,company,title,gropuid
  @url : http://localhost:9000/contacts/contactId
  */

  export const updateContact= (contact,contactId)=> {
    let dataUrl =`${serverurl}/contacts/${contactId}`;
    return axios.put(dataUrl,contact);
  }

    /**
  @usage : Delete a contact
  @method : Delete
  @params : contactId,contact,no-params
  @url : http://localhost:9000/contacts/contactId
  */

  export const deleteContact= (contactId)=> {
    let dataUrl =`${serverurl}/contacts/${contactId}`;
    return axios.delete(dataUrl);
  }

                                /**                        GROUPS MANGING THROUGH AXIOS                                      */

   /**
  @usage : get al Groups
  @method : GET
  @params : no-params
  @url : http://localhost:9000/groups
  */

  export const getAllGroups= ()=> {
    let dataUrl =`${serverurl}/groups/`;
    return axios.get(dataUrl);
  }

   /**
  @usage : get a Group
  @method : GET
  @params : groupI
  @url : http://localhost:9000/groups/grpoupId
  */

  export const getGroup= (contact)=> {
    const {groupId} =contact;
    let dataUrl =`${serverurl}/groups/${groupId}`;
    return axios.get(dataUrl);
  }


  