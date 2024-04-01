
import "./Item.css"
export const Item = ({ itemSelecionado, ativaCampo }) => {
    const imagem = itemSelecionado
    const handlerClosePage = () => {
        ativaCampo(false);
    }

    return (
        <div className="detalhe-item">
            <div id="close-page" onClick={handlerClosePage}>X</div>

            <div className="apresentavao-prod" >
                <header className="container-item-main">
                    <h1>{imagem.title}</h1>
                    <img src={imagem.url} alt={imagem.title} />

                </header>

            </div>
            <div className="container-descri">
                <h1>{imagem.Apresentacao}</h1>
                <p id="descricao">{imagem.descricao}</p>
                <p id="valor">{imagem.valor} </p>

                <div className="container-btn-item">
                    <input
                        id="reserva"
                        type="text"
                        defaultValue="Converse conosco"
                        readOnly // Se quiser tornar o campo somente leitura
                    />

                </div>
            </div>



        </div>
    )
}