import React ,{Component} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';

class App extends Component{

  token = 'XLKNMNM3GLI2HVHF7OTN';

  state = {
    categorias:[]
  }

  componentDidMount(){
    this.obetenerCategorias();
  }

  obetenerCategorias = async () =>{
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then(respuesta =>{
        return respuesta.json();
      })
      .then(categorias =>{
        this.setState({
          categorias:categorias.categories
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>

        <div className="uk-container">
          <Formulario categorias={this.state.categorias}></Formulario>
        </div>
      </div>
    );
  }

  }

  
  


export default App;
