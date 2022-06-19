import Columns from "./components/Columns";

function App() {

  const columnContent = [
    {
      type: 'Sedans',
      description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      className:'button__one',
      imgsrc:'./images/icon-sedans.svg',
    },
    {
      type: 'SUVs',
      description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      className:'button__two',
      imgsrc:'./images/icon-suvs.svg',
    },
    {
      type: 'Luxury',
      description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      className:'button__three',
      imgsrc:'./images/icon-luxury.svg',
    }
  ]

  return (
    <div className="row">
      <Columns items={columnContent}/>
    </div>
  );
}

export default App;
