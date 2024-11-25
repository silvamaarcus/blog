import Header from "./components/Header";
import SignInPage from "./pages/SignIn";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <SignInPage />
    </div>
  );
}

export default App;
