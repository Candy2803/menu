import React, { useState } from 'react';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import SideBarMenu from './SideBarMenu';

const Settings = () => {
  const [activeMenu, setActiveMenu] = useState("Settings")
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Andre Garvali',
    phone: '+1 718 222 2222',
    email: 'andrelatgarvali@gmail.com'
  });

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Andre Garvali', role: 'Admin' },
    { id: 2, name: 'James Knowles', role: 'Member' },
    { id: 3, name: 'Sally Whitman', role: 'Member' }
  ]);

  const handleEditPersonalInfo = () => {
    // Logic for editing personal information
    console.log('Edit personal information');
  };

  const handleChangePassword = () => {
    // Logic for changing password
    console.log('Change password');
  };

  const handleRemoveMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const handleAddMember = () => {
    // Logic for adding a new team member
    console.log('Add team member');
  };

  return (
    <div className="flex w-full h-screen">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <h1 className="text-3xl text-black font-bold mb-8">Settings</h1>
        
        <div className="space-y-6">
          {/* Personal Information Section */}
          <div className="bg-white text-black shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <button 
                onClick={handleEditPersonalInfo}
                className="text-blue-600 hover:bg-blue-50 p-2 rounded flex items-center"
              >
                <Edit className="mr-2 h-5 w-5" /> Edit
              </button>
            </div>
            <div className="space-y-2">
              <p><strong>Name:</strong> {personalInfo.name}</p>
              <p><strong>Phone:</strong> {personalInfo.phone}</p>
              <p><strong>Email:</strong> {personalInfo.email}</p>
            </div>
          </div>

          {/* Account Security Section */}
          <div className="bg-white text-black shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Account Security</h2>
              <button 
                onClick={handleChangePassword}
                className="text-blue-600 hover:bg-blue-50 p-2 rounded"
              >
                Change password
              </button>
            </div>
          </div>

          {/* Team Members Section */}
          <div className="bg-white text-black shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Team Members</h2>
              <button 
                onClick={handleAddMember}
                className="text-blue-600 hover:bg-blue-50 p-2 rounded flex items-center"
              >
                <PlusCircle className="mr-2 h-5 w-5" /> Add team member
              </button>
            </div>
            <div className="divide-y">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="flex justify-between items-center py-3"
                >
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                  <button 
                    onClick={() => handleRemoveMember(member.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;