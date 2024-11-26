import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

import LogoBig from "/assets/img/logo-big.png";

const HeroComponent = () => {
  const navigate = useNavigate(); // Hook do React Router

  const handleLogin = () => {
    navigate("/profile"); // Redireciona para a página Home
  };
  return (
    <>
      <section className="custom-container px-5 sm:px-0">
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
          <div className="invisible-grid col-span-12 sm:col-span-1"></div>
          <div className="col-span-12 sm:col-span-5">
            <h1 className="text-h1 font-extrabold sm:text-h1Sm">
              blog<span className="text-customBlue-light">.</span>
            </h1>
            <p className="mb-10 mt-7 text-customGray-gray_5">
              Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender.
              Conectar.
            </p>
            <Button onClick={handleLogin}>Começar a escrever</Button>
          </div>

          <div className="col-span-12 sm:col-span-5">
            <div className="flex justify-center">
              <img src={LogoBig} alt="blog." className="w-[267px]" />
            </div>
          </div>

          <div className="invisible-grid col-span-12 sm:col-span-1"></div>
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
