import React from 'react';
import {ThreeDots} from "react-loader-spinner";

export function LoadingAnimated({ children, loading }) {
    return (<>
        {loading ?
            <ThreeDots color='#1b75bb' height={80} width={80} wrapperStyle={{justifyContent: 'center'}}/> 
        : (<>
            {children}
        </>)}
    </>);
}
