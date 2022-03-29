import ProfileProductCard from "../ProfileProductCard";
import {useSelector} from "react-redux";

export default function ProfileProductList({header, descriptions, type, posts}) {
    const profileDate = useSelector(state => state.register)

    return (
        <>
            {/* <!-- ======= Features Section ======= --> */}
                <section id="features" className="features">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>{header}</h2>
                            <p>
                                {descriptions}
                            </p>
                        </div>

                        <div className="row">
                            {type === 'active' ?
                                <>
                                    {posts && posts.filter(el => +el.user_id === +profileDate.user).map(el => <ProfileProductCard key={el.id} card={el} type={type}/>
                                )}
                                </>
                                :
                                <h1>Вы не добавляли продуктов</h1>
                            }
                            {type === 'archive' ?
                                // тут мапим из базы карточки posts из пропсов
                                <>
                                    {posts && posts.filter(el => +el.user_id === +profileDate.user).map(el => <ProfileProductCard key={el.id} card={el} type={type}/>
                                    )}

                                </>
                                :
                                <h1>Вы не добавляли продуктов</h1>
                            }
                        </div>
                    </div>
                </section>
                {/* <!-- End Features Section --> */}
        </>
    )
}
