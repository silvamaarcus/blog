import Header from "@/components/Header";
import BannerComponent from "./components/Banner";
import HeroComponent from "./components/Hero";
import MoreViewsComponent from "./components/MoreViews";
import RecentPostsComponent from "./components/RecentsPosts";
import TrendingsComponent from "./components/Trendings";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen gap-48">
      <Header />
      <HeroComponent />
      <TrendingsComponent />
      <MoreViewsComponent />
      <BannerComponent />
      <RecentPostsComponent />
      <Footer />
    </main>
  );
};

export default HomePage;
