import { useNavigate } from "react-router-dom";

import Logo from "/assets/svg/logo.svg";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import InputCheckbox from "@/components/ui/InputCheckbox";

// Icons
import UserIcon from "/assets/svg/icon-user.svg";
import UserPassword from "/assets/svg/icon-password.svg";

const SignInPage = () => {

  const navigate = useNavigate(); // Hook do React Router

  const handleLogin = () => {
    navigate('/home'); // Redireciona para a página Home
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="invisible-grid"></div>

        <div className="mb-8 w-full px-5 sm:px-0">
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="Logo" className="w-14" />
            <span className="mt-2 flex">
              <h5 className="text-h3 sm:text-h3Sm">blog</h5>
              <h3 className="text-h3 text-customBlue-normal sm:text-h3Sm">.</h3>
            </span>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center">
            <h5 className="text-h5 sm:text-h5Sm">
              Olá, faça o login para continuar.
            </h5>

            <form action="" className="mt-9 w-full">
              <Input
                placeholder={
                  <span className="flex items-center gap-2">
                    <img src={UserIcon} alt="User" /> Digite seu usuário
                  </span>
                }
                type="text"
                required
              />

              <Input
                placeholder={
                  <span className="flex items-center gap-2">
                    <img src={UserPassword} alt="User" /> Digite sua senha
                  </span>
                }
                type="password"
                required
                className="mt-4"
              />
              <Button className="mt-6 w-full" onClick={handleLogin}>Entrar</Button>
            </form>

            <div className="mt-8 flex w-full items-center justify-between">
              <InputCheckbox label="Lembrar-me" />
              <a href="#" className="hover:opacity-80">
                Esqueceu sua senha?
              </a>
            </div>
          </div>
        </div>

        <div className="invisible-grid"></div>
      </section>
    </main>
  );
};

export default SignInPage;
