import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {nome: "linkedin", icon: <FaLinkedinIn />},
    {nome: "github", icon: <FaGithub />},
    {nome: "instagram", icon: <FaInstagram />},
];

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href ="#" className="social-btn" id={network.nome} key={network.nome}>
            {network.icon}
        </a>
    ))}
    </section>;
}

export default SocialNetworks