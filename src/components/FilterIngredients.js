import PropTypes from "prop-types";

function FilterIngredients(props) {
  <form action="" onSubmit={props.handleForm}>
    Filtrar por:
    <input
      type="text"
      name=""
      id=""
      value={props.search}
      onChange={props.handleSearch}
    />
  </form>;
}
FilterIngredients.defaultProps = {
  handleForm: [],
  search: [],
  handleSearch: "",
};
FilterIngredients.propTypes = {
  handleForm: PropTypes.array.isRequired,
  search: PropTypes.array,
  handleSearch: PropTypes.string,
};
export default FilterIngredients;
