import api from "./api";

const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
};

export default getPosts;
