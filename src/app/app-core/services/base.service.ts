import { environment } from "src/environments/environment";


export abstract class BaseService {
  protected UrlApiApplication: string = environment.urlServiceV1;

}

