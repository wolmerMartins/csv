import { Connection, ConnectionStates, connect } from 'mongoose'

import EnvConfig from './common/config'
import { MONGO_CONNECTION_STRING } from './common/config/constants'

let connection: Connection

export async function makeConnection(): Promise<void> {
  if (connection?.readyState === ConnectionStates.connected) return

  try {
    const conn = await connect(<string>EnvConfig.getValue(MONGO_CONNECTION_STRING))

    connection = conn.connection
  } catch(error) {
    console.log('Unable to connect to MongoDB')
  }
}
