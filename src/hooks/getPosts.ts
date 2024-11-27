import api from "@/services/api";

interface GetPostsParams {
  star?: number;
  limit?: number;
  order?: "asc" | "desc";
}

interface Post {
  id: string;
  id_user: number;
  date: string;
  imageUrl: string;
  category: string;
  title: string;
  resume: string;
  content: string;
  duration: number;
  star: number;
  views: number;
  status: boolean;
  // Adicione mais campos conforme necessário
}

const getPosts = async (params?: GetPostsParams): Promise<Post[]> => {
  try {
    const queryParams = new URLSearchParams();

    // Adicionar o parâmetro 'star'
    if (params?.star) queryParams.append("star", params.star.toString());
    // Adicionar o parâmetro 'limit'
    if (params?.limit) queryParams.append("_limit", params.limit.toString());
    // Adicionar o parâmetro 'order'
    if (params?.order) queryParams.append("order", params.order);

    // Montar a URL com os parâmetros de consulta
    const url = `/posts${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;

    // Fazer a requisição para a API
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw new Error("Não foi possível carregar os posts.");
  }
};

export default getPosts;

// * Uso:
// Com parametro: const posts = await getPosts({ star: 5, limit: 5, order: "asc" });
// S parametro: const posts = await getPosts();