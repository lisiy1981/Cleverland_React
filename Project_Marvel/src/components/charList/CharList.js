import "./charList.scss";
import MarvelService from "../../services/MarvelService";
// import abyss from "../../resources/img/abyss.jpg";
import { Component } from "react";

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
  };
  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  updateChar = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  onCharLoaded = (charList) => {
    this.setState({
      charList,
      loading: false,
    });
  };

  render() {
    const { charList } = this.state;
    return (
      <div className="char__list">
        <ul className="char__grid">
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item char__item_selected">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
          <li className="char__item">
            <img src={charList.thumbnail} alt="abyss" />
            <div className="char__name">{charList.name}</div>
          </li>
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
