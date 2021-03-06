import { Db } from './index';
export default class Aggregation {
    _db: Db;
    _request: any;
    _stages: any[];
    _collectionName: string;
    constructor(db?: Db, collectionName?: string);
    end(): Promise<any>;
    unwrap(): any[];
    done(): {
        [x: number]: any;
    }[];
    _pipe(stage: any, param: any): this;
    addFields(param: any): this;
    bucket(param: any): this;
    bucketAuto(param: any): this;
    count(param: any): this;
    geoNear(param: any): this;
    group(param: any): this;
    limit(param: any): this;
    match(param: any): this;
    project(param: any): this;
    lookup(param: any): this;
    replaceRoot(param: any): this;
    sample(param: any): this;
    skip(param: any): this;
    sort(param: any): this;
    sortByCount(param: any): this;
    unwind(param: any): this;
}
