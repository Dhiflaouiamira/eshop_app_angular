export class Blog {
    id: number = 0;
    title: string = "";
    views: number = 0;
    comments: object[] = [];
    content: string = "";
    image: string = ""
    author: string = "";
    date: Date = new Date();
}
