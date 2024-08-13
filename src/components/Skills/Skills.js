import uniqid from 'uniqid'
import { compétences } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  // Check if compétences array is empty
  if (!compétences.length) return null

  return (
    <section className='section skills' id='compétences'>
      <h2 className='section__title'>Compétences</h2>
      <ul className='skills__list'>
        {compétences.map((compétence) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {compétence}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
