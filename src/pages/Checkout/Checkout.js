import React from 'react';
import Header from '../../components/Header/Header';
import "./Checkout.css";
import { useSelector } from 'react-redux';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import SubTotal from '../../components/SubTotal/SubTotal';

const Checkout = () => {
    const { basket, user } = useSelector(state => state.data);
    return (
        <div>
            <Header />
            <div className='checkout'>
                <div className='checkout-left'>
                    <img
                        className='checkout-ad'
                        src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg'
                        alt=''
                    />
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className='checkout-title'>
                            {basket.length === 0
                                ? "Your Shopping Basket is Empty"
                                : "Your Shopping Basket"}
                        </h2>
                        {basket && basket.map((item)=>(
                            <CheckoutProduct 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='checkout-right'>
                    <SubTotal/>
                </div>
            </div>
        </div>
    );
};

export default Checkout;