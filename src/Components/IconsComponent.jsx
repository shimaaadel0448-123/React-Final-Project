import React from 'react';

const IconsComponent = () => {
    return (
        <div className="bg-black p-4 ">
            <ul className="text-white flex justify-center items-center gap-6 text-3xl">
                <li className=' hover:text-amber-800'><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li className=' hover:text-amber-800'><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li className=' hover:text-amber-800'><a href="#"><i className="fab fa-tiktok"></i></a></li>
                <li className=' hover:text-amber-800'><a href="#"><i className="fab fa-pinterest"></i></a></li>
                <li className=' hover:text-amber-800'><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li className=' hover:text-amber-800'><a href="#"><i className="fab fa-x"></i></a></li>
            </ul>
        </div>
    );
}

export default IconsComponent;
