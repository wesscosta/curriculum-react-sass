import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"
import "../styles/components/informationcontainer.sass"

const InformationContainer = () => {
  return (
    <section id ="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(86)99999-9999</p>
            </div>
        </div>    
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>weslleycosta.ti@gmail</p>
            </div>
        </div>    
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Teresina-PI</p>
            </div>
        </div>    
    </section>
  )
}

export default InformationContainer
