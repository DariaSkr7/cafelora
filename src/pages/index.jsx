import { render } from '@czechitas/render';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Menu } from '../components/menu';
import { Gallery } from '../components/gallery';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import '../global.css';
import './index.css';

const loadDrinks = async () => {
  const response = await fetch('http://localhost:4000/api/drinks');
  const data = await response.json();
  return data.result;
};

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
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
