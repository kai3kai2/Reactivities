import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useEffect } from 'react';
import ActivityFilters from './ActivityFilters';

export default observer(function ActivityDashBoard()
{
  const {activityStore, userStore} = useStore();
  const {loadActivities, activityRegistry}= activityStore;
  const {setImage} = userStore;

  useEffect(() => {
    if (activityRegistry.size <= 1 || setImage.length <= 1) loadActivities();
  },[activityRegistry.size, loadActivities, setImage])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities'/>
  return(
    <Grid>
      <Grid.Column width='10'>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width='6'>
        <ActivityFilters/>
      </Grid.Column>
    </Grid>
  )
})