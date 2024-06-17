import React from "react";
import { Button, Card, CardContent, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
}

export default function ActivityDetails({activity} : Props) {
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
}