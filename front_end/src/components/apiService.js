import axios  from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";
const token = localStorage.getItem("token") || null; // Get the token from local storage

const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json', // Recommended
      'Accept': 'application/json' // Optional but good practice
    }
  };

const apiService =  {

    login: async (request) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, request);

            return response.data;

            
        } catch (error) {
            console.error(error);
           
        }
    },
    register: async (request) =>{
        try {
            const response = await axios.post(`${API_BASE_URL}/register`,request)
            return response;

        } catch (error) {
            console.error(error);
        }
    }
    


   

}

export default apiService;