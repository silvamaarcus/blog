import api from "./api";

const getUsers = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar users:", error);
    throw error;
  }
};

export default getUsers;
