import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


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
          <div class="input-block">
            <label htmlForm="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          
          <div class="input-block">
            <label htmlForm="techs">Técnologias</label>
            <input name="techs" id="techs" required />
          </div>
          
          <div class="input-group">
            <div class="input-block">
              <label htmlForm="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlForm="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33661573?s=460&v=4" alt="Daniel Major" />
              <div className="user-info">
                <strong>Daniel Major</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor web junior</p>
            <a href="https://github.com/Seveshy">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33661573?s=460&v=4" alt="Daniel Major" />
              <div className="user-info">
                <strong>Daniel Major</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor web junior</p>
            <a href="https://github.com/Seveshy">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33661573?s=460&v=4" alt="Daniel Major" />
              <div className="user-info">
                <strong>Daniel Major</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor web junior</p>
            <a href="https://github.com/Seveshy">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33661573?s=460&v=4" alt="Daniel Major" />
              <div className="user-info">
                <strong>Daniel Major</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor web junior</p>
            <a href="https://github.com/Seveshy">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
