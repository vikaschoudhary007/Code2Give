import React, { useState } from 'react';

const QuickHelpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    urgency: '',
    situationDescription: '',
    preferredContactMethod: 'email',
    immediateDanger: false,
    situations: {
      homelessness: false,
      drugAbuse: false,
      domesticAbuse: false,
      immigrant: false,
      transgender: false,
      other: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSituationChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      situations: {
        ...prevState.situations,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', background: '#fff', border: '1px solid #ddd', borderRadius: '5px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Get Help Quickly</h2>

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Are you in immediate danger?</span>
          <input
            name="immediateDanger"
            type="checkbox"
            checked={formData.immediateDanger}
            onChange={handleChange}
          />
        </label>
            
             {/* Preferred Contact Method */}
            <div>
            <label style={{ display: 'block', margin: '5px 0' }}>
              Preferred Contact Method:
              <select
                name="preferredContactMethod"
                value={formData.preferredContactMethod}
                onChange={handleChange}
                required
                style={{ display: 'block', padding: '10px', border: '1px solid #ccc', marginTop: '5px' }}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </label>
          </div>
  
         

        {/* Name, Email, and Phone */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ flex: '1 0 48%', margin: '1%', padding: '10px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ flex: '1 0 48%', margin: '1%', padding: '10px', border: '1px solid #ccc' }}
          />
        </div>
        
        {/* Contact Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ flex: '1 0 48%', margin: '1%', padding: '10px', border: '1px solid #ccc' }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ flex: '1 0 48%', margin: '1%', padding: '10px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Urgency Selector */}
        <select
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          required
          style={{ padding: '10px', border: '1px solid #ccc' }}
        >
          <option value="">Select Urgency</option>
          <option value="immediate">Immediate</option>
          <option value="urgent">Urgent</option>
          <option value="soon">Soon</option>
          <option value="when_possible">When Possible</option>
        </select>


          <label style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>I wish to contact:</span>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: 'white' }}
          >
            <option value="Le Chaînon">Le Chaînon</option>
            <option value="La Fondation Le Chaînon">La Fondation Le Chaînon</option>
            <option value="Le Magasin du Chaînon">Le Magasin du Chaînon</option>



          </select>
        </label>

        {/* Situational Checkboxes */}
        <fieldset style={{ border: '1px solid #ccc', padding: '10px', margin: '0' }}>
          <legend>Your Situation (check any that apply):</legend>
          {Object.keys(formData.situations).map((key) => (
            <label key={key} style={{ display: 'block' }}>
              <input
                type="checkbox"
                name={key}
                checked={formData.situations[key]}
                onChange={handleSituationChange}
              /> {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
          ))}
        </fieldset>

        {/* Situation Description */}
        <textarea
          name="situationDescription"
          placeholder="Briefly describe your situation"
          value={formData.situationDescription}
          onChange={handleChange}
          required
         
          style={{ height: '100px', padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}
          ></textarea>
  
         
          
  
          {/* Submit Button */}
          <button
            type="submit"
            style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
          >
            Submit for Help
          </button>
        </form>
      </div>
    );
  };
  
  export default QuickHelpForm;
  

