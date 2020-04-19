import React from 'react';
import { Image, Heading } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DivVspaced = styled.div`
    margin-top: 10px;
`


const Album = (props) => {
  return(
    <Link to={`/album/${props.id}`}>
        <Image src={props.cover_url} />
        <DivVspaced>
            <Heading size={6} className='has-text-white'>{props.title}</Heading>
            <Heading size={6} className='has-text-white' subtitle>{props.artist_name}</Heading>
        </DivVspaced>
    </Link >
  );
}
export default Album;