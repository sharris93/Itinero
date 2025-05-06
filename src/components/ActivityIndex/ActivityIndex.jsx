import './ActivityIndex.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function ActivityIndex(){
  // * State
  const [activities, setActivities] = useState([])

  // * On component mount (on the first render of the page)
  // Consume the Index route of the API
  // Empty dependency array tells React only to execute the callback on the FIRST render
  useEffect(() => {
    async function getActivities(){
      try {
        // 1. Consume the API, retrieving a response
        const { data } = await axios.get('https://api-ga.netlify.app/api/activities')
        // 2. Set the body of that response (data) to state
        setActivities(data)
      } catch (error) {
        console.log(error)
      }
    }
    getActivities()
  }, [])

  return (
    <>
      <h1>Activities</h1>
      <section className="activity-list">
        {activities.map(activity => (
          <Link key={activity._id} to={`/activities/${activity._id}`}>
            <article>
              <h2>{activity.title}</h2>
            </article>
          </Link>
        ))}
      </section>
    </>
  )
}