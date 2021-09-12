import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const ProductComponents = () => {
    const products = useSelector((state)=> state.allProducts.products);

    const renderProductList = products.map((currProduct)=>{
        const {id,title,price,category, image} = currProduct;
        return (
            <div className="col-12 col-md-3" key={id}>
                <Link to={`/product/${id}`} className="text-dark text-decoration-none">
                <div className="card mb-4 pt-2">
                    <img src={image} className="card-img-top img-fluid px-2" alt={title} style={{height:"200px",objectFit:'contain'}}/>
                    <div className="card-body pt-4" style={{minHeight:"100px"}}>
                        <small className="text-muted mb-2 text-center">{category}</small>
                        <h5 className="card-title" style={{fontSize:'18px'}}>{title}</h5>
                        <h4>${price}</h4>
                    </div>
                    
                </div>
                </Link>
            </div>
        )
    })
    
    return (
        <div className="row">
            {renderProductList}
        </div>
    )
}

export default ProductComponents;
