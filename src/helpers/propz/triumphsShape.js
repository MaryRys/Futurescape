import PropTypes from 'prop-types';

const triumphsShape = PropTypes.shape({
  triumphId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  scope: PropTypes.number.isRequired,
  // isComplete: PropTypes.bool.isRequired,
  // completedDate: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default triumphsShape;
