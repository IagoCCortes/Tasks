import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {scaleFont} from '../../styles/mixins';
import * as colors from '../../styles/colors';
import * as mixins from '../../styles/mixins';
import {Type, TypesRow} from './Styles';
import {StyledText} from '../../components/styledComponents';

export default ({mainType, setMainType}) => {
  return (
    <TypesRow>
      <Type
        style={{backgroundColor: mainType === 'physical' ? colors.PRIMARY_RED : colors.GRAY_DARK_1}}
        onPress={() => setMainType('physical')}>
        <Icon size={scaleFont(35)} color={colors.WHITE} name="bicycle" />
        <StyledText color={colors.WHITE} fontSize={mixins.scaleFont(11)}>
          Physical
        </StyledText>
      </Type>
      <Type
        style={{backgroundColor: mainType === 'problem' ? colors.PRIMARY_RED : colors.GRAY_DARK_1}}
        onPress={() => setMainType('problem')}>
        <Icon size={scaleFont(35)} color={colors.WHITE} name="warning" />
        <StyledText color={colors.WHITE} fontSize={mixins.scaleFont(11)}>
          Problem
        </StyledText>
      </Type>
      <Type
        style={{backgroundColor: mainType === 'project' ? colors.PRIMARY_RED : colors.GRAY_DARK_1}}
        onPress={() => setMainType('project')}>
        <Icon size={scaleFont(35)} color={colors.WHITE} name="construct" />
        <StyledText color={colors.WHITE} fontSize={mixins.scaleFont(11)}>
          Project
        </StyledText>
      </Type>
      <Type
        style={{backgroundColor: mainType === 'relax' ? colors.PRIMARY_RED : colors.GRAY_DARK_1}}
        onPress={() => setMainType('relax')}>
        <Icon size={scaleFont(35)} color={colors.WHITE} name="game-controller" />
        <StyledText color={colors.WHITE} fontSize={mixins.scaleFont(11)}>
          Relax
        </StyledText>
      </Type>
      <Type
        style={{backgroundColor: mainType === 'other' ? colors.PRIMARY_RED : colors.GRAY_DARK_1}}
        onPress={() => setMainType('other')}>
        <Icon size={scaleFont(35)} color={colors.WHITE} name="shapes" />
        <StyledText color={colors.WHITE} fontSize={mixins.scaleFont(11)}>
          Other
        </StyledText>
      </Type>
    </TypesRow>
  );
};
