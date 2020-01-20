import axios from "axios";

export default {
  // Saves a contact to the database
  saveContact: function(contactData) {
    return axios.post("/api/contact", contactData);
  }
};
