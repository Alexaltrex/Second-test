export type NewsType = {
    id: number
    title: string
    text: string
}

export type UserInfoType = {
    userId: number
    city: string
    languages: Array<string>
    social: Array<SocialType>
}

export type SocialType = {
    label: 'vk' | 'telegram' | 'web' | 'youtube' | 'twitter' | 'twitch'
    link: string
}