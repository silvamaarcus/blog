//Icons
import FacebookIcon from "/assets/svg/icon-facebook.svg";
import InstagramIcon from "/assets/svg/icon-instagram.svg";
import YoutubeIcon from "/assets/svg/icon-youtube.svg";
import TwitterIcon from "/assets/svg/icon-twitter.svg";

const SocialMedias = () => {
  return (
    <div className="flex items-center gap-5">
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
  );
};

export default SocialMedias;
