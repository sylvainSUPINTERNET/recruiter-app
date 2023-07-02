export interface IProfile {
    id: number;
    main_role: string;
    firstname: string;
    lastname: string;
    pic_url: string;
    email: string;
    phoneNumber:string;
    payment_names: string[];
    niches: string[];
    network_names: string[];
    network_urls: string[];
    global_stats_views: number[];
}