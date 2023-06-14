import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`

`

export default function Buffertext(props) {
  return (
    <section className={utilStyles.headingMd}>
            <Link href={props.link} passHref>
            <StyledLink>
    <Typography variant="h4" component="h3" color="white">
{props.text}

    </Typography>
    </StyledLink>
    </Link>
  </section>
  );
}
