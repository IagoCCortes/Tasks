export default (types) =>
  types.includes('physical')
    ? 'bicycle'
    : types.includes('problem')
    ? 'warning'
    : types.includes('project')
    ? 'construct'
    : types.includes('relax')
    ? 'game-controller'
    : 'shapes';
