import './drink.css';
import { Layer } from './layer';

const layersFun = (layerArray) => {
  return layerArray.map((layer) => {
    return <Layer color={layer.color} label={layer.label} />;
  });
};

export const Drink = ({ name, ordered, image, layers, id }) => {
  let orderedClass = '';
  let buttonText = 'Objednat';
  if (ordered) {
    buttonText = 'Zrusit';
    orderedClass = 'order-btn--ordered';
  }
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layersFun(layers)}
        </div>
      </div>
      <div className="drink__controls">
        <button id={id} className={`order-btn ${orderedClass}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
