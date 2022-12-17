import React from 'react';


export default function Cart(prop){

    const cart = prop.cart;
    const total = prop.total;
    const onSort = prop.onSort;
 

    return (
        <div className="cart  text-center">
        <h1 className="text-center text-uppercase cart_title fw-bolder">Cart</h1>
        <hr/>
        <div>
            {cart.length===0 && <div className="empty_cart_div text-center">Cart is Empty</div>}
            {cart.map((clothes,index)=>(
                <div className=" d-flex flex-row align-items-center justify-content-center"> 
                    <div class="col-sm-4 align-items-center justify-content-center">
                        <p className="cart_clothes_name fw-bold" key={index}>{clothes.name}<hr/></p>
                    </div>  
                    <div className = "col-sm-3  align-items-center justify-content-center">
                         <p className ="cart_clothes_quantity fw-bold"key={index}>{clothes.quantity} x {clothes.price}</p>
                    </div>  
                    <div className = "col-sm-3  align-items-center justify-content-center">
                         <p className ="cart_clothes_quantity fw-bold"key={index}>{clothes.quantity*clothes.price} </p>
                    </div>  
                </div>

                
            ))}
        </div>
        <h5 className="cart_total fw-bolder text-uppercase">total: ${total}</h5>
        {/* {cart.map((clothes,index) => (<p key={index} >{clothes.name}</p>))} */}
      </div>
    )
}

