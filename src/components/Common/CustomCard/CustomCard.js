import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './CustomCard.css';

const CustomCard = ({ imageURL, name, id, onClick, text }) => {
  if (imageURL) {
      return (
        <Card className="card" key={id}>
            <Image 
              className="card-img-top" 
              src={imageURL} 
              style={styles.imageStyles} 
            />
            <Card.Content className="content-container">
              <Card.Header className="card-header">{name}</Card.Header>
              <Button 
                href="#" 
                className="card-btn"
                onClick={onClick}
                color="blue"
              >
                {text}
              </Button>   
            </Card.Content>
        </Card>
      )
  } else {
      return (
        <div className="card" key={id}>
          <div className="card-body" style={styles.trackStyles}>
            <h4 className="card-title">{name}</h4>
            <p className="card-text" />            
          </div>
        </div>
      ) 
    }
}

const styles = {
  imageStyles: {
      maxWidth: 280,
      minHeight: 200,
      maxHeight: 200
  },
  trackStyles: {
      minHeight: 130,
      overFlow: 'hidden'
  }
}

export default CustomCard;