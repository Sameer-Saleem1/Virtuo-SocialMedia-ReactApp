import { useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavbarBootstrap from "./Components/Navbar";
import PostList from "./Components/PostList";
import SideBar from "./Components/SideBar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="d-flex sidebar ">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="d-block content">
          <NavbarBootstrap />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
