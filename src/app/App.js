import { Menubar } from "../components/menubar/Menubar";
import { Feed } from "../components/feed/Feed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SinglePost } from "../components/singlepost/SinglePost";

function App() {
  return (
    <Router>
      <div className="App">

      <Menubar />
        <Routes>
          <Route path="/:id" element={<SinglePost />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
