import PropTypes from 'prop-types';
export const ListItem = ({ contact: { name, number } }) => {
  return (
    <div>{name} {number}
    </div>
  );
};

ListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
      }).isRequired
}
