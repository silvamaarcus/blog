import Avatar from "@/components/ui/Avatar";
import getPosts from "@/hooks/getPosts";
import getUsers from "@/hooks/getUsers";
import { useEffect, useState } from "react";

const RecentPostsComponent = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Obter os posts e usuários
        const data = await getPosts({ limit: 3, order: "desc" });
        const data_user = await getUsers();

        if (data_user) {
          setUsers(data_user);
        }

        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <section className="custom-container px-5 sm:px-0">
        <h3 className="text-h3 sm:text-h3Sm">Mais recentes</h3>

        <section className="my-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {posts.map((post, index) => {
            // Encontrar o autor do post com base no id_user
            const author = users.find(
              (user) => user.id === post.id_user.toString(),
            );

            return (
              <div
                className="flex cursor-pointer gap-8 rounded border border-customBlack-light p-5 hover:bg-customBlack-light"
                key={index}
              >
                <div className="flex flex-col items-center gap-4">
                  <p className="border-b border-customBlack-light pb-4 uppercase text-customGray-gray_5">
                    {post.date.slice(3, 6)}
                  </p>
                  <h3 className="text-h3 text-customBlue-light sm:text-h3Sm">
                    {post.date.slice(0, 2)}
                  </h3>
                </div>

                <div>
                  <p className="uppercase text-customBlue-light">
                    {post.category}
                  </p>
                  <h5 className="my-2 text-h5 sm:text-h5Sm">{post.title}</h5>
                  <p className="mb-2 text-customGray-gray_5">{post.resume}</p>
                  {author && (
                    <div className="flex items-center gap-4">
                      <Avatar size="sm" imageUrl={author.ImageProfile} />
                      <div>
                        <p className="text-customBlue-light">
                          {author.name} {author.surname}
                        </p>
                        <p className="text-customGray-gray_5">Author</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default RecentPostsComponent;
