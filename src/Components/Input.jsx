import React, { useState, useEffect, useMemo } from 'react'
import "./input.css"
import UsersCard from './UsersCard'

const Input = ({ onChange, onFocus, onClick, data, datas, setDatas }) => {
    const [display, setDisplay] = useState(false);
    const [value, setValue] = useState("");
    const suggestions = data?.find(option => option?.name?.toLowerCase().includes(value.toLowerCase()))


    useEffect(() => {
        setDatas(suggestions)
        
    }, [suggestions])
    return (
        <>
            <div className='main-container'>
            

                <input value={value} onChange={(e) => setValue(e?.target?.value)} onClick={() => setDisplay(true)} placeholder="Add new user..." style={{ border: "none", outline: "none" }} list="browsers" name="browser" />
                <datalist id="browsers">
                </datalist>


                {display ? <UsersCard data={data} /> : null}
            </div>
        </>)
}

export default Input
