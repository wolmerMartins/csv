import './style.css'

type LabelValueProps = {
  label: string
  value: string
}

export default function LabelValue({ label, value }: LabelValueProps) {
  return (
    <div className="label-value">
      <span><strong>{ label }</strong></span>
      <span>{ value }</span>
    </div>
  )
}
