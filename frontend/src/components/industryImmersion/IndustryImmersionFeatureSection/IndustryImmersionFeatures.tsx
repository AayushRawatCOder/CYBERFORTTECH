import styles from './IndustryImmersionFeatures.module.scss';
import RecommendationIcon from "../../../assets/icons/Recommendation.png";
import StructureIcon from "../../../assets/icons/Structure.png";
import AccelerationIcon from "../../../assets/icons/Acceleration.png";
import ExpertMentorIcon from "../../../assets/icons/ExpertMentor.png";
import RealProjectsIcon from "../../../assets/icons/RealProjects.png";
import TrainingIcon from "../../../assets/icons/Training.png";
import RecognitionIcon from "../../../assets/icons/Recognition.png";
import CertificationIcon from "../../../assets/icons/Certifiction.png";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: ExpertMentorIcon,
    title: 'Expert Mentor',
    description: 'Learn from industry professionals.'
  },
  {
    icon: RealProjectsIcon,
    title: 'Real Projects',
    description: 'Build your portfolio with real projects.'
  },
  {
    icon: AccelerationIcon,
    title: 'Acceleration',
    description: 'Fast-track your cybersecurity career.'
  },
  {
    icon: StructureIcon,
    title: 'Structure',
    description: 'Master skills through guided modules.'
  },
  {
    icon: TrainingIcon,
    title: 'Training',
    description: 'Get real-world cybersecurity training.'
  },
  {
    icon: RecognitionIcon,
    title: 'Recognition',
    description: 'Earn certificates and gain visibility.'
  },
  {
    icon: CertificationIcon,
    title: 'Certification',
    description: 'Complete skill and network growth.'
  },
  {
    icon: RecommendationIcon,
    title: 'Recommendation',
    description: 'Receive recommendation letter from mentors.'
  }
];

export default function IndustryImmersionFeatureSection() {
  return (
    <section className={styles.featureSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.cardOuter}>
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  <img src={feature.icon} alt={feature.title} className={styles.icon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
