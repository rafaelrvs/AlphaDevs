
import { Main } from "../Main/Main"
import "./Item.css"
export const Item = (itemSelecionado)=>{
         const imagem =  itemSelecionado.itemSelecionado.textContent

    return(
        <div className="detalhe-item">
             
                <div className="container-item-main" >
                    <img src={imagem} alt="a" />
                </div>


        </div>
    )
}