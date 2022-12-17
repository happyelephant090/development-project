import './App.css';
import React from 'react';
import Gallery from './components/clothesitem';
import NavBar from './components/navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect} from "react";
import Cart from './components/cart';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App(){
  //items from banana republic factory
  const clothesData=[
    {
        "name" : "Logo Graphic Shirt",
        "color": "Navy",
        "price": 12.15,
        "type":"shirt",
        "description": "Made with 40% recycled polyester. Crew neck. ",
        "quantity":1,
        "image": "images/navyshirt.png"
    },
      {
        "name" : "Flounce Mini Skirt",
        "color": "Natural Stone",
        "price": 48.97,
        "type":"skirt",
        "description": "Button front closure. Self-tie bow at waist. Belt loops.",
        "quantity":1,
        "image": "images/miniskirt.png"
    },
    {
        "name" : "Soft Luxe T-Shirt",
        "color": "Dark Camel",
        "price": 22.25,
        "type":"shirt",
        "description": "The fabric is cozy, sweater-soft with added stretch.",
        "quantity":1,
        "image":"images/caramelluxeshirt.png"
    },
    {
        "name" : "Sherpa Full Zip Jacket",
        "color": "White",
        "price": 35.99,
        "type":"jacket",
        "description": "Funnel neck. Long sleeves. Zipper closure. Front pockets.",
        "quantity":1,
        "image": "images/zipjacket.png"
      
    },
    {
        "name" : "Prado Satin Cargo Pant",
        "color": "White",
        "type":"pant",
        "price": 36.75,
        "description": "Button closure with zip fly. Belt loops. D ring buckle belt.",
        "quantity":1,
       "image": "images/cargopant.png"
    },
    {
        "name" : "Knit Cocoon Jacket",
        "color": "Brown",
        "price": 48.99,
        "type":"jacket",
        "description": "Point collar. Long sleeves. Drop shoulders. ",
        "quantity":1,
        "image": "images/knitjacket.png"
      
    },
    {
        "name" : "Hayden Taper Pant",
        "color": "Black",
        "price": 36.75,
        "type":"pant",
        "description": "Our two-way stretch fabric gives this pant flexible comfort and recovery.",
        "gender": "female",
        "quantity":1,
       "image":  "images/taperpant.png"
    },
    {
        "name" : "Wide-Leg Flannel Pant",
        "color": "Midnight Lily",
        "price": 36.25,
        "type":"pant",
        "description": "Made with 64% recycled polyester. Hook-and-bar closure with zip fly. Belt loops.",
        "quantity":1,
        "image": "images/flannelpant.png"
    },
    {
        "name" : "Long Hooded Puffer Jacket",
        "color": "Midnight Lily",
        "price": 88.29,
        "type":"jacket",
        "description": "Turtle neck with hood. Long sleeves with hidden knit ribbed cuffs.",
        "quantity":1,
        "image": "images/pufferjacket.png"
    },
    {
        "name" : "Faux Suede Jacket",
        "color": "Falcon Brown",
        "price": 68.48,
        "type":"jacket",
        "description": "Lapel collar snaps. Long sleeves with zipper cuffs.",
        "quantity":1,
        "image":"images/brownfauxjacket.png"
    },
    {
        "name" : "Classic Demin Jacket",
        "color": "Denim",
        "price": 36.58,
        "type":"jacket",
        "description": "Point collar. Long sleeves with buttoned cuffs.",
        "quantity":1,
        "image": "images/deminjacket.png"
    },
    {
        "name" : "Wrap Sweater Midi Skirt",
        "color": "Midnight Lily",
        "price": 36.35,
        "type":"skirt",
        "description": "Pull on skirt. Elastic waistband. Flat front. Front slit. Straight hem.",
        "quantity":1,
        "image": "images/midiskirt.png"
    },
    {
        "name" : "Tencel Utility Pant",
        "color": "Black",
        "price": 41.99,
        "type":"pant",
        "description":"Center front seam. Adjustable tab detail at hem.",
        "quantity":1,
        "image":"images/utuilitypant.jpeg"
    },
    {
        "name" : "Midi Sweater Skirt",
        "color": "Camel",
        "price": 56.12,
        "type":"skirt",
        "description":"Elastic ribbed waistband. Knit-in panels. Flare hem.",
        "quantity":1,
        "image": "images/sweaterskirt.png"
    },
    {
  
        "name" : "Silky Collar Blouse",
        "color" : "White",
        "price" : 24.12,
        "type":"blouse",
        "description": "Point collar with split neck. Long sleeves with buttoned cuffs. ",
        "quantity":1,
        "image" : "images/whiteblouse.png" 
    },
    {
        "name" : "Denim Pencil Skirt",
        "color": "Denim",
        "price": 28.10,
        "type":"skirt",
        "description": "Zip fly with button closure. Belt loops. Five-pocket styling. Center front seam from deconstructed jeans.",
        "quantity":1,
        "image": "images/denimpencilskirt.png"
    },
    {
        "name"  : "Boyfriend Flannel Shirt",
        "color" : "Black",
        "price": 26.25,
        "type":"shirt",
        "description": "Point collar. Long sleeves with buttoned cuffs. Button front closure. Back yoke with box pleat. Shirt tail hem.",
        "quantity":1,
        "image": "images/flannelshirt.png"
      },
    {
        "name" : "Curdory Mini Skirt",
        "color": "Brown",
        "price": 34.15,
        "type":"skirt",
        "description": "Zipper front closure. Tapered waist. Self tying belt with belt loops. Front pockets. Center front vent. Straight hem.",
        "quantity":1,
        "image": "images/curdoryskirt.png"
    } 
  ]
  

  var clothes_data = clothesData




  const [cart,setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQuantity] = useState(0);
  const [sort,setSort]= useState("All");
  const [type, setType] = useState("All");
  const quantities=[];




// add items to the cart
  const onAdd = (clothes) =>{
  const {name}=clothes;
  let existingClothes = cart.find(clothing => clothing.name===name)
    if(existingClothes){
      setCart(cart.map(clothing=>clothing.name === clothes.name ? {...existingClothes, quantity: existingClothes.quantity +1} :clothing ))

    }
    else{
      setCart([...cart,{...clothes} ])
    }   
   
  }

 // remove items from the cart
  const onRemove = (clothes)=>{
    const {name}=clothes;
    let existingClothes = cart.find(clothing => clothing.name===name)
    if(existingClothes && existingClothes.quantity>1){
      setCart(
        cart.map((clothing)=>
        clothing.name===name ? {...existingClothes,quantity: existingClothes.quantity -1} : clothing
        )
      )
      
    }
    else{
      setCart(
        cart.filter(clothing=>clothing.name !== name)
      )
    } 
    let stringCart = JSON.stringify(cart);
    localStorage.setItem("cart", stringCart)

  }

  
//increase the total price
const onPrice = () =>{
  const prices = [];
  const sum = [];

  for(var i=0;i<cart.length;i++){
    quantities.push(cart[i].quantity)
    prices.push(cart[i].price)
  } 

  for(var i=0;i<cart.length;i++){
    sum.push((quantities[i]*prices[i]))
  } 
  
  const initialValue = 0;
  const  total = sum.reduce((accumulator,currentValue)=> accumulator+currentValue,initialValue);
 
  setTotal(total)

}

//increase number of items in the cart
const totalCounter=()=>{
  if(cart.length===0){
    setQuantity(0)
  }
  else{
    const initialValue = 0;
    const  total = quantities.reduce((accumulator,currentValue)=> accumulator+currentValue,initialValue);
    setQuantity(total)
  }
}

//calls for functions 
useEffect(()=>{
  onPrice()
  totalCounter()
})

// Got help from Muhiim Ali
// event handler for sorting and filtering
const selectSortType = eventKey => {
  setSort(eventKey);
}

const selectFilterType = eventKey => {
  setType(eventKey);
}

// sorting by price
if (sort === "lowtohigh") { 
  clothes_data = clothes_data.sort((a, b) => {
    return a.price - b.price;
  })
} else if (sort === "hightolow") { 
  clothes_data = clothes_data.sort((a, b) => {
    return b.price - a.price;
  })
}

// filter by type
const matchesFilterType = clothes => {
  if (type === "all") {
    return true
  }
  else if (type === clothes.type) {
    return true
  }
  else {
    return false
  }
}

// filter data
clothes_data = clothes_data.filter( matchesFilterType )

return (
  // naviagtion bar
   <div className="App">
     <div>
      <NavBar qty={qty}/>
    </div>
    
    <div className="row">
      <div className="col-sm-4 cart_col">
        <div className="cartDivider">
          <br></br>
          <Cart cart={cart} total={total}/>
          <br></br>
          <div className="sorter_div ">
              <h1 className="text-center text-uppercase fw-bolder sort_title">Filters</h1>
              <hr/>
              <Navbar bg="light" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto" onSelect={selectSortType}>
                    <NavDropdown title="Sort By" id="basic-nav-dropdown">
                      <NavDropdown.Item eventKey="lowtohigh" >Price: Low to High</NavDropdown.Item>
                      <NavDropdown.Item eventKey="hightolow" >Price: High to Low</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <h3>Choose an Option Below to Start:</h3>
              <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto" onSelect={selectFilterType}>
                    <NavDropdown title="Filter By" id="basic-nav-dropdown" class="text-center">
                    <NavDropdown.Item eventKey="all" >All</NavDropdown.Item>
                    <NavDropdown.Item eventKey="shirt" >Shirts</NavDropdown.Item>
                    <NavDropdown.Item eventKey="blouse" >Blouses</NavDropdown.Item>
                    <NavDropdown.Item eventKey="pant" >Pants</NavDropdown.Item>
                    <NavDropdown.Item eventKey="skirt" >Skirts</NavDropdown.Item>
                    <NavDropdown.Item eventKey="jacket" >Jackets</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
    </div>
          <br></br>
       </div> 
      </div>
      <div className="col-sm-8">
        <div className="galleryDiv">
          {clothes_data.map((clothes,index)=>(
          <Gallery key={index} clothes={clothes} onAdd={onAdd} onRemove={onRemove}/>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
  
}



export default App;
