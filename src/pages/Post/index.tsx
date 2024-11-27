import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialMedias from "@/components/SocialMedias";
import Avatar from "@/components/ui/Avatar";
import getPosts from "@/hooks/getPosts";

import { useEffect, useState } from "react";

const PostPage = () => {
  const [post, setPost] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts({ star: 6, limit: 1, order: "desc" });
        setPost(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="custom-container px-5 py-28 sm:px-0 sm:pt-48">
        <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-12">
          <div className="invisible-grid col-span-2"></div>

          {post.map((post, index) => (
            <div className="col-span-12 mb-16 sm:col-span-8" key={index}>
              <div>
                <p className="uppercase text-customGray-gray_5">{post.date}</p>
                <p className="uppercase text-customBlue-light">
                  {post.category}
                </p>
              </div>
              <h3 className="text-h3 sm:text-h3Sm">{post.title}</h3>

              <div className="my-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <Avatar
                    size="md"
                    imageUrl="https://i.pravatar.cc/150?img=1"
                  />
                  <p className="text-customBlue-light">Cara Denvers</p>
                </div>

                <p className="text-customGray-gray_5">
                  {`${post.date.slice(3, 6)} ${post.date.slice(0, 2)}, ${post.date.slice(7, 11)} - ${post.duration} min read`}
                </p>
              </div>

              <div>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="max-h-[420px] w-full rounded object-cover"
                />

                <div className="mb-14 mt-10 text-left">
                  <h4 className="text-h4 sm:text-h4Sm">{post.resume}</h4>
                  <p className="mt-4 text-customGray-gray_5">{post.content}</p>
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
          ))}

          <div className="invisible-grid col-span-2"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
