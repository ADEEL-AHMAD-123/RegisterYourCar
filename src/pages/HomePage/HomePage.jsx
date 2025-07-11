import React, { useState } from 'react';
import './HomePage.scss';
import { FaPlus, FaMinus, FaLightbulb } from 'react-icons/fa';
import PrimaryButton from '../../components/Primary_Button/PrimaryButton';

const faqs = [
  { question: 'What is Zulassungsbeast Pro?', answer: 'Zulassungsbeast Pro supports all i-Kfz processes with quick approvals.' },
  { question: 'Is my data safe?', answer: 'Yes, your data is encrypted and securely stored.' },
  { question: 'Can other participants see my activities?', answer: 'No, your activities are private.' },
  { question: 'What happens to my feedback?', answer: 'We use feedback to improve our services.' },
  { question: 'Supported i-Kfz processes', answer: 'Registrations, decommissions, and changes.' },
  { question: 'How can I give feedback?', answer: 'Email us at feedback@zulassungsbeast.de.' },
];

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="home-page page-container">
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <h1>Hello Mert Akilic!</h1>
          <h2>Welcome to Zulassungsbeast Pro!</h2>

          <p>Zulassungsbeast Pro now supports all i-Kfz processes. These are:</p>
          <ul>
            <li>New registration (brand new vehicles)</li>
            <li>Decommissioning</li>
            <li>Daily registration</li>
            <li>Re-registration (of a currently registered vehicle)</li>
            <li>
              Re-registration (of a currently out-of-service vehicle) with and
              without change of owner
            </li>
            <li>Change of address and name within the registration district</li>
          </ul>

          <p>
            And all this in record time! A typical approval process takes less than 10 minutes.
          </p>
          <p>
            We're launching new features almost daily—stay tuned! Feel free to
            send us your suggestions and improvements to{' '}
            <a href="mailto:feedback@zulassungsbeast.de">feedback@zulassungsbeast.de</a>.
          </p>
          <p>
            Zulassungsbeast Pro functions as a direct connection to the Federal Motor Transport
            Authority. This means that the function is unavailable during maintenance
            work on the KBA's side. However, you can continue working and submitting
            processes during this time. We will ensure that these are submitted after
            the maintenance window.
          </p>
          <p>
            Thank you for your trust. We wish you much fun getting licensed with Zulassungsbeast Pro!
          </p>
          <p>The Zulassungsbeast Pro team</p>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="faq-heading">
            <FaLightbulb className="icon" />
            <h3>questions and answers</h3>
          </div>

          <div className="faqs">
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
      </div>
    </section>
  );
};

export default HomePage;
