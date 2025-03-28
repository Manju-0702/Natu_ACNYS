import React from 'react';
import './Workshop.css';

const Workshop = () => {
  return (
    <div className="workshop-container">
      <div className="workshop-content">
        <h1 className="title">Workshop on [Topic]</h1>
        
        <section className="section">
          <h2 className="section-title">Introduction</h2>
          <p>The workshop on [Topic] was conducted to provide an in-depth understanding of the subject and its practical applications. Experts from the field shared their insights, making the session highly informative and engaging.</p>
        </section>
        
        <section className="section">
          <h2 className="section-title">Objectives</h2>
          <ul>
            <li>To enhance participants' knowledge about [Topic].</li>
            <li>To provide hands-on experience and real-world applications.</li>
            <li>To encourage discussions and networking among participants.</li>
          </ul>
        </section>
        
        <section className="section">
          <h2 className="section-title">Workshop Details</h2>
          <p><strong>Date:</strong> [Date of the workshop]</p>
          <p><strong>Venue:</strong> [Workshop Venue]</p>
          <p><strong>Speakers:</strong> [List of speakers]</p>
          <p>The workshop included various sessions covering different aspects of [Topic], with interactive Q&A sessions to clear doubts.</p>
        </section>
        
        <section className="section">
          <h2 className="section-title">Key Takeaways</h2>
          <ul>
            <li>Participants gained a deep understanding of [Key concept].</li>
            <li>Practical demonstrations helped in better grasping the subject.</li>
            <li>Networking opportunities with industry experts.</li>
          </ul>
        </section>
        
        <section className="section">
          <h2 className="section-title">Conclusion</h2>
          <p>The workshop was a great success, receiving positive feedback from attendees. It provided a valuable learning experience and laid the foundation for further exploration in [Topic].</p>
        </section>
      </div>
    </div>
  );
};

export default Workshop;
