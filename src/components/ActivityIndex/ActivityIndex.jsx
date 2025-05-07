import './ActivityIndex.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

// Service function
import { getAllActivites } from '../../services/activities'

export default function ActivityIndex(){
  // * State
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // * Effects
  useEffect(() => {
    async function getActivities(){
      try {
        const { data } = await getAllActivites()
        setActivities(data)
      } catch {
        setError('Failed to fetch activity data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    getActivities()
  }, [])

  return (
    <>
      <h1>Activities</h1>
      <section className="activity-list">
        {error 
          ? <p className='error-message'>{error}</p>
          : loading
            ? <p>Loading...</p>
            : activities.length > 0
              ? activities.map(activity => (
                <Link key={activity._id} to={`/activities/${activity._id}`}>
                  <article>
                    <h2>{activity.title}</h2>
                  </article>
                </Link>
              ))
              : <p>No activities found</p>
        }
      </section>
    </>
  )
}