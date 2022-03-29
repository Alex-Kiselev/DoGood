import React, { useState } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setError } from '../../redux/AC/errorAC'
import "./styleFormModal.css";
import { setStatus } from "../../redux/actions/formActions";
import { getCoordinate } from "./getCoordinate";

const MODAL_STYLES = {
  position: "fixed",
  width: "35%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,88,189, .6)',
    zIndex: 1000
}

const BUTTON_CLOUSE_STYLES = {
  position: "fixed",
  top: 0,
  right: 0,
  border: "none",
  zIndex: 1001,
  backgroundColor: "rgba(0, 0, 0, .0)",
};

const EditFoodFormModal = ({ open, children, onClose, food }) => {
  // const err = useSelector(state => state.error)
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: food?.title,
    description: food?.description,
    city: food?.city,
    geolocation: food?.address,
  });
  const posts = useSelector((state) => state.post);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { title, description, city, geolocation } = inputs;
    city = `${city}`;
    // вдруг координаты допилим
    // const coordinate = getCoordinate({geolocation, city});
    // console.log('<<<coordinate<<<EditFoodFormModal<=', coordinate);

    fetch(`http://localhost:3001/items/${food.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ title, description, city, geolocation }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const res = posts.map((el) => {
          if (el.id === food.id) {
            return {
              ...el,
              title,
              description,
              city: geolocation,
              address: city,
              coordinatesX: data.x.coordinate[0],
              coordinatesY: data.x.coordinate[1],
            };
          } else {
            return el;
          }
        });
        console.log("res--", res);
        dispatch(setStatus(res));
        onClose();
      });

    ///Допилить логику!!!
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <main id="main">
        <div
          className="main-div main-w3layouts wrapper"
          style={OVERLAY_STYLES}
        />
        <div className="two-div main-agileinfo" style={MODAL_STYLES}>
          <div className="agileits-top formdesign">
            {children}
            <form className="" onSubmit={handleSubmit}>
              <button onClick={onClose} style={BUTTON_CLOUSE_STYLES}>
                <i className="bi bi-x" />
              </button>
              {/*{err}*/}
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
                name="city"
                placeholder="Город"
                required=""
                value={inputs.city}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="geolocation"
                placeholder="Адрес"
                required=""
                value={inputs.geolocation}
                onChange={handleChange}
              />
              <button onClick={handleSubmit} className="btnlogin">
                {" "}
                Сохранить изменения
              </button>
              <div className="wthree-text">
                <div className="clear"> </div>
              </div>
            </form>
            <p>
              Вы передумали?{" "}
              <Link onClick={onClose} to="/profile">
                {" "}
                Выйти
              </Link>
            </p>
            <div></div>
          </div>
                <ul className="colorlib-bubbles">
                    <li><img className="img-bubbles" src="" /></li>
                    <li><img className="img-bubbles" src="" /></li>
                    <li><img className="img-bubbles" src="" /></li>
                    <li><img className="img-bubbles" src="" /></li>
                    <li><img className="img-bubbles" src="" /></li>
                    <li><img className="img-bubbles" src="" /></li>
                    <li><img className="img-bubbles" src="" /></li>
                </ul>
          
        </div>
      </main>
    </>,
    document.getElementById("portal")
  );
};
export default EditFoodFormModal;

