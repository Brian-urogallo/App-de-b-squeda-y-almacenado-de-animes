export interface APIAnimes {
    pagination: Pagination;
    data:       Anime[];
}

export interface MyAnime{
    id: number,
    title: string,
    imagen: string,
    total_episode: number | null,
    wachted_episodes: number

  }

export interface Anime {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    trailer:         Trailer;
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   null | string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            string;
    source:          string;
    episodes:        number;
    status:          string;
    airing:          boolean;
    aired:           Aired;
    duration:        string;
    rating:          string;
    score:           number | null;
    scored_by:       number | null;
    rank:            number;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      null;
    season:          null;
    year:            null;
    broadcast:       Broadcast;
    producers:       Demographic[];
    licensors:       Demographic[];
    studios:         Demographic[];
    genres:          Demographic[];
    explicit_genres: any[];
    themes:          Demographic[];
    demographics:    Demographic[];
}

export interface Aired {
    from:   Date;
    to:     Date | null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export interface Broadcast {
    day:      null;
    time:     null;
    timezone: null;
    string:   null;
}

export interface Demographic {
    mal_id: number;
    type:   Type;
    name:   string;
    url:    string;
}

export enum Type {
    Anime = "anime",
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Title {
    type:  string;
    title: string;
}

export interface Trailer {
    youtube_id: null | string;
    url:        null | string;
    embed_url:  null | string;
    images:     Images;
}

export interface Images {
    image_url:         null | string;
    small_image_url:   null | string;
    medium_image_url:  null | string;
    large_image_url:   null | string;
    maximum_image_url: null | string;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
    current_page:      number;
    items:             Items;
}

export interface Items {
    count:    number;
    total:    number;
    per_page: number;
}
