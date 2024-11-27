import api from "@/services/api";

interface GetPostsParams {
  star?: number;
  limit?: number;
  order?: "asc" | "desc";
}

const getPosts = async (params?: GetPostsParams) => {
  // Opcao 2: Com parâmetros de consulta
  const queryParams = new URLSearchParams();

  // Adicionar o parâmetro 'star'
  if (params?.star) queryParams.append("star", params.star.toString());
  // Adicionar o parâmetro 'limit'
  if (params?.limit) queryParams.append("_limit", params.limit.toString());
  // Adicionar o parâmetro 'order'
  if (params?.order) queryParams.append("order", params.order);

  // Montar a URL com os parâmetros de consulta
  const url = `/posts${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  // console.log("URL:", url); // Exibir a URL no console
  // Fazer a requisição para a API
  const r = await api.get(url);
  // console.log("Response data:", r.data); // Exibir a resposta da API no console
  return r.data; // Retornar os dados da resposta
};

export default getPosts;


//* USO:
// Sem parâmetros: const posts = await getPosts();
// Com parâmetros: const posts = await getPosts({ star: 5, limit: 5, order: "asc" });