import styled from 'styled-components';

export const ImageContainer = styled.article`
    position: relative;
    display: block;
	clear: both;
	list-style: none;
	text-align: center;
    max-width: 30%;
    width: 100%;
    max-height: 255px;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        max-width: 100%;
    }

    color: #3D3473;
`;

export const ImageWrapper = styled.figure`
    position: relative;
	overflow: hidden;
	margin: 0 2.5%;
	text-align: center;
	cursor: pointer;

    background: ${props=>props.bgcolor};

    &:hover{
        img{
            opacity: 0.6;
            -webkit-transform: scale3d(1,1,1);
            transform: scale3d(1,1,1);
        }
        figcaption{
            &::before{
                -webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
	            transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
            }
        }

        p{
            opacity: 1;
            -webkit-transition-delay: 0.1s;
            transition-delay: 0.1s;
        }
    }
`;

export const ImageWrap = styled.img`
    position: relative;
	display: block;
	width: 100%;
    height: 100%;
	opacity: 0.8;

    overflow: hidden;

    opacity: 0.95;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale3d(1.05,1.05,1);
	transform: scale3d(1.05,1.05,1);
`;

export const ImageContent = styled.figcaption`
    padding: 2em;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;

    &::before,
    &::after{
        pointer-events: none;
    }

    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

    &::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.5);
        content: '';
        -webkit-transition: -webkit-transform 0.6s;
        transition: transform 0.6s;
        -webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
        transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
    }

    @media screen and (max-width: 480px){
        padding: 0.75rem;
    }
`;

export const ImageTitle = styled.h2`
    word-spacing: -0.15em;
	font-weight: 300;

    span{
        font-weight: 800;
    }
    margin: 0;
    text-align: left;
`;

export const ImageText = styled.p`
    letter-spacing: 1px;
	font-size: 65%;
    margin: 0;

    position: absolute;
	right: 0;
	bottom: 0;
	margin: 3em;
	padding: 0 1em;
	max-width: 250px;
	border-right: 4px solid #fff;
	text-align: right;
	opacity: 0;
	-webkit-transition: opacity 0.35s;
	transition: opacity 0.35s;
`;