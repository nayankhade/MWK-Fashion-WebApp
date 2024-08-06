import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../../beforeLogin/Navbar';

export function AdminDashboard() {
    const [selectedRole, setSelectedRole] = useState(''); // Current role
    const [uniqueCode, setUniqueCode] = useState(''); // Unique code input value
    const [roles, setRoles] = useState(['USER','ADMIN', 'MANAGER']); // Static roles
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedRole) {
            const fetchCodes = async () => {
                setLoading(true);
                setError('');
                try {
                    const response = await axios.get(`http://localhost:9191/admin/uniqueCode/${selectedRole}`);
                    setUniqueCode(response.data.uniqueCode || '');
                } catch (error) {
                    setError('Error fetching unique codes');
                    console.error('Error fetching unique codes:', error);
                }
                setLoading(false);
            };

            fetchCodes();
        }
    }, [selectedRole]);

    const handleRoleClick = (role) => {
        setSelectedRole(role);
    };

    const handleUniqueCodeChange = (e) => {
        setUniqueCode(e.target.value);
    };

    const handleSave = async () => {
        setLoading(true);
        setError('');
        try {
            await axios.post('http://localhost:9191/admin/uniqueCode', { role: selectedRole, uniqueCode });
            alert('Unique code saved successfully');
        } catch (error) {
            setError('Error saving unique code');
            console.error('Error saving unique code:', error);
        }
        setLoading(false);
    };

    return (
        <div className='admin-dashboard'>
            <Navbar />
            <div>
                <h1>Admin Dashboard</h1>
                <div>
                    {roles.map(role => (
                        <div
                            key={role}
                            style={{
                                display: 'inline-block',
                                margin: '5px',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                backgroundColor: role === selectedRole ? '#ddd' : '#fff'
                            }}
                            onClick={() => handleRoleClick(role)}
                        >
                            {role}
                        </div>
                    ))}
                </div>
                <div>
                    {selectedRole && (
                        <>
                            <label>
                                Role: <span>{selectedRole}</span>
                            </label>
                            <div>
                                <input
                                    type="text"
                                    value={uniqueCode}
                                    onChange={handleUniqueCodeChange}
                                    placeholder="Enter unique code here..."
                                />
                                <button onClick={handleSave} disabled={loading}>
                                    {loading ? 'Saving...' : 'Save Unique Code'}
                                </button>
                            </div>
                        </>
                    )}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
}
