import getPosts from "@/hooks/getPosts";
import { useEffect, useState } from "react";

const BannerComponent = () => {
  const [post, setPost] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts({ star: 5, limit: 1, order: "desc" });
        setPost(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {post.map((item, index) => (
        <main key={index} className="overflow-hidden">
          <div className="group relative overflow-hidden">
            <img
              src={item.imageUrl || "Imagem indisponível"}
              alt={item.title}
              className="max-h-[330px] w-full transform object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.025]"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 px-5 sm:grid-cols-3">
            <div className="invisible-grid col-span-2"></div>
            <div className="col-span-8 text-center">
              <div>
                <p className="uppercase text-customGray-gray_5">{item.date}</p>
                <p className="uppercase text-customBlue-light">
                  {item.category}
                </p>
              </div>
              <h2 className="my-6 text-h2 sm:text-h2Sm">{item.title}</h2>
              <a href="#" className="text-customBlue-light hover:opacity-80">
                Ler mais
              </a>
            </div>
            <div className="invisible-grid col-span-2"></div>
          </div>
        </main>
      ))}
    </>
  );
};

export default BannerComponent;
