import React from "react";

function Card(props){
    return (
      <>
        <div className='cards'>
          <div className='card'>
            <img src={props.imgsrc} alt='mypic' className='card_img' width="280wh" height="380vh"/>
            <div className='card_info'>
            <span className='card_category'>{props.sname}</span>
            <hr id="hr"></hr>
            <div className="discription">{props.discription}</div>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span id ="star" class="fa fa-star "></span>
                <span id ="star" class="fa fa-star "></span>
                </div>
              <a href={props.link} target='_blank'>
                <button >Watch Now</button> 
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  
export default Card;