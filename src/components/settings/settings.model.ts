export interface ICommunicationSetting {
  isEnabled: boolean
}

export interface ISmsSettings extends ICommunicationSetting {
  isEnabled: boolean,
  phone?: string,
  message?: string
}

export interface IEmailSettings extends ICommunicationSetting {
  isEnabled: boolean,
  email?: string,
  message?: string
}

export interface IPushNotificationSettings extends ICommunicationSetting {
  isEnabled: boolean
}

export interface ISettings {
  sendSMS: ISmsSettings,
  sendEmail: IEmailSettings,
  sendPushNotifications: IPushNotificationSettings
}
