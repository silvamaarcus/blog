import Avatar from "../../components/ui/Avatar";
import Button from "../../components/ui/Button";

//Icons
import IconPlus from "../../../public/assets/svg/icon-plus.svg";
import IconUser from "../../../public/assets/svg/icon-user.svg";

const ProfilePage = () => {
  return (
    <main className="custom-container sm:px-0">
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-12">
        <div className="col-span-12 text-center sm:col-span-4 sm:text-left">
          <div className="flex justify-center sm:block">
            <Avatar
              imageUrl="https://avatars.githubusercontent.com/u/75142775?v=4"
              alt="Profile"
              size="lg"
            />
          </div>

          <h3 className="mt-6 text-h3 sm:text-h3Sm">Olá, Marcus.</h3>
          <p className="mt-2 text-customGray-gray_4">
            Olá, bom dia! Seja bem-vindo ao blog. Compartilhe conhecimento.
          </p>
        </div>

        <div className="invisible-grid col-span-1"></div>

        <div className="col-span-12 sm:col-span-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <Button variant="alternative">
              <div className="flex items-center gap-2">
                <img src={IconPlus} alt="Icon Plus" />
                Adicionar Post
              </div>
            </Button>

            <Button variant="alternative">
              <div className="flex items-center gap-2">
                <img src={IconUser} alt="Icon Plus" />
                Meus dados
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
