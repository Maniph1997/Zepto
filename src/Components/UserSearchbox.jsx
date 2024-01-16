import React from 'react';
import Input from './Input';
import { useState, useEffect, useRef } from "react";

const UserSearchbox = ({ data, datas, setDatas }) => {
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const [selectedOption , setSelectedOption] = useState([])
    // const suggestions = data.filter(option => option?.name?.toLowerCase().includes(value.toLowerCase()))
    // const suggestions = data.map(option => option?.name?.toLowerCase().includes(value.toLowerCase()))

    // console.log(suggestions)
    // console.log(value)
    

    const autocompleteRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShowSuggestions(false)
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSuggestionClick = (suggetion) => {
        setValue(suggetion);
        setShowSuggestions(false);
    }

    return (
        <>
            <h2 className='heading'>Pick Users</h2>

            {/* <div className="autocomplete" ref={autocompleteRef}> */}

            <Input
                // value={value}
                datas={datas}
                setDatas={setDatas}
                onChange={handleChange}
                onFocus={() => setShowSuggestions(true)}
                data={data}
            />
            <hr style={{ width: "800px", border: "1px solid rgb(2, 2, 131)" }} />
            {/* {showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )} */}



            {/* </div> */}
        </>

    )
};

export default UserSearchbox;