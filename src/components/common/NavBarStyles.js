import { makeStyles } from '@material-ui/core';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      boxShadow: 'none',
      // borderBottom: `1px solid ${theme.palette.secondary.main}`,
      // boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    },

    '& .MuiBadge-badge': {
      backgroundColor: '#fff',
    },

    '& h4': {
      alignSelf: 'start',
    },
    '& .MuiTypography-body1': {
      fontSize: '14px',
      fontFamily: `'Montserrat', sans-serif !important`,
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTypography-body1': {
        fontSize: '16px',
      },
    },
  },

  dropdown: {
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#707070',
      },
    },
    '& li': {
      width: '100%',
      fontSize: '13px',
      padding: '0.6rem 1rem 0.6rem',
    },
    '& svg': {
      fontSize: 12,
      marginRight: '0.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      '& li': {
        fontSize: '18px',
        padding: '0.8rem 1rem 0.8rem',
      },
    },
  },
  backPaper: {
    width: 170,
    backgroundColor: '#4F4E4D',
    color: '#fff',
    [theme.breakpoints.up('lg')]: {
      width: 210,
    },
  },
  Appbar: {
    // backgroundColor: theme.custom.darkFore,
    backgroundColor: '#3E3E3E',
    opacity: 1,
    boxShadow: '0px 3px 3px #00000029',
    '& .MuiToolbar-regular': {
      alignItems: 'center',
      justifyContent: 'space-between',
      // columnGap: '2.5em',
    },
    '& a': {
      color: theme.custom.white,
      verticalAlign: 'middle',
      // '&.active': {
      // color: theme.palette.primary.main,
      // },
    },
    // columnGap: 20,
  },
  navFixed: {
    paddingTop: 64,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 57,
    },
  },
  itemsParent: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '6rem',
    [theme.breakpoints.up('lg')]: {
      columnGap: '7rem',
    },
  },
  itemsChild: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 22,
    [theme.breakpoints.up('lg')]: {
      columnGap: 30,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  darkBtn: {
    overflow: 'unset !important',
    '&button': {},
  },
  customNavBtn: {
    cursor: 'pointer',
    borderRadius: '16px',
    opacity: 1,
    border: '2px solid #E0760B',
    textAlign: 'center',
    padding: '5px',
    fontFamily: `'Montserrat', sans-serif !important`,
    '&:hover': {
      backgroundColor: '#E0760B',
    },
    '&.MuiButton-containedSizeSmall': {
      color: theme.palette.text.primary,
      // fontWeight: 400,
      transition: '0.6s',
      backgroundColor: theme.custom.white,
    },
    [theme.breakpoints.up('lg')]: {
      borderRadius: '19px',
    },
  },

  navBtn: {
    minWidth: 140,
    // fontWeight: 600,
    height: 'fit-content',
    color: '#fff',
    [theme.breakpoints.up('lg')]: {
      minWidth: 190,
    },
  },
  btnBox: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: '3rem',
      columnGap: '3em',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      columnGap: '2.5em',
    },
  },

  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  MobileMenu: {
    height: 500,
  },
  SearchBar: {
    '&.MuiPaper-root': {
      boxShadow: 'none',
    },
  },
  navLink: {
    '&.active': {
      color: theme.palette.primary.main,
    },
    '& svg': {
      color: theme.palette.primary.main,
    },
  },

  navSearch: {
    columnGap: 30,
    maxWidth: 550,
    flex: 2,
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // backgroundColor: theme.palette.primary.main,
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: theme.palette.primary.main,

    '& > :first-child': {
      backgroundColor: theme.palette.primary.main,
      padding: '1em 1em',
    },
    '& .MuiIconButton-root': {
      border: '1px solid #fff',
      '& svg': {
        color: '#fff',
      },
    },
  },
  drawerList: {
    '& a': {
      color: theme.palette.text.primary,

      '& .MuiTypography-subtitle1::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: 1,
        background: '#000',
        transition: 'width .5s',
      },
      '&.active,:hover': {
        '& h6::after': {
          width: '100%',
        },
      },
      '& .MuiListItem-root': {
        columnGap: '1.4em',
      },

      // borderLeft: `3px solid ${theme.palette.primary.main}`,
    },
  },
  badge: {
    '& .MuiBadge-badge': {
      backgroundColor: '#E0760B',
      color: '#fff',
      margin: '-4px',
    },
  },
}));

export default useStyles;
