import './ActivityIndex.css'
import { Link } from 'react-router'
import useFetch from '../../hooks/useFetch'

// Service function
import { getAllActivites } from '../../services/activities'
import Spinner from '../Spinner/Spinner'

export default function ActivityIndex(){
  // * State
  const { data: activities, isLoading, error } = useFetch(getAllActivites, [])

  return (
    <>
      <h1>Activities</h1>
      <section className="activity-list">
        {error 
          ? <p className='error-message'>{error}</p>
          : isLoading
            ? <Spinner />
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