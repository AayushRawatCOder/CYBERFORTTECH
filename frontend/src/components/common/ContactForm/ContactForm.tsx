import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>
            <span className={styles.titleHighlight}>CONNECT</span> WITH US!
          </h2>
          <p className={styles.formSubtitle}>Let's Find the Right Solution for You!</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Company Name*</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your Last Name"
                value={formData.companyName}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mail ID*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Zip Code"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Send us your Message</label>
            <textarea
              name="message"
              placeholder="Enter your Phone Number"
              value={formData.message}
              onChange={handleChange}
              className={styles.formTextarea}
              rows={5}
            />
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>
              SEND REQUEST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;