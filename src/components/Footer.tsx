import Logo from "/assets/svg/logo.svg";
import Button from "./ui/Button";
import Input from "./ui/Input";

//Icons
import FacebookIcon from "/assets/svg/icon-facebook.svg";
import InstagramIcon from "/assets/svg/icon-instagram.svg";
import YoutubeIcon from "/assets/svg/icon-youtube.svg";
import TwitterIcon from "/assets/svg/icon-twitter.svg";

const Footer = () => {
  return (
    <main>
      <div className="custom-container mx-auto my-0 p-5">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo" className="w-14" />
          <span className="mt-2 flex">
            <h5 className="text-h3 sm:text-h3Sm">blog</h5>
            <h3 className="text-h3 text-customBlue-normal sm:text-h3Sm">.</h3>
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-b border-customBlack-light sm:grid-cols-3">
          <div>
            <h4 className="text-h4 sm:text-h4Sm">Posts</h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Mais vistos</a>
              </li>
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Mais Comentados</a>
              </li>
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Mais Populares</a>
              </li>
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Mais Recentes</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-h4 sm:text-h4Sm">Categorias</h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Tecnologias</a>
              </li>
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Games</a>
              </li>
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Fotografia</a>
              </li>
              <li className="text-customGray-gray_5 hover:opacity-80">
                <a href="#">Cinema</a>
              </li>
            </ul>
          </div>

          <div className="pb-12">
            <h4 className="text-h4 sm:text-h4Sm">
              Quer ser avisado dos novos posts do blog?
            </h4>
            <p className="my-4 text-customGray-gray_5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
            <div className="grid w-full grid-cols-2 items-center gap-2">
              <Input placeholder="Digite seu e-mail aqui" />
              <Button>Inscreva-se</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-8">
          <p className="my-4 text-customGray-gray_5">
            2022 | Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-10">
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="#">
              <img src={YoutubeIcon} alt="Youtube" className="h-8 w-8" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="Twitter" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
