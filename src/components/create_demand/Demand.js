import React, { useState } from 'react';
import styled from "styled-components";
import DemanTabView from './DemanTabView';
import ProductDetail from './product/ProductDetail';

const MainPadding = styled.div`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const Header = styled.h3`
    color: #3C4858;
    font-size: 18px;
    Line height: 21.09px
`;

const SubHeader = styled.p`
    color: #8492A6;
    font-size: 14px;
    line-height: 24px;
`;

const ProductDetailUi = styled.div`
    padding-top: 4rem;
`;

export default function Demand(props) {

    const [selectedProduct, setSelectedProduct] = useState()

    return (
        <div className='container-fluid'>
            {/* Demand */}
            <MainPadding>
                <div className='row'>
                    <div className={selectedProduct ? 'col-xl-1 col-lg-1 col-12': 'col-xl-1 col-lg-1 col-12'}></div>
                    <div className={selectedProduct ? 'col-xl-8 col-lg-8 col-12' : 'col-xl-10 col-lg-10 col-12'}>
                        <Header>Create Demand</Header>
                        <SubHeader>Search the product you need here. Use tags to find any alternative. </SubHeader>
                    </div>
                    <div className={selectedProduct ? 'col-lg-3 col-12': 'col-lg-1 col-12'}></div>
                </div>
                <div className='row'>
                    <div className={selectedProduct ? 'col-xl-1 col-lg-1 col-12': 'col-xl-1 col-lg-1 col-12'}></div>
                    <div className={selectedProduct ? 'col-xl-8 col-lg-8 col-12' : 'col-xl-10 col-lg-10 col-12'}>
                        <DemanTabView {...props} setSelectedProduct={setSelectedProduct} />
                    </div>
                    <div className={selectedProduct ? 'col-xl-3 col-lg-3 col-12' : 'col-xl-1 col-lg-1 col-12'}>
                        <ProductDetailUi>
                            <ProductDetail {...props} selectedProduct={selectedProduct} />
                        </ProductDetailUi>
                    </div>
                </div>
            </MainPadding>
        </div>
    )
}
