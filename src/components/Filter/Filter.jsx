import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputChange = evt => {
    dispatch(addFilter(evt.target.value));
  };
  return (
    <div className="container-form">
      <div className="heading">Find contact by name</div>
      <input
        className="input-filter"
        name="filter"
        placeholder="search"
        onChange={handleInputChange}
      />
    </div>
  );
};
