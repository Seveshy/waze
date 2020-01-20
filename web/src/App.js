import React from 'react';
import './global.css';
import './App.css'

/**
 * Propriedade: Informações que um componente PAI passa para um componente filho
 * Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
 */

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlForm="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          
          <div className="input-block">
            <label htmlForm="techs">Técnologias</label>
            <input name="techs" id="techs" required />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlForm="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlForm="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
    </div>
  );
}

export default App;
