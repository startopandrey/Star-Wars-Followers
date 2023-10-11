import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Follower, {
  FollowersStackNavigatorParamList,
} from '../../../types/followers';
import styled from 'styled-components/native';
import {ThemeType, theme} from '../../../infrastructure/theme';
import {SafeArea} from '../../../components/safe-area/safe-area.component';
import {Card as CardPaper} from 'react-native-paper';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';
type Props = NativeStackScreenProps<
  FollowersStackNavigatorParamList,
  'FollowerDetails'
>;
const IconButton = styled.TouchableOpacity<{theme: ThemeType}>`
  align-self: flex-start;
  padding: ${props => props.theme.space[3]};
  background: ${props => props.theme.colors.bg.secondary};
`;
const Container = styled.View<{theme: ThemeType}>`
  flex: 1;
  padding: ${props => props.theme.space[2]};
`;
const DetailRowWrapper = styled(CardPaper)`
  padding: ${props => props.theme.space[3]};
`;
const DetailRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const FollowersDetailScreen = ({navigation, route}: Props) => {
  const {follower}: {follower: Follower} = route.params!;
  const blocks = [
    {title: 'Name', text: follower.name},
    {title: 'Gender', text: follower.gender},
    {title: 'Hair Color', text: follower.hairColor},
    {title: 'Eye Color', text: follower.eyeColor},
    {title: 'Birth Year', text: follower.birthYear},
  ];
  return (
    <SafeArea>
      <Container>
        <IconButton onPress={() => navigation.goBack()}>
          <Icon
            name={'arrow-left'}
            color={theme.colors.ui.secondary}
            size={25}
          />
        </IconButton>
        <Spacer position="top" size="large"></Spacer>
        {blocks.map(el => (
          <Spacer position="bottom" size="medium">
            <DetailRowWrapper>
              <DetailRow>
                <Text variant="subtitle">{el.title}</Text>
                <Text variant="body">{el.text}</Text>
              </DetailRow>
            </DetailRowWrapper>
          </Spacer>
        ))}
      </Container>
    </SafeArea>
  );
};
