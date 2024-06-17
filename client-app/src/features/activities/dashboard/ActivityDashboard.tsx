import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id:string) => void;
  cancelSelectActivity: () => void;
  editMoed: boolean;
  openForm: (id:string) => void;
  closeForm: () => void;
}

export default function ActivityDashBoard({activities, selectedActivity, selectActivity, cancelSelectActivity
  , editMoed, openForm, closeForm
}: Props)
{
  return(
    <Grid>
      <Grid.Column width='10'>
        <ActivityList activities={activities} selectActivity={selectActivity}/>
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedActivity && !editMoed &&
        <ActivityDetails 
        activity={selectedActivity}
        cancelSelectActivity={cancelSelectActivity}
        openForm={openForm}
        />}
        {editMoed &&
        <ActivityForm closeForm={closeForm} activity={selectedActivity}/>}
      </Grid.Column>
    </Grid>
  )
}