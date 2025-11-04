export const fonts = {
  primary: {
    family: 'Tomorrow',
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  secondary: {
    family: 'Darker Grotesque',
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
};

export const typography = {
  laptop: {
    h1: {
      fontSize: '72px',
      fontWeight: 600,
      lineHeight: '1.2',
      fontFamily: fonts.primary.family,
    },
    h2: {
      fontSize: '64px',
      fontWeight: 600,
      lineHeight: '1.2',
      fontFamily: fonts.primary.family,
    },
    h3: {
      fontSize: '48px',
      fontWeight: 600,
      lineHeight: '1.3',
      fontFamily: fonts.primary.family,
    },
    h4: {
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: '1.3',
      fontFamily: fonts.primary.family,
    },
    subhead: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: '1.4',
      fontFamily: fonts.secondary.family,
    },
    ctaBody: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '1.5',
      fontFamily: fonts.secondary.family,
    },
    body: {
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: '1.5',
      fontFamily: fonts.secondary.family,
    },
    bodyRegular: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '1.5',
      fontFamily: fonts.secondary.family,
    },
  },
  
  mobile: {
    h1: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '1.2',
      fontFamily: fonts.primary.family,
    },
    h2: {
      fontSize: '64px',
      fontWeight: 500,
      lineHeight: '1.2',
      fontFamily: fonts.primary.family,
    },
    subheader: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: '1.3',
      fontFamily: fonts.secondary.family,
    },
    miniHeader: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '1.3',
      fontFamily: fonts.secondary.family,
    },
    body: {
      fontSize: '28px',
      fontWeight: 400,
      lineHeight: '1.5',
      fontFamily: fonts.secondary.family,
    },
  },
};

export const fontImports = `
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700&display=swap');
`;

export type TypographyVariant = keyof typeof typography.laptop | keyof typeof typography.mobile;
