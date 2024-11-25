import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

//Icons
import IconPlus from "/assets/svg/icon-plus.svg";
import IconUser from "/assets/svg/icon-user.svg";
import { useState } from "react";

const ProfilePage = () => {
  const [postActive, setPostActive] = useState("hidden");
  const [userActive, setUserActive] = useState("block");

  const handleContent = (section: any) => {
    if (section === "user") {
      setPostActive("hidden");
      setUserActive("block");
    } else if (section === "post") {
      setPostActive("block");
      setUserActive("hidden");
    }
  };

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
              <Button
                variant="alternative"
                onClick={() => handleContent("post")}
              >
                <div className="flex items-center gap-2">
                  <img src={IconPlus} alt="Icon Plus" />
                  Adicionar Post
                </div>
              </Button>

              <Button
                variant="alternative"
                onClick={() => handleContent("user")}
              >
                <div className="flex items-center gap-2">
                  <img src={IconUser} alt="Icon Plus" />
                  Meus dados
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meus Dados */}
      <section className={`custom-container px-5 sm:px-0 ${userActive}`}>
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

      {/* Novo Post */}
      <section className={`custom-container px-5 sm:px-0 ${postActive}`}>
        <h4 className="text-h4 sm:text-h4Sm">Adicionar Post</h4>
        <p className="mt-2 text-customGray-gray_5">
          Preencha os campos abaixo para adicionar um novo post ao blog.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <label>Data</label>
            <Input className="mt-1" />
          </div>
          <div className="col-span-12 sm:col-span-3">
            <label>Categoria</label>
            <Input className="mt-1" />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label>Título</label>
            <Input className="mt-1" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-9">
            <label>Resumo do post</label>
            <Input className="mt-1" />
          </div>
          <div className="col-span-12 sm:col-span-3">
            <label>Duração</label>
            <Input className="mt-1" />
          </div>
        </div>

        <div className="mt-10">
          <label>Conteúdo</label>
          <textarea
            name="content"
            rows={4}
            className="w-full rounded bg-customBlack-light p-3 focus:outline-none"
          ></textarea>
        </div>

        <div className="mt-10 flex sm:justify-end">
          <Button>Adicionar</Button>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
