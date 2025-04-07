'use client'
import Head from 'next/head';

import SideNav from '@/components/SideNav';
import StatisticsSection from '@/Statistics/page';
// import OrganizationSection from '@/Organization/OrganizationSection';
// import AdminSection from '@/components/Admin/AdminSection';
// import AnalyticsSection from '@/components/Analytics/AnalyticsSection';
import { useState } from 'react';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('statistics');
  const [userProfile, setUserProfile] = useState({
    name: 'Jhon Doe',
    role: 'Super Admin',
    avatar: 'JD'
  });

  // Handle navigation changes
  const handleNavChange = (section) => {
    setActiveSection(section);
  };

  // Render active section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'statistics':
        return <StatisticsSection />;
      case 'organizations':
        return <OrganizationSection />;
      case 'admin':
        return <AdminSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'contentManagement':
        return <ContentManagementSection />;
      case 'systemSettings':
        return <SystemSettingsSection />;
      default:
        return <StatisticsSection />;
    }
  };

  return (
    <div className="dashboard-container">
      <Head>
        <title>Admin Dashboard | {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</title>
        <meta name="description" content="Admin Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNav 
        activeSection={activeSection} 
        onNavChange={handleNavChange}
        userProfile={userProfile}
      />
      
      <main className="main-content">
        {renderSectionContent()}
      </main>

      <style jsx>{`
        .dashboard-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          height: 100vh;
          background-color: #f5f7fa;
        }
        
        .main-content {
          padding: 24px;
          overflow-y: auto;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}