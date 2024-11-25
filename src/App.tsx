import Header from "./components/Header";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <ProfilePage />
    </div>
  );
}

export default App;
