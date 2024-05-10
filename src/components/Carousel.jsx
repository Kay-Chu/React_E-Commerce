
import Slider from "react-slick";
import productData from "../productData";
import Subtitle from "./Subtitle";
import "../style.css";

function ProductNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#d3d3d3",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function ProductPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#d3d3d3",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <ProductNextArrow />,
    prevArrow: <ProductPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div>
          <Subtitle text="Featured Products" />
          <Slider {...settings} className="d-flex">
            {productData.map((product) => (
              <div
                key={product.id}
                className="card text-center"
                style={{
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid mx-auto d-block"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                  }}
                />
                <br />
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel;
