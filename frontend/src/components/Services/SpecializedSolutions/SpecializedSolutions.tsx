import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSolutionsBySlug } from '../../../Data/Data-service/solution';
import './SpecializedSolutions.scss';

interface Solution {
  id: string;
  title: string;
  price: string;
  priceUnit: string;
  category: string;
  description: string;
  features: string[];
}

interface SpecializedSolutionsProps {
  slug?: string;
}

const SpecializedSolutions: React.FC<SpecializedSolutionsProps> = ({ slug: propSlug }) => {
  const { slug: urlSlug } = useParams<{ slug?: string }>();
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSolutions = async () => {
      setLoading(true);
      setError(null);

      try {
        const currentSlug = urlSlug || propSlug || 'default';
        const data = await getSolutionsBySlug(currentSlug);

        if (Array.isArray(data) && data.length > 0) {
          setSolutions(data);
        } else {
          setSolutions([]);
          setError('No solutions found for this category.');
        }
      } catch (err) {
        console.error('Error fetching solutions:', err);
        setError('Failed to load solutions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, [urlSlug, propSlug]);

  return (
    <div className="specialized-solutions">
      <div className="container">
        <div className="header">
          <h2 className="title">
            <span className="gradient">SPECIALIZED</span> SOLUTIONS
          </h2>
          <p className="subtitle">Tailored solutions designed for your business needs</p>
        </div>

        {loading ? (
          <div className="loading">Loading solutions...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="cardsGrid">
            {solutions.map((solution) => (
              <div key={solution.id} className="cardOuter">
                <div className="cardInner">
                  <h3 className="cardTitle">{solution.title}</h3>
                  
                  <div className="priceBox">
                    <span className="price">{solution.price}</span>
                    <span className="priceUnit">/{solution.priceUnit}</span>
                  </div>
                  
                  <div className="categoryBadge">{solution.category}</div>
                  
                  <p className="cardDescription">{solution.description}</p>
                  
                  <div className="benefits">
                    <h4 className="benefitsTitle">Key Benefits</h4>
                    <ul className="benefitsList">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="benefitItem">
                          <span className="checkmark">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="cardFooter">
                    <button className="btnOutline">LEARN MORE</button>
                    <button className="btnPrimary">GET STARTED</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecializedSolutions;
