import { useRef } from 'react';
import './card-style.css';
import star from '../../assets/star.png';
import Dialog from '../Name-Dialog';

function Card() {
    const nameRef = useRef(null);

    const openNameChanger = () => {
        nameRef.current.showModal();
    };

    return (
        <>
            <div className="card-container">
                {/* Nome e ranking do card */}
                <div className="card-info">
                    {/* Nome do card */}
                    <button onClick={openNameChanger}>
                        <p>Nome</p>
                    </button>

                    <Dialog ref={nameRef} />

                    {/* Ranking do card */}
                    <button className="card-ranking">
                        <p>7</p>
                        <img
                            src={star}
                            alt="Estrela indicativa de nível da carta"
                        />
                    </button>
                </div>

                {/* Ilustração do card */}
                <button className="card-illustration">
                    <img src="" alt="" />
                </button>

                {/* Efeitos do card */}
                <button className="card-effects"></button>

                {/* Ataque e defesa do card */}
                <button className="card-attributes">
                    <p>1000ATK</p>
                    <p>/</p>
                    <p>1500DEF</p>
                </button>
            </div>
        </>
    );
}

export default Card;
