import { useState } from "react"
import { deleteActivity } from "../../services/activities"
import { useParams, useNavigate } from "react-router"
import Spinner from "../Spinner/Spinner"

export default function ActivityDelete(){
  // * State
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // * Location variables
  const { activityId } = useParams()
  const navigate = useNavigate()

  // * Functions
  async function handleDelete(){
    setIsLoading(true)
    try {
      await deleteActivity(activityId)
      navigate('/activities')
    } catch (error) {
      setError(error.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      { error && <p className="error-message">{error}</p> }
      <button onClick={handleDelete}>
        {isLoading ? <Spinner /> : 'Delete'}
      </button>
    </>
  )
}