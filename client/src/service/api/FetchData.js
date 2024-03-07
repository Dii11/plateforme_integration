import axios from 'axios';
const api = "http://localhost:8085/";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(api+url);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};

export const addData = async (url, data) => {
    try {
      const response = await axios.post(api+url, data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données :', error);
      throw error;
    }
  };

  export const deleteData = async (url) => {
    try {
      const response = await axios.delete(api+url);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la suppression des données :', error);
      throw error;
    }
  };
  
  export const modifyData = async (url, data) => {
    try {
      const response = await axios.put(api+url, data); 
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la modification des données :', error);
      throw error;
    }
  };
  