import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Splash from "./pages/Splash";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Onboarding from "./pages/Onboarding";
import Exhibition from "./pages/Exhibition";
import Header from "./shared/components/Header";
import Story from "./pages/Story";
import MyStory from "./pages/MyStory";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import StroyDetail from "./pages/StoryDetail";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/splash" element={<Splash />}/>
        <Route  path="/signup" element={<SignUp />}/>
        <Route  path="/signin" element={<SignIn />}/>
        <Route  path="/onborading" element={<Onboarding />}/>
        <Route  path="/exhibition" element={<Exhibition />}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/mystory" element={<MyStory/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/story/:id" element={<StroyDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
