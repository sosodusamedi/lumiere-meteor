import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'


class Branchement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hideUnchecked: true
    }
  }

  handleCheck = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Branchement</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <legend>Information Personnelles</legend>
          <fieldset>
            <div>
              <label>Prénom NOM :</label>
              <input
                type='text'
                ref="nameInput" />
            </div>
            <div>
              <label>Telephone :</label>
              <input
                type='text'
                ref="phoneInput" />
            </div>
            <div>
              <label>Email :</label>
              <input
                type='text'
                ref="emailInput" />
            </div>
            <div>
              <label>Ville/Quartier :</label>
              <input
                type='text'
                ref="locationInput"
                placeholder='Ville / Quartier' />
            </div>
            <div>
              <label>Date de Naissance :</label>
              <input
                type='text'
                ref="birthdayInput"
                placeholder='JJ/MM/AAAA' />
            </div>
          </fieldset>
          <legend>Centres d'intérêt</legend>
          <fieldset>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="bar"
                id="bar" />
              <label for="bar">BAR</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Quel type de bar ?</p>
                <input type="text" ref="barType" /> <br />
                <input
                  type="checkbox"
                  name="concert"
                  id="concert" />
                <label for="concert">concert-live</label><br />
                <input
                  type="checkbox"
                  name="quiz"
                  id="quiz" />
                <label for="quiz">quiz</label><br />
                <input
                  type="checkbox"
                  name="blindtest"
                  id="blindtest" />
                <label for="blindtest">blindtest</label><br />
                <input
                  type="checkbox"
                  name="karaoke"
                  id="karaoke" />
                <label for="karaoke">karaoke</label><br />
                <input
                  type="checkbox"
                  name="beerpong"
                  id="beerpong" />
                <label for="beerpong">beerpong</label><br />
                <p>
                  Promo / Offre spéciale ?
                  <input type="radio" name="promo" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="promo" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="soiree"
                id="soiree" />
              <label for="soiree">SOIREE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>
                  Boîte ?
                  <input type="radio" name="club" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="club" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>Quel type de musique ?</p>
                <input type="text" ref="musicType" /> <br />
                <p>Soirée en particulier ?</p>
                <input type="text" ref="themeParty" /> <br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="concert"
                id="concert" />
              <label for="concert">CONCERT</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Artiste en particulier ?</p>
                <input type="text" ref="artist" /> <br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="etudiant"
                id="etudiant" />
              <label for="etudiant">ETUDIANT</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>
                  Soirée étudiante ?
                  <input type="radio" name="studentParty" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="studentParty" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Soirée erasmus ?
                  <input type="radio" name="erasmusParty" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="erasmusParty" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Journée / Evenement étudiant ?
                  <input type="radio" name="studentEvent" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="studentEvent" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Projets réalisés par étudiants ?
                  <input type="radio" name="studentProjects" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="studentProjects" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="danse"
                id="danse" />
              <label for="danse">DANSE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Quel type de danse ?</p>
                <input type="text" ref="danceType" /> <br />
                <p>
                  Cours ?
                  <input type="radio" name="danseClass" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="danseClass" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Soirée ?
                  <input type="radio" name="danseParty" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="danseParty" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Spectacle ?
                  <input type="radio" name="danseShow" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="danseShow" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                name="alternatif"
                id="alternatif" />
              <label for="alternatif">ALTERNATIF</label><br />
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="culture"
                id="culture" />
              <label for="culture">CULTURE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Quel type de musée / galerie ?</p>
                <input type="text" ref="museumType" /> <br />
                <p>
                  Nouvelle expo ?
                  <input type="radio" name="newExhibition" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="newExhibition" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Vernissage ?
                  <input type="radio" name="varnishing" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="varnishing" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Journée spéciale ?
                  <input type="radio" name="specialExhibitionDay" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="specialExhibitionDay" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Expo photo ?
                  <input type="radio" name="photoExhibition" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="photoExhibition" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="cinema"
                id="cinema" />
              <label for="cinema">CINEMA</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Quel type de film ?</p>
                <input type="text" ref="filmType" /> <br />
                <p>
                  Indépendant / d'auteur ?
                  <input type="radio" name="independant" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="independant" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Journée spéciale ?
                  <input type="radio" name="specialFilmDay" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="specialFilmDay" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Avant-première ?
                  <input type="radio" name="premiereFilm" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="premiereFilm" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Discussion / Débat ?
                  <input type="radio" name="discussFilm" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="discussFilm" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="theatre"
                id="theatre" />
              <label for="theatre">THEATRE / SPECTACLE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Quel genre ?</p>
                <input type="text" ref="theatreType" /> <br />
                <p>
                  Opéra / Orchestre ?
                  <input type="radio" name="opera" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="opera" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="conference"
                id="conference" />
              <label for="conference">CONFERENCE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Sujet ?</p>
                <input type="text" ref="conferenceType" /> <br />
                <p>
                  Débat ?
                  <input type="radio" name="debate" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="debate" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Lectures ?
                  <input type="radio" name="lectures" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="lectures" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="ville"
                id="ville" />
              <label for="ville">VILLE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>
                  Organisé par la ville ?
                  <input type="radio" name="byTheCity" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="byTheCity" value="no" id="no" /> <label for="no">NON</label>
                </p>
                <p>
                  Organisé sur la ville ?
                  <input type="radio" name="aboutTheCity" value="yes" id="yes" checked /> <label for="yes">OUI</label>
                  <input type="radio" name="aboutTheCity" value="no" id="no" /> <label for="no">NON</label>
                </p>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="bouffe"
                id="bouffe" />
              <label for="bouffe">BOUFFE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Quel type de cuisine ?</p>
                <input type="text" ref="cuisineType" /> <br />
                <input
                  type="checkbox"
                  name="foodSpecial"
                  id="foodSpecial" />
                <label for="foodSpecial">soirée spéciale</label><br />
                <input
                  type="checkbox"
                  name="openings"
                  id="openings" />
                <label for="openings">openings</label><br />
                <input
                  type="checkbox"
                  name="shortTime"
                  id="shortTime" />
                <label for="shortTime">éphémère</label><br />
                <input
                  type="checkbox"
                  name="foodtruck"
                  id="foodtruck" />
                <label for="foodtruck">foodtruck</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="sport"
                id="sport" />
              <label for="sport">SPORT</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="sportEvent"
                  id="sportEvent" />
                <label for="sportEvent">événement sportif</label><br />
                <input
                  type="checkbox"
                  name="match"
                  id="match" />
                <label for="match">match</label><br />
                <input
                  type="checkbox"
                  name="matchBroadcast"
                  id="matchBroadcast" />
                <label for="matchBroadcast">retansmission match</label><br />
                <input
                  type="checkbox"
                  name="groups"
                  id="groups" />
                <label for="groups">groupes (de courses,....)</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="bienetre"
                id="bienetre" />
              <label for="bienetre">BIEN-ETRE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="yoga"
                  id="yoga" />
                <label for="yoga">yoga</label><br />
                <input
                  type="checkbox"
                  name="meditation"
                  id="meditation" />
                <label for="meditation">meditation / respiration</label><br />
                <input
                  type="checkbox"
                  name="organic"
                  id="organic" />
                <label for="organic">produit bio</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="ecologie"
                id="ecologie" />
              <label for="ecologie">ECOLOGIE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="actionsEco"
                  id="actionsEco" />
                <label for="actionsEco">actions</label><br />
                <input
                  type="checkbox"
                  name="informationsEco"
                  id="informationsEco" />
                <label for="informationsEco">informations</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="atelier"
                id="atelier" />
              <label for="atelier">ATELIER</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="cuisine"
                  id="cuisine" />
                <label for="cuisine">cuisine</label><br />
                <input
                  type="checkbox"
                  name="DIY"
                  id="DIY" />
                <label for="DIY">DIY</label><br />
                <input
                  type="checkbox"
                  name="signLanguage"
                  id="signLanguage" />
                <label for="signLanguage">language des signes</label><br />
                <input
                  type="checkbox"
                  name="language"
                  id="language" />
                <label for="language">language</label><br />
                <input
                  type="checkbox"
                  name="handcraft"
                  id="handcraft" />
                <label for="handcraft">manuel</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="shopping"
                id="shopping" />
              <label for="shopping">SHOPPING</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="emptying"
                  id="emptying" />
                <label for="emptying">liquidation totale</label><br />
                <input
                  type="checkbox"
                  name="specialShopDay"
                  id="specialShopDay" />
                <label for="specialShopDay">journée spéciale</label><br />
                <input
                  type="checkbox"
                  name="market"
                  id="market" />
                <label for="market">marché</label><br />
                <input
                  type="checkbox"
                  name="fleaMarket"
                  id="fleaMarket" />
                <label for="fleaMarket">brocante</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="business"
                id="business" />
              <label for="business">BUSINESS</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="afterwork"
                  id="afterwork" />
                <label for="afterwork">afterwork</label><br />
                <input
                  type="checkbox"
                  name="conference"
                  id="conference" />
                <label for="conference">conférence</label><br />
                <input
                  type="checkbox"
                  name="formation"
                  id="formation" />
                <label for="formation">formation</label><br />
                <input
                  type="checkbox"
                  name="networking"
                  id="networking" />
                <label for="networking">réseautage</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="photo"
                id="photo" />
              <label for="photo">PHOTO</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="photoRoute"
                  id="photoRoute" />
                <label for="photoRoute">parcours photo</label><br />
                <input
                  type="checkbox"
                  name="groups"
                  id="groups" />
                <label for="groups">groupescours</label><br />
                <input
                  type="checkbox"
                  name="cours"
                  id="cours" />
                <label for="cours">cours</label><br />
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                name="lgbt"
                id="lgbt" />
              <label for="lgbt">LGBT</label><br />
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="etranger"
                id="etranger" />
              <label for="etranger">ETRANGER</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Ville / Pays en particulier ?</p>
                <input type="text" ref="particularPlaceInput"/>
                <input
                  type="checkbox"
                  name="multilanguage"
                  id="multilanguage" />
                <label for="multilanguage">soirée multilingue</label><br />
                <input
                  type="checkbox"
                  name="expats"
                  id="expats" />
                <label for="expats">expats/rencontres</label><br />
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="salon"
                id="salon" />
              <label for="salon">SALON</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <p>Quel sujet ?</p>
                <input type="text" ref="fairType"/>
              </div>
            </div>
            <div onClick={this.handleCheck.bind(this)}>
              <input
                type="checkbox"
                name="tatouage"
                id="tatouage" />
              <label for="tatouage">TATOUAGE</label><br />
              <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
                <input
                  type="checkbox"
                  name="flashDay"
                  id="flashDay" />
                <label for="flashDay">flash</label><br />
                <input
                  type="checkbox"
                  name="salon"
                  id="salon" />
                <label for="salon">salon</label><br />
              </div>
            </div>
          </fieldset>
          <legend>Prix</legend>
          <fieldset>
            <p>
              Majoritairement gratuit ?
              <input type="radio" name="free" value="yes" id="yes" checked /> <label for="yes">OUI</label>
              <input type="radio" name="free" value="no" id="no" /> <label for="no">NON</label>
            </p>
            <p>
              Tarif spécial ?
              <input type="checkbox" name="etudiant" id="etudiant" /> <label for="etudiant">étudiant</label>
              <input type="checkbox" name="moins26" id="moins26" /> <label for="moins26">moins 26ans</label>
              <input type="checkbox" name="aucun" id="aucun" /> <label for="aucun">aucun</label>
              <input type="checkbox" name="autre" id="autre" /> <label for="autre">autre</label>
            </p>
            <p>
              Fourchette
              <input type="text" ref="priceInput" />
            </p>
          </fieldset>
          <legend>Déplacement</legend>
          <fieldset>
            <p>
              En transport ?
              <input type="radio" name="transport" value="yes" id="yes" checked /> <label for="yes">OUI</label>
              <input type="radio" name="transport" value="no" id="no" /> <label for="no">NON</label>
            </p>
            <p>
              Autre
              <input type="text" ref="transportInput" />
            </p>
          </fieldset>
          <legend>Contact</legend>
          <fieldset>
            <p>
              Ton léger accepté ?
              <input type="radio" name="ton" value="ok" id="ok" checked /> <label for="ok">OK</label>
              <input type="radio" name="ton" value="pasok" id="pasok" /> <label for="ok">NON</label>
            </p>
            <p>
              Surnom ?
              <input type="radio" name="surname" value="ok" id="ok" checked /> <label for="ok">OK</label>
              <input type="radio" name="surname" value="pasok" id="pasok" /> <label for="pasok">NON</label>
            </p>
            <p>
              Fréquence ?
              <input type="text" ref="frequency" />
            </p>
          </fieldset>
          <legend>Concept</legend>
          <fieldset>
            <textarea>Remarques</textarea>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Branchement
