

const Subtitle = ({ text }) => {
  return (
    <h4
      className="subtitle"
      style={{
        color: "#ffa734",
        borderBottom: "1px solid #d3d3d3",
        marginBottom: "1.5em",
      }}
    >
      {text}
    </h4>
  );
};

export default Subtitle;