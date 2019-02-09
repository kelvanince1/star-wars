export const styles = theme => ({
  central: {
    width: '900px',
    margin: '0 auto',
  },
  outerWrapper: {
    display: 'flex',
    padding: '170px 0px',
  },
  element: {
    width: '50%',
    color: '#ffffff',
    textAlign: 'center',
  },
  elementChild: {
    width: '300px',
    border: '2px solid #828282',
    margin: 'auto',
    padding: '5px',
  },
  elementInner: {
    border: '2px solid #828282',
    position: 'relative',
    padding: '0px 20px',
    transition: 'all 500ms ease',
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
    fontFamily: 'Kalam',
    fontSize: theme.spacing.unit * 4,
    margin: '90px 0px 20px 0px',
    borderBottom: '1px solid #5d5d5d',
    paddingBottom: theme.spacing.unit,
  },
});
