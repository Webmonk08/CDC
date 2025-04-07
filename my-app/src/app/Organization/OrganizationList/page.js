'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Trash2, Edit } from 'lucide-react';
import '../organization.css'; 
import {ChevronDown } from 'lucide-react'

// OrganizationList Component - Main view for listing all organizations
export default function OrganizationList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [organizations, setOrganizations] = useState([
    { id: 1, name: 'OpenAI', ambassador: 'John Doe', contact: 'john@example.com' },
    { id: 2, name: 'Google', ambassador: 'Jane Smith', contact: 'jane@example.com' },
    { id: 3, name: 'Microsoft', ambassador: 'Michael Johnson', contact: 'michael@example.com' },
    { id: 4, name: 'Apple', ambassador: 'Emily Davis', contact: 'emily@example.com' },
    { id: 5, name: 'Amazon', ambassador: 'Daniel Brown', contact: 'daniel@example.com' },
  ]);

  function SidebarItemDropdown({ text, children, active }) {
    const [isOpen, setIsOpen] = useState(active);
    
    return (
      <div className="sidebar-dropdown">
        <button 
          className={`sidebar-dropdown-toggle ${active ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {text}
          <ChevronDown size={16} className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
        </button>
        {isOpen && <div className="sidebar-dropdown-content">{children}</div>}
      </div>
    );
  }

  function SidebarItem({ text, active }) {
    return (
      <Link
        href="#" 
        className={`sidebar-item ${active ? 'active' : ''}`}
      >
        {text}
      </Link>
    );
  }
  
  function SidebarSubItem({ text, href, active }) {
    return (
      <Link 
        href={href || '#'} 
        className={`sidebar-subitem ${active ? 'active' : ''}`}
      >
        {text}
      </Link>
    );
  }
 
 


  const handleDelete = (id) => {
    setOrganizations(organizations.filter(org => org.id !== id));
  };

  const filteredOrganizations = organizations.filter(org => 
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.ambassador.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="layout-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-container">
          <div className="profile-avatar">JD</div>
          <div className="profile-info">
            <div className="profile-name">Jhon Doe</div>
            <div className="profile-role">Super Admin</div>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <SidebarItem text="Statistics" />
          <SidebarItemDropdown text="Organizations" active={true}>
            <SidebarSubItem text="Add" href="/organizations/add" />
            <SidebarSubItem text="List" href="/organizations" active={true} />
          </SidebarItemDropdown>
          <SidebarItemDropdown text="Admin">
            <SidebarSubItem text="Add" href="/admin/add" />
            <SidebarSubItem text="List" href="/admin/list" />
          </SidebarItemDropdown>
          <SidebarItem text="Analytics" />
          <SidebarItem text="Content Management" />
          <SidebarItem text="System Settings" />
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="content-container">
          <h1 className="page-title">Organizations</h1>
          
          {/* Search */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search organizations..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="search-icon" size={18} />
          </div>
          
          {/* Table */}
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>S. No</th>
                  <th>Organization Name</th>
                  <th>Ambassador Contact</th>
                  <th className="actions-header">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrganizations.map((org, index) => (
                  <tr key={org.id}>
                    <td>{index + 1}</td>
                    <td className="org-name">{org.name}</td>
                    <td>{org.ambassador}</td>
                    <td className="actions-cell">
                      <button 
                        className="delete-button"
                        onClick={() => handleDelete(org.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                      <Link href={`/organizations/edit/${org.id}`} className="edit-button">
                        <Edit size={18} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}