import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import {SelectProducts, RemoveSelectProducts} from "../redux/actions/ProductAction";

const  ProductDetail = () => {
    const {productId} = useParams();
    const ProductDeatils = useSelector((state)=> state.singleProduct);
    const {id, title, price, category, description, image} = ProductDeatils;
    const dispatch = useDispatch();

    const fetchProductDetail = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((error)=> console.log(error));
        dispatch(SelectProducts(response.data));
    }

    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();

        return () => {
            dispatch(RemoveSelectProducts());
        }
    }, [productId]);

    return (
        <>
            <section className="ProductDetails__sec py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 col-lg-12 pt-5">
                            {
                                Object.keys(ProductDeatils).length === 0 ? (
                                    <div className="text-center">Loading...</div>
                                ):(
                                    <div className="row"> 
                                    <div className="col-12 col-md-4">
                                    <figure className="text-center p-5">
                                    <img src={image} alt={title} className="img-fluid"/>
                                    </figure>
                                    </div>
                                    <div className="col-12 col-md-8 p-5">
                                        <h2>{title}</h2>
                                        <small>{category}</small>
                                        <hr />
                                        <p className="text-muted">{description}</p>
                                        <hr />
                                        <div className="d-flex align-items-center justify-content-start">
                                        <h4 className="mb-0 me-2">$ {price}</h4>
                                        <button className="btn btn-success">Buy now</button>
                                        </div>
                                    </div>
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail;
