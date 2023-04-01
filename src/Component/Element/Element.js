import React from 'react';
import { Link } from 'react-router-dom';

const Element = ({ element }) => {
    const { id, name, logo, total } = element;
    return (
        <div >
            <div className="card bg-slate-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Totall quiz {total}</p>
                    <div className="card-actions">
                        <Link to={`/quiz/${id}`} className="btn btn-outline btn-info">Get Start</Link>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Element;