import React, { useState } from "react";
import productData from "../productData";
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const [cartItems, setCartItems] = useState(
    productData.map((item) => ({ ...item, qty: 1 }))
  );

  const addItem = (item) => {
    const newItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, qty: cartItem.qty + 1 };
      }
      return cartItem;
    });
    setCartItems(newItems);
  };

  const removeItem = (item) => {
    const newItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.qty > 0) {
        return { ...cartItem, qty: cartItem.qty - 1 };
      }
      return cartItem;
    });
    setCartItems(newItems);
  };

  return (
    <div>
      <button
        onClick={toggleCart}
        className="btn btn-outline-dark m-2 pt-3 pb-3 rounded-circle blur-glass-effect"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          padding: "10px 20px",
          border: "1px solid #d3d3d3",
          
        }}
      >
        <i className="fa fa-cart-shopping" />
      </button>
        <div >
          <div
            className="mask"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: "998",
              left: isOpen ? '0' : '100%',


            }}
          >
            </div>
            <div
              className="col-lg-5 col-md-6 col-sm-12"
              style={{
                position: "fixed",
                top: "13vh",
                right: "0",
                bottom: "0",
                // width: "40%",
                height: "87vh",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "20px",
                borderRadius: "8px",
                overflow: "auto",
                right: isOpen ? '0' : '-100%',
                transition: 'right 0.2s ease-in-out',
                zIndex: "999",
              }}
            >
              <div
                className="cancel_button d-flex"
                style={{
                  position: "relative",
                  justifyContent: "flex-end",
                }}
              >
                <button className="btn btn-outline-sencondary rounded-circle p-2 mb-2"
                style={{width:"50px"}}
                onClick={toggleCart}>
                  <i className="fa fa-x" />
                </button>
              </div>

              <div className="card mb-4"
              
              >
                <div className="card-header py-3">
                  <h5 className="mb-0">Your Cart</h5>
                </div>
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <div
                            className="bg-image rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-100"
                              style={{ maxHeight: "75px", maxWidth: "75px" }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                          <p>
                            <strong>{item.title}</strong>
                          </p>
                        </div>

                        <div className="col-lg-2 col-md-8 col-sm-2">
                          <div
                            className="d-flex mb-4 align-items-center"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn px-1"
                              onClick={() => removeItem(item)}
                              style={{ minWidth: "30px", padding: "5px 6px" }}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <p
                              className="mx-3"
                              style={{ marginBottom: "0", fontSize: "16px" }}
                            >
                              {item.qty}
                            </p>
                            <button
                              className="btn px-1"
                              onClick={() => addItem(item)}
                              style={{ minWidth: "30px", padding: "5px 6px" }}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>
                              <span className="text-muted">{item.qty}</span> x $
                              {item.price}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
                <Link
                      to="/cart"
                      className="btn btn-dark btn-lg btn-block"
                      style={{backgroundColor:"#ffa734",border:"#ececec"}}
                    >
                      Go To Checkout
                    </Link>
              </div>
            </div>
          </div>
          
    </div>
  );
};

export default ShoppingCart;
