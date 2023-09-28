import React, { useState } from 'react';
import './SurveyForm.css'; 

function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    gender: 'male',
    feedback: '',
    isPwcEmployee: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = () => {
    const { name, email, contactNumber, gender, feedback, isPwcEmployee } = formData;
    const message = `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nGender: ${gender}\nFeedback: ${feedback}\nPwC Employee: ${isPwcEmployee ? 'Yes' : 'No'}`;
    alert(message);
  };

  return (
    <div className="survey-form-container"> 
      <h2>Survey Form</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-input" />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} className="form-input" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} className="form-input" />
            Female
          </label>
        </div>
        <div>
          <label>Feedback:</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} className="form-input" ></textarea>
        </div>
        <div>
          <label>Are you a PwC employee?</label>
          <label>
            <input type="checkbox" name="isPwcEmployee" checked={formData.isPwcEmployee} onChange={handleChange} />
            Yes
          </label>
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SurveyForm;
