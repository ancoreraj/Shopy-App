import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import {getProducts} from './apiCore';
import Card from './Card';

const Home = () =>  {
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
    }, []);

    return (
        <Layout title="Home Page" description="MERN E-commerce App" className="container-fluid">
            <h2 className="mb-4"> Products </h2>
            <div className="row"> 
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3"> 
                        <Card key={i} product={product}/> 
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;