import React, { useState } from 'react';
import styles from './FAQ.module.scss';

interface FAQItem {
  id: string;
  avatar: string;
  color: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqData: FAQItem[] = [
    {
      id: "1",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
      color: "primary",
      question: "What is the expertise of Cyberfort Tech?",
      answer: "CyberFort Tech specializes in comprehensive cybersecurity education and training. We provide industry-leading courses in ethical hacking, penetration testing, security operations, and compliance frameworks. Our expertise spans across network security, application security, cloud security, and incident response with a focus on hands-on practical skills."
    },
    {
      id: "2",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      color: "success",
      question: "How long are the courses?",
      answer: "Course durations vary based on the program level and content depth. Most courses range from 8-12 weeks, with flexible learning options including part-time and self-paced schedules. We also offer intensive bootcamp formats and extended professional certification tracks."
    },
    {
      id: "3",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      color: "warning",
      question: "Do you provide job assistance?",
      answer: "Yes, we provide comprehensive career support including resume building, interview preparation, and industry networking opportunities. Our career services team offers one-on-one mentoring, mock interviews, and connections with our extensive network of industry partners. We also organize regular job fairs and networking events."
    },
    {
      id: "4",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702e",
      color: "danger",
      question: "What certifications do you offer?",
      answer: "We offer preparation courses for major industry certifications including CompTIA Security+, CEH, CISSP, and more. Our programs include exam vouchers and practice tests. Additionally, we provide our own specialized certifications recognized by leading cybersecurity companies."
    },
    {
      id: "5",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      color: "primary",
      question: "Why should I choose CyberFort?",
      answer: "CyberFort is a leading cybersecurity training provider with a proven track record of success. Our instructors are industry experts with years of experience in the field. We offer hands-on training, real-world projects, and personalized mentorship. Our platform is user-friendly and accessible from anywhere, with 24/7 support and resources."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqContent}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>FAQs</h2>
          <p className={styles.faqSubtitle}>
            Find your frequently<br />asked questions here.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={faq.id} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? '−' : '▼'}
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
