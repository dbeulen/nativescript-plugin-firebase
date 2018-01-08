
declare class FIRCollectionReference extends FIRQuery {

	static alloc(): FIRCollectionReference; // inherited from NSObject

	static new(): FIRCollectionReference; // inherited from NSObject

	readonly collectionID: string;

	readonly parent: FIRDocumentReference;

	readonly path: string;

	addDocumentWithData(data: NSDictionary<string, any>): FIRDocumentReference;

	addDocumentWithDataCompletion(data: NSDictionary<string, any>, completion: (p1: NSError) => void): FIRDocumentReference;

	documentWithAutoID(): FIRDocumentReference;

	documentWithPath(documentPath: string): FIRDocumentReference;
}

declare class FIRDocumentChange extends NSObject {

	static alloc(): FIRDocumentChange; // inherited from NSObject

	static new(): FIRDocumentChange; // inherited from NSObject

	readonly document: FIRDocumentSnapshot;

	readonly newIndex: number;

	readonly oldIndex: number;

	readonly type: FIRDocumentChangeType;
}

declare const enum FIRDocumentChangeType {

	Added = 0,

	Modified = 1,

	Removed = 2
}

declare class FIRDocumentListenOptions extends NSObject {

	static alloc(): FIRDocumentListenOptions; // inherited from NSObject

	static new(): FIRDocumentListenOptions; // inherited from NSObject

	static options(): FIRDocumentListenOptions;

	readonly includeMetadataChanges: boolean;
}

declare class FIRDocumentReference extends NSObject {

	static alloc(): FIRDocumentReference; // inherited from NSObject

	static new(): FIRDocumentReference; // inherited from NSObject

	readonly documentID: string;

	readonly firestore: FIRFirestore;

	readonly parent: FIRCollectionReference;

	readonly path: string;

	addSnapshotListener(listener: (p1: FIRDocumentSnapshot, p2: NSError) => void): FIRListenerRegistration;

	addSnapshotListenerWithOptionsListener(options: FIRDocumentListenOptions, listener: (p1: FIRDocumentSnapshot, p2: NSError) => void): FIRListenerRegistration;

	collectionWithPath(collectionPath: string): FIRCollectionReference;

	deleteDocument(): void;

	deleteDocumentWithCompletion(completion: (p1: NSError) => void): void;

	getDocumentWithCompletion(completion: (p1: FIRDocumentSnapshot, p2: NSError) => void): void;

	setData(documentData: NSDictionary<string, any>): void;

	setDataCompletion(documentData: NSDictionary<string, any>, completion: (p1: NSError) => void): void;

	setDataOptions(documentData: NSDictionary<string, any>, options: FIRSetOptions): void;

	setDataOptionsCompletion(documentData: NSDictionary<string, any>, options: FIRSetOptions, completion: (p1: NSError) => void): void;

	updateData(fields: NSDictionary<any, any>): void;

	updateDataCompletion(fields: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
}

declare class FIRDocumentSnapshot extends NSObject {

	static alloc(): FIRDocumentSnapshot; // inherited from NSObject

	static new(): FIRDocumentSnapshot; // inherited from NSObject

	readonly documentID: string;

	readonly exists: boolean;

	readonly metadata: FIRSnapshotMetadata;

	readonly reference: FIRDocumentReference;

	data(): NSDictionary<string, any>;

	objectForKeyedSubscript(key: any): any;
}

declare class FIRFieldPath extends NSObject implements NSCopying {

	static alloc(): FIRFieldPath; // inherited from NSObject

	static documentID(): FIRFieldPath;

	static new(): FIRFieldPath; // inherited from NSObject

	constructor(o: { fields: NSArray<string>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithFields(fieldNames: NSArray<string>): this;
}

declare class FIRFieldValue extends NSObject {

	static alloc(): FIRFieldValue; // inherited from NSObject

	static fieldValueForDelete(): FIRFieldValue;

	static fieldValueForServerTimestamp(): FIRFieldValue;

	static new(): FIRFieldValue; // inherited from NSObject
}

declare class FIRFirestore extends NSObject {

	static alloc(): FIRFirestore; // inherited from NSObject

	static enableLogging(logging: boolean): void;

	static firestore(): FIRFirestore;

	static firestoreForApp(app: FIRApp): FIRFirestore;

	static new(): FIRFirestore; // inherited from NSObject

	readonly app: FIRApp;

	settings: FIRFirestoreSettings;

	batch(): FIRWriteBatch;

	collectionWithPath(collectionPath: string): FIRCollectionReference;

	documentWithPath(documentPath: string): FIRDocumentReference;

	runTransactionWithBlockCompletion(updateBlock: (p1: FIRTransaction, p2: interop.Pointer | interop.Reference<NSError>) => any, completion: (p1: any, p2: NSError) => void): void;
}

declare const enum FIRFirestoreErrorCode {

	OK = 0,

	Cancelled = 1,

	Unknown = 2,

	InvalidArgument = 3,

	DeadlineExceeded = 4,

	NotFound = 5,

	AlreadyExists = 6,

	PermissionDenied = 7,

	ResourceExhausted = 8,

	FailedPrecondition = 9,

	Aborted = 10,

	OutOfRange = 11,

	Unimplemented = 12,

	Internal = 13,

	Unavailable = 14,

	DataLoss = 15,

	Unauthenticated = 16
}

declare var FIRFirestoreErrorDomain: string;

declare class FIRFirestoreSettings extends NSObject implements NSCopying {

	static alloc(): FIRFirestoreSettings; // inherited from NSObject

	static new(): FIRFirestoreSettings; // inherited from NSObject

	dispatchQueue: NSObject;

	host: string;

	persistenceEnabled: boolean;

	sslEnabled: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class FIRGeoPoint extends NSObject implements NSCopying {

	static alloc(): FIRGeoPoint; // inherited from NSObject

	static new(): FIRGeoPoint; // inherited from NSObject

	readonly latitude: number;

	readonly longitude: number;

	constructor(o: { latitude: number; longitude: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithLatitudeLongitude(latitude: number, longitude: number): this;
}

interface FIRListenerRegistration extends NSObjectProtocol {

	remove(): void;
}
declare var FIRListenerRegistration: {

	prototype: FIRListenerRegistration;
};

declare class FIRQuery extends NSObject {

	static alloc(): FIRQuery; // inherited from NSObject

	static new(): FIRQuery; // inherited from NSObject

	readonly firestore: FIRFirestore;

	addSnapshotListener(listener: (p1: FIRQuerySnapshot, p2: NSError) => void): FIRListenerRegistration;

	addSnapshotListenerWithOptionsListener(options: FIRQueryListenOptions, listener: (p1: FIRQuerySnapshot, p2: NSError) => void): FIRListenerRegistration;

	getDocumentsWithCompletion(completion: (p1: FIRQuerySnapshot, p2: NSError) => void): void;

	queryEndingAtDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryEndingAtValues(fieldValues: NSArray<any>): FIRQuery;

	queryEndingBeforeDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryEndingBeforeValues(fieldValues: NSArray<any>): FIRQuery;

	queryLimitedTo(limit: number): FIRQuery;

	queryOrderedByField(field: string): FIRQuery;

	queryOrderedByFieldDescending(field: string, descending: boolean): FIRQuery;

	queryOrderedByFieldPath(path: FIRFieldPath): FIRQuery;

	queryOrderedByFieldPathDescending(path: FIRFieldPath, descending: boolean): FIRQuery;

	queryStartingAfterDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryStartingAfterValues(fieldValues: NSArray<any>): FIRQuery;

	queryStartingAtDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryStartingAtValues(fieldValues: NSArray<any>): FIRQuery;

	queryWhereFieldIsEqualTo(field: string, value: any): FIRQuery;

	queryWhereFieldIsGreaterThan(field: string, value: any): FIRQuery;

	queryWhereFieldIsGreaterThanOrEqualTo(field: string, value: any): FIRQuery;

	queryWhereFieldIsLessThan(field: string, value: any): FIRQuery;

	queryWhereFieldIsLessThanOrEqualTo(field: string, value: any): FIRQuery;

	queryWhereFieldPathIsEqualTo(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsGreaterThan(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsGreaterThanOrEqualTo(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsLessThan(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsLessThanOrEqualTo(path: FIRFieldPath, value: any): FIRQuery;
}

declare class FIRQueryListenOptions extends NSObject {

	static alloc(): FIRQueryListenOptions; // inherited from NSObject

	static new(): FIRQueryListenOptions; // inherited from NSObject

	static options(): FIRQueryListenOptions;

	readonly includeDocumentMetadataChanges: boolean;

	readonly includeQueryMetadataChanges: boolean;
}

declare class FIRQuerySnapshot extends NSObject {

	static alloc(): FIRQuerySnapshot; // inherited from NSObject

	static new(): FIRQuerySnapshot; // inherited from NSObject

	readonly count: number;

	readonly documentChanges: NSArray<FIRDocumentChange>;

	readonly documents: NSArray<FIRDocumentSnapshot>;

	readonly empty: boolean;

	readonly metadata: FIRSnapshotMetadata;

	readonly query: FIRQuery;
}

declare class FIRSetOptions extends NSObject {

	static alloc(): FIRSetOptions; // inherited from NSObject

	static merge(): FIRSetOptions;

	static new(): FIRSetOptions; // inherited from NSObject

	readonly merge: boolean;
}

declare class FIRSnapshotMetadata extends NSObject {

	static alloc(): FIRSnapshotMetadata; // inherited from NSObject

	static new(): FIRSnapshotMetadata; // inherited from NSObject

	readonly fromCache: boolean;

	readonly pendingWrites: boolean;
}

declare class FIRTransaction extends NSObject {

	static alloc(): FIRTransaction; // inherited from NSObject

	static new(): FIRTransaction; // inherited from NSObject

	deleteDocument(document: FIRDocumentReference): FIRTransaction;

	getDocumentError(document: FIRDocumentReference): FIRDocumentSnapshot;

	setDataForDocument(data: NSDictionary<string, any>, document: FIRDocumentReference): FIRTransaction;

	setDataForDocumentOptions(data: NSDictionary<string, any>, document: FIRDocumentReference, options: FIRSetOptions): FIRTransaction;

	updateDataForDocument(fields: NSDictionary<any, any>, document: FIRDocumentReference): FIRTransaction;
}

declare class FIRWriteBatch extends NSObject {

	static alloc(): FIRWriteBatch; // inherited from NSObject

	static new(): FIRWriteBatch; // inherited from NSObject

	commitWithCompletion(completion: (p1: NSError) => void): void;

	deleteDocument(document: FIRDocumentReference): FIRWriteBatch;

	setDataForDocument(data: NSDictionary<string, any>, document: FIRDocumentReference): FIRWriteBatch;

	setDataForDocumentOptions(data: NSDictionary<string, any>, document: FIRDocumentReference, options: FIRSetOptions): FIRWriteBatch;

	updateDataForDocument(fields: NSDictionary<any, any>, document: FIRDocumentReference): FIRWriteBatch;
}
