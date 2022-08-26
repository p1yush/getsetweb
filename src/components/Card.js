import '../App.css';
import CardItem from './CardItem';

function Card() {
  return (
    <div className='cards' id="Designs">
      <h1>Designed Websites</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/rongila-personal-portfolio-psd-template-q4.jpg'
              text='Portfolio website design'
              label='Portfolio'
            />
            <CardItem
              src='images/eflyer.jpg'
              text='E-Commerce website design'
              label='E-Commerce'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/MixMusic.jpg'
              text='Music website design'
              label='Music'
            />
              <CardItem
              src='images/website1.png'
              text='Website landing page design'
              label='Landing Page'
            />
            <CardItem
              src='images/Eshop-Free-eCommerce-HTML5-Template.jpg'
              text='E-commerce website design'
              label='E-Commerce'
              />
              </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;