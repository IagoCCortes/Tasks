export default (types) =>
  types.includes('physical')
    ? {icon: 'bicycle'}
    : types.includes('problem')
    ? {icon: 'warning'}
    : types.includes('project')
    ? {icon: 'construct'}
    : types.includes('relax')
    ? {icon: 'game-controller'}
    : {icon: 'shapes'};
