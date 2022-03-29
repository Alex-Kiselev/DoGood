import React from "react";

const Rules = () => {
    return (
        <>
            <main id="main">

            {/* <!-- ======= Breadcrumbs ======= --> */}
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="breadcrumb-hero">
                    <div className="container">
                        <div className="breadcrumb-hero">
                            <h2>ПРАВИЛА ПЛАТФОРМЫ</h2>
                            <p>Ознакомьтесь с условиями нашей платформы, это небольшой свод правил которые мы соблюдаем</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ol>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>Правила</li>
                    </ol>
                </div>

            </section>
            {/* <!-- End Breadcrumbs --> */}

            {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
            <section id="faq" className="faq section-bg">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Отлично, что ты хочешь сделать доброе дело!</h2>
                        <p>Мы хотим, что бы вы относились с уважением друг к другу. За прошедшее время мы определили некоторые правила поведения, чтобы все работало оптимально для нас. Помогать другим - очень человечное, но ответственное дело. В принципе, всегда применяется следующее: «Не передавайте другим ничего, что вы бы не взяли сами». Пожалуйста, внимательно прочитайте этикет по передаче продуктов и вещей!</p>

                     <h3>Этикет</h3>

                    </div>

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up">
                        <div className="col-lg-5">
                            <i className="bx bx-bookmark"></i>
                            <h4>Будь честен</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Все мы, кто разработал  и запустил веб-сайт, очень серьезно относятся к своей работе. Мы соблюдаем ряд законов и постановлений. Также будьте честны при заполнении своих данных и всех других данных, которые вы делаете на платформе, например, в страницах с едой и личных сообщениях.
                            </p>
                        </div>
                    </div>
                    {/* <!-- End F.A.Q Item--> */}

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-5">
                            <i className="bx bx-bookmark"></i>
                            <h4>Соблюдайте правила по оказанию помощи.</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Мы прямо указываем на то, что по юридическим причинам мы разрешаем предлагать и делиться определенными продуктами питания и другими товарами только при определенных условиях. В частности, это относится к скоропортящимся продуктам, таким как сырая рыба, сырое мясо, блюда из сырых яиц и полуфабрикаты. В общем, мы следим за тем, чтобы еда оставалась съедобной для всех наших органов чувств. Все подробности можно найти в правилах гигиены.
                            </p>
                            <p>
                                Передача лекарств (в том числе гомеопатических) исключена. Одежду, косметику, бытовую химию, игрушки и другие непродовольственные товары можн передавать через Дари Добро. Платформа  оставляет за собой право удалять предложения, которые не соответствуют правилам.
                            </p>
                        </div>
                    </div>
                    {/* <!-- End F.A.Q Item--> */}

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-5">
                            <i className="bx bx-bookmark"></i>
                            <h4>Быть ответственным</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                            Мы хотим ответственно помогать людям и рады, что вы принимаете участие.
                            </p>
                        </div>
                    </div>
                    {/* <!-- End F.A.Q Item--> */}

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div className="col-lg-5">
                            <i className="bx bx-bookmark"></i>
                            <h4>Будь надёжным</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Во многих городах есть люди, которым нужна ваша помощь. Вы можете встретиться с ними , чтобы поделиться. Если вы хотите передать или забрать продукты, будьте надежны и пунктуальны, не бросайте никого под «дождь».
                            </p>
                        </div>
                    </div>
                    {/* <!-- End F.A.Q Item--> */}

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                        <div className="col-lg-5">
                            <i className="bx bx-bookmark"></i>
                            <h4>Сделайте предложения</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Мы хотим продолжать развиваться, становиться все лучше и лучше. Для этого нам нужно от вас много хороших идей и советов. Отправляете их на info@dogood.com
                            </p>
                        </div>
                    </div>
                    {/* <!-- End F.A.Q Item--> */}

                </div>
            </section>
            {/* <!-- End Frequently Asked Questions Section --> */}
            </main>
        </>
    );
}

export default Rules;
