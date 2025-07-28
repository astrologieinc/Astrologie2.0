'use client';

export default function AstrologyForm() {
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Astrology Consultation Form</h1>
      
      <form 
        name="astrology-consultation" 
        method="POST" 
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="form-name" value="astrology-consultation" />
        
        <div style={{ marginBottom: '20px' }}>
          <label>
            Name:<br />
            <input type="text" name="name" required style={{ width: '100%', padding: '8px' }} />
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>
            Email:<br />
            <input type="email" name="email" required style={{ width: '100%', padding: '8px' }} />
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>
            Birth Date:<br />
            <input type="date" name="birthdate" required style={{ width: '100%', padding: '8px' }} />
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>
            Birth Time:<br />
            <input type="time" name="birthtime" required style={{ width: '100%', padding: '8px' }} />
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>
            Birth Place:<br />
            <input type="text" name="birthplace" required style={{ width: '100%', padding: '8px' }} />
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>
            Questions:<br />
            <textarea name="questions" rows="4" style={{ width: '100%', padding: '8px' }} />
          </label>
        </div>

        <button type="submit" style={{ 
          backgroundColor: '#0070f3', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Submit Consultation Request
        </button>
      </form>
    </div>
  );
}
