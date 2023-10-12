export interface ISection {
  sectionType: string;
  items: any;
  title?: string;
  sectionId: string;
  viewType?: string;
  link?: string;
}
interface Song {
  items: ISong[];
  total: number;
  totalDuration: number;
}
interface Artist {
  id: string;
  name: string;
  link: string;
  spotlight: boolean;
  alias: string;
  playlistId: string;
  thumbnail: string;
  thumbnailM: string;
}
export interface ISong {
  encodeId: string;
  title: string;
  artists: Artist[];
  duration: number;
  link: string;
  thumbnail: string;
  sortDescription?: string;
  artistsNames?: string;
  hasLyric?: boolean;
}
export interface PlaylistItf {
  encodeId: string;
  aliasTitle: string;
  artist: Artist;
  artists: Artist[];
  artistsNames: string;
  contentLastUpdate: number;
  description: string;
  genreIds: string[];
  sortDescription: string;
  thumbnail: string;
  thumbnailM: string;
  title: string;
  song: Song;
}
export interface SongAudioItf {
  audioSrc: string;
  vip: string;
  thumbnail: string;
  title: string;
  duration: number;
  artistsNames: string;
  hasLyric: boolean;
  isPlay?: boolean;
}

export interface IBanner {
  banner: string;
  cover: string;
  encodeId: string;
  description: string;
  link: string;
  target: string;
}
