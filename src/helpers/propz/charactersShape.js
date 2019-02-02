import PropTypes from 'prop-types';

const charactersShape = PropTypes.shape({
  class: PropTypes.string.isRequired,
  destinyCharacterId: PropTypes.string.isRequired,
  emblemBackgroundPath: PropTypes.string.isRequired,
  emblemPath: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  light: PropTypes.number.isRequired,
  race: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default charactersShape;
