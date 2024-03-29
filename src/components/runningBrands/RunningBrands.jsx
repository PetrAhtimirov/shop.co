import './runningBrands.css';
import kalvinKleinImage from './images/calvin klein.svg';
import gucciImage from './images/gucci.svg';
import pradaImage from './images/prada.svg';
import versaceImage from './images/versace.svg';
import zaraImage from './images/zara.svg';
import colinsImage from './images/colins.png';

const RunningBrands = () => {
    const images = [
        { kalvinKleinImage },
        { gucciImage },
        { pradaImage },
        { versaceImage },
        { zaraImage },
        { colinsImage },
    ];

    const renderImages = images.map((obj, i) => {
        const [key, image] = Object.entries(obj)[0];
        return <img key={i} className="brand-image" src={image} alt={key} />;
    });

    return (
        <section className="brands">
            <div className="brands__inner">{renderImages}</div>
            <div className="brands__inner second">{renderImages}</div>
        </section>
    );
};

export default RunningBrands;
