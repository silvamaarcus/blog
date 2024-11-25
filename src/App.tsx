import Header from "./components/Header";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <NotFoundPage />
    </div>
  );
}

export default App;
