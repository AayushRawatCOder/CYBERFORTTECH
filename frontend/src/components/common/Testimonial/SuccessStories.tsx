import React, { useState, useEffect } from 'react';
import styles from './SuccessStories.module.scss';
import ABHINAV from '../../../assets/testm/ABHINAV.jpeg';
import SHAIKH from '../../../assets/testm/SHAIKH.jpeg';
import NULLBYTE from '../../../assets/testm/NULLBYTE.jpeg';
import UMER from '../../../assets/testm/UMER.jpeg';
import AKRAMKHAN from '../../../assets/testm/AKRAMKHAN.jpeg';
import BASANTDEEP from '../../../assets/testm/BASANTDEEP.jpeg';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  designation: string;
  src: string;
}

const SuccessStories: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "My 3-month CTF internship at CyberFort Tech was transformative. The program combined hands-on challenges with expert mentorship, offering an exceptional platform to build advanced problem-solving and cybersecurity skills. CyberFort Tech's commitment to delivering high-quality, practical learning experiences makes them a leader in the field. I wholeheartedly recommend CyberFort Tech to anyone seeking excellence in cybersecurity training and internships!",
      name: "ABHINAV RAJPUROHIT",
      designation: "NMIMS, MUMBAI | CYBERSECURITY STUDENT",
      src: ABHINAV,
    },
    {
      id: 2,
      quote: "My internship with CyberFort Tech's CTF program was an extraordinary opportunity to grow and excel in cybersecurity. The carefully designed tasks, paired with expert mentorship, allowed me to master advanced concepts and enhance my analytical thinking. The program's focus on practical, real-world challenges pushed me to innovate and solve problems effectively. CyberFort Tech truly stands out for its commitment to nurturing talent, and I strongly recommend them for anyone eager to build a successful career in this field.",
      name: "SHAIKH NOOR ALI",
      designation: "BUNTS SANGHA, MUMBAI | BCA STUDENT",
      src: SHAIKH,
    },
    {
      id: 3,
      quote: "Our 3-month internship with CyberFort Tech's CTF program was an extraordinary experience as a team. The program challenged us with dynamic tasks and real-world cybersecurity problems that pushed us to think critically and work cohesively. The mentorship we received was exceptional, providing both technical insights and strategic guidance to tackle complex challenges. The hands-on approach and emphasis on innovation allowed us to grow individually and as a team, refining our problem-solving and cybersecurity expertise. CyberFort Tech's commitment to cultivating talent and delivering excellence is truly unmatched.",
      name: "TEAM NULLBYTE NINJAS",
      designation: "POORNIMA UNIVERSITY, RAJASTHAN | CTF PLAYERS",
      src: NULLBYTE,
    },
    {
      id: 4,
      quote: "CyberFort Tech's CCNA program was a game-changer for me. The expert trainers simplified advanced networking concepts and provided real-world practice through hands-on labs. Their structured curriculum and continuous support were invaluable in preparing me for industry challenges. My performance during the training stood out, and I was honored to be hired by CyberFort Tech for my exceptional work. I highly recommend their programs to anyone aspiring for success in networking!",
      name: "UMER MAQBOOL",
      designation: "CYBERSECURITY ANALYST | CCNA",
      src: UMER,
    },
    {
      id: 5,
      quote: "The VAPT training at CyberFort Tech was exceptional. The trainers demonstrated deep expertise, delivering comprehensive and advanced content with precision. Each session was meticulously designed to include hands-on practical's, ensuring a strong grasp of vulnerability assessment and penetration testing techniques. The curriculum seamlessly blended theory with real-world scenarios, equipping participants to tackle modern cybersecurity challenges confidently. CyberFort Tech's unwavering support throughout the training made the learning experience enriching and stress-free.",
      name: "AKRAMKHAN PATHAN",
      designation: "SYSTEM ENGINEER NISHA INFOTECH | V.A.P.T",
      src: AKRAMKHAN,
    },
    {
      id: 6,
      quote: "I had a fantastic experience with CyberFort Tech's CEH training. The trainers were knowledgeable and made learning engaging with hands-on sessions and real-world scenarios. The curriculum was well-structured, and the team's support was outstanding. This training boosted my confidence and prepared me for cybersecurity challenges. Highly recommend CyberFort Tech!",
      name: "BASANTDEEP SINGH",
      designation: "TECHNICAL SUPPORT SUPERVISOR C1 INDIA PVT. LTD. | CERTIFIED ETHICAL HACKER",
      src: BASANTDEEP,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  const currentTestimonial = testimonials[activeSlide];

  const getHighlightedWords = (text: string) => {
    const wordsToHighlight = [
      'transformative',
      'hands-on challenges',
      'expert mentorship',
      'advanced problem-solving',
      'cybersecurity skills',
      'high-quality',
      'practical learning experiences',
      'extraordinary opportunity',
      'master advanced concepts',
      'analytical thinking',
      'real-world challenges',
      'nurturing talent',
      'dynamic tasks',
      'think critically',
      'exceptional',
      'technical insights',
      'strategic guidance',
      'problem-solving',
      'cybersecurity expertise',
      'game-changer',
      'advanced networking concepts',
      'hands-on labs',
      'structured curriculum',
      'exceptional work',
      'deep expertise',
      'comprehensive',
      'vulnerability assessment',
      'penetration testing',
      'modern cybersecurity challenges',
      'fantastic experience',
      'hands-on sessions',
      'well-structured',
      'boosted my confidence'
    ];

    let processedText = text;
    const parts: { text: string; isHighlighted: boolean }[] = [];
    let lastIndex = 0;

    wordsToHighlight.forEach(phrase => {
      const index = processedText.toLowerCase().indexOf(phrase.toLowerCase(), lastIndex);
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push({
            text: processedText.substring(lastIndex, index),
            isHighlighted: false
          });
        }
        parts.push({
          text: processedText.substring(index, index + phrase.length),
          isHighlighted: true
        });
        lastIndex = index + phrase.length;
      }
    });

    if (lastIndex < processedText.length) {
      parts.push({
        text: processedText.substring(lastIndex),
        isHighlighted: false
      });
    }

    return parts.length > 0 ? parts : [{ text: processedText, isHighlighted: false }];
  };

  const renderQuoteWithHighlights = () => {
    const parts = getHighlightedWords(currentTestimonial.quote);
    
    return parts.map((part, index) => (
      part.isHighlighted ? (
        <strong key={index} className={styles.highlight}>
          {part.text}
        </strong>
      ) : (
        <span key={index}>{part.text}</span>
      )
    ));
  };

  return (
    <section className={styles.successStories}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img 
            src={currentTestimonial.src} 
            alt={currentTestimonial.name}
            className={styles.authorImageLarge}
          />
          <div className={styles.pagination}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === activeSlide ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.quoteIcon}>&ldquo;</div>
          
          <p className={styles.subtitle}>Why people choose our courses.....</p>
          
          <div className={styles.quote}>
            <h2 className={styles.quoteText}>
              {renderQuoteWithHighlights()}
            </h2>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.authorDetails}>
            <h3 className={styles.authorNameLarge}>{currentTestimonial.name}</h3>
            <p className={styles.authorTitleLarge}>{currentTestimonial.designation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
