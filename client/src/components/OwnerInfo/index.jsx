import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function OwnerInfo() {
    const [user, setUser] = useState({});
    const {id} = useParams()
    const post = useSelector(state => state.post)
    const curPost = post.filter(el => el.id === +id)[0]

    useEffect(() => {
        fetch(`http://localhost:3001/users/profile/${id}`)
            .then((res) => res.json())
            .then((res) => setUser(res));
    }, []);
    console.log("user=========", id)
    return (
        <>
            <main id="main">
                {/* <!-- ======= Our Skills Section ======= --> */}
                <section id="skills" className="skills section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Об авторе</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-right">
                                <img src={curPost?.User.img} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>{curPost?.User.name}&nbsp;{curPost?.User.surname}</h3>
                                <p>Свяжитесь с автором, позвонив ему по телефону, или отправьте личное сообщение</p>
                                <a href={`tel:${curPost?.User.telephone}`}  >
                                    <i className="bi bi-phone"></i>
                                    {curPost?.User.telephone}
                                </a>
                                <br />



                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Our Skills Section --> */}
            </main>
        </>
    );
}

export default OwnerInfo;
