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
    networks_names: string[];
    networks_urls: string[];
    networks_global_stats_views: number[];
}