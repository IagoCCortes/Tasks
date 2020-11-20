import * as colors from 'styles/colors';

export default (types) =>
  types.includes('physical')
    ? {icon: 'bicycle', colors: [colors.SECONDARY_PURPLE, colors.PRIMARY_PURPLE]}
    : types.includes('problem')
    ? {icon: 'warning', colors: [colors.SECONDARY_RED, colors.PRIMARY_RED]}
    : types.includes('project')
    ? {icon: 'construct', colors: [colors.SECONDARY_GREEN, colors.PRIMARY_GREEN]}
    : types.includes('relax')
    ? {icon: 'game-controller', colors: [colors.SECONDARY_BLUE, colors.PRIMARY_BLUE]}
    : {icon: 'shapes', colors: [colors.SECONDARY_PINK, colors.PRIMARY_PINK]};
