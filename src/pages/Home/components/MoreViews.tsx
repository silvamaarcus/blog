import getPosts from "@/hooks/getPosts";
import { useEffect, useState } from "react";

const MoreViewsComponent = () => {
  const [posts, setPosts] = useState<any[]>([]); // Estado para armazenar os posts
  const [loading, setLoading] = useState(true); // Estado para mostrar carregamento

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPosts({ limit: 3 }); // Buscar apenas 3 parametros
        setPosts(data); // Atualizar estado com os dados recebidos
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <section className="custom-container px-5 sm:px-0">
        <h3 className="text-h3 sm:text-h3Sm">Mais vistos</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className="my-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index}
                className="rounded border border-customBlack-light overflow-hidden"
              >
                <div className="group relative">
                  <img
                    src={post.imageUrl || ""}
                    alt={post.title || "Post Image"}
                    className="transition-all duration-700 ease-in-out transform group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-5">
                  <div>
                    <p className="uppercase text-customGray-gray_5">
                      {post.date || "Data indisponível"}
                    </p>
                    <p className="uppercase text-customBlue-light">
                      {post.category || "Sem Categoria"}
                    </p>
                  </div>
                  <h5 className="mt-6 text-h5 sm:text-h5Sm">{post.title}</h5>
                  <p className="mb-6 mt-1 text-customGray-gray_5">
                    {post.description}
                  </p>
                  <a
                    href={post.link || "#"}
                    className="text-customBlue-light hover:opacity-80"
                  >
                    Ler mais
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default MoreViewsComponent;
