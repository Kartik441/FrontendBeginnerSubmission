import React from "react";


const Card = ({  name, email, phone, company, website, address }) => {
    return (
        <div  className="MainCard">
            <div className="imageDiv">
                <img src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`} alt="image" />
            </div>

            <div className="Desc">
                <h2 style={{ marginBottom: 8}}>  {name} </h2>

                <div style={{marginBottom:5 }}> 
                    <strong>Email: </strong> {email}
                </div>
    

                <div style={{marginBottom:5 }}>
                    <strong>Phone: </strong> {phone}
                </div>

                <div style={{marginBottom:5 }}>
                    <strong>Company: </strong> {company.name}
                </div>

                <div style={{marginBottom: 5 }}>
                    <strong>Website: </strong> {website}
                </div>

                <div style={{marginBottom: 5 }}>
                    <strong>Address: </strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </div>

                
            </div>

        </div>
    );
}

export default Card;