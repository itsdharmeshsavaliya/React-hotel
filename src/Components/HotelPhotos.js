import React from "react";
import { Carousel } from 'react-carousel-minimal';


const HotelPhotos = () => {

    const data = [
        {
            image: "image/15.jpg",
            caption: "Superior Double Room"
        },
        {
            image: "image/16.jpg",
            caption: "Superior Double Room"
        },
        {
            image: "image/17.jpg",
            caption: "Superior Double Room"
        },
        {
            image: "image/18.jpg",
            caption: "Superior Double Room"
        },
        {
            image: "image/19.jpg",
            caption: "Superior Double Room"
        },
        {
            image: "image/20.jpg",
            caption: "Superior Double Room"
        },
        {
            image: "image/21.jpg",
            caption: "Superior Double Room"
        },
        {
            image: "image/22.jpg",
            caption: "Superior Double Room"
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }






    return (
        <>
            <Carousel
                data={data}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    margin: "40px auto",
                }}
            />
        </>
    );
};

export default HotelPhotos;
