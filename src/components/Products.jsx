import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import "../style.css";

import productData from '../productData';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      if (componentMounted) {
        setData(productData);
        setFilter(productData);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const Collapsible = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleCollapsible = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isOpen
          ? `${contentRef.current.scrollHeight}px`
          : "0px";
      }
    }, [isOpen]);

    return (
      <div>
        <button
          className={`collapsible text-center py-5 ${
            isOpen ? "table_active" : ""
          }`}
          onClick={toggleCollapsible}
        >
          {title}
        </button>
        <div
          ref={contentRef}
          className="content"
          style={{ overflow: "hidden", transition: "max-height 0.2s ease-out" }}
        >
          {children}
        </div>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.subcategory === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col d-flex">
          <div className="col-md-2 ">
            <Collapsible title="COUNTRY " >
              <button
                className="btn btn-sm m-2 color-lightblue"
                onClick={() => setFilter(data)}
              >
                All
              </button>
              <button
                className="btn color-lightblue  btn-sm m-2"
                onClick={() => filterProduct("Hong Kong")}
              >
                Hong Kong
              </button>
              <button
                className="btn color-lightblue  btn-sm m-2"
                onClick={() => filterProduct("United Kingdom")}
              >
                United Kingdom
              </button>
            </Collapsible>

            <Collapsible title="SUBJUECT">
              <button
                className="btn color-lightblue  btn-sm m-2"
                onClick={() => filterProduct("jewelery")}
              >
                Accountancy
              </button>
              <button
                className="btn color-lightblue  btn-sm m-2"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </button>
            </Collapsible>
          </div>

            {filter.map((product) => {
              return (
                <div
                  id={product.id}
                  key={product.id}
                  className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
                >
                  <div className="card text-center h-100" key={product.id}>
                    <img
                      className="card-img-top p-3 ml-2"
                      src={product.image}
                      alt="Card"
                      height={400}
                      width={200}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text">
                        {product.description.substring(0, 90)}...
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item lead">
                        $ {product.price}
                      </li>
                    </ul>
                    <div className="card-body">
                      <Link
                        to={"/product/" + product.id}
                        className="btn m-1"
                        style={{ borderColor: "#dee2e6", color: "#ff9213" }}
                      >
                        Buy Now
                      </Link>
                      <button
                        className="btn m-1"
                        style={{ backgroundColor: "#ff9213", color: "white" }}
                        onClick={() => addProduct(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">

        {/* <div className="row">
          <div className="col-12">
            <h2 className="display-6 text-center">Feature Products</h2>
            <hr />
          </div>
        </div> */}

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
