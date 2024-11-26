import Header from "@/components/Header";
import BannerComponent from "./components/Banner";
import HeroComponent from "./components/Hero";
import MoreViewsComponent from "./components/MoreViews";
import RecentPostsComponent from "./components/RecentsPosts";
import TrendingsComponent from "./components/Trendings";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-48 pt-28 sm:pt-48">
        <HeroComponent />
        <TrendingsComponent />
        <MoreViewsComponent />
        <BannerComponent />
        <RecentPostsComponent />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
