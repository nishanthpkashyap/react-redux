import { Select } from "antd";
import { useState } from "react";

export function CountryAndCities(){

    const [countryIndex, setCountryIndex] = useState(null);

    const array = [
        {name: "USA", code: "US", cities: ["New York", "Las Vegas", "San Francisco", "Los Angeles",]},
        {name: "INDIA", code: "IND", cities: ["Bengaluru", "Mysuru", "New Delhi", "Madhugiri"]},
        {name: "JAPAN", code: "JAP", cities: ["Tokyo", "Shibuya", "Hokaido", "Saitama"]}
    ];

    const handleCountry = (value)=>{
        console.log(value);
        setCountryIndex(value);
    }

    return (
        <div>
            <Select defaultValue={"Choose a Country"} onChange={(value)=>handleCountry(value)}>
                {array.map(({name}, index)=>{
                    return <Select.Option value={index} key={index}>{index+1}{") "}{name}</Select.Option>
                })}
            </Select>
            {countryIndex != null && <Select defaultValue={"Choose a city"}>
                {array[countryIndex].cities.map((item, index)=>{
                    return <Select.Option key={index} >{item}</Select.Option>
                })}
            </Select>}
        </div>
    )
}