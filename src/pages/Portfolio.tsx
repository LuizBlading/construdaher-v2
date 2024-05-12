import { useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Image } from "../components/dev/Image";
import { SeparatorHorizontal } from "../components/SeparatorHorizontal";
import { AreasAtuacao } from "../components/AreasAtuacao";

import './Portfolio.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const images = [
    'src/assets/images/construdaher/1_Reforma de escolas.jpg',
    'src/assets/images/construdaher/2_Reforma de creche.jpg',
    'src/assets/images/construdaher/3_Reforma de Agencias.jpg',
    'src/assets/images/construdaher/4_Reforma Geral.jpg',
    'src/assets/images/construdaher/5_Tratamento de Esgoto Urbano.jpg',
    'src/assets/images/construdaher/6_Reforma de Prefeitura.jpg',
    'src/assets/images/construdaher/7_Sistema de Tratamento de Esgoto.jpg',
    'src/assets/images/construdaher/8_Paisagismo em Praça.jpg',
    'src/assets/images/construdaher/9_Construção de Praça.jpg',
    'src/assets/images/construdaher/10_Construção de Quadra.jpg',
];

const descImagem = [
    'Reforma de Escolas',
    'Reforma de Creches',
    'Reforma de Agencias',
    'Reforma Geral',
    'Tratamento de Esgoto Urbano',
    'Reforma de Prefeitura',
    'Sistema de Tratamento de Esgoto',
    'Paisagismo em Praça',
    'Construção de Praça',
    'Construção de Quadra',
];

// const [images, setImages] = useState([
//     img1,
//     img1,
// ])

const Data = Array(6)
    .fill(0)
    .map((item, index) => {
        return {
            id: index,
            image: images[index],
            headline: 'Imagem',
            description: descImagem[index] || descImagem[0]
        };
    });

export function Portfolio() {

    return (
        <div>

            <div className="info">
                <h1>Informações</h1>

                <p>
                    Algumas obras realizadas por nós pela região metropolitana e grande São Paulo. <br/>
                    Confira abaixo algumas fotos e também conheça nossa área de atuação.
                </p>
            </div>

            {/* <h1>Portfolio</h1> */}
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                containerClass="carousel-container"
                ssr
                showDots
                centerMode
            >
                {Data.map((card) => {
                    return <Image url={card.image} alt={card.headline} description={card.description} />
                })}
            </Carousel>

            <SeparatorHorizontal color='separator-h-void'/>

            <AreasAtuacao/>
            
        </div>
    )
}