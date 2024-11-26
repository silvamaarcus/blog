import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import Profile from "@/pages/Profile";
import Post from "@/pages/Post";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default AppRoutes;
