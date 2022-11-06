import fetch from "node-fetch";


export async function visitAllPages<DataType>(url: string, visitor: (data: DataType) => void){

        let nexturl: string| undefined = url;

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