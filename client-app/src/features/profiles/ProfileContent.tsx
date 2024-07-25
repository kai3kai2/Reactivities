import { Tab, TabPane } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import ProfilePhotos from "./ProfilePhotos";
import ProfileFollowings from "./ProfileFollowings";

interface Props {
    profile: Profile;
}

export default function ProfileContent({profile}: Props) {
    const panes = [
        {menuItem: 'About', render: () => <TabPane> About Content</TabPane>},
        {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile}></ProfilePhotos>},
        {menuItem: 'Events', render: () => <TabPane> Events Content</TabPane>},
        {menuItem: 'Followers', render: () => <ProfileFollowings />},
        {menuItem: 'Following', render: () => <ProfileFollowings />}
    ]

    return (
        <Tab
            menu={{fluid: true, vertical: true}}
            menuPosition="right"
            panes={panes}
        />
    )
}