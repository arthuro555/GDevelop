/*
 * GDevelop JS Platform
 * Copyright 2013-2016 Florian Rival (Florian.Rival@gmail.com). All rights reserved.
 * This project is released under the MIT License.
 */
namespace gdjs {
  const logger = new gdjs.Logger('Variables');

  /**
   * Children of a structure.
   */
  type Children = Record<string, gdjs.Variable>;

  /**
   * A Variable is an object storing a value (number or a string) or children variables.
   */
  export class Variable {
    // TODO: convert this to an integer to speed up the type checks at runtime.
    _type: VariableType = 'number';
    _value: float = 0;
    _str: string = '0';
    _bool: boolean = false;
    _children: Children = {};
    _childrenArray: gdjs.Variable[] = [];
    _file: FileDescriptor | null = null;
    _undefinedInContainer: boolean = false;

    // When synchronised over the network, this defines which player is the owner of the variable.
    // Default is 0, meaning that the variable is owned by the host.
    // If null, the variable is not synchronised over the network.
    _playerNumber: number | null = 0;

    /**
     * @param [varData] The optional initial content of the variable.
     */
    constructor(varData?: VariableData) {
      this.reinitialize(varData);
    }

    reinitialize(varData?: VariableData | undefined) {
      this._type = 'number';
      this._value = 0;
      this._str = '0';
      this._bool = false;
      this._children = {};
      this._childrenArray = [];
      this._undefinedInContainer = false;

      if (varData !== undefined) {
        this._type = varData.type || 'number';
        if (this._type === 'number') {
          this._value = parseFloat((varData.value as string) || '0');
          // Protect against NaN.
          if (this._value !== this._value) this._value = 0;
        } else if (this._type === 'string') {
          this._str = '' + varData.value || '0';
        } else if (this._type === 'boolean') {
          this._bool = !!varData.value;
        } else if (this._type === 'structure') {
          if (varData.children !== undefined) {
            for (var i = 0, len = varData.children.length; i < len; ++i) {
              var childData = varData.children[i];
              if (childData.name === undefined) continue;
              this._children[childData.name] = new gdjs.Variable(childData);
            }
          }
        } else if (this._type === 'array' && varData.children) {
          for (const childData of varData.children)
            this._childrenArray.push(new gdjs.Variable(childData));
        }
      }
    }

    /**
     * Return true if the variable type is a primitive type.
     */
    static isPrimitive(
      type: VariableType
    ): type is 'string' | 'number' | 'boolean' | 'file' {
      return (
        type === 'string' ||
        type === 'number' ||
        type === 'boolean' ||
        type === 'file'
      );
    }

    /**
     * Deeply copies a variable into another.
     * @param source The source variable.
     * @param target The target variable.
     * @param merge Should the target be merged with the source, or be an exact copy?
     * @returns The target variable.
     */
    static copy(
      source: gdjs.Variable,
      target: gdjs.Variable,
      merge?: boolean
    ): gdjs.Variable {
      if (!merge) target.clearChildren();
      target.castTo(source.getType());

      if (source.isPrimitive()) {
        target.setValue(source.getValue());
      } else if (source.getType() === 'structure') {
        const children = source.getAllChildren();
        for (const p in children) {
          if (children.hasOwnProperty(p))
            target.addChild(p, children[p].clone());
        }
      } else if (source.getType() === 'array') {
        for (const p of source.getAllChildrenArray())
          target.pushVariableCopy(p);
      } else if (source.getType() === 'file') {
        target._file = source._file;
      }

      return target;
    }

    /**
     * Converts a JavaScript object into a value compatible
     * with GDevelop variables and store it inside this variable.
     * @param obj - The value to convert.
     */
    fromJSObject(obj: any): this {
      if (obj === null) {
        this.setString('null');
      } else if (typeof obj === 'number') {
        if (Number.isNaN(obj)) {
          logger.warn('Variables cannot be set to NaN, setting it to 0.');
          this.setNumber(0);
        } else {
          this.setNumber(obj);
        }
      } else if (typeof obj === 'string') {
        this.setString(obj);
      } else if (typeof obj === 'undefined') {
        // Do not modify the variable, as there is no value to set it to.
      } else if (typeof obj === 'boolean') {
        this.setBoolean(obj);
      } else if (
        Array.isArray(obj) ||
        (ArrayBuffer.isView(obj) && !(obj instanceof DataView))
      ) {
        this.castTo('array');
        this.clearChildren();
        for (const i in obj) this.getChild(i).fromJSObject(obj[i]);
      } else if (typeof obj === 'object') {
        if (obj instanceof File) {
          this._type = 'file';
          this._file = new FileDescriptor.WebFileFD(obj);
        } else if (obj instanceof Blob) {
          this._type = 'file';
          this._file = new FileDescriptor.BlobFD(obj);
        } else {
          this.castTo('structure');
          this.clearChildren();
          for (var p in obj)
            if (obj.hasOwnProperty(p)) this.getChild(p).fromJSObject(obj[p]);
        }
      } else if (typeof obj === 'symbol') {
        this.setString(obj.toString());
      } else if (typeof obj === 'bigint') {
        if (obj > Number.MAX_SAFE_INTEGER)
          logger.warn(
            'Error while converting JS variable to GDevelop variable: Integers bigger than ' +
              Number.MAX_SAFE_INTEGER +
              " aren't supported by GDevelop variables, it will be reduced to that size."
          );
        // @ts-ignore
        variable.setNumber(parseInt(obj, 10));
      } else if (typeof obj === 'function') {
        logger.error(
          'Error while converting JS variable to GDevelop variable: Impossible to set variable value to a function.'
        );
      } else {
        logger.error(
          'Error while converting JS variable to GDevelop variable: Cannot identify type of object ' +
            obj
        );
      }
      return this;
    }

    /**
     * Unserialize a JSON string into this variable.
     *
     * This just logs an error if the JSON is invalid.
     *
     * @param json - A JSON string.
     */
    fromJSON(json: string): this {
      try {
        var obj = JSON.parse(json);
      } catch (e) {
        logger.error('Unable to parse JSON: ' + json + e);
        return this;
      }
      this.fromJSObject(obj);
      return this;
    }

    /**
     * Converts this variable into an equivalent JavaScript object.
     * @returns A JavaScript object equivalent to the variable.
     */
    toJSObject(): any {
      switch (this._type) {
        case 'string':
          return this.getAsString();
        case 'number':
          return this.getAsNumber();
        case 'boolean':
          return this.getAsBoolean();
        case 'structure':
          const obj = {};
          for (const name in this._children)
            obj[name] = this._children[name].toJSObject();
          return obj;
        case 'array':
          const arr: any[] = [];
          for (const item of this._childrenArray) {
            // item can be undefined if there are empty elements in the array.
            // A variable can have empty items in its children array if one inserts
            // a variable at an index greater than highest index. All the array elements
            // in the gap will be empty elements.
            arr.push(item === undefined ? undefined : item.toJSObject());
          }
          return arr;
        case 'file':
          // Since this method is used mostly i.a. for toJSON, we cannot just use the
          // opaque, not readily accessible, huge File here. A text representation
          // (e.g. "[File hello.png (image/png)]") should be good enough here.
          // The real "JSObject" can ge obtained with {@link getFileDescriptor}.
          return this.getAsString();
      }
    }

    /**
     * Return true if the type of the variable is a primitive type.
     */
    isPrimitive() {
      return gdjs.Variable.isPrimitive(this._type);
    }

    /**
     * Returns a deep copy of this variable.
     */
    clone(): gdjs.Variable {
      return gdjs.Variable.copy(this, new gdjs.Variable());
    }

    /**
     * Used (usually by gdjs.VariablesContainer) to set that the variable must be
     * considered as not existing in the container.
     */
    setUndefinedInContainer() {
      this._undefinedInContainer = true;
    }

    /**
     * Check if the variable must be considered as not existing in its container
     * (usually a gdjs.VariablesContainer).
     * @return true if the container must consider that the variable does not exist.
     */
    isUndefinedInContainer(): boolean {
      return this._undefinedInContainer;
    }

    /**
     * Converts the variable into another type.
     * @param newType The new type of the variable
     */
    castTo(newType: VariableType) {
      // Other types do not matter too much, but we do not want to leak a FileDescriptor,
      // since these can occupy multiple MBs of memory.
      if (this._type === 'file' && newType !== 'file') {
        this._file = null;
      }

      if (newType === 'string') this.setString(this.getAsString());
      else if (newType === 'number') this.setNumber(this.getAsNumber());
      else if (newType === 'boolean') this.setBoolean(this.getAsBoolean());
      else if (newType === 'structure') {
        if (this._type === 'structure') return;
        this._children = this.getAllChildren();
        this._type = 'structure';
      } else if (newType === 'array') {
        if (this._type === 'array') return;
        this._childrenArray = this.getAllChildrenArray();
        this._type = 'array';
      } else if (newType === 'file') {
        logger.warn(
          "Cannot cast to type 'file': A file variable must always have an associated FileDescriptor, " +
            'use Variable#storeFileReference with a FileDescriptor instead of Variable#cast.'
        );
      }
    }

    /**
     * Get the child with the specified name or at the specified index.
     *
     * If the variable is an array, prefer `getChildAt`.
     * If the variable is a structure, prefer `getChildNamed`.
     *
     * If the variable has not the specified child, an empty variable with the specified name
     * (or index) is added as child.
     *
     * @returns The child variable
     */
    getChild(childName: string | number): gdjs.Variable {
      if (this._type === 'array')
        return this.getChildAt(
          // @ts-ignore
          Number.isInteger(childName) ? childName : parseInt(childName, 10) || 0
        );
      else {
        if (this._type !== 'structure') this.castTo('structure');
        return this.getChildNamed('' + childName);
      }
    }

    /**
     * Get the child with the specified name.
     *
     * If the variable has not the specified child, an empty variable with the specified name
     * is added as child.
     *
     * @returns The child variable
     */
    getChildNamed(childName: string): gdjs.Variable {
      const child = this._children[childName];
      if (child === undefined || child === null)
        return (this._children[childName] = new gdjs.Variable());

      return child;
    }

    /**
     * Add a child variable with the specified name.
     *
     * If there is an existing child variable with this name, it is erased.
     * @param childName The name of the variable to add
     * @param childVariable The variable to add as a child
     * @returns The variable (for chaining calls)
     */
    addChild(childName: string, childVariable: gdjs.Variable): this {
      if (this._type !== 'structure') this.castTo('structure');

      this._children[childName] = childVariable;
      return this;
    }

    /**
     * Return the child in a variable.
     *
     * Check if the variable has the specified children
     * @return true if variable has the children with the specified name
     */
    hasChild(childName: string): boolean {
      return (
        this._type === 'structure' && this._children.hasOwnProperty(childName)
      );
    }

    /**
     * Remove the child with the specified name.
     *
     * If the variable has not the specified child, nothing is done.
     * @param childName The name of the child to be removed
     */
    removeChild(childName: string) {
      if (this._type !== 'structure') return;
      delete this._children[childName];
    }

    /**
     * Remove all the children.
     */
    clearChildren() {
      this._children = {};
      this._childrenArray = [];
    }

    /**
     * Replaces all the children with a new map of children.
     * @param newChildren The map of new children.
     */
    replaceChildren(newChildren: Children) {
      this._type = 'structure';
      this._children = newChildren;
    }

    /**
     * Replaces all the children with a new array of children.
     * @param newChildren The array of new children.
     */
    replaceChildrenArray(newChildren: gdjs.Variable[]) {
      this._type = 'array';
      this._childrenArray = newChildren;
    }

    /**
     * Get the value of the variable, considered as a number
     * @return The number stored in the variable
     */
    getAsNumber(): float {
      if (this._type !== 'number') {
        let number = 0;
        if (this._type === 'string') number = parseFloat(this._str);
        else if (this._type === 'boolean') number = this._bool ? 1 : 0;

        return number === number ? number : 0; //Ensure NaN is not returned as a value.
      }

      return this._value;
    }

    /**
     * Change the value of the variable, considered as a number
     * @param newValue The new value to be set
     */
    setNumber(newValue: float) {
      this._type = 'number';
      //@ts-ignore parseFloat does accept numbers.
      newValue = parseFloat(newValue);
      this._value = newValue === newValue ? newValue : 0; // Prevent NaN
    }

    /**
     * Get the value of the variable, considered as a string
     * @return The string stored in the variable
     */
    getAsString(): string {
      if (this._type !== 'string') {
        if (this._type === 'number') return this._value.toString();
        else if (this._type === 'boolean') return this._bool ? 'true' : 'false';
        else if (this._type === 'structure') return '[Structure]';
        else if (this._type === 'array') return '[Array]';
        else if (this._type === 'file')
          return `[File ${this._file!.name} (${this._file!.mimeType})]`;
        else return '';
      }

      return this._str;
    }

    /**
     * Change the value of the variable, considered as a string
     * @param newValue The new string to be set
     */
    setString(newValue: string): void {
      this._type = 'string';
      this._str = '' + newValue;
    }

    /**
     * Get the value of the variable, as a number if it's one,
     * or as a string (if it's a string or something else)
     *
     * In most cases, prefer calling `getAsNumber` or `getAsString` directly.
     * This is a fallback in case a variable type can't be known statically for sure,
     * like `getValue`.
     *
     * @private
     */
    getAsNumberOrString(): number | string {
      if (this._type === 'number') return this._value;
      return this.getAsString();
    }

    /**
     * Get the value of the variable, considered as a boolean
     * @return The boolean value of the variable.
     */
    getAsBoolean(): boolean {
      if (this._type !== 'boolean') {
        if (this._type === 'number') return this._value !== 0;
        else if (this._type === 'string')
          return this._str !== '0' && this._str !== '' && this._str !== 'false';
        else return true;
      }

      return this._bool;
    }

    /**
     * Change the value of the variable, considered as a boolean
     * @param newValue The new boolean to be set.
     */
    setBoolean(newValue: boolean) {
      this._type = 'boolean';
      this._bool = !!newValue;
    }

    /**
     * Toggle the value of the variable, considered as a boolean.
     */
    toggle() {
      this.setBoolean(!this.getAsBoolean());
    }

    /**
     * Sets the primitive value using the setter of the current type.
     * @param newValue The primitive value of the variable.
     */
    setValue(newValue: string | float | boolean | FileDescriptor) {
      if (newValue instanceof gdjs.FileDescriptor) {
        this._type = 'file';
        this._file = newValue;
        return;
      }

      if (this._type === 'string') this.setString(newValue as string);
      else if (this._type === 'number') this.setNumber(newValue as float);
      else if (this._type === 'boolean') this.setBoolean(newValue as boolean);
    }

    /**
     * Gets the primitive value using the getter of the current type.
     */
    getValue(): string | float | boolean | FileDescriptor {
      return this._type === 'number'
        ? this.getAsNumber()
        : this._type === 'boolean'
        ? this.getAsBoolean()
        : this._type === 'file'
        ? this._file!
        : this.getAsString();
    }

    /**
     * Return true if the variable is a structure.
     * @return true if the variable is a structure.
     * @deprecated Use {@link gdjs.Variable.getType} instead.
     */
    isStructure(): boolean {
      return this._type === 'structure';
    }

    /**
     * Return true if the variable is a number.
     * @return true if the variable is a number.
     * @deprecated Use {@link gdjs.Variable.getType} instead.
     */
    isNumber(): boolean {
      return this._type === 'number';
    }

    /**
     * Returns the type of the variable.
     */
    getType(): VariableType {
      return this._type;
    }

    /**
     * Return the object containing all the children of the variable.
     * @return All the children of the variable
     */
    getAllChildren(): Children {
      return this._type === 'structure'
        ? this._children
        : this._type === 'array'
        ? ((Object.assign({}, this._childrenArray) as unknown) as Children)
        : {};
    }

    /**
     * Return an Array containing all the children of the variable.
     */
    getAllChildrenArray(): gdjs.Variable[] {
      return this._type === 'structure'
        ? Object.values(this._children)
        : this._type === 'array'
        ? this._childrenArray
        : [];
    }

    /**
     * Return the length of the collection.
     */
    getChildrenCount(): integer {
      return this._type === 'structure'
        ? Object.keys(this._children).length
        : this._type === 'array'
        ? this._childrenArray.length
        : 0;
    }

    /**
     * Add the given number to the variable value
     * @param val the number to add
     */
    add(val: float) {
      this.setNumber(this.getAsNumber() + val);
    }

    /**
     * Subtract the given number to the variable value
     * @param val the number to subtract
     */
    sub(val: float) {
      this.setNumber(this.getAsNumber() - val);
    }

    /**
     * Multiply the variable value by the given number
     * @param val the factor
     */
    mul(val: float) {
      this.setNumber(this.getAsNumber() * val);
    }

    /**
     * Divide the variable value by the given number
     * @param val the divisor
     */
    div(val: float) {
      this.setNumber(this.getAsNumber() / val);
    }

    /**
     * Concatenate the given string at the end of the variable value
     * @param str the string to append
     */
    concatenateString(str: string) {
      this.setString(this.getAsString() + str);
    }

    /**
     * @deprecated
     * @private
     * @alias concatenateString
     */
    concatenate(str: string) {
      this.setString(this.getAsString() + str);
    }

    /**
     * Get a variable at a given index of the array.
     */
    getChildAt(index: integer) {
      if (this._type !== 'array') this.castTo('array');

      if (
        this._childrenArray[index] === undefined ||
        this._childrenArray[index] === null
      )
        this._childrenArray[index] = new gdjs.Variable();
      return this._childrenArray[index];
    }

    /**
     * Removes a variable at a given index of the array.
     */
    removeAtIndex(index: integer) {
      if (this._type === 'array') this._childrenArray.splice(index, 1);
    }

    /**
     * Pushes a copy of a variable into the array.
     */
    pushVariableCopy(variable: gdjs.Variable) {
      if (this._type !== 'array') this.castTo('array');

      this._childrenArray.push(variable.clone());
    }

    /**
     * Pushes a variable into the array without duplicating it first.
     * This should only be used by generated code.
     */
    _pushVariable(variable: gdjs.Variable) {
      if (this._type !== 'array') this.castTo('array');

      this._childrenArray.push(variable);
    }

    /**
     * Pushes a value into the array.
     */
    pushValue(value: string | float | boolean) {
      if (this._type !== 'array') this.castTo('array');

      this._childrenArray.push(
        new gdjs.Variable({
          type: typeof value as 'string' | 'number' | 'boolean',
          value,
        })
      );
    }

    /**
     * Makes the variable a "File" variable, which holds a reference to a
     * (not necessarily readily avvailable) file, similarly to JavaScript's "{@link Blob}"
     *
     * @param fileDescriptor The FileDescriptor for accessing the file contents and metadata.
     */
    storeFileReference(fileDescriptor: FileDescriptor): void {
      this._type = 'file';
      this._file = fileDescriptor;
    }

    /**
     * Returns the {@link FileDescriptor} stored by the variable.
     * @returns The {@link FileDescriptor}, or null if the variable is not a file variable.
     */
    getFileDescriptor(): FileDescriptor | null {
      if (this._type !== 'file') {
        logger.error(
          'Tried to get a file from a non-file variable! Something might go wrong...'
        );
      }

      // this._file should always be null when the type is not 'file', but better safe than sorry.
      return this._type === 'file' ? this._file : null;
    }

    getPlayerOwnership(): number | null {
      return this._playerNumber;
    }

    setPlayerOwnership(playerNumber: number) {
      this._playerNumber = playerNumber;
    }

    disableSynchronization() {
      this._playerNumber = null;
    }
  }

  /**
   * A GDevelop generic 'File' variable internal representation.
   * There are multiple implementations to support different common JavaScript backing stores.
   */
  export abstract class FileDescriptor {
    /**
     * The file's name.
     * Must be set by the constructor.
     * If provided by the backing store, should be set automatically.
     * Otherwise, should be left to the user to optionally decide, with 'unknown' as a default.
     */
    public readonly name: string;
    /**
     * The file's MIME type.
     * Must be set by the constructor.
     * If provided by the backing store, should be set automatically.
     * Otherwise, should be left to the user to optionally decide, with 'application/octet-stream'
     * as a default, unless the provider allows infering a more fitting one.
     */
    public readonly mimeType: string;

    /** To be overridden and called by the Provider to set the name and MIME type. */
    constructor(name: string, mimeType: string) {
      this.name = name;
      this.mimeType = mimeType;
    }

    /**
     * Get the file's contents interpreted as an array of bytes.
     */
    abstract getBinaryContents(): Promise<ArrayBuffer>;
    /**
     * Get the file's contents interpreted as UTF-8 text.
     */
    abstract getAsText(): Promise<string>;
  }

  export namespace FileDescriptor {
    /**
     * A FileDescriptor for JavaScript {@link Blob}s.
     */
    export class BlobFD extends FileDescriptor {
      constructor(private readonly blob: Blob, name: string = 'unknown') {
        super('unknown', blob.type);
      }
      getBinaryContents(): Promise<ArrayBuffer> {
        return this.blob.arrayBuffer();
        //.then((ab) => new Uint8Array(ab));
      }
      getAsText(): Promise<string> {
        return this.blob.text();
      }
    }

    /**
     * A FileDescriptor for JavaScript {@link File}s.
     */
    export class WebFileFD extends FileDescriptor {
      constructor(private readonly file: File) {
        super(file.name, file.type);
      }
      getBinaryContents(): Promise<ArrayBuffer> {
        return this.file.arrayBuffer();
        //.then((ab) => new Uint8Array(ab));
      }
      getAsText(): Promise<string> {
        return this.file.text();
      }
    }

    const textEncoder = new TextEncoder();
    /**
     * A FileDescriptor for text files backed by an in-memory string.
     */
    export class TextFD extends FileDescriptor {
      constructor(private readonly contents: string, name: string = 'unknown') {
        super(name, 'text/plain');
      }
      getBinaryContents(): Promise<ArrayBuffer> {
        return Promise.resolve(textEncoder.encode(this.contents));
      }
      getAsText(): Promise<string> {
        return Promise.resolve(this.contents);
      }
    }

    const textDecoder = new TextDecoder();
    /**
     * A FileDescriptor for text files backed by an in-memory ArrayBuffer.
     */
    export class ArrayFD extends FileDescriptor {
      constructor(
        private readonly contents: ArrayBuffer,
        name: string = 'unknown',
        mimeType: string = 'application/octet-stream'
      ) {
        super(name, mimeType);
      }
      getBinaryContents(): Promise<ArrayBuffer> {
        return Promise.resolve(this.contents);
      }
      getAsText(): Promise<string> {
        return Promise.resolve(textDecoder.decode(this.contents));
      }
    }

    /**
     * A FileDescriptor for text files backed by an in-memory ArrayBuffer.
     *
     * This is voluntarily kept simple, mirroring the "HTTP Request"
     * action, but for binary content instead of text content.
     *
     * The Advanced HTTP action can be used for making more complex HTTP
     * requests.
     */
    export class UrlFD extends FileDescriptor {
      private state: 'waiting' | 'fetching' | 'ready' = 'waiting';
      private blob: Blob | null = null;
      private fetching: Promise<void> | null = null;

      /**
       * @param url The URL to the file to fetch.
       * @param lazy If true, the file will not be fetched until its data is accessed.
       */
      constructor(private readonly url: string, lazy: boolean) {
        super(
          new URL(url).pathname?.split('/').pop() ?? 'unknown',
          'application/octet-stream'
        );
        if (!lazy) this.fetching = this.fetch();
      }

      private async fetch() {
        this.state = 'fetching';
        try {
          const request = await fetch(this.url);
          this.blob = await request.blob();
        } catch (e) {
          logger.error("Couldn't load ");
        }
        this.state = 'ready';
      }
      private async ensureFetched() {
        if (this.state === 'waiting') {
          await (this.fetching = this.fetch());
        }
        if (this.state === 'fetching') await this.fetching;
        this.fetching = null;
      }

      async getBinaryContents(): Promise<ArrayBuffer> {
        await this.ensureFetched();
        if (!this.blob) return new Uint8Array(0);
        return this.blob.arrayBuffer();
        //.then((ab) => new Uint8Array(ab));
      }
      async getAsText(): Promise<string> {
        await this.ensureFetched();
        if (!this.blob) return '';
        return this.blob.text();
      }
    }
  }
}
