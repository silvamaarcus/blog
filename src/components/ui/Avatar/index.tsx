export interface AvatarProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  size: "sm" | "md" | "lg";
}

const Avatar = ({ imageUrl, alt, className, size }: AvatarProps) => {
  if (size === "sm") {
    return (
      <div>
        <img
          src={imageUrl}
          alt={alt}
          className={`h-[48px] w-[48px] rounded-full border-2 border-customBlue-light object-cover ${className}`}
        />
      </div>
    );
  }

  if (size === "md") {
    return (
      <div>
        <img
          src={imageUrl}
          alt={alt}
          className={`h-[64px] w-[64px] rounded-full border-2 border-customBlue-light object-cover ${className}`}
        />
      </div>
    );
  }

  if (size === "lg") {
    return (
      <div>
        <img
          src={imageUrl}
          alt={alt}
          className={`h-[72px] w-[72px] rounded-full border-2 border-customBlue-light object-cover ${className}`}
        />
      </div>
    );
  }
};

export default Avatar;
