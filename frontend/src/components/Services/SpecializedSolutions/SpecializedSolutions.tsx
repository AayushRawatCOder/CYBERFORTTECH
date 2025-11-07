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
  slug?: string; // Optional prop for manual override
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
        // Priority: URL slug > prop slug > default
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
        <h2 className="section-title">
          <span className="title-highlight">SPECIALIZED</span> SOLUTIONS
        </h2>

        {loading ? (
          <div className="loading">Loading solutions...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card">
                <div className="card-header">
                  <h3 className="solution-title">{solution.title}</h3>
                  <div className="solution-price">
                    {solution.price}
                    <span className="price-unit">/{solution.priceUnit}</span>
                  </div>
                  <div className="solution-category">{solution.category}</div>
                </div>

                <div className="card-body">
                  <p className="solution-description">{solution.description}</p>
                  <ul className="features-list">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <button className="btn btn-outline">LEARN MORE</button>
                  <button className="btn btn-primary">GET STARTED</button>
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
