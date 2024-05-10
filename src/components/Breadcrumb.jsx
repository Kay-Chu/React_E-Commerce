

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Online Bookstore</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;