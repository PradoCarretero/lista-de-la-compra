import PropTypes from "prop-types";

function FilterIngredients(props) {
  return (
    <form action="" onSubmit={props.handleForm}>
      Filtrar por:
      <input
        type="text"
        name=""
        id=""
        value={props.search}
        onChange={props.handleSearch}
      />
    </form>
  );
}
FilterIngredients.defaultProps = {
  handleForm: "",
  search: "",
  handleSearch: "",
};
FilterIngredients.propTypes = {
  handleForm: PropTypes.func,
  search: PropTypes.string,
  handleSearch: PropTypes.func,
};
export default FilterIngredients;
