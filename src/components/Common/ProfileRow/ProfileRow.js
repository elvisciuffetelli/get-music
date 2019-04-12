import React from 'react';
import { Card } from 'semantic-ui-react';
import './ProfileRow.css';

const ProfileRow = ({ text }) => {
    return (
      <Card.Group className="profile-row">
        <Card color='teal' fluid header={text}/>
      </Card.Group>
    )
}

export default ProfileRow;