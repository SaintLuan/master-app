import React, { useEffect, useState } from "react";

// Components
import Title from "../Title";

// Images
import svgTitle from "../../assets/img/svg/services.svg";
import { CardImg, CardText, CardTitle, ServiceCard, ServicesContainer } from "./ServicesElements";

const ServicesSection = () =>{

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./data/services.json',{
            headers:{
                Accept: "application/json"
            }
        }).then(res => res.json())
          .then(res => setServices(res.services));
    },[]);

    return(
        <>
            <Title span='Serviços' svg={svgTitle} >Conheça nossos Serviços</Title>

            <ServicesContainer>
                {
                    services.map(({id, title, image, text})=>(
                        <ServiceCard key={id}>
                            <CardImg src={image} alt={title}/>
                            <CardTitle>{title}</CardTitle>
                            <CardText>{text}</CardText>
                        </ServiceCard>
                    ))
                }
            </ServicesContainer>
        </>
    );
};

export default ServicesSection;