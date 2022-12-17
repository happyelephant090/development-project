import React from 'react';

function galleryItem(prop){

    const clothes = prop.clothes;
    const onAdd = prop.onAdd;
    const onRemove=prop.onRemove;

  
  
    return(

          <div className="card ">
             <h2 className="card-title text-center">{prop.clothes.name}</h2>
            <img className = "card-image-top image-fluid image" src={prop.clothes.image} alt={'clothes'}></img>
            <div className="card-body ">
                <ul className="list-group rounded m-1">
                <li className="list-group-item description ">{clothes.description}</li>
                    <li className="list-group-item ">Now: $ {clothes.price}</li>
                    <li  className="list-group-item">Color: {clothes.color}</li>
                </ul>
                <br></br> 
                <div className="d-flex flex-row justify-content-center">
                <button className="btn shadow text-white fw-bolder" onClick={()=>onAdd(clothes)}>+</button>
                <button className="btn shadow text-white" onClick={()=>onRemove(clothes)}>-</button>
                </div>
            </div>
        </div>
      
    )
}

export default galleryItem;

