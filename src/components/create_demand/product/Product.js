import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Checkbox, Input, Tag } from 'antd';
import {
    SearchOutlined
  } from '@ant-design/icons';

const ProductTabSearchBar = styled.div`
    background-color: #fff;
    border-radius: 4px;
`;

const ProductTabSearchBarHead = styled.h4`
    color: #3C4858;
    font-size: 16px;
    font-weight: 500;
    padding: 13px 24px 13px 24px;
    margin: 0;
`;

const BorderBottom = styled.div`
    border-bottom: #EBEBEB 2px solid;
`;

const SortArea = styled.div`
    padding: 24px 24px 13px 24px;
`;

const SearchBar = styled.div`
    padding: 8px 24px 13px 24px;
`;

const Products = styled.div`
    margin-top: 16px;
`;

const ProductList = styled.div`
    margin-top: 8px;
    background-color: #fff;
    border-radius: 4px;
`;

const ProductListContent = styled.div`
    padding: 13px 24px 13px 24px;
    cursor: pointer;
`;

const ProductTitle = styled.p`
    font-weight: 500;
    margin: 0;
`;

const ProductTagList = styled.div`
    padding-top: 10px;
`;

const ProductTag = styled.span`
    color: #12B8FF;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
`;

const ProductCategory = styled.p`
  color: #8492A6;
  margin: 0;

`;

export default function Product(props) {

    const [sortable, setSortable] = useState()
    const [selected, setSelected] = useState()
    const [filterd, setFilterd] = useState([])
    const [myArrayFiltered, setMyArrayFiltered] = useState([])
    const [searchVal, setSearchVal] = useState()
    
    const onChangeFilter = (e) => {
        let updatedList = [...filterd];
        if (e.target.checked) {
            updatedList = [...filterd, e.target.value];
        } else {
            updatedList.splice(filterd.indexOf(e.target.value), 1);
        }
        setFilterd(updatedList);
        if(updatedList.length === 0) {
            setTimeout(() => {
                props.products && setMyArrayFiltered(props.products)
            }, 100);
        }
    }

    const handleSelectProduct = (product, i) => {
        props.setSelectedProduct(product)
        setSelected(i)
    }

    const handleSearch = (e) => {
        setSearchVal(e.target.value)
        if (searchVal === '') {
            setTimeout(() => {
                props.products && setMyArrayFiltered(props.products)
            }, 100);
        }
    }

    useEffect(() => {
        const key = 'category';
        const arrayUniqueByKey = props.products && [...new Map(props.products.map(item =>[item[key], item])).values()];
        setSortable(arrayUniqueByKey)
    }, [props.products])

    useEffect(() => {
        props.products && setMyArrayFiltered(props.products)
    }, [props.products])

    useEffect(() => {
        let results = props.products && props.products.filter(
            product => {
                return (
                    (product.productName.toLowerCase().includes(searchVal.toLowerCase()))
                );
            }
        );
        setMyArrayFiltered(results);
    }, [searchVal]);

    useEffect(() => {
        let fArr = []
          
        props.products && props.products.filter(prod=>{filterd.map((fl)=> {
            if (prod.category === fl) {
                fArr = [...fArr, prod]
            }
        })})
        setMyArrayFiltered(fArr)
    }, [filterd])

    return (
        <div>
            {/* Product*/}
            <ProductTabSearchBar>
                <ProductTabSearchBarHead>I’m looking for...</ProductTabSearchBarHead>
                <BorderBottom></BorderBottom>
                <SortArea>
                    <div className='row'>
                    {sortable && sortable.map((product)=>(
                        <div className='col-3'>
                            <Checkbox onChange={onChangeFilter} value={product.category}>{product.category}</Checkbox>
                        </div>
                    ))}
                    </div>
                </SortArea>
                <SearchBar>
                    <Input size="large" placeholder="Type here..." prefix={<SearchOutlined fill='#AFB8C5' />} style={{borderRadius: '4px', backgroundColor: '#F0F2F4'}} value={searchVal} onChange={handleSearch} />
                </SearchBar>
            </ProductTabSearchBar>
            <Products>

                {/* {myArrayFiltered != [] || myArrayFiltered != undefined ?  */}
                {myArrayFiltered && myArrayFiltered.map((product, i)=>(
                <ProductList>
                    <ProductListContent onClick={()=>handleSelectProduct(product, i)} style={selected == i ? {border: '#12B8FF 1px solid', borderRadius: '4px'} : {border: 'none'}}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='col-9'>
                                <ProductTitle>{product.productName}</ProductTitle>
                                <ProductTagList>
                                    {product.tags.map((tag)=>(
                                    <Tag color="#F0F2F4" style={{marginBottom: '4px'}}>
                                        <ProductTag >{tag}</ProductTag>
                                    </Tag>
                                    ))}
                                </ProductTagList>
                            </div>
                            <div>
                                <ProductCategory>{product.category}</ProductCategory>
                            </div>
                        </div>
                    </ProductListContent>
                </ProductList>
                ))
                
                // :
                // props.product && props.product.map((product, i)=>(
                // <ProductList>
                //     i am here
                //     <ProductListContent onClick={()=>handleSelectProduct(product, i)} style={selected == i ? {border: '#12B8FF 1px solid', borderRadius: '4px'} : {border: 'none'}}>
                //         <div className='d-flex align-items-center justify-content-between'>
                //             <div className='col-9'>
                //                 <ProductTitle>{product.productName}</ProductTitle>
                //                 <ProductTagList>
                //                     {product.tags.map((tag)=>(
                //                     <Tag color="#F0F2F4" style={{marginBottom: '4px'}}>
                //                         <ProductTag >{tag}</ProductTag>
                //                     </Tag>
                //                     ))}
                //                 </ProductTagList>
                //             </div>
                //             <div>
                //                 <ProductCategory>{product.category}</ProductCategory>
                //             </div>
                //         </div>
                //     </ProductListContent>
                // </ProductList>
                // ))
                }
            </Products>
        </div>
    )
}
