import React from 'react';
import {Link} from "react-router-dom";


function Item({el}) {


    return (
        <article className="entry">
            <div className="entry-img">
                <img src={el.img?.length > 60 ? el.img : `http://localhost:3001/${el.img}`} alt="" className="img-fluid" />
            </div>

            <h2 className="entry-title">
                <a href="/good/:id">{el.title}</a>
            </h2>

            <div className="entry-meta">
                <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"/> <a
                        href="/good/:id">{el.User?.name}</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"/> <a
                        href="/good/:id">
                        <time dateTime="2020-01-01">{el.createdAt.slice(0, 10)}</time>
                    </a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"/> <a
                        href="/good/:id">{el.Category.title}</a></li>
                </ul>
            </div>

            <div className="entry-content">
                <p>
                    {el.description}
                </p>
                <div className="read-more">
                    <a href={`/good/${el.id}`}>Подробнее</a>
                </div>
            </div>
        </article>
    )
};
export default Item
