import { Drink } from './drink';
import './menu.css';

export const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          <Drink
            name="Espresso"
            ordered={false}
            image="/cups/espresso.png"
            layers={[
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
          />

          <Drink
            name="Doppio"
            ordered={false}
            image="/cups/doppio.png"
            layers={[
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
          />

          <Drink
            name="Lungo"
            ordered={false}
            image="/cups/lungo.png"
            layers={[
              {
                color: '#b0dee1',
                label: 'voda',
              },
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
          />
        </div>

        <div className="order-detail">
          <a href="/objednavka">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
