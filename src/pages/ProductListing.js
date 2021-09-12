import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from "../components/ProductComponents";
import {SetProducts} from "../redux/actions/ProductAction";

function ProductListing() {
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();
    
    const fetchProducts = async() => {
        const respnse = await axios.get("https://fakestoreapi.com/products").catch((err)=> console.log("error", err));
        dispatch(SetProducts(respnse.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <section className="productListing__Sec py-5">
                <div className="container pt-5">
                    <ProductComponent/>
                </div>
            </section>
        </>
    )
}

export default ProductListing;
