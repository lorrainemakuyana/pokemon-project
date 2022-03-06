import React from 'react'

export default function RandomNumbers({handleChange, handleSubmit}) {

    return (
        <div className="rand_main_container">
            <form className='form' onSubmit={handleSubmit}>
                <img className='image' src='pokemon_img.png' alt='pokemon' ></img>
                <h1 className='header'>Identify your unique Pokemon today in two easy steps!</h1>
                <div className="inputs_container">
                    <div>
                        <label for="my_name">Enter your name </label>
                        <input name='user' id='my_name' type="text" placeholder="Your name is ..." onChange={handleChange}></input>
                    </div>
                    <div className='click_info'>
                        Now click the "Check Now" button below
                    </div>
                </div>
                <button type="submit">Check Now</button>
            </form>
        </div>
    )
}
