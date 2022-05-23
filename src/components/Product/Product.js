import React from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';
import {HiShoppingCart} from "react-icons/hi"
import { useDispatch } from 'react-redux';
import { addTobasket } from '../../redux/action';

const Product = ({
    id,
    title,
    image, 
    price,
    rating,
    specification,
    detail 
}) => {

    const dispatch = useDispatch();

    // khi onClick vào button thì sẽ dispatch addTobasket vào nó sẽ nhận item có chứa 1 object
    const onAddItemToBasket = ()=>{
        const item = {
            id,
            title,
            image,
            price,
            rating,
            specification,
            detail,
        }
        dispatch(addTobasket(item))
    }
    return (
        <div className='product'>
            <div className='info'>
                <Link to={`/product/${id}`} className='title'>
                    <p>{title}</p>
                </Link>
                <p className='price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className='rating'>
                    {Array(rating).fill().map((_, index)=> <p key={index}>⭐</p>)}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={onAddItemToBasket}>
                <i>
                    <HiShoppingCart/>
                </i>
                Add To Basket
            </button>
        </div>
    )
}

export default Product
