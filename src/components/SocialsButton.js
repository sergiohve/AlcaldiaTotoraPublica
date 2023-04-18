import PropTypes from 'prop-types';
// icons
import logoLinkedin from '@iconify/icons-carbon/logo-linkedin';
import logoYoutube from '@iconify/icons-carbon/logo-youtube';
import logoTwitter from '@iconify/icons-carbon/logo-twitter';
import logoInstagram from '@iconify/icons-carbon/logo-instagram';

// @mui
import { alpha } from '@mui/material/styles';
import { Stack, IconButton, Button, Link } from '@mui/material';

import Iconify from './Iconify';

// ----------------------------------------------------------------------

SocialsButton.propTypes = {
  initialColor: PropTypes.bool,
  links: PropTypes.objectOf(PropTypes.string),
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

export default function SocialsButton({
  initialColor = false,
  simple = true,
  links = {youtube:"https://facebook.com/", instagram: "https://www.instagram.com/", linkedin: "https://www.linkedin.com/in/sehv/", twitter: "https://twitter.com/?lang=es",  tiktok: "https://www.tiktok.com/es/"  },
  sx,
  ...other
}) {
  const SOCIALS = [
    {
      name: 'Youtube',
      icon: logoYoutube,
      socialColor: '#1877F2',
      path: links.youtube || '#youtube-link',
    },
    {
      name: 'Instagram',
      icon: logoInstagram,
      socialColor: '#E02D69',
      path: links.instagram || '#instagram-link',
    },
    {
      name: 'Linkedin',
      icon: logoLinkedin,
      socialColor: '#007EBB',
      path: links.linkedin || '#linkedin-link',
    },
    {
      name: 'Twitter',
      icon: logoTwitter,
      socialColor: '#00AAEC',
      path: links.twitter || '#twitter-link',
    }
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path}>
            <IconButton
              color="inherit"
              sx={{
                ...(initialColor && {
                  color: socialColor,
                  '&:hover': {
                    bgcolor: alpha(socialColor, 0.08),
                  },
                }),
                ...sx,
              }}
              {...other}
            >
              <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
            </IconButton>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
