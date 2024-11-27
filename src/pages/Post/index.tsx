import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialMedias from "@/components/SocialMedias";
import Avatar from "@/components/ui/Avatar";

import api from "@/services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  id_user: number;
}

const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState([]);

  const { idPost } = useParams();

  // Fazendo requisição uma única vez por carregamento da página.
  useEffect(() => {
    // if (idPost) -> verificar se existe algo dentro da variavel "idPost".
    if (idPost) {
      // 1° requisição: Pegar o Post escolhido pelo usuario.
      api.get("/posts" + idPost).then((response) => {
        // Setando o post escolhido na variavel "setPost".
        setPost(response.data);

        // 2° requisição: Pegar os dados Autor do Post escolhido pelo usuario.
        // id_user -> é uma chave no arquivo JSON, que será extraido da requisição acima.
        api.get("/user" + response.data.id_user).then((r) => {
          // Setando o autor do post escolhido na variavel "setUser".
          setUser(r.data);
        });
      });
    }
  });

  return (
    <>
      <Header />
      <main className="custom-container px-5 py-28 sm:px-0 sm:pt-48">
        <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-12">
          <div className="invisible-grid col-span-2"></div>

          {post && (
            <div className="col-span-12 mb-16 sm:col-span-8">
              <div>
                <p className="uppercase text-customGray-gray_5">{post.date}</p>
                <p className="uppercase text-customBlue-light">
                  {post.category}
                </p>
              </div>
              <h3 className="text-h3 sm:text-h3Sm">titulo</h3>

              <div className="my-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <Avatar
                    size="md"
                    imageUrl="https://i.pravatar.cc/150?img=1"
                  />
                  <p className="text-customBlue-light">Cara Denvers</p>
                </div>

                <p className="text-customGray-gray_5">
                  Aug 2, 2020 - 8 min read
                </p>
              </div>

              <div>
                <img
                  src="https://assets-prd.ignimgs.com/2024/09/10/ps5-pro-full-blog-1725981773141.jpg"
                  alt="PS5"
                  className="max-h-[420px] w-full rounded object-cover"
                />

                <div className="mb-14 mt-10 text-left">
                  <h4 className="text-h4 sm:text-h4Sm">
                    Esse aqui é o primeiro título
                  </h4>
                  <p className="mt-2 text-customGray-gray_5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare urna pharetra ut ac, pellentesque. Ultricies
                    habitasse pretium purus viverra. Sit eget volutpat semper
                    vitae metus, fringilla ullamcorper sapien nibh.
                  </p>
                </div>
                <div className="mb-14 mt-10 text-left">
                  <h4 className="text-h4 sm:text-h4Sm">
                    Esse aqui é o segundo título
                  </h4>
                  <p className="mt-2 text-customGray-gray_5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare urna pharetra ut ac, pellentesque. Ultricies
                    habitasse pretium purus viverra. Sit eget volutpat semper
                    vitae metus, fringilla ullamcorper sapien nibh.
                  </p>
                  <p className="mt-2 text-customGray-gray_5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare urna pharetra ut ac, pellentesque. Ultricies
                    habitasse pretium purus viverra. Sit eget volutpat semper
                    vitae metus, fringilla ullamcorper sapien nibh.
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 rounded border border-customBlack-light p-8 sm:flex-nowrap">
                  <div className="flex w-full justify-center sm:max-w-[72px] sm:justify-start">
                    <Avatar
                      size="lg"
                      imageUrl="https://i.pravatar.cc/150?img=1"
                    />
                  </div>
                  <div className="w-full">
                    <span className="flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:justify-between">
                      <div className="text-left">
                        <h5 className="text-h5 text-customBlue-light sm:text-h5Sm">
                          Cara Devenrs
                        </h5>
                        <p className="text-customWhite-normal">@caradenvers</p>
                      </div>
                      <SocialMedias />
                    </span>
                    <p className="mt-2 py-5 text-center text-customGray-gray_5 sm:py-0 sm:text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare urna pharetra ut ac, pellentesque. Ultricies
                      habitasse pretium purus viverra. Sit eget volutpat semper
                      vitae metus, fringilla ullamcorper sapien nibh.
                    </p>

                    <div className="flex justify-center sm:justify-start">
                      <a
                        href="#"
                        className="mt-2 bg-gradient-1 bg-clip-text text-transparent hover:opacity-80"
                      >
                        Ver perfil
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="invisible-grid col-span-2"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
