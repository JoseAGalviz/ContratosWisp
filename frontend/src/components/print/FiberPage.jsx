import React from 'react';
import PromoFiberPage from './PromoFiberPage';
import StandardFiberPage from './StandardFiberPage';

const FiberPage = ({ data }) => {
    if (data?.template === 'promo') {
        return <PromoFiberPage data={data} />;
    }
    return <StandardFiberPage data={data} />;
};

export default FiberPage;
