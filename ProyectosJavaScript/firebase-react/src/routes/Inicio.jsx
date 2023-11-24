import React from 'react'

const Inicio = () => {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
    };

    const backgroundStyle = {
        //backgroundImage: `url("src/assets/img/IMAGEN")`
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "100%",
        flex: "1",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div style={containerStyle}>
            <div style={backgroundStyle}>
            </div>
        </div>
    );
};

export default Inicio;