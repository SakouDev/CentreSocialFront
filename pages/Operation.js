import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Card } from '@mui/material'
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

import FormCandidat from '../components/Form/formCandidat'
import FormEmployeur from '../components/Form/fromEmployeur'


const images = [
  {
    url: 'https://www.zupimages.net/up/22/46/s5pr.png',
    title: 'Candidat',
    width: '45%',
    left: '-50%'
  },
  {
    url: 'https://www.zupimages.net/up/22/46/unyo.png',
    title: 'Employeur',
    width: '45%',
    left: '50%'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: "60vh",
  overflowX:'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'contain',
  backgroundPosition: 'center 50%',
  backgroundRepeat: 'no-repeat'
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Operation() {

    const router = useRouter()

  return (
    <>
    {(!router.query.select) && (
            images.map((image) => (
                <Link
                    href={{
                        pathname : "/",
                        query: {
                        table : `Operation`,
                        select : image.title
                        },
                    }}
                >
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <ImageSrc style={{ backgroundImage: `url(${image.url})`,left: image.left }} />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                </Link>
            ))
        )}
        {(router.query.select == "Candidat") && (
            <Card style={{display: 'flex',width : '50%', minHeight: '90vh', justifyContent: 'center', position:'relative',left : '25%'}}>
                <FormCandidat/>
            </Card>
        )}
        {(router.query.select == "Employeur") && (
            <Card style={{display: 'flex',width : '50%', minHeight: '90vh', justifyContent: 'center', position:'relative',left : '25%'}}>
                <FormEmployeur/>
            </Card>
        )}
    </>
  );
}
