import React, { useState } from 'react';
import './AddFee.css';
import { useNavigate } from 'react-router-dom';



const AddFee: React.FC = () => {
  // Form state
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    frequency: '',
    installment: 0,
    amount: 0,
    registerFee: 0,
    course: [],
    studentCount: 0,
    status: false,
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      frequency: '',
      installment: 0,
      amount: 0,
      registerFee: 0,
      course: [],
      studentCount: 0,
      status: false,
    });
    history('/')
  };

  return (
    <div className="fee-form-container">
      <h2>Add Fee Structure</h2>
      <form className="fee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Fee Structure Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="frequency">Frequency:</label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleInputChange}
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="installment">Installment:</label>
          <input
            type="number"
            id="installment"
            name="installment"
            value={formData.installment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerFee">Register Fee:</label>
          <input
            type="number"
            id="registerFee"
            name="registerFee"
            value={formData.registerFee}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          >
            <option value="Course1">Course 1</option>
            <option value="Course2">Course 2</option>
            <option value="Course3">Course 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="studentCount">Student Count:</label>
          <input
            type="number"
            id="studentCount"
            name="studentCount"
            value={formData.studentCount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="checkbox"
            id="status"
            name="status"
            checked={formData.status}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Fee Structure</button>
      </form>
    </div>
  );
};
  

export default AddFee;
