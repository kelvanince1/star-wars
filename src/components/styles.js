export const styles = {
  buttonTitle: {
    color: '#FFD700',
  },
  characterAvatar: {
    borderRadius: 0,
    cursor: 'pointer',
    height: 450,
    width: 330,
    '&:hover': {
       outline: '10px solid #FFD700',
       transition: 'outline 0.6s linear',
       margin: '0.1em',
    },
  },
  characterName: {
    color: '#FFD700',
    padding: '20px',
  },
  container: {
    background: 'linear-gradient(to right, #000000, #434343)',
  },
  errorTitle: {
    padding: '30px',
    color: '#FFD700',
  },
  filmAvatar: {
    borderRadius: 0,
    cursor: 'pointer',
    height: 420,
    width: 300,
    '&:hover': {
       outline: '10px solid #FFD700',
       transition: 'outline 0.6s linear',
       margin: '0.1em',
    },
  },
  filmContainer: {
    background: 'linear-gradient(to right, #000000, #434343)',
    transition: 'opacity 0.5s',
    width: '100%',
  },
  openingCrawl: {
    padding: '32px',
    color: '#FFD700',
  }
}
