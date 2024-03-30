import {  NavLink } from "react-router-dom"
import "./Main.css"
import { useState } from "react"
import { Item } from "../Item/Item"
export const Main = () => {
    const [itemSelecionado, SetItemSelecionado] = useState("")
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
            id: 2,
            title: "Coringa",
            descricao: "",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina..."

        },
        {
            id: 3,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."
            
        },
        {
            id: 4,
            title: "Coringa",
            descricao: "",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina..."

        },
        {
            id: 5,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
        {
            id: 6,
            title: "Coringa",
            descricao: "",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina..."

        },
        {
            id: 7,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "",
            Apresentacao: "Capitão 15CM Resina..."

        },
    ]

    const handleClick = (event) =>{
        event.preventDefault()
        const   itemSelecionado = event.target.attributes.content ;

          SetItemSelecionado(itemSelecionado) ;
    }
   


    return (
        <main>
            <div className="container-main">


                <div className="container-cliente" >
                    <p>Conheça tambem</p>
                    <div ></div>
                    <div ></div>
                    <div ></div>
                </div>


                <div className="container-catalogo">



                    {imagem.map((imagem, id) => (
                        
                        <div className="container-img-catalogo" key={id}  >
                            <img id="catalogo" src={imagem.url} alt={imagem.title} />

                            <div className="container-btnImg">
                                <p>{imagem.Apresentacao}</p>
                                < input id="inputImg" type="button"  content={imagem.url} value ="Ver mais" onClick={handleClick}/>
                          
                            </div>



                        </div>
                    ))}
                    {itemSelecionado && <Item itemSelecionado={itemSelecionado}/>}


                </div>

            </div>
        </main>
    )
}