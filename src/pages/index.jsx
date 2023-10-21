import { render } from '@czechitas/render';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Menu } from '../components/menu';
import { Gallery } from '../components/gallery';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import '../global.css';
import './index.css';

const orderDrink = async (id) => {
  const response = await fetch(`http://localhost:4000/api/drinks/${id}`, {
    method: 'PATCH',
    body: JSON.stringify([
      {
        op: 'replace',
        path: '/ordered',
        value: true,
      },
    ]),
  });

  const data = response.json();
  console.log(data);
};

const loadDrinks = async () => {
  const response = await fetch('http://localhost:4000/api/drinks');
  const data = await response.json();
  return data.result;
};

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={await loadDrinks()} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const navBtn = document.querySelector('.nav-btn');
const navRollout = document.querySelector('.rollout-nav');
navBtn.addEventListener('click', () => {
  navRollout.classList.toggle('nav-closed');
});
navRollout.addEventListener('click', () => {
  navRollout.classList.toggle('nav-closed');
});

document.querySelectorAll('.order-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    btn.classList.toggle('order-btn--ordered');
    if (btn.classList.contains('order-btn--ordered')) {
      btn.textContent = 'Zrusit';
      await orderDrink(btn.id);
    } else {
      btn.textContent = 'Objednat';
    }
  });
});
