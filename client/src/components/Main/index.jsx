import {Link} from "react-router-dom";


export default function MainComponent() {
    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero">
                <div className="hero-container" data-aos="fade-up">
                    <h1>DoGood - Мы делаем Добро</h1>
                    <h2>Стань частью социального проекта помощи нуждающимся </h2>
                    <a href="#about" className="btn-get-started scrollto">Как это работает?</a>
                </div>
            </section>
            {/*<!-- End Hero -->*/}

            <main id="main">

                {/*<!-- ======= About Section ======= -->*/}
                <section id="about" className="about">
                    <div className="container">

                        <div className="row justify-content-end">
                            <div className="col-lg-11 py-3">
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-6 video-box align-self-baseline position-relative">
                                <img src="assets/img/videoBackground.jpeg" className="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=DytUDs4iJT4" className="glightbox play-btn mb-4"></a>
                            </div>

                            <div className="col-lg-6 pt-3 pt-lg-0 content">
                                <h3>В качестве гуманитарной помощи все желающие могут разместить предложение:
                                    </h3>
                                <p className="fst-italic">
                                   <br/>
                                </p>
                                <ul>
                                    <li><i className="bx bx-check-double"/> Продуктовые товары</li>
                                    <li><i className="bx bx-check-double"/> Одежду</li>
                                    <li><i className="bx bx-check-double"/> Мебель</li>
                                    <li><i className="bx bx-check-double"/> Посуду и другие предметы первой необходимости</li>
                                </ul>
                                <p>
                                    Кроме того, для детей беженцев, которым нужна особая поддержка, собирают игрушки, канцелярские товары и книги.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>
                {/*<!-- End About Section -->*/}

                {/* <!-- ======= Cta Section ======= -->*/}
                <section id="cta" className="cta">
                    <div className="container" data-aos="fade-in">

                        <div className="text-center">
                            <h3>ПРАВИЛА ПЛАТФОРМЫ</h3>
                            <p> Ознакомьтесь с условиями нашей платформы - это небольшой свод правил, которые мы соблюдаем.</p>
                            <Link className="cta-btn" to="rules">Правила платформы</Link>
                        </div>

                    </div>
                </section>
                {/*<!-- End Cta Section -->*/}

                {/*<!-- ======= Services Section ======= -->*/}
                <section id="services" className="services ">
                    <div className="container">

                        <div className="section-title pt-5" data-aos="fade-up">
                            <h2>О НАШЕМ ПРОЕКТЕ</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="bi bi-briefcase" style={{color: "#ff689b"}}/></div>
                                    <h4 className="title"><a href="">Разумное потребление</a></h4>
                                    <p className="description">Мы продвигаем идею разумного потребления продуктов, ведь есть люди которые нуждаются</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="bi bi-book" style={{color: "#e9bf06"}}/></div>
                                    <h4 className="title"><a href="">Миссия платформы</a></h4>
                                    <p className="description">Мы помогаем простым людям перестать выбрасывать еду, а нуждающимся людям — получать её абсолютно бесплатно для себя и близких.</p>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-card-checklist" style={{color: "#3fcdc7"}}/></div>
                                    <h4 className="title"><a href="">Быть добрее</a></h4>
                                    <p className="description">Научиться милосердию</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-binoculars" style={{color: "#41cf2e"}}/></div>
                                    <h4 className="title"><a href="">Не выбрасывайте еду и вещи</a></h4>
                                    <p className="description">Есть люди, которые нуждаются и будут вам благодарны</p>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-globe" style={{color: "#d6ff22"}}/></div>
                                    <h4 className="title"><a href="">Ресурсы планеты</a></h4>
                                    <p className="description">Рациональный расход ресурсов нашей планеты - это наша общая миссия, мы должны позаботиться о наших потомках</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-clock" style={{color: "#4680ff"}}/></div>
                                    <h4 className="title"><a href="">Правила платформы</a></h4>
                                    <p className="description">Ознакомьтесь при регистрации с условиями нашей платформы, это небольшой свод правил которые мы соблюдаем</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/*<!-- End Services Section -->*/}

            </main>
            {/*<!-- End #main -->*/}
        </>
    )
}