import PropTypes from "prop-types";

function AddIngredient(props) {
  const handlewritting = (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget.value);
    props.handleIngredientNew(ev.currentTarget.value);
  };

  return (
    <form action="" onSubmit={props.handleForm}>
      Añadir Ingrediente:
      <input
        type="text"
        onChange={handlewritting}
        value={props.ingredientNew}
      />
      <button onClick={props.handleAddIngredient}>BOTÓN</button>
    </form>
  );
}
AddIngredient.defaultProps = {
  handleForm: "",
  handleIngredientNew: "",
  handleAddIngredient: "",
  ingredientNew: "",
};
AddIngredient.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleIngredientNew: PropTypes.func.isRequired,
  handleAddIngredient: PropTypes.func.isRequired,
  ingredientNew: PropTypes.string,
};
export default AddIngredient;
