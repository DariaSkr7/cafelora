import { render } from '@czechitas/render';
import { Footer } from '../components/footer';
import { Order } from '../components/order';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/header';

const loadDrinks = async () => {
  const response = await fetch(
    'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
  );
  const data = await response.json();
  return data.result;
};

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <Order items={await loadDrinks()} />
      <Footer />
    </div>
  </div>,
);
