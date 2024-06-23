import { Button, Card, CardContent, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



export default observer(function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  },[id, loadActivity])

  if (loadingInitial ||!activity) return <LoadingComponent/>;
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </CardContent>
      <Card.Content extra>
        <Button.Group width='2'>
          <Button basic color="blue" content='Edit'/>
          <Button basic color="grey" content='Cancel'/>
        </Button.Group>
      </Card.Content>
  </Card>
  )
})