type TypographySizeType = {
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
};

const TypographySize: Record<string, TypographySizeType> = {
  ExtraLarge: {
    fontSize: 40,
    lineHeight: 58,
  },
  XXXLarge: {
    fontSize: 28,
    lineHeight: 40,
    letterSpacing: -0.7,
  },
  XXLarge: {
    fontSize: 26,
    lineHeight: 34,
  },
  XLarge: {
    fontSize: 24,
    lineHeight: 34,
    letterSpacing: -0.6,
  },
  Large: {
    fontSize: 22,
    lineHeight: 33,
  },
  Medium: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
  },
  Small: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.45,
  },
  XSmall: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  XXSmall: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.35,
  },
  XXXSmall: {
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: -0.3,
  },
};

export const Typography = Object.entries(TypographySize).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: `
      font-size: ${value.fontSize}px;
      line-height: ${value.lineHeight}px;
      letter-spacing: ${value.letterSpacing ?? 0}px;
    `,
  }),
  {} as { [key in keyof typeof TypographySize]: string }
);
