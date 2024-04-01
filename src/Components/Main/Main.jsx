import {  NavLink } from "react-router-dom"
import "./Main.css"
import { useState } from "react"
import { Item } from "../Item/Item"
export const Main = () => {
    const [itemSelecionado, SetItemSelecionado] = useState("")
    const [ativaCampo, SetativaCampo] = useState(false)
    const imagem = [
        {
            id: 0,
            title: "Coringa",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina...",
            valor:"10,25"
        },
        {
            id: 1,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            Apresentacao: "Capitão 15CM Resina...",
            valor:"15,25"

        },
        {
            id: 2,
            title: "Coringa",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina...",
            valor:"10,25"

        },
        {
            id: 3,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            Apresentacao: "Capitão 15CM Resina...",
            valor:"15,25"
            
        },
        {
            id: 4,
            title: "Coringa",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina...",
            valor:"10,25"

        },
        {
            id: 5,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            Apresentacao: "Capitão 15CM Resina...",
            valor:"15,25"

        },
        {
            id: 6,
            title: "Coringa",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            url: "./c165a03d865bc067f8b94b0f05a43a55.jpeg",
            Apresentacao: "Coringa 10CM Resina...",
            valor:"10,25"

        },
        {
            id: 7,
            title: "Capitão America",
            url: "./c90e1c54e9da6063fb76da5cff460e33.jpeg",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
            Apresentacao: "Capitão 15CM Resina...",
            valor:"15,25"

        },
    ]

    const handleClick = (imagem) =>{
     
        const   itemSelecionado = imagem;

          SetItemSelecionado(itemSelecionado) ;
          SetativaCampo(!ativaCampo) ;
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
                                <input
                                    id="inputImg"
                                    type="button"
                                    value="Ver mais"
                                    onClick={() => handleClick(imagem)}
                                />
                          
                            </div>



                        </div>
                    ))}
                    {ativaCampo && <Item itemSelecionado={itemSelecionado} ativaCampo={SetativaCampo}   />}


                </div>

            </div>
        </main>
    )
}