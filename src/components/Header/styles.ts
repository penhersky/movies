import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#333341',
      overflowY: 'hidden',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    menuButton: {
      marginRight: theme.spacing(1),
      padding: '0 15px',
    },
    hide: {
      display: 'block',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.0),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.05),
      },
      marginLeft: 0,
      width: '100%',
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      height: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      height: '100%',
      fontSize: '20px',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);
