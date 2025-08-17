import React from 'react'
import Card from './Card'
import css from "./CardCrausel.module.css"
import card1 from "./image/card1.png"

function CardCrausel() {
  return (
   <>
   <div className='CardContainer flex gap-30'>

    <div className={css.CardContainer}>

     <div className={`${css.cardText}`}>
    
                <h4 className="font-semibold">
                  <span className={css.highlight}>Crafted with</span><br />
                  <span className={css.highlight}>excellent</span><br />
                  <span className={css.highlight}>material.</span>
                </h4>
                 <p className={` ${css.cardPara}`}>
                Donec mattis porta eros, aliquet finibus risus interdum at. 
                Nulla vivethe as it was for us to know what was to be done.
              </p>
    
                     </div>



</div>

   <div className='flex gap-5 Swipe'>
   <Card>  <div className={css.Sticker}>
  <div className={css.namePrice}>
    <h5 className={`mt-3 ${css.cardTitle}`}>Nordic CHAIR</h5>
    <p className={`font-bold ${css.cardPrice}`}>$50.00</p>
  </div>
</div>

<div className={css.imgContainer} style={{ top: '1%' }}>
  <img src={card1} alt="" />
</div>

<div className={`${css.cardAddButton} flex justify-center`}>
  <button className="bg-black text-white rounded-full p-3 hover:bg-gray-800 transition duration-200">
    <i className="bi bi-plus text-xl"></i>
  </button>
</div>
 </Card>












   <Card></Card>
   <Card></Card>
   </div>
</div>
   </>
  )
}

export default CardCrausel



