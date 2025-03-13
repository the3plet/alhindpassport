import ChartComponent from '@/components/admin/ChartComponent';
import FeesCollectionReport from '@/components/admin/FeesCollectionReport';
import FilterSection from '@/components/admin/FilterSection';
import ICACMonitoring from '@/components/admin/ICACMonitoring';
import RecentApplications from '@/components/admin/RecentApplications';
import React, { useState } from 'react'

type Props = {}

const AdminDashboard = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>('applications');

    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <div className="header-icons">
            {/* Placeholder for icons */}
            <span>Icon1</span>
            <span>Icon2</span>
          </div>
        </header>
  
        <div className="sidebar">
          <div className="sidebar-profile">
            {/* Placeholder for profile info */}
            <img src="/path/to/profile.jpg" alt="Profile" />
            <p>Admin Name</p>
          </div>
          <nav className="sidebar-nav">
            <button onClick={() => setActiveTab('applications')}>Recent Applications</button>
            <button onClick={() => setActiveTab('fees')}>Fees Collection Report</button>
            <button onClick={() => setActiveTab('icac')}>ICAC Monitoring</button>
          </nav>
        </div>
  
        <main className="dashboard-main">
          <FilterSection />
          <ChartComponent />
          <RecentApplications />
          <FeesCollectionReport />
      <ICACMonitoring />
        </main>
      </div>
    );
  
}

export default AdminDashboard