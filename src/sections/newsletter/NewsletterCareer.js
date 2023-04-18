// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Button, Container, Typography, FilledInput, InputAdornment } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: "black",
  ...cssStyles(theme).bgImage({
    objectFit: "cover"
  }),
}));

// ----------------------------------------------------------------------

export default function NewsletterCareer() {
  return (
    <RootStyle>
      <Container>
        <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
          <Typography variant="h2">Contáctanos</Typography>


          <FilledInput
            placeholder="Ingrese su correo electrónico"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    height: 56,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Enviar 
                </Button>
              </InputAdornment>
            }
            sx={{
              p: 0,
              width: 1,
              maxWidth: 560,
              bgcolor: 'common.white',
              '&:hover, &.Mui-focused': {
                bgcolor: 'common.white',
              },
              '& .MuiFilledInput-input': {
                py: '18px',
                '&::placeholder': {
                  color: 'grey.500',
                },
              },
            }}
          />
        </Stack>
      </Container>
    </RootStyle>
  );
}
