import React from 'react';
import Gallery from './clothesitem';

export default function Filter(prop){

    const {onAdd,onRemove,ascending}=prop;

    const handleClick = () =>{
        ascending.map((clothes,index)=>(
        <Gallery key={index} clothes={clothes} onAdd={onAdd} onRemove={onRemove}/>))
        
    }


    return(
        <div className="sorter_div ">
            <h1 className="text-center text-uppercase fw-bolder sort_title">Sort</h1>
            <hr/>
            <form class="form">
                <ul>
		
			        <input checked type="radio" name="1"/>
			        <label>All</label>
			        <div class="bullet">
				        <div class="line zero"></div>
				        <div class="line one"></div>
				        <div class="line two"></div>
				        <div class="line three"></div>
				        <div class="line four"></div>
				        <div class="line five"></div>
				        <div class="line six"></div>
				        <div class="line seven"></div>
			        </div>
			        <input type="radio" name="1"/>
			        <label > High to Low Price</label>
			        <div className="bullet">
				        <div class="line zero"></div>
				        <div class="line one"></div>
				        <div class="line two"></div>
				        <div class="line three"></div>
				        <div class="line four"></div>
				        <div class="line five"></div>
				        <div class="line six"></div>
				        <div class="line seven"></div>
			        </div>
			        <input type="radio" name="1" onClick={handleClick}/>
			        <label>Low to High Price </label>
			        <div class="bullet">
				        <div class="line zero"></div>
				        <div class="line one"></div>
				        <div class="line two"></div>
				        <div class="line three"></div>
				        <div class="line four"></div>
				        <div class="line five"></div>
				        <div class="line six"></div>
				        <div class="line seven"></div>
			        </div>
		
	            </ul>
             </form>                  
    </div>
    )
  
}

{/* <div className="form-check text-center ">
    <input class="form-check-input checkbox " type="checkbox" value="" id="flexCheckDefault"/>
    <label class="form-check-label" for="flexCheckDefault"> Low to Higest Price</label>
</div>
<div className="form-check text-center align-items-center justify-content-center ">
    <input class="form-check-input  " type="checkbox" value="" id="flexCheckChecked"/>
    <label class="form-check-label" for="flexCheckChecked">
    High to Low
    </label>
</div> */}
{/* <div className="d-flex align-items-center justify-content-center">
    <div class="form-check">
        <input type="radio" class="option-input radio" id="radio1" name="example" value="option1" checked/>All
        <label class="form-check-label" for="radio1"></label>
    </div>
</div>
<div className="d-flex align-items-center justify-content-center">
    <div class="form-check">
        <input type="radio" class="option-input radio" id="radio1" name="example" value="option1" checked/>High to Low
        <label class="form-check-label" for="radio1"></label>
    </div>
</div> */}