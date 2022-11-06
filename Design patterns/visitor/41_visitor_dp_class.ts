import fetch from "node-fetch";


export class VisitAllPages<DataType> {
   
    constructor(private url: string) {}

    async visit(visitor: (data: DataType) => void) {
        let nexturl: string| undefined = this.url;

        
    
        do {
            const response = await fetch(nexturl);
            const res: {
                next?: string;
                results: DataType
            } = await response.json();
            visitor(res.results);
            nexturl = res.next;
        }while(nexturl);
        
    }
}