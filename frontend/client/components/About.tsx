import { Link } from 'react-router-dom'

function About() {
  const people = [
    { name: 'Gemma', image: '/images/Gemma.png' },
    { name: 'Jesse', image: '/images/Jesse.png' },
    { name: 'Gaby', image: '/images/Gaby.png' },
    { name: 'Lauren', image: '/images/Lauren.png' },
    { name: 'Tayla', image: '/images/Tayla.png' },
  ]

  return (
    <>
      <div className="grey-background">
        <div className="screen" style={{ animation: 'none' }}>
          <h1>The Escape Creators</h1>
          <div className="creator-container">
            {people.map((person) => {
              return (
                <div key={person.name} className="creator-card">
                  <img
                    className="creator-image"
                    src={person.image}
                    alt={person.name}
                  />
                  <h2>{person.name}</h2>
                </div>
              )
            })}
          </div>
          <Link to="/">
            <button className="blue-button blue-button-sml">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
