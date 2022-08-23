import '../App.css';
import designs from './designs';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {designs.map(design => (
                <CardItem 
                src={design.src}
                path={design.path}
                label={design.label}
                text={design.text}
                />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;