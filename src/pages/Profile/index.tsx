import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

//Icons
import IconPlus from "/assets/svg/icon-plus.svg";
import IconUser from "/assets/svg/icon-user.svg";

const ProfilePage = () => {
  return (
    <main className="my-10 flex flex-col gap-20">
      <section className="custom-container sm:px-0">
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
      </section>

      <section className="custom-container px-5 sm:px-0">
        <h4 className="text-h4 sm:text-h4Sm">Meus dados</h4>
        <p className="mt-2 text-customGray-gray_5">
          Abaixo são listados os seus dados de acesso ao blog.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-2">
            <label>ID</label>
            <Input className="mt-1" />
          </div>
          <div className="col-span-12 sm:col-span-4">
            <label>Seu usuário</label>
            <Input className="mt-1" />
          </div>
          <div className="col-span-12 sm:col-span-3">
            <label>Nome</label>
            <Input className="mt-1" />
          </div>
          <div className="col-span-12 sm:col-span-3">
            <label>Sobrenome</label>
            <Input className="mt-1" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
