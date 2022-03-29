import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function Post() {
    const categories = {
        Food: "Еда",
        Clothers: "Одежда",
        Furniture: "Мебель",
    }
    const {id} = useParams()
    const post = useSelector(state => state.post)
    const curPost = post.filter(el => el.id === +id)[0]
    console.log('currrent ', curPost)
    console.log("el-------------", id)
    return (
        <>
            <main id="main">
                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="breadcrumb-hero">
                        <div className="container">
                            <div className="breadcrumb-hero">
                                <h2>Об этом продукте</h2>
                                <p>Подробное описание продукта</p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <ol>
                            <li><a href="/good">Назад</a></li>
                            <li>Добро</li>
                        </ol>
                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-11">
                                <div className="row justify-content-end">
                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box py-5">
                                            <i className="bi bi-calendar-check"></i>
                                            <span>{curPost?.createdAt.slice(0, 10)}</span>
                                            {/*<time dateTime="2020-01-01">{el.createdAt.slice(0, 10)}</time>*/}

                                            <p>Опубликовано</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box py-5">
                                            <i className="bi bi-calendar-x"></i>
                                            <span>{curPost?.validUntil.slice(0, 10)}</span>
                                            <p>Действительно до</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box pb-5 pt-0 pt-lg-5">
                                            <i className="bi bi-basket"></i>
                                            <span data-purecounter-start="0" className="purecounter">Для Вас</span>
                                            <p>От чистого сердца</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box pb-5 pt-0 pt-lg-5">
                                            <i className="bi bi-tags"></i>
                                            <span>{curPost?.Category.title}</span>
                                            <p>Категория</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 video-box align-self-baseline position-relative">
                                <img src={curPost?.img} className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 pt-3 pt-lg-0 content">
                                <h3>{curPost?.title}</h3>
                                <p>Детали продукта:</p>
                                <ul>
                                    <li>
                                        <i className="bx bx-check-double"></i>{" "}
                                        {curPost?.city}
                                    </li>
                                    <li>
                                        <i className="bx bx-check-double"></i>{" "}
                                        {curPost?.description}
                                    </li>
                                    <li>
                                        <i className="bx bx-check-double"></i> Готов встретиться по
                                        указанному адресу с 10:00 до 18:00
                                    </li>
                                </ul>
                                <p className="fst-italic">
                                    Обращайте внимание на состояние вещей и сроки годности продуктов, будьте вежливы
                                    с автором публикации
                                </p>
                                 {/*<button href="#about" className="btnauthor">Снять с публикации</button>*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End About Section --> */}
            </main>
        </>
    )
}
export default Post
