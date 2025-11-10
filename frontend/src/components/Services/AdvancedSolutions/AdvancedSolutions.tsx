// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { getAdvancedSolutionsByService, getServiceTypeFromRoute } from '../../../Data/Data-service/AdvanceSolution';
// import './AdvancedSolutions.scss';

// interface AdvancedSolution {
//   id: string;
//   title: string;
//   price: string;
//   priceUnit: string;
//   description: string;
//   features: string[];
//   isFree?: boolean;
// }

// interface AdvancedSolutionsProps {
//   serviceType?: string;
// }

// const AdvancedSolutions: React.FC<AdvancedSolutionsProps> = ({ serviceType }) => {
//   const location = useLocation();
//   const [solutions, setSolutions] = useState<AdvancedSolution[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSolutions = async () => {
//       try {
//         setLoading(true);
//         const service = serviceType || getServiceTypeFromRoute(location.pathname);
//         const data = await getAdvancedSolutionsByService(service);
//         setSolutions(data);
//       } catch (error) {
//         console.error('Error fetching advanced solutions:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSolutions();
//   }, [location.pathname, serviceType]);

//   if (loading) {
//     return (
//       <div className="advanced-solutions">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">
//               <span className="title-highlight">ADVANCED</span> SOLUTIONS
//             </h2>
//             <p className="section-subtitle">
//               Advanced threat protection with AI-powered monitoring
//               <br />
//               and expert-led security services.
//             </p>
//           </div>
//           <div className="loading">Loading solutions...</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="advanced-solutions">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">
//             <span className="title-highlight">ADVANCED</span> SOLUTIONS
//           </h2>
//           <p className="section-subtitle">
//             Advanced threat protection with AI-powered monitoring
//             <br />
//             and expert-led security services.
//           </p>
//         </div>

//         <div className="solutions-grid">
//           {solutions.map((solution) => (
//             <div key={solution.id} className="solution-card">
//               {solution.isFree && (
//                 <div className="free-badge">FREE</div>
//               )}
              
//               <div className="card-content">
//                 <h3 className="solution-title">{solution.title}</h3>
                
//                 <div className="solution-price">
//                   {solution.price}
//                   <span className="price-unit">/{solution.priceUnit}</span>
//                 </div>

//                 <p className="solution-description">{solution.description}</p>

//                 <ul className="features-list">
//                   {solution.features.map((feature, index) => (
//                     <li key={index} className="feature-item">
//                       <span className="feature-icon">✓</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <button className="btn-get-started">GET STARTED</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdvancedSolutions;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAdvancedSolutionsByService, getServiceTypeFromRoute } from '../../../Data/Data-service/AdvanceSolution';
import './AdvancedSolutions.scss';

interface AdvancedSolution {
  id: string;
  title: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  isFree?: boolean;
}

interface AdvancedSolutionsProps {
  serviceType?: string;
}

const AdvancedSolutions: React.FC<AdvancedSolutionsProps> = ({ serviceType }) => {
  const location = useLocation();
  const [solutions, setSolutions] = useState<AdvancedSolution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        setLoading(true);
        const service = serviceType || getServiceTypeFromRoute(location.pathname);
        const data = await getAdvancedSolutionsByService(service);
        setSolutions(data);
      } catch (error) {
        console.error('Error fetching advanced solutions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, [location.pathname, serviceType]);

  if (loading) {
    return (
      <div className="advanced-solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-highlight">ADVANCED</span> SOLUTIONS
            </h2>
            <p className="section-subtitle">
              Advanced threat protection with AI-powered monitoring
              <br />
              and expert-led security services.
            </p>
          </div>
          <div className="loading">Loading solutions...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="advanced-solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-highlight">ADVANCED</span> SOLUTIONS
          </h2>
          <p className="section-subtitle">
            Advanced threat protection with AI-powered monitoring
            <br />
            and expert-led security services.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              {solution.isFree && (
                <div className="free-badge">FREE</div>
              )}
              
              <div className="card-content">
                <h3 className="solution-title">{solution.title}</h3>
                
                <div className="solution-price">
                  {solution.price}
                  <span className="price-unit">/{solution.priceUnit}</span>
                </div>

                <p className="solution-description">{solution.description}</p>

                <ul className="features-list">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-get-started">
                  GET STARTED
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSolutions;