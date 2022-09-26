

import React, { useEffect, useState } from 'react'


const Product_fetch = (propdata) => (Component,newData) => {
    console.log("propdata is")
    console.log(propdata);
    console.log(newData);



    const NewComponent = (props) => {

        const [Product, setProduct] = useState([])
        useEffect(() => {
            fetch(`https://dummyjson.com/${propdata.type}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if(propdata.type==="products"){
                    setProduct(data.products)
                    }
                    else if(propdata.type==="users"){
                        setProduct(data.users)
                    }
                })

        }, [props])

        return <Component products={Product} {...props}></Component>;
    }
    return NewComponent;

}

export default Product_fetch
