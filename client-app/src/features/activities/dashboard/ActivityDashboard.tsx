import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import ActivityFilters from './ActivityFilters';
import { PaginationParams } from '../../../app/models/pagination';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityListItemPlaceholder from './ActivityListItemPlaceholder';

export default observer(function ActivityDashBoard()
{
  const {activityStore} = useStore();
  const {loadActivities, activityRegistry, setPagingParams, pagination}= activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  function handleGetNext() {
    setLoadingNext(true);
    setPagingParams(new PaginationParams(pagination!.currentPage + 1))
    loadActivities().then(() => setLoadingNext(false))
  }

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  },[activityRegistry.size, loadActivities])

  return(
    <Grid>
      <Grid.Column width='10'>
        {activityStore.loadingInitial && activityRegistry.size === 0 && !loadingNext ? (
          <>
            <ActivityListItemPlaceholder />
            <ActivityListItemPlaceholder />
          </>
        ) : (
          <InfiniteScroll
          pageStart={0}
          loadMore={handleGetNext}
          hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
          initialLoad={false}
        >
          <ActivityList />
        </InfiniteScroll>
        )}
      </Grid.Column>
      <Grid.Column width='6'>
        <ActivityFilters/>
      </Grid.Column>
    </Grid>
  )
})