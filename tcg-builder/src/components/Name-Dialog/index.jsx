import './name-dialog-style.css';

function Dialog({ ref }) {
    const closeNameChanger = () => {
        ref.current.close();
    };

    return (
        <>
            <dialog className="nameDialog" ref={ref}>
                {/* Botão de fechar dialog */}
                <button
                    className="closeNameDialogButton"
                    type="button"
                    onClick={closeNameChanger}
                >
                    X
                </button>

                {/* Input do Name-Dialog */}
                <input className="nameDialogInput" type="text" />

                {/* Botão de salvar alterações */}
                <button className="saveNameDialogButton" type="button">
                    Salvar
                </button>
            </dialog>
        </>
    );
}

export default Dialog;
