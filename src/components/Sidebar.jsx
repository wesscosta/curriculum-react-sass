import SocialNetworks from './SocialNetworks.jsx'
import Avatar from '../assets/avatar3.png'
import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer.jsx'

const Sidebar = () => {
    return (
        <asside id="sidebar">   
        <img src={Avatar} alt="Weslley Costa" /> 
        <p className='title'>Desenvolvedor Front End</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className='btn'>
            Download currículo
        </a>
    </asside>
    )
}

export default Sidebar
