export const styles = theme => ({
  central: {
    width: '100%',
    margin: '0 auto',
  },
  outerWrapper: {
    padding: '75px 0px',
  },
  element: {
    width: '50%',
    color: '#ffffff',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit * 4,
    },
  },
  elementChild: {
    width: '300px',
    border: '2px solid #828282',
    margin: 'auto',
    padding: '10px',
  },
  elementInner: {
    border: '2px solid #828282',
    position: 'relative',
    padding: '0px 20px',
    transition: 'all 500ms ease',
  },
  filmAvatar: {
    borderRadius: 0,
    border: '2px solid #828282',
    height: 550,
    width: 350,
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing.unit * 8,
    },
  },
  iconElement: {
    width: '50px',
    height: '50px',
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat !important',
    position: 'absolute',
    top: '-30px',
    left: '124px',
  },
  innerText: {
    fontFamily: 'Abril Fatface',
    fontSize: theme.spacing.unit * 4,
    margin: '90px 0px 20px 0px',
    paddingBottom: theme.spacing.unit * 4,
    borderBottom: '1px solid #5d5d5d',
  },
  linkText: {
    fontFamily: 'Abril Fatface',
    fontSize: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 2,
  },
  nextButtonText: {
    cursor: 'pointer',
    fontFamily: 'Nanum Gothic',
    fontSize: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit,
  },
  openingCrawl: {
    fontFamily: 'Nanum Gothic',
    fontSize: theme.spacing.unit * 4,
    borderBottom: '1px solid #5d5d5d',
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 10,
  },
  squareElement: {
    width: '100px',
    height: '100px',
    position: 'absolute',
    transform: 'rotate(45deg)',
    background: theme.palette.primary.main,
    top: '-54px',
    left: '100px',
  },
});
