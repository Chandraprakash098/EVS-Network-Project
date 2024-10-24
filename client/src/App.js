// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import HotEntertainment from "./pages/HotEntertainment";
// import Music from "./pages/Music";
// import TraditionalArt from "./pages/TraditionalArt";
// import AboutUs from "./pages/AboutUs";

// // Import new components
// import HotEntertainmentBollywood from "./pages/HotEntertainmentBollywood";
// import HotEntertainmentHollywood from "./pages/HotEntertainmentHollywood";
// import MusicBollywood from "./pages/MusicBollywood";
// import MusicHollywood from "./pages/MusicHollywood";
// import TraditionalArtBollywood from "./pages/TraditionalArtBollywood";
// import TraditionalArtHollywood from "./pages/TraditionalArtHollywood";
// import Career from "./pages/Career";
// import Blog from "./pages/Blog";
// import BlogDetail from "./pages/BlogDetail";
// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import BlogForm from "./pages/BlogForm";
// import JobForm from "./pages/JobForm";

// function App() {
//   return (
//     <Router>
//       <div className="bg-blackBg min-h-screen text-neonGreen flex flex-col">
//         <Navbar />
//         <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/hot-entertainment" element={<HotEntertainment />} />
//             <Route
//               path="/hot-entertainment/bollywood"
//               element={<HotEntertainmentBollywood />}
//             />
//             <Route
//               path="/hot-entertainment/hollywood"
//               element={<HotEntertainmentHollywood />}
//             />
//             <Route path="/music" element={<Music />} />
//             <Route path="/music/bollywood" element={<MusicBollywood />} />
//             <Route path="/music/hollywood" element={<MusicHollywood />} />
//             <Route path="/traditional-art" element={<TraditionalArt />} />
//             <Route
//               path="/traditional-art/bollywood"
//               element={<TraditionalArtBollywood />}
//             />
//             <Route
//               path="/traditional-art/hollywood"
//               element={<TraditionalArtHollywood />}
//             />
//             <Route path="/blog" element={<Blog/>} />
//             <Route path="/blog/:id" element={<BlogDetail />} />
//             <Route path="/career" element={<Career/>} />
//             <Route path="/about-us" element={<AboutUs />} />

//             // Add these routes to your existing Routes component
//           <Route path="/admin" element={<AdminLogin />} />
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/admin/blog/new" element={<BlogForm />} />
//           <Route path="/admin/blog/edit/:id" element={<BlogForm />} />
//           <Route path="/admin/job/new" element={<JobForm />} />
//           <Route path="/admin/job/edit/:id" element={<JobForm />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HotEntertainment from "./pages/HotEntertainment";
import Music from "./pages/Music";
import TraditionalArt from "./pages/TraditionalArt";
import AboutUs from "./pages/AboutUs";

// Import new components
import HotEntertainmentBollywood from "./pages/HotEntertainmentBollywood";
import HotEntertainmentHollywood from "./pages/HotEntertainmentHollywood";
import MusicBollywood from "./pages/MusicBollywood";
import MusicHollywood from "./pages/MusicHollywood";
import TraditionalArtBollywood from "./pages/TraditionalArtBollywood";
import TraditionalArtHollywood from "./pages/TraditionalArtHollywood";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import BlogForm from "./pages/BlogForm";
import JobForm from "./pages/JobForm";
import AdminRoute from "./components/AdminRoute";
import EntertainmentForm from "./components/EntertainmentForm";
import ArticleView from "./components/ArticleView";
import BollywoodArticleView from "./components/BollywoodArticleView";
import BollywoodEntertainmentForm from "./components/BollywoodEntertainmentForm";
import HollywoodEntertainmentForm from "./components/HollywoodEntertainmnetForm";
import HollywoodArticleView from "./components/HollywoodArticleView";
import MusicForm from "./components/MusicForm";
import MusicArticleView from "./components/MusicArticleView";
import MusicBollywoodForm from "./components/MusicBollywoodForm";
import MusicBollywoodArticleView from "./components/MusicBollywoodArticleView";
import MusicHollywoodForm from "./components/MusicHollywoodForm";
import MusicHollywoodArticleView from "./components/musicHollywoodArticleView";
// In your App.js or router


function App() {
  return (
    <Router>
      <div className="bg-blackBg min-h-screen text-neonGreen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hot-entertainment" element={<HotEntertainment />} />
            <Route
              path="/hot-entertainment/article/:id"
              element={<ArticleView />}
            />
            <Route
              path="/hot-entertainment/bollywood"
              element={<HotEntertainmentBollywood />}
            />
            <Route
              path="/hot-entertainment/bollywood/article/:id"
              element={<BollywoodArticleView />}
            />

            <Route
              path="/hot-entertainment/hollywood"
              element={<HotEntertainmentHollywood />}
            />
            <Route
              path="/hot-entertainment/hollywood/article/:id"
              element={<HollywoodArticleView/>}
            />
            <Route path="/music" element={<Music />} />
            <Route
              path="/music/article/:id"
              element={<MusicArticleView />}
            />
            <Route path="/music/bollywood" element={<MusicBollywood />} />
            <Route
              path="/music/bollywood/article/:id"
              element={<MusicBollywoodArticleView/>}
            />
            <Route path="/music/hollywood" element={<MusicHollywood />} />
            <Route
              path="/music/hollywood/article/:id"
              element={<MusicHollywoodArticleView/>}
            />
            <Route path="/traditional-art" element={<TraditionalArt />} />
            <Route
              path="/traditional-art/bollywood"
              element={<TraditionalArtBollywood />}
            />
            <Route
              path="/traditional-art/hollywood"
              element={<TraditionalArtHollywood />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/admin" element={<AdminLogin />} />
            <Route element={<AdminRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/blog/new" element={<BlogForm />} />
              <Route path="/admin/blog/edit/:id" element={<BlogForm />} />
              <Route path="/admin/job/new" element={<JobForm />} />
              <Route path="/admin/job/edit/:id" element={<JobForm />} />
              <Route
                path="/admin/hot-entertainment/new"
                element={<EntertainmentForm />}
              />
              <Route
                path="/admin/hot-entertainment/edit/:id"
                element={<EntertainmentForm />}
              />

              <Route
                path="/admin/hot-bollywood-entertainment/new"
                element={<BollywoodEntertainmentForm />}
              />

              <Route
                path="/admin/hot-bollywood-entertainment/edit/:id"
                element={<BollywoodEntertainmentForm />}
              />
              <Route
              path="/admin/hot-hollywood-entertainment/new"
              element={<HollywoodEntertainmentForm />}
            />
            <Route
              path="/admin/hot-hollywood-entertainment/edit/:id"
              element={<HollywoodEntertainmentForm />}
            />
            <Route 
             path="/admin/music/new"
             element={<MusicForm/>}
            />
            <Route path="/admin/music-bollywood/new"
            element={<MusicBollywoodForm/>}
            />
            <Route path="/admin/music-hollywood/new"
            element={<MusicHollywoodForm/>}
            />
            </Route>
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
