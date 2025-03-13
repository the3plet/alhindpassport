import React from 'react';
import { Link } from 'react-router';
// import './RecentApplications.css';

interface RecentApplicationsProps {}

// Placeholder data - replace with your actual data fetching/management
const applications = [
  { id: 1, name: 'John Doe', date: '2024-03-10', status: 'Pending' },
  { id: 2, name: 'Jane Smith', date: '2024-03-09', status: 'Approved' },
  { id: 3, name: 'Peter Jones', date: '2024-03-08', status: 'Rejected' },
];

const RecentApplications: React.FC<RecentApplicationsProps> = () => {
  return (
    <div className="recent-applications">
      <h2>Recent Applications</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.name}</td>
              <td>{app.date}</td>
              <td>{app.status}</td>
              <td>
                <Link to={`/application/${app.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentApplications;