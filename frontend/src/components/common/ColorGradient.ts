export const colors = {
  primary: {
    background: '#000000',
    accent: '#00D9D9',
    text: '#F5F5F5',
  },
  
  symbols: {
    green: '#4AFF8C',
    orange: '#FF9F5A',
    violet: '#A855F7',
    brightTeal: '#00D9D9',
    yellow: '#FFE14A',
    pink: '#FFB3FF',
    hotPink: '#FF8FA3',
    blue: '#8FA3FF',
    hotYellow: '#FFA500',
  },
  
  symbolsDark: {
    green: '#1A4D2E',
    orange: '#4D2E1A',
    violet: '#2E1A4D',
    brightTeal: '#1A4D4D',
    yellow: '#4D4D1A',
    pink: '#4D1A4D',
    hotPink: '#4D1A2E',
    blue: '#1A2E4D',
  },
};

export const gradients = {
  main: 'linear-gradient(180deg, #00D9D9 0%, #A855F7 50%, #FFB3FF 100%)',
  
  glass: {
    teal: 'linear-gradient(135deg, rgba(0, 217, 217, 0.1) 0%, rgba(0, 217, 217, 0.05) 100%)',
    violet: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
    pink: 'linear-gradient(135deg, rgba(255, 179, 255, 0.1) 0%, rgba(255, 179, 255, 0.05) 100%)',
  },
  
  cards: {
    green: 'linear-gradient(135deg, rgba(74, 255, 140, 0.2) 0%, rgba(26, 77, 46, 0.8) 100%)',
    orange: 'linear-gradient(135deg, rgba(255, 159, 90, 0.2) 0%, rgba(77, 46, 26, 0.8) 100%)',
    violet: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(46, 26, 77, 0.8) 100%)',
    teal: 'linear-gradient(135deg, rgba(0, 217, 217, 0.2) 0%, rgba(26, 77, 77, 0.8) 100%)',
    yellow: 'linear-gradient(135deg, rgba(255, 225, 74, 0.2) 0%, rgba(77, 77, 26, 0.8) 100%)',
    pink: 'linear-gradient(135deg, rgba(255, 179, 255, 0.2) 0%, rgba(77, 26, 77, 0.8) 100%)',
    hotPink: 'linear-gradient(135deg, rgba(255, 143, 163, 0.2) 0%, rgba(77, 26, 46, 0.8) 100%)',
    blue: 'linear-gradient(135deg, rgba(143, 163, 255, 0.2) 0%, rgba(26, 46, 77, 0.8) 100%)',
  },
};

export const borderRadius = {
  sm: '28px',
  md: '24px',
  lg: '20px',
};

export const shadows = {
  card: '0 8px 32px rgba(0, 217, 217, 0.1)',
  cardHover: '0 12px 48px rgba(0, 217, 217, 0.2)',
  glow: {
    teal: '0 0 20px rgba(0, 217, 217, 0.4)',
    violet: '0 0 20px rgba(168, 85, 247, 0.4)',
    pink: '0 0 20px rgba(255, 179, 255, 0.4)',
  },
};

export const glassMorphism = {
  background: 'rgba(0, 0, 0, 0.6)',
  blur: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};

export type ColorKey = keyof typeof colors.symbols;
export type GradientKey = keyof typeof gradients.cards;
