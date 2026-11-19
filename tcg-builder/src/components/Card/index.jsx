import './card-style.css';
import star from '../../assets/star.png';

function Card() {
    return (
        <>
            <div className="card-container">
                <div className="card-info">
                    <p>Nome</p>
                    <div className="card-ranking">
                        <p>7</p>
                        <img src={star} alt="" />
                    </div>
                </div>

                <div className="card-illustration">
                    <img src="" alt="" />
                </div>

                <div className="card-effects">

                </div>

                <div className="card-attributes">
                    <p>1000ATK</p>
                    <p>/</p>
                    <p>1500DEF</p>
                </div>
            </div>
        </>
    );
}

export default Card;
