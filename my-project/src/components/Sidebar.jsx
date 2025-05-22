import React from 'react';
import { Home, Settings, Users, Mic2 } from 'lucide-react'; // Example icons, changed UserPlus to Mic2

const Sidebar = () => {
  return (
    <aside className="bg-secondary text-white w-64 p-4 space-y-4 hidden md:block font-cairo"> {/* Hidden on small screens, block on medium and up */}
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 hover:bg-primary rounded-md transition-colors">
              <Home size={20} className="mr-3" />
              الرئيسية
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 hover:bg-primary rounded-md transition-colors">
              <Users size={20} className="mr-3" />
              قائمة الطلاب
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 hover:bg-primary rounded-md transition-colors">
              <Mic2 size={20} className="mr-3" /> {/* Changed icon */}
              التسميع التفاعلي {/* Changed text */}
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 hover:bg-primary rounded-md transition-colors">
              <Settings size={20} className="mr-3" />
              الإعدادات
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <p className="text-xs">&copy; 2024 App Name</p>
      </div>
    </aside>
  );
};

export default Sidebar;
