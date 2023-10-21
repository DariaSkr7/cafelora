import { Drink } from './drink';
import './menu.css';

const drinkList = (drinks) => {
  return drinks.map((drink) => {
    return (
      <Drink
        key={drink.id}
        name={drink.name}
        ordered={drink.ordered}
        image={drink.image}
        layers={drink.layers}
      />
    );
  });
};

export const Menu = ({ drinks }) => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">{drinkList(drinks)}</div>

        <div className="order-detail">
          <a href="/objednavka">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
