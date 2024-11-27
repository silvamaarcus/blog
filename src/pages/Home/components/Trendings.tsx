import Avatar from "@/components/ui/Avatar";
import { useEffect, useState } from "react";
import getPosts from "@/hooks/getPosts";
import getUsers from "@/hooks/getUsers";

const TrendingsComponent = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar os posts mais bem votados
        const postsData = await getPosts({ star: 5, limit: 3, order: "desc" });
        
        // Buscar os usuários
        const usersData = await getUsers();

        // Associar o autor de cada post com base no id_user
        const postsWithAuthors = postsData.map((post: any) => {
          // Garantir que a comparação seja feita com o tipo correto (convertendo ambos para string)
          const author = usersData.find((user: any) => user.id === String(post.id_user));
          return {
            ...post,
            author: author || null, // Adiciona o autor ao post ou null se não encontrar
          };
        });
        
        setPosts(postsWithAuthors);  // Definir o estado de posts com os autores
      } catch (error) {
        console.error("Error fetching posts or users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="custom-container px-5 sm:px-0">
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
          {/* Renderizar o primeiro post com destaque */}
          {posts.length > 0 && (
            <div className="col-span-12 border-b border-customBlack-light sm:col-span-6 destaque">
              <div>
                <p className="uppercase text-customGray-gray_5">{posts[0].date}</p>
                <p className="uppercase text-customBlue-light">{posts[0].category}</p>
              </div>
              <h2 className="my-6 text-h2 sm:text-h2Sm">{posts[0].title}</h2>
              <p className="text-customGray-gray_5">{posts[0].resume}</p>
              <div className="my-8 flex items-center gap-4">
                {/* Verificar se o autor existe */}
                {posts[0].author && (
                  <>
                    <Avatar size="md" imageUrl={posts[0].author.ImageProfile} />
                    <div>
                      <p className="text-customBlue-light">
                        {posts[0].author.name} {posts[0].author.surname}
                      </p>
                      <p className="text-customGray-gray_5">Author</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Renderizar os outros posts */}
          <div className="col-span-12 sm:col-span-6">
            {posts.slice(1).map((post: any) => (
              <div key={post.id} className="mb-8 border-b border-customBlack-light">
                <div>
                  <p className="uppercase text-customGray-gray_5">{post.date}</p>
                  <p className="uppercase text-customBlue-light">{post.category}</p>
                </div>
                <h5 className="my-6 text-h5 sm:text-h5Sm">{post.title}</h5>
                <p className="text-customGray-gray_5">{post.content}</p>
                <div className="my-8 flex items-center gap-4">
                  {/* Verificar se o autor existe */}
                  {post.author && (
                    <>
                      <Avatar size="md" imageUrl={post.author.ImageProfile} />
                      <div>
                        <p className="text-customBlue-light">
                          {post.author.name} {post.author.surname}
                        </p>
                        <p className="text-customGray-gray_5">Author</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingsComponent;
