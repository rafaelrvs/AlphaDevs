import "./Header.css"




export const Header = () =>{



return(
    <header className="header-init">
        <div className="sub-container"> 
            <div className="containerP">
                <p>PetShop</p>
                <p>Para sua casa</p>
                <p>Para seu veiculo</p>
                <p>Outros</p>
            </div>
            <div className="container-logo">
                <img id="logo" src="./public/logo.jpg" alt="" />
            </div>
            <div>
                <input type="button" id="btn" value="Anuncie conosco"/>
            </div>


        </div>
    </header>
)
}