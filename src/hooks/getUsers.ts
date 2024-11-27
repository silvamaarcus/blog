import api from "@/services/api";

interface GetUsersParams {
  limit?: number;
}

interface User {
  id: string;
  user: string;
  name: string;
  surname: string;
  token: string;
  description: string;
  ImageProfile: string;
  // Adicione mais campos conforme necessário
}

const getUsers = async (params?: GetUsersParams): Promise<User[]> => {
  try {
    const queryParams = new URLSearchParams();

    // Adicionar o parâmetro 'limit'
    if (params?.limit) queryParams.append("_limit", params.limit.toString());

    // Montar a URL com os parâmetros de consulta
    const url = `/user${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;

    // Fazer a requisição para a API
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw new Error("Não foi possível carregar os usuários.");
  }
};

export default getUsers;

// * Uso:
// Com parametro: const user = await getUsers({ limit: 5 });
// S parametro: const user = await getUsers();
