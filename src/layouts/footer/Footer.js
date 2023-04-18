import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Box,
  Grid,
  Link,
  Stack,
  Button,
  Divider,
  Collapse,
  Container,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// hooks
import { useResponsive } from '../../hooks';
// components
import { Logo, Iconify, SocialsButton, AppStoreButton } from '../../components';
//
import { PageLinks, PageServiciosTramites, Pageblogs, PageInstitucion } from '../nav/NavConfig';

// ----------------------------------------------------------------------

const LinkStyle = styled((props) => <Link target="_blank" rel="noopener" {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body3,
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  })
);

// ----------------------------------------------------------------------

export default function Footer() {
  const isDesktop = useResponsive('up', 'md');

  const lists = PageLinks.filter((list) => list.subheader);
  const listsCoaching = PageServiciosTramites.filter((list) => list.subheader);
  const listsBlogs = Pageblogs.filter((list) => list.subheader);
  const listsServices = PageInstitucion.filter((list) => list.subheader);

  const renderLists = isDesktop
    ? lists
    : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderListsCoaching = isDesktop
    ? listsCoaching
    : listsCoaching.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderListsBlogs = isDesktop
    ? listsBlogs
    : listsBlogs.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderListsServices = isDesktop
    ? listsServices
    : listsServices.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  return (
    <>
      <Divider />
      <Container sx={{ py: { xs: 12, md: 12 } }}>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid item xs={12} md={3}>
            <Stack spacing={{ xs: 3, md: 5 }} >
              <Stack alignItems="flex-start" spacing={3} sx={{ fontWeight: 900}}>
                ALCALDÍA DE TOTORA
                <Typography variant="body3" sx={{ color: 'text.secondary', fontFamily: "inherit" }}>
                  Sitio web de Alcaldía de Totora.
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Social</Typography>
                <SocialsButton />
              </Stack>

              {/* <Stack alignItems="flex-start">
                <Typography variant="h6">Documentation</Typography>
                <LinkStyle href="#">Documentation</LinkStyle>
                <LinkStyle href="#">Changelog</LinkStyle>
                <LinkStyle href="#">Contributing</LinkStyle>
                </Stack>*/}

              


            </Stack>
          </Grid>

          <Grid item xs={12} md={9}>
            {isDesktop ? (
              <Grid style={{ display: "flex" }}>
                <Grid xs={12} md={3}>
                  {renderListsServices.map((list) => (
                    <ListDesktop key={list.subheader} list={list} />
                  ))}</Grid>
                <Grid xs={12} md={3}>
                  {renderListsCoaching.map((list) => (
                    <ListDesktop key={list.subheader} list={list} />
                  ))}</Grid>
                <Grid xs={12} md={3}>
                  {renderLists.map((list) => (
                    <ListDesktop key={list.subheader} list={list} />
                  ))}
                </Grid>
                <Grid xs={12} md={3}>
                  {renderListsBlogs.map((list) => (
                    <ListDesktop key={list.subheader} list={list} />
                  ))}</Grid>

              </Grid>
            ) : (
              <Grid style={{ display: "flex", flexWrap: "wrap" }}>
                <Grid xs={4} md={3}>
                  {renderListsServices.map((list) => (
                    <ListMobile key={list.subheader} list={list} />
                  ))}</Grid>
                <Grid xs={4} md={3}>
                  {renderListsCoaching.map((list) => (
                    <ListMobile key={list.subheader} list={list} />
                  ))}</Grid>
                <Grid xs={4} md={3}>
                  {renderLists.map((list) => (
                    <ListMobile key={list.subheader} list={list} />
                  ))}

                </Grid>
                <Grid xs={4} md={3}>
                  {renderListsBlogs.map((list) => (
                    <ListMobile key={list.subheader} list={list} />
                  ))}</Grid>

              </Grid>

            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="body3" sx={{ color: 'text.secondary' }}>
            Desarrollado por Sergio Herrera, correo: sergioherrerav20@gmail.com
          </Typography>

        </Stack>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListDesktop({ list }) {
  const { subheader, items } = list;

  return (
    <Stack alignItems="flex-start" sx={{ pb: { md: 1 } }}>
      <Typography variant="h6">{subheader}</Typography>
      {items?.map((link) => (
        <LinkStyle key={link.title} href={link.path}>
          {link.title}
        </LinkStyle>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListMobile({ list }) {
  const { subheader, items } = list;

  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="h6"
        onClick={onExpand}
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        {subheader}
        <Iconify
          icon={expand ? chevronDown : chevronRight}
          sx={{ width: 20, height: 20, ml: 0.5 }}
        />
      </Typography>

      <Collapse in={expand} sx={{ width: 1 }}>
        <Box
          sx={{
            display: 'grid',
            rowGap: 1,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {items?.map((link) => (
            <LinkStyle key={link.title} href={link.path}>
              {link.title}
            </LinkStyle>
          ))}
        </Box>
      </Collapse>
    </Stack>
  );
}
