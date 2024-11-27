import Avatar from "@/components/ui/Avatar";
import { useEffect, useState } from "react";

// import api from "@/services/api";
import getPosts from "@/hooks/getPosts";

const TrendingsComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Requisição para buscar os posts mais bem votados
    // Opcao 1: Com parâmetros de consulta
    getPosts({ star: 5, limit: 2, order: "desc" }).then((r) => setPosts(r));
  }, []);

  return (
    <>
      <section className="custom-container px-5 sm:px-0">
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
          <div className="col-span-12 border-b border-customBlack-light sm:col-span-6">
            <div>
              <p className="uppercase text-customGray-gray_5">12 Set 2021</p>
              <p className="uppercase text-customBlue-light">Games</p>
            </div>
            <h2 className="my-6 text-h2 sm:text-h2Sm">
              Os melhores e mais bem votados posts do mês.
            </h2>
            <p className="text-customGray-gray_5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ornare urna pharetra ut ac,
              pellentesque.
            </p>
            <div className="my-8 flex items-center gap-4">
              <Avatar
                size="md"
                imageUrl="https://avatars.githubusercontent.com/u/75142775?v=4"
              />
              <div>
                <p className="text-customBlue-light">Marcus Silva</p>
                <p className="text-customGray-gray_5">Author</p>
              </div>
            </div>
          </div>

          {/* Renderizar resposta da API */}
          <div className="col-span-12 sm:col-span-6">
            {posts.map((post: any) => (
              <div
                key={post.id}
                className="mb-8 border-b border-customBlack-light"
              >
                <div>
                  <p className="uppercase text-customGray-gray_5">
                    {post.date}
                  </p>
                  <p className="uppercase text-customBlue-light">
                    {post.category}
                  </p>
                </div>
                <h5 className="my-6 text-h5 sm:text-h5Sm">{post.title}</h5>
                <p className="text-customGray-gray_5">{post.content}</p>
                <div className="my-8 flex items-center gap-4">
                  <Avatar
                    size="md"
                    imageUrl={
                      "https://avatars.githubusercontent.com/u/75142775?v=4"
                    }
                  />
                  <div>
                    <p className="text-customBlue-light">Nome</p>
                    <p className="text-customGray-gray_5">Author</p>
                  </div>
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
