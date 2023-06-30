export interface IProfile {
    id: number;
    firstname: string;
    pic_url: string;
    email: string;
    phonenumber:string;
    created_at: string;
    update_at?: string | null;
}