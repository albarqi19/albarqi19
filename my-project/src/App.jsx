import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import DashboardPage from './pages/DashboardPage'; // Set DashboardPage as default
// import AddStudentPage from './pages/AddStudentPage';
// import InteractiveRecitationPage from './pages/InteractiveRecitationPage';
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen font-cairo bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar /> {/* Sidebar will hide itself on small screens based on its own classes */}
        <MainContent>
          <DashboardPage /> {/* Render DashboardPage by default */}
          {/* <AddStudentPage /> */}
          {/* <InteractiveRecitationPage /> */}
        </MainContent>
      </div>
    </div>
  );
}

export default App;
