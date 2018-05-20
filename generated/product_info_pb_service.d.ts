// package: products
// file: product_info.proto

import * as product_info_pb from "./product_info_pb";
import {grpc} from "grpc-web-client";

type ProductServiceList = {
  readonly methodName: string;
  readonly service: typeof ProductService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_info_pb.Empty;
  readonly responseType: typeof product_info_pb.ProductList;
};

type ProductServiceInsert = {
  readonly methodName: string;
  readonly service: typeof ProductService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_info_pb.Product;
  readonly responseType: typeof product_info_pb.Product;
};

type ProductServiceGet = {
  readonly methodName: string;
  readonly service: typeof ProductService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_info_pb.ProductId;
  readonly responseType: typeof product_info_pb.Product;
};

type ProductServiceRemove = {
  readonly methodName: string;
  readonly service: typeof ProductService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_info_pb.ProductId;
  readonly responseType: typeof product_info_pb.TextResponse;
};

export class ProductService {
  static readonly serviceName: string;
  static readonly List: ProductServiceList;
  static readonly Insert: ProductServiceInsert;
  static readonly Get: ProductServiceGet;
  static readonly Remove: ProductServiceRemove;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class ProductServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  list(
    requestMessage: product_info_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: product_info_pb.ProductList|null) => void
  ): void;
  list(
    requestMessage: product_info_pb.Empty,
    callback: (error: ServiceError, responseMessage: product_info_pb.ProductList|null) => void
  ): void;
  insert(
    requestMessage: product_info_pb.Product,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: product_info_pb.Product|null) => void
  ): void;
  insert(
    requestMessage: product_info_pb.Product,
    callback: (error: ServiceError, responseMessage: product_info_pb.Product|null) => void
  ): void;
  get(
    requestMessage: product_info_pb.ProductId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: product_info_pb.Product|null) => void
  ): void;
  get(
    requestMessage: product_info_pb.ProductId,
    callback: (error: ServiceError, responseMessage: product_info_pb.Product|null) => void
  ): void;
  remove(
    requestMessage: product_info_pb.ProductId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: product_info_pb.TextResponse|null) => void
  ): void;
  remove(
    requestMessage: product_info_pb.ProductId,
    callback: (error: ServiceError, responseMessage: product_info_pb.TextResponse|null) => void
  ): void;
}

