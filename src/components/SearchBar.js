import React from 'react'

function SearchBar(props) {
    return (
        <form onSubmit={props.getWeather}>
            <div className="form-group row">
                <div className="col-3 mx-auto mt-4">
                    <input type="text" className="form-control radius" name="city" placeholder="City..." />
                </div></div>
            <div className="text-center">
                <button type="submit" className="btn btn__custom mt-2">Get weather</button>
            </div>
        </form>
    )
}

export default SearchBar;
