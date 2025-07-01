
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value=""
          name="test3"
        />
        <span className="checkmark all"></span> All
      </label>
      <Input
        handleChange={handleChange}
        name="test3"
        value="Black"
        title="Black"
        color="black"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        value="Blue"
        title="Blue"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        value="Red"
        title="Red"
        color="red"
      />
      <Input
        handleChange={handleChange}
        name="test3"
        value="Green"
        title="Green"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test3"
        />
        <span
          className="checkmark-white"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span> White
      </label>
    </div>
  );
};

export default Colors;
