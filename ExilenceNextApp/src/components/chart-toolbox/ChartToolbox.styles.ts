import { createStyles, makeStyles } from '@material-ui/core';
import { primaryLighter } from '../../assets/themes/exilence-theme';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100%'
    },
    grid: {
    },
    option: {
      background: theme.palette.secondary.main,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 42
    },
    optionText: {
      textAlign: 'center'
    },
    listItem: {
      height: '100%'
    },
    selected: {
      borderBottom: `2px solid ${primaryLighter}`,
      backgroundColor: `rgba(255, 255, 255, 0.04) !important`
    },
    primaryText: {
      fontSize: '0.875rem'
    }
  })
);

export default useStyles;
