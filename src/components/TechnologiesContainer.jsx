import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies =[
  {id: "html", nome: "HTML5", icon: <DiHtml5/>},
  {id: "css", nome: "CSS3", icon: <DiCss3/>},
  {id: "js", nome: "JavaScript", icon: <DiJsBadge/>},
  {id: "node", nome: "Node.js", icon: <DiNodejsSmall/>},
  {id: "mysql", nome: "MySQL", icon: <DiMysql/>},
  {id: "react", nome: "React", icon: <DiReact/>},
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.nome}</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
          </div>
        )
        )}
      </div>
    </section>
  )
}

export default TechnologiesContainer