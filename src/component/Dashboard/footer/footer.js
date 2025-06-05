import React from "react";
import logo from '../image/food.png'
import Food from "../../foodimage";
import '../footer/footer.css'
import { useHistory } from "react-router-dom";
import insta from '../image/instagram.png'
import whatsapp from '../image/whatsapp.png'
import linkedin from '../image/likedin.png'
import pintrest from '../image/pintrest.png'
import youtube from '../image/youtube.png'
import { Link } from "react-router-dom";

function Footer(){
    let Food1=Food.filter((ele)=>ele.titlename==='IndianFood');
    let Food2=Food.filter((ele)=>ele.titlename==='ItalianFood')
    let history=useHistory();
    
    function Alldish(titleId){
        history.push(`/alldish?id=${titleId}`)
    }
    
    return(
        <div className="footer">
            <img src={logo} className='flogo' alt="Логотип"></img>
            <div className="footer-main">
                <div>
                    <h4>Компания</h4>
                    <ul>
                        <li>О нас</li>
                        <li>Команда</li>
                        <li>Помощь и поддержка</li>
                    </ul>
                </div>
                <div>
                    <h4>Страницы</h4>
                    <ul>
                        <li><Link to={'/home'} className='linkto'>Главная</Link></li>
                        <li><Link to={'/cart'} className='linkto'>Корзина</Link></li>
                        <li><Link to={'/profile'} className='linkto'>Профиль</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Категории</h4>
                    <ul>
                        <li onClick={()=>Alldish(Food1[0].titleId)}>Индийская кухня</li>
                        <li onClick={()=>Alldish(Food2[0].titleId)}>Итальянская кухня</li>
                        <li>Корейская кухня</li>
                    </ul>
                </div>
                <div>
                    <h4>Регионы</h4>
                    <ul>
                        <li>Тамил Наду</li>
                        <li>Керала</li>
                        <li>Карнатака</li>
                    </ul>
                </div>
                <div>
                    <h4>Связаться с нами</h4>
                    <a href="#"><img src={insta} className='footerimg' alt="Instagram"></img></a>
                    <a href="#"><img src={whatsapp} className='footerimg' alt="WhatsApp"></img></a>
                    <a href="#"><img src={pintrest} className='footerimg' alt="Pinterest"></img></a>
                    <a href="#"><img src={linkedin} className='footerimg' alt="LinkedIn"></img></a>
                    <a href="#"><img src={youtube} className='footerimg' alt="YouTube"></img></a>
                </div>
            </div>
            <p>© 2023 Все права защищены</p>
        </div>
    )
}

export default Footer