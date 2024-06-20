import React, { useState } from 'react';
import Layout from '../Components/Layout';

const ProjectAllocations = () => {
    const [allocations, setAllocations] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [allocatedTo, setAllocatedTo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAllocation = { projectName, allocatedTo, startDate, endDate, confirmed: false };

        if (editIndex !== null) {
            const updatedAllocations = allocations.map((alloc, index) =>
                index === editIndex ? newAllocation : alloc
            );
            setAllocations(updatedAllocations);
            setEditIndex(null);
        } else {
            setAllocations([...allocations, newAllocation]);
        }

        // Clear the form fields
        setProjectName('');
        setAllocatedTo('');
        setStartDate('');
        setEndDate('');
    };

    const handleEdit = (index) => {
        const allocation = allocations[index];
        setProjectName(allocation.projectName);
        setAllocatedTo(allocation.allocatedTo);
        setStartDate(allocation.startDate);
        setEndDate(allocation.endDate);
        setEditIndex(index);
    };

    const handleConfirm = async (index) => {
        const updatedAllocations = allocations.map((alloc, idx) =>
            idx === index ? { ...alloc, confirmed: true } : alloc
        );
        setAllocations(updatedAllocations);

        const allocationToConfirm = updatedAllocations[index];
        try {
            const response = await axios.post('http://localhost:8080/api/allocations/addProject', allocationToConfirm, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Allocation confirmed:', response.data);
        } catch (error) {
            console.error('Error confirming allocation:', error);
        }
    };

    return (
        <Layout>
            <main className='main-container'>
                <div className='main-title'>
                    <h3>PROJECT ALLOCATIONS</h3>
                </div>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='project'>Project Name: </label>
                            <input
                                type='text'
                                id='project'
                                value={projectName}
                                size={39}
                                onChange={(e) => setProjectName(e.target.value)}
                                required
                            />
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <label htmlFor='proj-desc'>Project Description: </label>
                            <textarea
                                id='proj-desc'
                                rows="8" cols="52"
                                value={projectDescription}
                                onChange={(e) => setProjectDescription(e.target.value)}
                                required
                            />
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <label htmlFor='employee'>Allocated to:   </label>
                            <input
                                type='text'
                                id='employee'
                                value={allocatedTo}
                                size={30}
                                onChange={(e) => setAllocatedTo(e.target.value)}
                                required
                            />
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <label htmlFor='start-date'>Project start Date: </label>
                            <input
                                type='date'
                                id='start-date'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <label htmlFor='end-date'>Project end Date: </label>
                            <input
                                type='date'
                                id='end-date'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                        <br></br>
                        <button type='submit'>{editIndex !== null ? 'Update Allocation' : 'Allocate Project'}</button>
                    </form>
                </div>
                <div className='allocations-list'>
                    <h4>Current Allocations</h4>
                    <ul>
                        {allocations.map((allocation, index) => (
                            <li key={index}>
                                <strong>Project:</strong> {allocation.projectName}, <strong>Allocated to    :</strong> {allocation.allocatedTo}, <strong>Start Date:</strong> {allocation.startDate}, <strong>End Date:</strong> {allocation.endDate}
                                {!allocation.confirmed && (
                                    <>
                                        <br></br>
                                        <button id="edit" onClick={() => handleEdit(index)}>Edit</button>
                                        <button id="confirm" onClick={() => handleConfirm(index)}>Confirm</button>
                                    </>
                                )}
                                {allocation.confirmed && <span> - Confirmed</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </Layout>
    );
};

export default ProjectAllocations;