export class UrlToLogo {
    large:URL;
    medium:URL;
    small:URL;
}

export class Source {
    id:string;
    greeting: string;
    author: string;
    description: string;
    publishedAt: Date;
    title: string;
    url: URL;
    urlsToLogos: UrlToLogo;  
  }
