// import { Link } from "react-router-dom";

const Footer = () => {
  return ( 
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>Дари Добро</h3>
                <p>Дари Добро - это социально-экологическое движение, которое помогает людям, попавшим в беду</p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Навигация</h4>
                <ul>
                  <li><a href="#hero">В начало</a></li>
                  <li><a href="#about">О нас</a></li>
             
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Контакты</h4>
                <p>
                 ул.Вавилова, д.3 стр.1 <br />(м. Ленинский проспект) <br />
                 Москва, 15022<br />
                  <strong>Phone:</strong> +7 495 700 77 07<br />
                  <strong>Email:</strong> info@dogood.com<br />
                </p>

                <div className="social-links">
                  <a href="#" className="twitter"><i className="bi bi-telegram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Правила платформы</h4>
                <p>Ознакомьтесь при регистрации с условиями нашей платформы, это небольшой свод правил которые мы соблюдаем</p>
                <form action="" method="post">
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Do Good</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
          
            Designed by <a href="/">Do Good Team</a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

    </>
   );
}
 
export default Footer;
