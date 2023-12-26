export interface IApplicationListResponseItem {
    id?: number
    course_name?: string
    student?: string
    cost?: number
    start_date?: string
    end_date?: string
    point?: string
    status?: number
    changer?: string
    change_date?: string
}

export interface IApplicationList {
    success: boolean
    response: IApplicationListResponseItem[]
}

export interface IApplicationListBody {
    access_token: string | null,
    limit?: number
}
