import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


function GalleryNavigation({galleries}) {
    console.log(galleries)
    // return (<nav>
    //   galleries.map(gallery =>)
    //   <NavLink to="/">Homepage </NavLink>
    // </nav>)

    return (
        <nav>
            {galleries.map (gallery => {
                <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
                    {gallery.name}
                </NavLink>
            })}
        </nav>
    )


}



export default GalleryNavigation