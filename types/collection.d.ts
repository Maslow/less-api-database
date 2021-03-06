import { DocumentReference } from './document';
import { Query } from './query';
import Aggregation from './aggregate';
export declare class CollectionReference extends Query {
    get name(): string;
    doc(docID?: string | number): DocumentReference;
    add(data: Object, options?: {
        multi: boolean;
    }, callback?: any): Promise<{
        id: string | number;
        insertedCount: number;
        requestId: string;
    }>;
    aggregate(): Aggregation;
}
