'use client'

import { useState } from "react";
import '../Admin.css'


export default function AddOrganization() {
 

    const [formData, setFormData] = useState({
      name: '',
      Orgnaization: '',
      Role: '',
      Contact: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission - in a real app you would send this to your API
      console.log('Form submitted:', formData);
      // Reset form or redirect
      setFormData({
        name: '',
        Orgnaization: '',
        Role: '',
        Contact: '',
      });
    };
  
    return (
      <div className="layout-container">
        
        {/* Main Content */}
        <div className="main-content">
          <div className="content-container">
            <h1 className="page-title">Add Organization</h1>
            
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-fields">
                  <div className="form-field">
                    <label className="form-label">
                      Admin Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="form-label">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="head"
                      value={formData.Orgnaization}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="form-label">
                      Role
                    </label>
                    <input
                      type="text"
                      name="ambassadorName"
                      value={formData.Role}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="ambassadorContact"
                      value={formData.Contact}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button
                      type="submit"
                      className="submit-button"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  