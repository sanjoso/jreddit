import { Menubar } from "../components/menubar/Menubar";
import { Feed } from "../components/feed/Feed";
import { SinglePost } from "../features/singlepost/SinglePost";
import { Comments } from "../features/comments/Comments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">

      <Menubar />
        <Routes>
          <Route path="/:id/comments" element={<Comments />} />
          <Route path="/:id" element={<SinglePost />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
