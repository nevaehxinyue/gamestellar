
import Developer from "./Developer";
import Genre from "./Genre";
import Platform  from "./Platform";
import Publisher from "./Publisher";
import Tag from "./Tag";


export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[]; // An array of objects, with each object having a property called 'platform' of type 'Platform'.
  metacritic: number;
  genres: Genre[];
  rating_top: number;
  publishers: Publisher[];
  released: string;
  rating: number;
  playtime: number;
  developers: Developer[];
  tags: Tag[];

}
