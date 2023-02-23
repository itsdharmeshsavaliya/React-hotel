import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
const ScrollToTop = () => {

    const Scroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }


    return (
        <>
            <div className="Top text-end m-2">
                <button className="btn btn-outline-danger position-fixed" onClick={Scroll}>
                    <BiUpArrowAlt />
                </button>
            </div>
        </>
    );
};

export default ScrollToTop;
