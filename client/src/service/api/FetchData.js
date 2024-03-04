import axios from 'axios';

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};

export const addData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données :', error);
      throw error;
    }
  };

  export const deleteData = async (url) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la suppression des données :', error);
      throw error;
    }
  };
  
  export const modifyData = async (url, data) => {
    try {
      const response = await axios.put(url, data); // Utilisez la méthode HTTP appropriée (par exemple, PUT) pour la modification
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la modification des données :', error);
      throw error;
    }
  };
  