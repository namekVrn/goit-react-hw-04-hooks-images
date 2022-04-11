import {Component} from 'react';
import '../Button/Button.css'
const Button=({loadMore})=> {
    
        return (
            <div className="ButtonCenter">
                <button className="Button" type="button" onClick={loadMore}>LoadMore</button>
            </div>
        )
    
}
export default Button