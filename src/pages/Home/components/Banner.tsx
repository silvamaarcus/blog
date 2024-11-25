const BannerComponent = () => {
  return (
    <main>
      <img
        src="https://www.21-draw.com/wp-content/uploads/2023/06/a-man-wearing-virtual-reality-headset.jpg"
        alt="Banner"
        className="max-h-[330px] w-full object-cover"
      />

      <div className="mt-12 grid grid-cols-1 px-5 gap-8 sm:grid-cols-3">
        <div className="invisible-grid col-span-2"></div>
        <div className="col-span-8 text-center">
          <div>
            <p className="uppercase text-customGray-gray_5">12 Set 2021</p>
            <p className="uppercase text-customBlue-light">Tecnologia</p>
          </div>
          <h2 className="my-6 text-h2 sm:text-h2Sm">
            Vale a pena comprar um PC Gamer?
          </h2>
          <a href="#" className="text-customBlue-light hover:opacity-80">
            Ler mais
          </a>
        </div>
        <div className="invisible-grid col-span-2"></div>
      </div>
    </main>
  );
};

export default BannerComponent;
