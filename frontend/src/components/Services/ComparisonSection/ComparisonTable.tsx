import React from 'react';
import styles from './ComparisonTable.module.scss';

interface ComparisonData {
  feature: string;
  cyberfort: string | boolean;
  cloudsek: string | boolean;
  paloAlto: string | boolean;
  localFirms: string | boolean;
}

const ComparisonTable: React.FC = () => {
  const comparisonData: ComparisonData[] = [
    {
      feature: 'Entry Price',
      cyberfort: '₹0',
      cloudsek: '₹25,000',
      paloAlto: '₹60,000+',
      localFirms: '₹15,000'
    },
    {
      feature: 'Threat Intel',
      cyberfort: true,
      cloudsek: false,
      paloAlto: false,
      localFirms: false
    },
    {
      feature: 'AI Pentesting',
      cyberfort: true,
      cloudsek: false,
      paloAlto: 'Enterprise only',
      localFirms: false
    },
    {
      feature: 'OT/ICS Support',
      cyberfort: true,
      cloudsek: false,
      paloAlto: false,
      localFirms: false
    },
    {
      feature: 'Physical Red Team',
      cyberfort: true,
      cloudsek: 'Tier 3 only',
      paloAlto: 'Tier 3 only',
      localFirms: 'Manual'
    },
    {
      feature: 'Compliance Automation',
      cyberfort: true,
      cloudsek: true,
      paloAlto: true,
      localFirms: 'Basic'
    },
    {
      feature: '24/7 Surveillance Add-on',
      cyberfort: true,
      cloudsek: false,
      paloAlto: false,
      localFirms: false
    }
  ];

  const renderCell = (value: string | boolean, isCyberfort: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className={isCyberfort ? styles.checkIconCyberfort : styles.checkIcon}>✓</span>
      ) : (
        <span className={styles.crossIcon}>✕</span>
      );
    }
    return <span className={styles.textValue}>{value}</span>;
  };

  return (
    <section className={styles.comparisonSection}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>WHY CHOOSE</h2>
        <h2 className={styles.titleHighlight}>CYBERFORT TECH?</h2>
        <p className={styles.subtitle}>
          Compare our comprehensive offerings<br />
          with competitors.
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th className={styles.featureHeader}>FEATURE</th>
              <th className={styles.cyberfortHeader}>CYBERFORT</th>
              <th className={styles.competitorHeader}>CLOUDSEK</th>
              <th className={styles.competitorHeader}>PALO ALTO</th>
              <th className={styles.competitorHeader}>LOCAL FIRMS</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index}>
                <td className={styles.featureCell}>{row.feature}</td>
                <td className={styles.cyberfortCell}>{renderCell(row.cyberfort, true)}</td>
                <td className={styles.competitorCell}>{renderCell(row.cloudsek)}</td>
                <td className={styles.competitorCell}>{renderCell(row.paloAlto)}</td>
                <td className={styles.competitorCell}>{renderCell(row.localFirms)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;