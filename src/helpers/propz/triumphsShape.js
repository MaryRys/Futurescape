import PropTypes from 'prop-types';

const triumphsShape = PropTypes.shape({
  destinyTriumphId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  scope: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  completedDate: PropTypes.string,
  isFeatured: PropTypes.bool,
  uid: PropTypes.string,
});

export default triumphsShape;
