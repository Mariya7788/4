import React from "react";
import Food from "../../../foodimage";
import '../categories/categories.css'
import indian from '../../image/indianfood.jpg'
import italian from '../../image/italianfood.jpg'
import korean from '../../image/korean.png'
import { useHistory } from "react-router-dom";
function Categories(){
    const history=useHistory()
    let Food1=Food.filter((ele)=>ele.titlename==='IndianFood');
    let Food2=Food.filter((ele)=>ele.titlename==='ItalianFood');
    let Food3=Food.filter((ele)=>ele.titlename==='korean');
    function Alldish(titleId){
        history.push(`/alldish?id=${titleId}`)
    }
    return (
        <div className="category-list">
           <h2>Категории</h2>
           <div className="category-main">
           <div><img src={indian} alt='Indian' onClick={()=>Alldish(Food1[0].titleId)} ></img>
           <p>Индийская кухня</p></div> 
           <div><img src={italian} alt='italian' onClick={()=>Alldish(Food2[0].titleId) }  ></img>
           <p>Итальянская кухня</p></div> 
           <div><img src={korean} alt='korean'  onClick={()=>Alldish(Food3[0].titleId) } ></img>
           <p>Корейская кухня</p></div>
           </div>
        </div>
    )
}
export default Categories