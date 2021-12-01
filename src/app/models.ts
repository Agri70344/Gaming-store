export interface Game{
    id: string;
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
}

export interface Review{
    id:string,
    stars:number,
    userName:string,
    date:string,
    title:string,
    text:string
}

export interface UserAuth{
    id:number,
    name:string;
    username:string,
    user:string;
    password:string
}
export interface APIResponse<T>{
    results: Array<T>;
}

interface Genre{
    name: string;
}
interface ParentPlatform {
    platform: {
        slug: string;
        name:string;
    };
}

interface Publishers {
    name: string;
}

interface Rating {
    id: number;
    count: number;
    title: string;
}

interface Screenshots {
    image: string;
}

interface Trailer {
    data: {
        max: string;
    };
}