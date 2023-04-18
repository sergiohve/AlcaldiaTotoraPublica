// @mui
import { alpha, styled } from '@mui/material/styles';
import { Toolbar } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../config';

// ----------------------------------------------------------------------

export const ToolbarStyle = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'transparent' && prop !== 'scrolling',
})(({ transparent, scrolling, theme }) => ({
  height: HEADER_MOBILE_HEIGHT,

  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP_HEIGHT,
  },
  ...(transparent && {
    color: "black",
    backgroundColor: 'transparent',
  }),
  ...(scrolling && {
    ...cssStyles(theme).bgBlur(),
    [theme.breakpoints.up('md')]: {
      height: HEADER_DESKTOP_HEIGHT - 20,
    },
  }),
}));

export const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  fontSize: "10px",
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: `-23px 16px 56px -8px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
    1
  )}`,
}));
