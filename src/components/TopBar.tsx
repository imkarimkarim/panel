import { UserCircle } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="text-lg font-semibold text-gray-800">پنل مدیریت</div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-600">مدیر سیستم</div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <UserCircle className="w-8 h-8 text-gray-500" />
        </div>
      </div>
    </div>
  );
};
