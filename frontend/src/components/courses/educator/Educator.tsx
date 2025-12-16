import React, { useRef } from 'react';
import style from './Educators.module.scss';


const ShieldIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>;
const LockIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-9-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>;
const BrainIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>;
const ChevronLeft = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M15 18l-6-6 6-6"/></svg>;
const ChevronRight = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M9 18l6-6-6-6"/></svg>;

const educatorsData = [
  {
    id: 1,
    name: 'Anuj Kalbalia (Ex-IBM)',
    role: 'Educator, Hacking',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop', 
    subject: 'Cybersecurity',
    experience: '11+ Yrs',
    subjectType: 'cyber',
    details: ['Ex-CodeChef, Internshala', 'NIT Durgapur alumnus'],
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Security Analyst',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
    subject: 'Hacking',
    experience: '8+ Yrs',
    subjectType: 'hacking',
    details: ['Bug Bounty Hunter', 'CISSP Certified'],
  },
  {
    id: 3,
    name: 'Dr. Alan Grant',
    role: 'AI Researcher',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
    subject: 'Artificial Intelligence',
    experience: '15+ Yrs',
    subjectType: 'ai',
    details: ['PhD Stanford', 'Ex-Google Brain'],
  },
  {
    id: 4,
    name: 'Elena Fisher',
    role: 'Cloud Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
    subject: 'Cloud Security',
    experience: '10+ Yrs',
    subjectType: 'cyber',
    details: ['AWS Solutions Architect', 'Cloud Security Alliance'],
  },
  {
    id: 5,
    name: 'Marcus Holloway',
    role: 'Pentester',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    subject: 'Ethical Hacking',
    experience: '5+ Yrs',
    subjectType: 'hacking',
    details: ['Offensive Security', 'Red Team Lead'],
  },
];

const Educators = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild as HTMLElement;
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 24; 
      const scrollAmount = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getSubjectIcon = (type: string) => {
    switch (type) {
      case 'cyber': return <ShieldIcon />;
      case 'hacking': return <LockIcon />;
      case 'ai': return <BrainIcon />;
      default: return <ShieldIcon />;
    }
  };

  return (
    <section className={style.whyPartnerSection}>
      <div className={style.container}>
        
        {/* Header */}
        <div className={style.header}>
            <h2 className={style.title}>
                MEET YOUR <br />
                <span className={style.colorful}>SUPER-SKILLED EDUCATORS</span>
            </h2>
            <p className={style.subtitle}>
                Our top-notch instructors have years of experience from companies
                <br />
                such as Google, IBM, and McKinsey, and more.
            </p>
            
            <div className={style.navControls}>
                <button className={style.navBtn} onClick={() => scroll('left')} aria-label="Previous">
                    <ChevronLeft />
                </button>
                <button className={style.navBtn} onClick={() => scroll('right')} aria-label="Next">
                    <ChevronRight />
                </button>
            </div>
        </div>

        {/* Carousel Track */}
        <div className={style.carouselTrack} ref={scrollRef}>
          {educatorsData.map((educator) => (
            <div key={educator.id} className={style.cardOuter}>
              <div className={style.cardInner}>
                
                <div className={style.imageWrapper}>
                   <img src={educator.image} alt={educator.name} className={style.educatorImage} />
                </div>

                <div className={style.cardContent}>
                    <div className={style.badgeRow}>
                        <span className={`${style.subjectBadge} ${style[educator.subjectType]}`}>
                            {getSubjectIcon(educator.subjectType)}
                            {educator.subject}
                        </span>
                        <span className={style.expBadge}>{educator.experience}</span>
                    </div>

                    <h3 className={style.cardTitle}>{educator.name}</h3>
                    <p className={style.cardDescription}>{educator.role}</p>

                    <ul className={style.detailsList}>
                        {educator.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educators;