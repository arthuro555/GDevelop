import {serializeToJSON} from './Serializer';

const CLOUD_PROJECT_AUTOSAVE_CACHE_KEY = 'gdevelop-cloud-project-autosave';
const objectStoreScope = 'cloud-project-autosaves';
const keyName = 'userProjectKey';

type ProjectCacheKey = {
  userId: string,
  cloudProjectId: string
};

class ProjectCache {
// @ts-expect-error - TS2564 - Property 'databasePromise' has no initializer and is not definitely assigned in the constructor.
  databasePromise: Promise<IDBDatabase> | null;

  static isAvailable() {
    return typeof window !== 'undefined' && 'indexedDB' in window;
  }

  static async burst() {
    if (!ProjectCache.isAvailable()) return;
    return new Promise(resolve: (result: Promise<undefined> | undefined) => void => {
      const request = window.indexedDB.open(CLOUD_PROJECT_AUTOSAVE_CACHE_KEY);
// @ts-expect-error - TS18004 - No value exists in scope for the shorthand property 'request'. Either declare one or provide an initializer. | TS1005 - ',' expected. | TS1005 - ',' expected. | TS1005 - ',' expected. | TS1136 - Property assignment expected.
      request.onsuccess = event: any => {
        const db = event.target.result;
        const transaction = db.transaction(objectStoreScope, 'readwrite');
// @ts-expect-error - TS18004 - No value exists in scope for the shorthand property 'transaction'. Either declare one or provide an initializer. | TS1005 - ',' expected. | TS1005 - ',' expected.
        transaction.objectStore(objectStoreScope).clear();
        resolve();
// @ts-expect-error - TS1005 - ')' expected.
      };
// @ts-expect-error - TS1068 - Unexpected token. A constructor, method, accessor, or property was expected.
    });
  }

  static _stringifyCacheKey(cacheKey: ProjectCacheKey): string {
    return `${cacheKey.userId}/${cacheKey.cloudProjectId}`;
  }

  _initializeDatabase() {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'.
    if (!this.databasePromise) {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'.
      this.databasePromise = new Promise<IDBDatabase>(
        (resolve: (result: Promise<IDBDatabase> | IDBDatabase) => void, reject: (error?: any) => void) => {
          const request = window.indexedDB.open(CLOUD_PROJECT_AUTOSAVE_CACHE_KEY);
// @ts-expect-error - TS2322 - Type 'Event | undefined' is not assignable to type '((this: IDBRequest<IDBDatabase>, ev: Event) => any) | null'. | TS1005 - ';' expected. | TS7006 - Parameter 'any' implicitly has an 'any' type.
          request.onsuccess = event: any => {
            if (
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'result' does not exist on type 'EventTarget'.
              !event.target.result.objectStoreNames.contains(objectStoreScope)
            ) {
              // The onUpgradeNeeded is called before the success event so the object
              // store should exist.
              console.error(
                `Couldn't find the object store ${objectStoreScope}. An issue must have happened when creating the database.`
              );
            }
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'result' does not exist on type 'EventTarget'.
            resolve(event.target.result);
          };
// @ts-expect-error - TS2322 - Type 'Event | undefined' is not assignable to type '((this: IDBRequest<IDBDatabase>, ev: Event) => any) | null'. | TS1005 - ';' expected. | TS7006 - Parameter 'any' implicitly has an 'any' type.
          request.onerror = event: any => {
            console.error('IndexedDB could not be opened:', event);
            reject(event);
          };
// @ts-expect-error - TS2322 - Type 'Event | undefined' is not assignable to type '((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null'. | TS1005 - ';' expected. | TS7006 - Parameter 'any' implicitly has an 'any' type.
          request.onupgradeneeded = event: any => {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'result' does not exist on type 'EventTarget'.
            const db = event.target.result;

            if (!db.objectStoreNames.contains(objectStoreScope)) {
              // The object store can only be created in the onUpgradeNeeded event.
              // This event is called after the database is created and before the success event.
              // If, for some reason, the object store creation failed at the time the
              // database was created, the database will be in a transition state and
              // ProjectCache instances will always fail.
              db.createObjectStore(objectStoreScope, { keyPath: keyName });
            }
          };
        },
      );
    }
    return this.databasePromise;
  }

  async _getEntry(cacheKey: ProjectCacheKey) {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'.
    const database = await this._initializeDatabase();
    return new Promise((resolve: (result: Promise<never>) => void, reject: (error?: any) => void) => {
      try {
        const transaction = database.transaction(objectStoreScope, 'readonly');
        const key = ProjectCache._stringifyCacheKey(cacheKey);
        const request = transaction.objectStore(objectStoreScope).get(key);
// @ts-expect-error - TS1005 - ';' expected.
        request.onsuccess = event: any => {
          resolve(event.target.result);
        };
// @ts-expect-error - TS1005 - ';' expected.
        request.onerror = event: any => {
          console.error(
            'An error occurred while reading from indexedDB:',
            event
          );
          reject(event);
        };
      } catch (error: any) {
        // An error might occur when opening the transaction (if the object store
        // does not exist for instance).
        console.error('An error occurred while reading from indexedDB:', error);
        reject(error);
      }
    });
  }

  async get(cacheKey: ProjectCacheKey): Promise<string | null> {
    const entry = await this._getEntry(cacheKey);
// @ts-expect-error - TS7006 - Parameter '(Missing)' implicitly has an 'any' type. | TS1003 - Identifier expected. | TS7006 - Parameter 'entry' implicitly has an 'any' type. | TS1005 - '{' expected. | TS1005 - ':' expected. | TS1005 - ',' expected.
    if (!entry) return null;
    const serializedProject = entry.project;
    return serializedProject;
  }

  async getCreationDate(cacheKey: ProjectCacheKey): Promise<number | null> {
    const entry = await this._getEntry(cacheKey);
// @ts-expect-error - TS7006 - Parameter '(Missing)' implicitly has an 'any' type. | TS1003 - Identifier expected. | TS7006 - Parameter 'entry' implicitly has an 'any' type. | TS1005 - '{' expected. | TS1005 - ':' expected. | TS1005 - ',' expected.
    if (!entry) return null;
    const entryCreationDate = entry.createdAt;
    return entryCreationDate;
  }

  async put(cacheKey: ProjectCacheKey, project: gdProject): Promise<void> {
    const database = await this._initializeDatabase();

// @ts-expect-error - TS1005 - ':' expected.
    return new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
      try {
        const transaction = database.transaction(objectStoreScope, 'readwrite');
        const key = ProjectCache._stringifyCacheKey(cacheKey);
// @ts-expect-error - TS1005 - ';' expected. | TS7006 - Parameter 'any' implicitly has an 'any' type.
        transaction.oncomplete = event: any => {
// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
          resolve();
        };
// @ts-expect-error - TS1005 - ';' expected. | TS7006 - Parameter 'any' implicitly has an 'any' type.
        transaction.onerror = event: any => {
          console.error('An error occurred while writing to indexedDB:', event);
          reject(event);
        };
        transaction.objectStore(objectStoreScope).put({
          [keyName]: key,
          project: serializeToJSON(project),
          createdAt: Date.now(),
        });
      } catch (error: any) {
        // An error might occur when opening the transaction (if the object store
        // does not exist for instance).
        console.error('An error occurred while writing to indexedDB:', error);
        reject(error);
      }
// @ts-expect-error - TS1005 - ',' expected.
    });
  }
// @ts-expect-error - TS1128 - Declaration or statement expected.
}

export default ProjectCache;
