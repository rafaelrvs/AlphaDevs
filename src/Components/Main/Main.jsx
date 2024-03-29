import"./Main.css"
export const Main = () => {

    const imagem = [
        {
            id: 0,
            title: "Coringa",
            descricao: "",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina..."

        },
        {
            id: 1,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
        {
            id: 0,
            title: "Coringa",
            descricao: "",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina..."

        },
        {
            id: 1,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
        {
            id: 1,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
        {
            id: 1,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
        {
            id: 1,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
        {
            id: 1,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
    ]


    return (
        <main>
            <div className="container-main">

            <div>
                <p>Conheça tambem</p>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="container-catalogo">
              


                {imagem.map((imagem, id) => (
                    <div className="container-img-catalogo"  key={id}>
                        <img id="catalogo" src={imagem.url} alt={imagem.title} />

                        <div className="container-btnImg">
                            <p>{imagem.Apresentacao}</p>
                            <input id="inputImg" type="text " value="Ver mais"/>
                        </div>
                    </div>
                ))}


            </div>

                </div>
        </main>
    )
}