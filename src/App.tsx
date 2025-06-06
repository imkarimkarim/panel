import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LiveConversations } from "./components/LiveConversations";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { FileUpload } from "./components/FileUpload";

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
                element={
                  <div className="space-y-8">
                    <div className="bg-white rounded-lg shadow p-6">
                      <h2 className="text-xl font-semibold mb-4">
                        مکالمات دسته‌بندی شده
                      </h2>
                      {/* Add your categorized conversations list here */}
                    </div>
                    <div className="bg-white rounded-lg shadow">
                      <div className="p-6 border-t">
                        <h2 className="text-xl font-semibold mb-4">
                          آپلود فایل‌های مکالمه
                        </h2>
                        <FileUpload />
                      </div>
                    </div>
                  </div>
                }
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
