import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostListPage/PostListPage";
import PostCreate from "./pages/PostCreatePage/PostCreatePage";
import PostContent from "./pages/PostContentPage/PostContentPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/PostCreate" element={<PostCreate />} />
        <Route path="/PostContent/:id" element={<PostContent />} />
      </Routes>
    </Router>
  );
};

export default App;
