// package: products
// file: proto/product_info.proto

import * as jspb from "google-protobuf";

export class Product extends jspb.Message {
  getProductid(): number;
  setProductid(value: number): void;

  getCreatedat(): number;
  setCreatedat(value: number): void;

  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    productid: number,
    createdat: number,
    updatedat: number,
    status: string,
    name: string,
  }
}

export class ProductList extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearResultList(): void;
  getResultList(): Array<Product>;
  setResultList(value: Array<Product>): void;
  addResult(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductList.AsObject;
  static toObject(includeInstance: boolean, msg: ProductList): ProductList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductList;
  static deserializeBinaryFromReader(message: ProductList, reader: jspb.BinaryReader): ProductList;
}

export namespace ProductList {
  export type AsObject = {
    total: number,
    resultList: Array<Product.AsObject>,
  }
}

export class ProductId extends jspb.Message {
  getProductid(): number;
  setProductid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductId.AsObject;
  static toObject(includeInstance: boolean, msg: ProductId): ProductId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductId;
  static deserializeBinaryFromReader(message: ProductId, reader: jspb.BinaryReader): ProductId;
}

export namespace ProductId {
  export type AsObject = {
    productid: number,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class TextResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TextResponse): TextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextResponse;
  static deserializeBinaryFromReader(message: TextResponse, reader: jspb.BinaryReader): TextResponse;
}

export namespace TextResponse {
  export type AsObject = {
    message: string,
  }
}

