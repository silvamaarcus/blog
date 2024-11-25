import Avatar from "@/components/ui/Avatar";

const RecentPostsComponent = () => {
  return (
    <>
      <section className="custom-container px-5 sm:px-0">
        <h3 className="text-h3 sm:text-h3Sm">Mais recentes</h3>
        <div className="my-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex gap-8 rounded border border-customBlack-light p-5">
            <div className="flex flex-col items-center gap-4">
              <p className="border-b border-customBlack-light pb-4 uppercase text-customGray-gray_5">
                Nov
              </p>
              <h3 className="text-h3 text-customBlue-light sm:text-h3Sm">18</h3>
            </div>

            <div>
              <p className="uppercase text-customBlue-light">Tecnologia</p>
              <h5 className="my-2 text-h5 sm:text-h5Sm">
                O que tem de novo no PS5? Muitas novidades?
              </h5>
              <p className="mb-2 text-customGray-gray_5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex items-center gap-4">
                <Avatar
                  size="sm"
                  imageUrl="https://avatars.githubusercontent.com/u/75142775?v=4"
                />
                <div>
                  <p className="text-customBlue-light">Marcus Silva</p>
                  <p className="text-customGray-gray_5">Author</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 rounded border border-customBlack-light p-5">
            <div className="flex flex-col items-center gap-4">
              <p className="border-b border-customBlack-light pb-4 uppercase text-customGray-gray_5">
                Nov
              </p>
              <h3 className="text-h3 text-customBlue-light sm:text-h3Sm">18</h3>
            </div>

            <div>
              <p className="uppercase text-customBlue-light">Tecnologia</p>
              <h5 className="my-2 text-h5 sm:text-h5Sm">
                O que tem de novo no PS5? Muitas novidades?
              </h5>
              <p className="mb-2 text-customGray-gray_5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex items-center gap-4">
                <Avatar
                  size="sm"
                  imageUrl="https://avatars.githubusercontent.com/u/75142775?v=4"
                />
                <div>
                  <p className="text-customBlue-light">Marcus Silva</p>
                  <p className="text-customGray-gray_5">Author</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 rounded border border-customBlack-light p-5">
            <div className="flex flex-col items-center gap-4">
              <p className="border-b border-customBlack-light pb-4 uppercase text-customGray-gray_5">
                Nov
              </p>
              <h3 className="text-h3 text-customBlue-light sm:text-h3Sm">18</h3>
            </div>

            <div>
              <p className="uppercase text-customBlue-light">Tecnologia</p>
              <h5 className="my-2 text-h5 sm:text-h5Sm">
                O que tem de novo no PS5? Muitas novidades?
              </h5>
              <p className="mb-2 text-customGray-gray_5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex items-center gap-4">
                <Avatar
                  size="sm"
                  imageUrl="https://avatars.githubusercontent.com/u/75142775?v=4"
                />
                <div>
                  <p className="text-customBlue-light">Marcus Silva</p>
                  <p className="text-customGray-gray_5">Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentPostsComponent;
