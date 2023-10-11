import * as React from 'react';
import {ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FollowersContext} from '../../../services/followers/followers.context';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native-paper';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {theme} from '../../../infrastructure/theme';
const DataWrapper = styled.View`
  flex: 1;
  width: 450px;
`;
const LoadingWrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;
const Loading = styled(ActivityIndicator)`
  padding: 100px;
`;
const IconButton = styled.TouchableOpacity``;
export const FollowersTable = ({navigation}) => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const {favourites, addToFavourites, removeFromFavourites} =
    React.useContext(FavouritesContext);

  const {followers, isLoading} = React.useContext(FollowersContext);
  const followersCount = followers?.length ?? 0;
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, followersCount);
  const followersPaginated = followers?.slice(from, to);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView>
      <DataTable>
        <ScrollView horizontal>
          <DataWrapper>
            <DataTable.Header>
              <DataTable.Title>
                <Icon name="heart" size={20} />
              </DataTable.Title>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title numeric>Gender</DataTable.Title>
              <DataTable.Title numeric>Birth Year</DataTable.Title>
            </DataTable.Header>
            {isLoading || !followers?.length || !followers ? (
              <LoadingWrapper>
                <Loading size={50} animating={true} />
              </LoadingWrapper>
            ) : (
              followersPaginated?.map(item => {
                const isFavourite: boolean = !!favourites?.find(
                  r => r.id === item.id,
                );
                return (
                  <DataTable.Row
                    onPress={() =>
                      navigation.navigate('FollowerDetails', {
                        follower: item,
                      })
                    }
                    key={item.id}>
                    <DataTable.Cell>
                      <IconButton
                        onPress={() =>
                          !isFavourite
                            ? addToFavourites(item)
                            : removeFromFavourites(item)
                        }>
                        <Icon
                          name={isFavourite ? 'heart' : 'heart-o'}
                          color={theme.colors.ui.error}
                          size={20}
                        />
                      </IconButton>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{justifyContent: 'flex-start'}}
                      textStyle={{textAlign: 'right'}}>
                      {item.name}
                    </DataTable.Cell>
                    <DataTable.Cell style={{justifyContent: 'flex-end'}}>
                      {item.gender}
                    </DataTable.Cell>
                    <DataTable.Cell style={{justifyContent: 'flex-end'}}>
                      {item.birthYear}
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })
            )}
          </DataWrapper>
        </ScrollView>
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(followersCount / itemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${followersCount}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </ScrollView>
  );
};
