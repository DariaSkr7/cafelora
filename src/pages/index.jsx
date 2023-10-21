import { render } from '@czechitas/render';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Menu } from '../components/menu';
import { Gallery } from '../components/gallery';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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
