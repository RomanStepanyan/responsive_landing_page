import { useState } from 'react';
import Button from '../Button/Button';
import s from './MenuBar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuBar = props => {
  console.log(props);
  const [search, setSearch] = useState('');
  const notify = () => toast.error('Invalid input!');

  const onChange = ({ target }) => {
    setSearch(target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    props.onSubmitHandler(search);
    if (props.selectedImages.length < 1) {
      notify();
    }
    setSearch('');
  };

  return (
    <>
      <header className={s.Searchbar}>
        {props.selectedImages.length > 0 ? (
          <Button onCleareSearchedImages={props.onCleareSearchedImages} />
        ) : (
          <form className={s.SearchForm} onSubmit={onSubmit}>
            <button type="submit" className={s.SearchForm_button}>
              <span className={s.SearchForm_button_label}>GO</span>
            </button>

            <input
              onChange={onChange}
              className={s.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Choose an animal (bird - for exam.)"
              value={search}
            />
          </form>
        )}
      </header>
    </>
  );
};
export default MenuBar;
