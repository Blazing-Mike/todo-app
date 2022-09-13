import { useState } from "react";
const Footer = ({showAll, showActive}) => {

    return ( 
        <footer className="footer">
        <button className="transparent" onClick={() => showAll()}>All</button>
        <button className="transparent" onClick={() => showActiveTodos()}>Active</button>
        <button className="transparent" onClick={() => showCompleted()}>Completed</button>
        </footer>
     );
}
 
export default Footer;