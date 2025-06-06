import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-64 bg-white shadow-lg p-4">
      <nav className="space-y-4">
        <Link
          to="/live"
          className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          مکالمات زنده
        </Link>
        <Link
          to="/categorized"
          className="block p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          مکالمات دسته‌بندی شده
        </Link>
      </nav>
    </div>
  );
};
