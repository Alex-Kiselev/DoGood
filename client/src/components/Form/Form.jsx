import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styleForm.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { PostsThunk } from "../../redux/thunk/ThunkForm";
import { getNewPost } from "../../redux/actions/formActions";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    img: "",
    city: "",
    geolocation: "",
    category: "",
    validUntil: "",
    checkBox: false,
  });

  const user = useSelector((state) => state.register);


  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs, "eto inputs");
  };



  const inputCheckBox = (e) => {
    // console.log(e.target.checked);
    setInputs((prev) => {
      return { ...prev, checkBox: e.target.checked };
    });
  };

  const addProdToDB = async (e) => {
    e.preventDefault();
    let id;
    if (inputs.checkBox === true) {
      console.log('addProdToDB--',inputs);

      const formData = new FormData();
      formData.append("file", inputs.img);
      formData.append("title", inputs.title);
      formData.append("description", inputs.description);
      formData.append("category", inputs.category);
      formData.append("city", inputs.city);
      formData.append("geolocation", inputs.geolocation);
      formData.append("user_id", user.user);
      formData.append("validUntil", inputs.validUntil);

      // console.log(Object.fromEntries(formData));
      // console.log(formData);
      try {
        const response = await fetch("http://localhost:3001/items/addgood", {
          method: "POST",
          credentials: "include",
          body: formData,
        });
        const data = await response.json();
        dispatch(PostsThunk());
        id = data.id;

      } catch (e) {
        console.error(e);
      }


    } else {
      e.preventDefault();
      alert("Согласись с нашими условиями платформы!!!");
    }
    navigate(`/good/${id}`);
  };
  const inputAvatarHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setInputs((prev) => ({ ...prev, img: file }));
  };

  return (
    <>
      {/* <!-- main --> */}
      <main id="main">


      <div className="main-w3layouts wrapper maindiv">
        <h1>Добавление продукта</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="">
              <input
                className="text inputformdecor"
                type="text"
                name="title"
                placeholder="Название"
                required=""
                value={inputs.title}
                onChange={handleChange}
              />
              <input
                className="inputphoto input-file"
                id="file"
                onChange={(e) => inputAvatarHandler(e)}
                accept="image/*"
                type="file"
                name="img"
              />
              <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                {inputs.img ? (
                  <i className="bi bi-check2-square"/>
                ) : (
                  <i className="icon fa fa-check"/>
                )}
                <span className="js-fileName">
                  {" "}
                  {inputs.img ? " Фото загружено" : " Загрузить фото"}
                </span>
              </label>
              <select
                className="text email selectformdecor"
                placeholder="Категория"
                value={inputs.category}
                onChange={handleChange}
                name="category"
              >
                <option default>Выберите категорию</option>
                <option value="Food">Продукты</option>
                <option value="Clothers">Одежда</option>
                <option value="Furniture">Мебель</option>
              </select>

              <input
                className="text email inputformdecor"
                type="text"
                name="description"
                placeholder="Описание"
                required=""
                value={inputs.description}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="geolocation"
                placeholder="Город"
                required=""
                value={inputs.geolocation}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="city"
                placeholder="Адрес"
                required=""
                value={inputs.city}
                onChange={handleChange}
              />

              <input
                className="text email inputformdecor"
                type="date"
                name="validUntil"
                placeholder="Действительно до"
                required=""
                value={inputs.validUntil}
                onChange={handleChange}
              />

              <div className="wthree-text">
                <label className="anim">
                  <input
                    name="checkBox"
                    type="checkbox"
                    className="checkbox"
                    required=""
                    onChange={inputCheckBox}
                  />
                  <span className="textoncheckbox">
                    Я согласен с условиями платформы!
                  </span>
                </label>

                <button
                  className="btnlogin"
                  type="submit"
                  onClick={addProdToDB}
                >
                  ДОБАВИТЬ
                </button>
              </div>
            </form>

            <p>
              Вы передумали? <Link to="/profile"> Выйти</Link>
            </p>
          </div>
        </div>
        <ul className="colorlib-bubbles">
          <li>
            <img className="img-bubbles" src="" alt="" />
          </li>
          <li>

            <img className="img-bubbles" src="" alt=""/>
          </li>
          <li>
            <img className="img-bubbles" src="" alt=""/>
          </li>
          <li>
            <img className="img-bubbles" src="" alt=""/>
          </li>
          <li>
            <img className="img-bubbles" src="" alt=""/>
          </li>
          <li>
            <img className="img-bubbles" src="" alt=""/>
          </li>
          <li>
            <img className="img-bubbles" src="" alt=""/>
          </li>
          <li>
            <img className="img-bubbles" src="" alt=""/>
          </li>
        </ul>
      </div>
      </main>
      {/* <!-- //main --> */}
    </>
  );
};

export default Form;
