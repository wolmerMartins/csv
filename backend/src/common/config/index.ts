import 'dotenv/config'

export default class EnvConfig {
  static getValue(key: string): string | undefined {
    return process.env[key]
  }

  static getValueAsNumber(key: string): number | undefined {
    const value = EnvConfig.getValue(key)
    if (!value) return

    return Number(value)
  }
}
