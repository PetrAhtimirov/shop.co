import './clothesItemInfo.css';

const ClothesItemInfo = ({ id }) => {
    return (
        <section className="clothes-item-info">
            <div className="container clothes-item-info__container">
                <div className="clothes-item-info__images">
                    <div className="clothes-item-info__side-images"></div>
                </div>
            </div>
        </section>
    );
};

export default ClothesItemInfo;
