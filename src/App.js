import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Splash from "./pages/Splash";
import SignUp from "./pages/SignUp";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Exhibition from "./pages/Exhibition";
import Header from "./shared/components/Header";
import Story from "./pages/Story";
import MyStory from "./pages/MyStory";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import StroyDetail from "./pages/StoryDetail";
import StoryWrite from "./pages/StoryWrite";
import ExhibitionDetail from "./pages/ExhibitionDetail";
import ExhibitionSearch from "./pages/ExhibitionSearch";
import ExhibitionList from "./pages/ExhibitionList";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/splash" element={<Splash />}/>
        <Route  path="/signup" element={<SignUp />}/>
        <Route  path="/onboarding1" element={<Onboarding1 />}/>
        <Route  path="/onboarding2" element={<Onboarding2 />}/>
        <Route  path="/onboarding3" element={<Onboarding3 />}/>
        <Route  path="/exhibition" element={<Exhibition />}/>
        <Route path="/exhibition/:id" element={<ExhibitionDetail />}/>
        <Route path="/exhibition/list/:listType" element={<ExhibitionList/>}/>
        <Route path="/exhibition/search" element={<ExhibitionSearch />}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/mystory" element={<MyStory/>}/>
        <Route path="/mystory/storywrite" element={<StoryWrite/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/story/:id" element={<StroyDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
