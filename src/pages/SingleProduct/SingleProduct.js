import React from 'react';
import "./SingleProduct.css";
import {useParams} from "react-router-dom";
import Header from '../../components/Header/Header';
import { GiShoppingCart } from 'react-icons/gi';
import {products} from "../../utils/ProductsData";
import { useDispatch } from 'react-redux';
import { addTobasket } from '../../redux/action';

const SingleProduct = () => {

    let {id} = useParams();
    let singleProduct = products.find((item) => item.id === id);
    let dispatch = useDispatch();

    const addItemToBasket = ()=>{
        const item = {
            id: singleProduct.id,
            rating: singleProduct.rating,
            title: singleProduct.title,
            price: singleProduct.price,
            image: singleProduct.image,
            specification: singleProduct.specification,
            detail: singleProduct.detail,
        }
        dispatch(addTobasket(item));
    }

    return (
        <div>
            <Header/>
            <div className='single-product-container'>
                <img
                    className='single-product-ad'
                    src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg'
                    alt=''
                />
                <div>
                    <div className='single-product'>
                        <img
                            src={singleProduct.image}
                            className="single-product-image"
                            alt=''
                        />
                        <div className='single-product-info'>
                            <div className='single-product-title'>{singleProduct.title}</div>
                            <div className='single-product-rating'>
                                {Array(singleProduct.rating)
                                .fill()
                                .map((_, index)=> (
                                    <p key={index}>⭐</p>
                                ))}
                            </div>
                            <p className='single-product-price'>
                                Price: <strong>$</strong>
                                <strong>{singleProduct.price}</strong>
                            </p>
                            <div className='single-product-specification'>
                                <h4>specification</h4>
                                {singleProduct.specification &&
                                singleProduct.specification.map((item, index)=>(
                                    <li key={index}>{item}</li>
                                ))}
                            </div>
                            <div className='single-product-description'>
                                <h4>Product Description</h4>
                                <p>{singleProduct.detail}</p>
                            </div>
                            <button onClick={addItemToBasket}>
                                <i>
                                    <GiShoppingCart/>
                                </i>
                                Add To Basket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;