const gradientOf = color => `linear-gradient(
  ${color}, 
  ${color}
)`;

export const backgroundOfColorAndImage = (color, image) => `
${gradientOf(color)},
center / cover no-repeat url(${image})
`;

export const transparentGrey = 'rgba(215, 215, 215, 0.6)';
export const transparentRed = 'rgba(215, 127, 127, 0.6)';
export const transparentDark = 'rgba(63, 63, 63, 0.6)';
