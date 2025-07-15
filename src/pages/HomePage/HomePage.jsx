import React, { useState } from 'react';
import './HomePage.scss';
import { FaPlus, FaMinus, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import PrimaryButton from '../../components/Primary_Button/PrimaryButton';

const faqs = [
  {
    question: 'How do I register my vehicle online?',
    answer: 'Simply select the desired i-Kfz process, fill in your vehicle and personal details, upload the required documents, and submit. Our system handles the rest in minutes.'
  },
  {
    question: 'Which i-Kfz processes are supported?',
    answer: 'Zulassungsbeast Pro supports all major i-Kfz processes including new registrations, decommissions, re-registrations, and changes of address or owner.'
  },
  {
    question: 'How long does approval usually take?',
    answer: 'In most cases, approvals are granted within 10 minutes. You’ll be notified immediately once the process is complete.'
  },
  {
    question: 'Is Zulassungsbeast Pro officially recognized?',
    answer: 'Yes, Zulassungsbeast Pro connects directly with the KBA (Federal Motor Transport Authority) and complies with all digital vehicle registration guidelines.'
  },
  {
    question: 'Can I use the platform outside office hours?',
    answer: 'Absolutely. You can initiate processes 24/7. If KBA is under maintenance, your request is queued and submitted once services resume.'
  },

  
];


const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="home-page page-container">
      <div className="intro-section">
        <div className="intro-content">
          <h1>Welcome to Zulassungsbeast Pro</h1>
          <h2>Powering all i-Kfz digital processes</h2>
          <p className="tagline">Fast, secure and compliant registrations – all in one place.</p>

          <ul className="features-list">
            <li><FaCheckCircle className="icon" /> New Registration (Brand-new Vehicles)</li>
            <li><FaCheckCircle className="icon" /> Decommissioning</li>
            <li><FaCheckCircle className="icon" /> Daily Registration</li>
            <li><FaCheckCircle className="icon" /> Re-registration (Active or Inactive Vehicles)</li>
            <li><FaCheckCircle className="icon" /> Address / Name Changes within the District</li>
          </ul>

          <p className="note">Approvals usually take less than <strong>10 minutes</strong> — even during system maintenance, we queue your processes safely.</p>

          <PrimaryButton>Start a Process</PrimaryButton>

          <div className="closing-note">
            <p>
              We’re adding new features regularly. For ideas or suggestions, reach us at <a href="mailto:feedback@zulassungsbeast.de">feedback@zulassungsbeast.de</a>.
            </p>
            <p className="team-signature">– The Zulassungsbeast Pro Team</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-header">
          <FaLightbulb className="faq-icon" />
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
              key={index}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div
                className="faq-answer-wrapper"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  transition: 'max-height 0.4s ease',
                  overflow: 'hidden',
                }}
              >
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
