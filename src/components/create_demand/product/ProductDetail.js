import React from 'react';
import styled from 'styled-components';
import { Tag, Button, Radio } from 'antd';

const Product = styled.div`
    background-color: #fff;
    border-radius: 4px;
`;

const ProductDetailHead = styled.h4`
    color: #3C4858;
    font-size: 16px;
    font-weight: 500;
    padding: 13px 24px 13px 24px;
    margin: 0;
`;

const BorderBottom = styled.div`
    border-bottom: #EBEBEB 2px solid;
`;

const ProductCompleteDetail = styled.div`
    padding: 34px 24px 24px 23px;
`;

const ProductTitle = styled.p`
    font-weight: 500;
    margin: 0;
`;

const ProductTagList = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
`;

const ProductTag = styled.span`
    color: #12B8FF;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
`;

const ProductDiscription = styled.p`
    padding-top: 10px;
    margin: 0;
`;

const RadioOption = styled.div`
    padding-top: 20px;
`;

const OptionValue = styled.p`
    padding-bottom: 10px;
    margin: 0;
`;

export default function ProductDetail(props) {

    const [value, setValue] = React.useState(1);

    const onOptionChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            {props.selectedProduct ?
            <Product>
                <ProductDetailHead>Product Details</ProductDetailHead>
                <BorderBottom></BorderBottom>
                <ProductCompleteDetail> 
                      {/* product */}
                    <div className='col-12'>
                        <ProductTitle>{props.selectedProduct.productName}</ProductTitle>
                        <ProductTagList>
                            {props.selectedProduct.tags.map((tag)=>(
                            <Tag color="#F0F2F4" style={{marginBottom: '4px'}}>
                                <ProductTag >{tag}</ProductTag>
                            </Tag>
                            ))}
                        </ProductTagList>
                    </div>
                    <div className='col-12'>
                        <Button type="primary" style={{backgroundColor: '#12B8FF', border: 'none', boxShadow: 'none', borderRadius: '4px', fontWeight: 500}} href={props.selectedProduct.manufacturerUrl} target={'blank'}>Go to Manufacturer</Button>
                    </div>
                    
                    <div className='col-12'>
                        {props.selectedProduct.description.map((description)=>(
                        <ProductDiscription>
                            {description}
                        </ProductDiscription>
                        ))}
                    </div>

                    <div className='col-12'>
                        {props.selectedProduct.option1 ? 
                        <RadioOption>
                            <Radio.Group onChange={onOptionChange} value={value}>
                                <Radio value={1}>Option 1</Radio>
                            </Radio.Group>
                            <OptionValue>
                                {props.selectedProduct.option1}
                            </OptionValue>
                        </RadioOption>
                        : ''}
                        {props.selectedProduct.option2 ? 
                        <RadioOption>
                            <Radio.Group onChange={onOptionChange} value={value}>
                                <Radio value={2}>Option 2</Radio>
                            </Radio.Group>
                            <OptionValue>
                                {props.selectedProduct.option2}
                            </OptionValue>
                        </RadioOption>
                        : ''}
                    </div>
                </ProductCompleteDetail>
            </Product>
            : ''}
        </div>
    )
}
