import './ActivityShow.css'
import { Link, useParams } from 'react-router'
import { getSingleActivity } from '../../services/activities'
import useFetch from '../../hooks/useFetch'

// Custom components
import ActivityDelete from '../ActivityDelete/ActivityDelete'

export default function ActivityShow(){
  // * Params
  const { activityId } = useParams()

  // * State
  const { data: activity, isLoading, error } = useFetch(
    getSingleActivity, // Service function
    {}, // Initial data value
    activityId
  )

  return (
    <>
      {error
        ? <p className='error-message'>{error}</p>
        : isLoading
          ? <p>Loading...</p>
          : (
            <section className="single-activity">
              <h1>{activity.title}</h1>
              <Link to={`/activities/${activityId}/edit`}>Edit</Link>
              <ActivityDelete />
            </section>
          )
      }
    </>
  )
}