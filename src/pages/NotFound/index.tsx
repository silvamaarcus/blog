import Button from "@/components/ui/Button";
import Logo from "/assets/svg/logo.svg";

const NotFoundPage = () => {
  return (
    <>
      <main className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="invisible-grid"></div>

        <div className="mb-8 w-full px-5 text-center sm:px-0">
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="Logo" className="w-14" />
            <span className="mt-2 flex">
              <h5 className="text-h3 sm:text-h3Sm">blog</h5>
              <h3 className="text-h3 text-customBlue-normal sm:text-h3Sm">.</h3>
            </span>
          </div>

          <h1 className="text-[144px] font-bold bg-gradient-1 bg-clip-text text-transparent">404</h1>

          <h5 className="text-h5 sm:text-h5Sm">Página não encontrada!</h5>

          <p className="text-customGray-gray_5 mt-2 mb-14">
            A página que você tá procurando não existe ou foi removida. Clique
            para voltar para o site.
          </p>

          <Button>Voltar p/ Home</Button>
        </div>

        <div className="invisible-grid"></div>
      </main>
    </>
  );
};

export default NotFoundPage;
