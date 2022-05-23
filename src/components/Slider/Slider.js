import React, { useEffect, useState } from 'react';
import "./Slider.css";
import {TiArrowBack} from 'react-icons/ti';
import {RiShareForwardFill} from "react-icons/ri";
const Slider = ({images}) => {
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = images.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    }, [index, images]);

    // set up thời gian chuyển ảnh là 5s
    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1);
        }, 5000)
        // clear slider sau khi thực thi
        return ()=>{
            clearInterval(slider)
        }
    }, [index]);

    return (
        <div className='section'>
            <div className='section-center'>
                {images.map((image, indexImage)=>{
                    let position = "nextSlide";
                    if(indexImage === index){
                        position = "activeSlide"
                    }
                    if(indexImage === index - 1 || (index === 0 && indexImage === images.length - 1)){
                        position = "lastSlide"
                    }
                    return(
                        <article className={position} key={indexImage}>
                            <img src={image} alt='banner_img' className='banner-img'/>
                        </article>
                    );
                })}
                <p className='prev' onClick={()=> setIndex(index - 1)}>
                    <TiArrowBack/>
                </p>
                <p className='next' onClick={()=> setIndex(index + 1)}>
                    <RiShareForwardFill/>
                </p>
            </div>
        </div>
    )
}

export default Slider;
