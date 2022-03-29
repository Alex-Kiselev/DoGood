import AboutMe from "../../components/AboutMe";
import {useEffect, useState} from "react";
import ProfileProductList from "../../components/ProfileProductList";
import {useDispatch, useSelector} from "react-redux";
import {PostsThunk} from "../../redux/thunk/ThunkForm";


export default function ProfilePage() {
    const [typeProduct, setTypeProduct] = useState('active');
    const user = useSelector(state => state.register);
    const allPosts = useSelector(state => state.post);
    const dispatch = useDispatch();


    useEffect(()=>{
        (async() => {
            const allllll = await dispatch(PostsThunk());
        })()
    }, [])

    const activePost = allPosts.filter(el => el.available === true)
    const archivePost = allPosts.filter(el => el.available === false)

    const handlerActual = () => {
        setTypeProduct('active');
    };

    const handlerArchive = () => {
        setTypeProduct('archive');
    };

    return (
        <main id="main">
            <AboutMe profile={user}/>
            <div className="div-btn-profile">
                <button className="btnproduct" onClick={handlerActual}>
                    Актуальные
                </button>
                <button className="btnproduct" onClick={handlerArchive}>
                    Архивные
                </button>
            </div>
            {typeProduct === 'active' ? (
            <ProfileProductList
                header="Ваши актуальные продукты"
                descriptions="Ниже отображается список добавленных вами продуктов, после завершения сделки кликните на кнопку - снять с публикации"
                type={typeProduct}
                posts={activePost}
                // posts={allPosts}
            />
            )
              : (
                  <ProfileProductList
                        header="Ваши архивные продукты"
                        descriptions="Ниже отображается список добавленных вами продуктов, после завершения сделки кликните на кнопку - снять с публикации"
                        type={typeProduct}
                        posts={archivePost}
                  />
                )

            }
        </main>
    )
}
