export const formatDate = (date) =>
  date.split(' ')[0].split('-').reverse().join('.');

export const sortByDict = {
  'Sort by title': 'title',
  'Sort by date': 'date',
};

export const sortTypeDict = {
  'Sort A-Z': 'asc',
  'Sort Z-A': 'desc',
};
