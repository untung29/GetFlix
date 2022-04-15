const searchResultPageStyle = {
  searchResultContainer: {
    backgroundColor: '#5a0019',
    minHeight: '100vh',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-around',

    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  logoPosition: {
    display: 'inline-block',
  },

  centeredPosition: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  fullHeight: { height: '100vh' },
  scrollLoadingHeight: { height: 100 },
};

export default searchResultPageStyle;
