import usePersons from '../../hooks/usePersons'
import FileUpload from '../FileUpload'
import Persons from '../Persons'

export default function Home(): JSX.Element {
  const { state } = usePersons()

  if (state.data?.length) return <Persons />

  return <FileUpload />
}
