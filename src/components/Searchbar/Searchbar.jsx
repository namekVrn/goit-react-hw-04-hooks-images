import {Component} from 'react';
import { useState, useEffect, useRef } from 'react';
import '../Searchbar/Searchbar.css'
import {ReactComponent as SearchIcon} from "../img/searchIcon.svg"
const Searchbar = ({onChange}) =>{
    const [imageName, setImageName] = useState('')

    const updateImageName = (evt) =>{
        const {value} = evt.currentTarget
        setImageName(value.toLowerCase().trim())
        console.log(imageName);
    }
    const onSubmit = (evt) =>{
        evt.preventDefault()
        onChange(imageName)
        setImageName('')
    }
        return (
            <header className="Searchbar">
                <form className='SearchForm'onSubmit={onSubmit}>
                    <input className="SearchForm-input" type="text" name='name' value={imageName} onChange={updateImageName} autoComplete={'off'} autoFocus placeholder="Search images and photos"/>         
                    <button className="SearchForm-button" type="submit">
                        <SearchIcon width="32"/>
                    </button>    
                </form>
            </header>
        )
}
export default Searchbar