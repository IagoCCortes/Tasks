const otherImage = require('../assets/images/background12.jpg');
const physicalImage = require('../assets/images/background11.jpg');
const problemImage = require('../assets/images/background13.jpg');
const projectImage = require('../assets/images/background14.jpg');
const relaxImage = require('../assets/images/background15.jpg');

export default (types) =>
  types.includes('physical')
    ? physicalImage
    : types.includes('problem')
    ? problemImage
    : types.includes('project')
    ? projectImage
    : types.includes('relax')
    ? relaxImage
    : otherImage;
