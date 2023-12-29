export interface IUserProfileRequest {
    access_token: string
    email: string
}

export interface IUserProfile {
    first_name?: string
    second_name?: string
    middle_name?: string
    email?: string
}

export interface IUserProfileQuery {
    success: boolean
    response: IUserProfile
}
