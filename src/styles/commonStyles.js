import { makeStyles } from '@material-ui/core';
const bgImg =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const styles = makeStyles((theme) => ({
  linkHover: {
    '& a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 2,
      // background: theme.custom.white,
      background: theme.palette.secondary.main,
      transition: 'width .3s',
    },

    '& a:hover::after, a.active::after': {
      width: '100%',
    },
  },

  // homeBack1: {
  //   backgroundColor: theme.palette.secondary.lighter,
  // },
  // homeBack2: {
  //   backgroundColor: theme.palette.secondary.lighterr,
  // },
  linkUnderline: {
    '& a': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },

  textWithlink: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      verticalAlign: 'unset',
      color: theme.palette.text.secondary,
      textDecoration: 'underline',

      '&:hover': {
        color: theme.palette.primary.main,
        transition: 'color 0.5s ease-out',
      },
    },
  },

  flexs: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexr: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greenButton: {
    backgroundColor: theme.custom.green,
    color: '#fff',
    minWidth: '8rem',
    borderRadius: '0px',
    fontWeight: 'normal',
    '&:hover': {
      backgroundColor: 'rgb(67, 109, 67)',
    },
  },

  underline: {
    backgroundImage: 'linear-gradient(#ccc, #000)',
    backgroundPosition: 'bottom center',
    backgroundSize: '100% 2px',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
  },

  orangeButton: {
    backgroundColor: theme.palette.secondary.light,
    opacity: 1,
    color: '#ffffff',
    width: '5rem',
    border: 'none',
    borderRadius: '0px',
    padding: '0.5rem',
  },

  lightPinkInputField: {
    display: 'flex',
    alignItems: 'start',
    backgroundColor: `${theme.palette.secondary.main}1f`,
    color: theme.palette.primary.main,
    columnGap: '1em',
    padding: '0.5em 1em',
    borderRadius: 12,
    '& .MuiInputBase-root': {
      flex: 2,
      '&:before': {
        display: 'none',
      },
      '&.MuiInput-underline:after': {
        transform: 'scaleX(0)',
      },
    },
  },

  sectionFlex: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em',
  },

  componentSectionGap: {
    backgroundColor: theme.palette.secondary.lighter,
    '& > div:first-child': {
      marginTop: '1.5em',
    },

    '& > *': {
      marginBottom: '1.5em',
    },
  },

  sectHorAlignment: {
    width: '80%',
    margin: '0 auto',

    // [theme.breakpoints.down('xs')]: {
    //   width: '90%',
    // },
  },
  subHeading: {
    maxWidth: 500,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '55%',
    },
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `#0000007d`,
  },

  sectionLink: {
    textAlign: 'center',
    fontWeight: 500,
    '& a': {
      color: theme.palette.primary.main,
      fontSize: '1.1rem',
    },
  },
  secBackImage: {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      height: 520,
    },

    // [theme.breakpoints.down('sm')]: {},
  },

  // ^ Table Card Styles
  //not used
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em',
    // flexWrap: 'nowrap',
    marginBottom: '2rem',
    columnGap: '2em',

    '& .MuiCard-root': {
      marginBottom: 0,
      minWidth: 200,
    },
  },
  //not used
  tableCardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: '1em',
    rowGap: '1em',
    '& .productCard': {
      minWidth: 200,
    },
  },

  gridContainer: {
    display: 'grid',
    gridGap: 15,
  },

  gridContainerFill: {
    marginBlock: '1em',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    // [theme.breakpoints.up('md')]: {
    //   gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    // },
  },

  // not used
  gridContainerFit: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },

  gridElement: {
    padding: 10,
    minWidth: 220,
  },
  tablePagination: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '1em',
    },
    '& > :first-child': {
      paddingInline: '1em',
      fontWeight: 500,
    },

    '& .MuiPagination-root': {
      width: 'fit-content',
      // '& .MuiPagination-ul button:not(.Mui-selected)':
      //   {
      //     backgroundColor: '#000',
      //   },
    },
  },
  greenBtn: {
    backgroundColor: theme.custom.green,
    color: '#fff',
    minWidth: '8rem',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: 'rgb(67, 109, 67)',
    },
  },
  textWithLinks: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      verticalAlign: 'unset',
      color: theme.palette.text.secondary,
      textDecoration: 'underline',

      '&:hover': {
        color: theme.palette.primary.main,
        transition: 'color 0.5s ease-out',
      },
    },
  },
}));

export default styles;

// For line trimming after certan characters
// overflow: 'hidden',
// display: '-webkit-box',
// WebkitLineClamp: 2,
// WebkitBoxOrient: 'vertical',
