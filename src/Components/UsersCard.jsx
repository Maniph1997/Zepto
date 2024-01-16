import React from 'react'
import "./UsersCard.css"

const UsersCard = ({ data }) => {
    console.log("hhhhhh", data)


    return (<div className="main-div">

        {data?.map(((item) => {
            return (<div onClick={data.options} className='card-wrapper'>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <p>{item.email}</p>
            </div>)


        }))}
    </div>

    )
}

export default UsersCard
