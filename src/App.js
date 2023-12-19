import mohamed from './mohamed.jpg'; // Importation de l'image

import './App.css'; // Importation du fichier de style
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'; // Importation des composants de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des styles de Bootstrap

class App extends Component {
  state = {
    person: {
      fullName: 'mohamed zied jaber',
      bio: 'full stack js in gomycode', 
      imgSrc: mohamed, // Source de l'image importée
      profession: 'full stack js',
    },
    show: false, // État pour afficher ou masquer le profil
    intervalId: null, // ID de l'intervalle
    mountedTime: null, // Temps de montage du composant
  };

  componentDidMount() {
    // Met en place un intervalle pour mettre à jour l'heure toutes les secondes
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);

    // Met à jour l'état de l'intervalle et le temps de montage
    this.setState({ intervalId, mountedTime: new Date() });
  }

  componentWillUnmount() {
    // Nettoie l'intervalle lors de la suppression du composant
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    // Fonction pour basculer l'état show entre true et false
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    // Extraction des données de l'état
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div>
        {/* Bouton pour afficher ou masquer le profil en fonction de l'état show */}
        <Button onClick={this.toggleShow}>
          {show ? 'Masquer le profil' : 'Afficher le profil'}
        </Button>
        {/* Condition pour afficher la carte si show est true */}
        {show && (
          <Card style={{ width: '18rem', marginTop: '20px' }}>
            {/* Affichage de l'image, titre, bio et profession */}
            <Card.Img variant="top" src={imgSrc} alt={fullName} />
            <Card.Body>
              <Card.Title>{fullName}</Card.Title>
              <Card.Text>{bio}</Card.Text>
              <Card.Text>{profession}</Card.Text>
            </Card.Body>
          </Card>
        )}
        {/* Affichage de l'heure de montage */}
        <p>Heure de montage : {mountedTime && mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
