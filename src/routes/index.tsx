import { Navigate, Route, Routes } from "react-router-dom";

import SignIn from "@/pages/SignIn";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Post from "@/pages/Post";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default AppRoutes;
