import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LiveConversations } from "./components/LiveConversations";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="mr-64">
          <TopBar />
          <div className="p-6">
            <Routes>
              <Route path="/live" element={<LiveConversations />} />
              <Route
                path="/categorized"
                element={<div>مکالمات دسته‌بندی شده</div>}
              />
              <Route path="/" element={<LiveConversations />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
