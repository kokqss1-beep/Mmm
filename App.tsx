import React, { useState } from 'react';
import { MessageSquare, Mic, Sparkles, Download } from 'lucide-react';
import ChatMode from './components/ChatMode';
import LiveMode from './components/LiveMode';
import InstallPrompt from './components/InstallPrompt';
import { AppMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.CHAT);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  return (
    <div className="h-full flex flex-col md:flex-row bg-slate-50">
      <InstallPrompt isOpen={showInstallPrompt} onClose={() => setShowInstallPrompt(false)} />
      
      {/* Sidebar / Navigation */}
      <nav className="md:w-64 bg-white border-l border-slate-200 flex flex-col shrink-0 z-20 shadow-sm md:shadow-none hidden md:flex">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="bg-gradient-to-tr from-blue-600 to-purple-600 p-2 rounded-lg text-white">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
            العبقري AI
          </h1>
        </div>

        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => setMode(AppMode.CHAT)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              mode === AppMode.CHAT
                ? 'bg-blue-50 text-blue-700 font-bold shadow-sm ring-1 ring-blue-200'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>محادثة نصية</span>
          </button>

          <button
            onClick={() => setMode(AppMode.LIVE)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              mode === AppMode.LIVE
                ? 'bg-purple-50 text-purple-700 font-bold shadow-sm ring-1 ring-purple-200'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Mic className="w-5 h-5" />
            <span>محادثة حية (Live)</span>
            <span className="mr-auto bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">جديد</span>
          </button>
        </div>
        
        <div className="p-4 border-t border-slate-100">
           <button
             onClick={() => setShowInstallPrompt(true)}
             className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all font-semibold"
           >
             <Download className="w-5 h-5" />
             <span>تثبيت التطبيق</span>
           </button>
           <div className="mt-4 text-center text-xs text-slate-400">
              مدعوم بواسطة Google Gemini
           </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 h-[calc(100vh-64px)] md:h-screen relative overflow-hidden">
        <ChatMode isActive={mode === AppMode.CHAT} />
        <LiveMode isActive={mode === AppMode.LIVE} />
      </main>
      
      {/* Mobile Nav (Bottom Bar) - visible only on small screens */}
      <div className="md:hidden h-16 bg-white border-t border-slate-200 flex justify-around items-center px-2 shrink-0 z-30 pb-safe">
        <button 
           onClick={() => setMode(AppMode.CHAT)}
           className={`flex flex-col items-center gap-1 p-2 rounded-lg w-1/3 ${mode === AppMode.CHAT ? 'text-blue-600' : 'text-slate-500'}`}
        >
            <MessageSquare className="w-6 h-6" />
            <span className="text-[10px] font-semibold">محادثة</span>
        </button>
        <button 
           onClick={() => setMode(AppMode.LIVE)}
           className={`flex flex-col items-center gap-1 p-2 rounded-lg w-1/3 ${mode === AppMode.LIVE ? 'text-purple-600' : 'text-slate-500'}`}
        >
            <Mic className="w-6 h-6" />
            <span className="text-[10px] font-semibold">مباشر</span>
        </button>
        <button 
           onClick={() => setShowInstallPrompt(true)}
           className="flex flex-col items-center gap-1 p-2 rounded-lg w-1/3 text-slate-500 hover:text-blue-600"
        >
            <Download className="w-6 h-6" />
            <span className="text-[10px] font-semibold">تثبيت</span>
        </button>
      </div>
    </div>
  );
};

export default App;