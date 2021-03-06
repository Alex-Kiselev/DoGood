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
      alert("?????????????????? ?? ???????????? ?????????????????? ??????????????????!!!");
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
        <h1>???????????????????? ????????????????</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="">
              <input
                className="text inputformdecor"
                type="text"
                name="title"
                placeholder="????????????????"
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
                  {inputs.img ? " ???????? ??????????????????" : " ?????????????????? ????????"}
                </span>
              </label>
              <select
                className="text email selectformdecor"
                placeholder="??????????????????"
                value={inputs.category}
                onChange={handleChange}
                name="category"
              >
                <option default>???????????????? ??????????????????</option>
                <option value="Food">????????????????</option>
                <option value="Clothers">????????????</option>
                <option value="Furniture">????????????</option>
              </select>

              <input
                className="text email inputformdecor"
                type="text"
                name="description"
                placeholder="????????????????"
                required=""
                value={inputs.description}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="geolocation"
                placeholder="??????????"
                required=""
                value={inputs.geolocation}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="city"
                placeholder="??????????"
                required=""
                value={inputs.city}
                onChange={handleChange}
              />

              <input
                className="text email inputformdecor"
                type="date"
                name="validUntil"
                placeholder="?????????????????????????? ????"
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
                    ?? ???????????????? ?? ?????????????????? ??????????????????!
                  </span>
                </label>

                <button
                  className="btnlogin"
                  type="submit"
                  onClick={addProdToDB}
                >
                  ????????????????
                </button>
              </div>
            </form>

            <p>
              ???? ????????????????????? <Link to="/profile"> ??????????</Link>
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
