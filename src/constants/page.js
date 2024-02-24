export const PAGE_SIZE = {
  A5_PORTRAIT: { width: '14.8', height: '21' },
  A4_PORTRAIT: { width: '21', height: '29.7' },
  A3_PORTRAIT: { width: '29.7', height: '42' },
  A5_LANDSCAPE: { width: '21', height: '14.8' },
  A4_LANDSCAPE: { width: '29.7', height: '21' },
  A3_LANDSCAPE: { width: '42', height: '29.7' }
};

export const PAGE_OPTIONS = [
  { label: 'A5 portrait', value: PAGE_SIZE.A5_PORTRAIT },
  { label: 'A5 landscape', value: PAGE_SIZE.A5_LANDSCAPE },
  { label: 'A4 portrait', value: PAGE_SIZE.A4_PORTRAIT },
  { label: 'A4 landscape', value: PAGE_SIZE.A4_LANDSCAPE },
  { label: 'A3 portrait', value: PAGE_SIZE.A3_PORTRAIT },
  { label: 'A3 landscape', value: PAGE_SIZE.A3_LANDSCAPE }
];
