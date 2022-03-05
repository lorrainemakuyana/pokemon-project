import React from 'react'

export default function RandomNumbers() {

    const container_div_styles = {
        height: "100vh",
        backgroundColor: "rgb(13, 13, 69)", 
        width: "33%"
    }

    const img_styles = {
        width: "100px", 
        marginBottom: "30px"
    }

    const form_styles = {
        padding: "50px", 
        color: "white"
    }

    const header_styles = {
        color: "white", 
        fontWeight: "bold", 
        textDecoration: "wavy", 
        fontSize: "30px", 
        height: "150px", 
    }

    const inputs_container_div_styles = {
        height: "270px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }

    const input_styles = {
        border: "none", 
        display: "block",
        margin: "10px 0 10px 0",
        padding: "7px",
        borderRadius: "5px",
        onfocus: {
            border: "1px solid indigo"
        } 
    }

    return (
        <div style={container_div_styles}>
            
            <form style={form_styles}>
                <img src='pokemon_img.png' alt='pokemon' style={img_styles}></img>
                <h1 style={header_styles}>Identify your unique characteristics today!</h1>
                <div style={inputs_container_div_styles}>
                    <div>
                        <label for="rand1">For your unique pokemon name, enter a number between 1 and 20 </label>
                        <input id='rand1' type="text" style={input_styles} placeholder="Between 1 and 20"></input>
                    </div>
                    
                    <div>
                        <label for="rand2">For your unique pokemon character traits, enter either 1 or 2 </label>
                        <input id='rand2' type="text" style={input_styles} placeholder="Either 1 or 2"></input>
                    </div>
                </div>
                <input type="submit" value="Check Now"></input>
            </form>
        </div>
    )
}
