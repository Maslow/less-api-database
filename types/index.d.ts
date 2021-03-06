import * as Geo from './geo/index';
import { CollectionReference } from './collection';
import { Command } from './command';
interface GeoType {
    Point: typeof Geo.Point;
    LineString: typeof Geo.LineString;
    Polygon: typeof Geo.Polygon;
    MultiPoint: typeof Geo.MultiPoint;
    MultiLineString: typeof Geo.MultiLineString;
    MultiPolygon: typeof Geo.MultiPolygon;
}
export { Query } from './query';
export { CollectionReference } from './collection';
export { DocumentReference } from './document';
export declare class Db {
    Geo: GeoType;
    command: typeof Command;
    RegExp: any;
    serverDate: any;
    config: any;
    get primaryKey(): string;
    static reqClass: any;
    static getAccessToken: Function;
    constructor(config?: any);
    collection(collName: string): CollectionReference;
    createCollection(collName: string): any;
}
