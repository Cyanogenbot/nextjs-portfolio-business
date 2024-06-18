import * as React from 'react';
import Typography from '@mui/material/Typography';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Buffertext(props) {
  return (
    <section className={utilStyles.headingMd}>
            <Link href={props.link} passHref>
    <Typography variant="h4" component="h3" color="white">
{props.text}

    </Typography>
    </Link>
  </section>
  );
}