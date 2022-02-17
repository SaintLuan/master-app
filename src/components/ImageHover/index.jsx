import React from 'react';
import { ImageContainer, ImageContent, ImageText, ImageTitle, ImageWrap, ImageWrapper } from './ImageElements';

const ImageHover = ({src, title, text, bgcolor}) =>{
    return(
        <ImageContainer>
            <ImageWrapper bgcolor={bgcolor} >
                <ImageWrap src={src} alt={title}/>

                <ImageContent>
                    <ImageTitle>{title}</ImageTitle>
                    <ImageText>{text}</ImageText>
                </ImageContent>
            </ImageWrapper>
        </ImageContainer>
    )
};

export default ImageHover;