import spinnerGIF from '../../assets/spinner.gif'

export default function Spinner(){
  return (
    <div className="spinner-wrapper">
      <img className='spinner' src={spinnerGIF} />
    </div>
  )
}