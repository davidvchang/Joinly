export interface Users {
    id_user: number,
    image_url: string,
    name: string,
    last_name: string,
    email: string,
    phone_number: string,
    joined_time: string,
}

export interface Events {
    id_event: number,
    image_url: string,
    title: string,
    description: string,
    category: string,
    location: string,
    date: string,
    time: string,
    user_id: number | null,
}

export interface Attendees {
    id_event_attendee: number,
    user_id: number,
    event_id: number,
    joined_at: string
}