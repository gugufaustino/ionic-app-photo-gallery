import { environment } from "src/environments/environment";


export abstract class BaseService {
  protected UrlApiApplication: string = environment.urlServiceV1;

  public LocalStorage: any;// = new LocalStorageUtils();


  protected serializeToQueryString(obj: any, prefix: string = ''): string {
    let str = [],
      p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        let k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];

        str.push((v !== null && typeof v === "object") ?
          this.serializeToQueryString(v, k)
          : encodeURIComponent(k) + "=" + (v === null ? '' : encodeURIComponent(v)));
      }
    }
    return str.join("&");
  }
}

