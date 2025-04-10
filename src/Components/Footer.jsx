import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#e6dace] px-16 py-12">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                    <p className="leading-relaxed">
                        We only produce what your customers really want, when they want it. As a made-to-order pioneer,
                        we combine ecological sustainability with customized expression on all kinds of products
                        for creators and their community.
                    </p>
                </div>
                <hr className="block lg:hidden border-t border-black my-6" />
                <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">About Us</h3>
                    <ul className="space-y-1 font-bold">
                        <li className='cursor-pointer hover:text-amber-700'>Print on demand</li>
                        <li className='cursor-pointer hover:text-amber-700'>Contact for Spreadshop Partner</li>
                        <li className='cursor-pointer hover:text-amber-700'>Contact for Spreadconnect Merchants</li>
                        <li className='cursor-pointer hover:text-amber-700'>Help Center</li>
                    </ul>
                </div>
                <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">Service</h3>
                    <ul className="space-y-1 font-bold">
                        <li className='cursor-pointer hover:text-amber-700'>Spreadshop Agency Solutions</li>
                        <li className='cursor-pointer hover:text-amber-700'>Spreadshop Embroidery Service</li>
                        <li className='cursor-pointer hover:text-amber-700'>Design Service</li>
                    </ul>
                </div>
                <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">Legal</h3>
                    <ul className="space-y-1 font-bold ">
                        <li className='cursor-pointer hover:text-amber-700'>Imprint</li>
                        <li className='cursor-pointer hover:text-amber-700'>Privacy Policy</li>
                        <li className='cursor-pointer hover:text-amber-700'>CCPA</li>
                    </ul>
                </div>
                <hr className="block lg:hidden border-t border-black my-6" />
            </div>
            <div className="mt-12 border-t pt-4 text-l text-center font-bold md:text-left">
                © Spreadshop 2025
            </div>
        </footer>
    );
};

export default Footer;
