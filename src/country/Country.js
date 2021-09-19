import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,capital,population,flag,region} = props.country

    
    return (
        <div className="country">
            <h4>Name : {name}</h4>
            <img src={flag} alt="" />
            <p>population : {population}</p>
            <p>capital : {capital}</p>
            <p>Region: {region} </p>
        </div>
    );
};

export default Country;
// const Country = (props) => {
//     const {name,capital,population} = props.country
//     console.log(country);
    
//     return (
//         <div className="country">
//             <h4>Name : {props.country.name}</h4>
//             <img src={props.country.flag} alt="" />
//             <p>population : {props.country.population}</p>
//             <h4>capital : {props.country.capital}</h4>
//         </div>
//     );
// };

// export default Country;