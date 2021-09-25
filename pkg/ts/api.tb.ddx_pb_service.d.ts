// package: tbpb
// file: api.tb.ddx.proto

import * as api_tb_ddx_pb from "./api.tb.ddx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TbApiServiceSearchGoods = {
  readonly methodName: string;
  readonly service: typeof TbApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_tb_ddx_pb.SearchGoodsRequest;
  readonly responseType: typeof api_tb_ddx_pb.SearchGoodsResponse;
};

type TbApiServicePromoteByID = {
  readonly methodName: string;
  readonly service: typeof TbApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_tb_ddx_pb.PromoteURLByIDRequest;
  readonly responseType: typeof api_tb_ddx_pb.PromoteURLResponse;
};

type TbApiServicePromoteByTKL = {
  readonly methodName: string;
  readonly service: typeof TbApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_tb_ddx_pb.PromoteURLByTKLRequest;
  readonly responseType: typeof api_tb_ddx_pb.PromoteURLResponse;
};

type TbApiServicePublisherGet = {
  readonly methodName: string;
  readonly service: typeof TbApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_tb_ddx_pb.PublisherGetRequest;
  readonly responseType: typeof api_tb_ddx_pb.PublisherGetResponse;
};

type TbApiServicePublisherSave = {
  readonly methodName: string;
  readonly service: typeof TbApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_tb_ddx_pb.PublisherSaveRequest;
  readonly responseType: typeof api_tb_ddx_pb.PublisherSaveResponse;
};

type TbApiServiceSyncOrderDetail = {
  readonly methodName: string;
  readonly service: typeof TbApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_tb_ddx_pb.OrderDetailRequest;
  readonly responseType: typeof api_tb_ddx_pb.OrderDetailResponse;
};

export class TbApiService {
  static readonly serviceName: string;
  static readonly SearchGoods: TbApiServiceSearchGoods;
  static readonly PromoteByID: TbApiServicePromoteByID;
  static readonly PromoteByTKL: TbApiServicePromoteByTKL;
  static readonly PublisherGet: TbApiServicePublisherGet;
  static readonly PublisherSave: TbApiServicePublisherSave;
  static readonly SyncOrderDetail: TbApiServiceSyncOrderDetail;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TbApiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  searchGoods(
    requestMessage: api_tb_ddx_pb.SearchGoodsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.SearchGoodsResponse|null) => void
  ): UnaryResponse;
  searchGoods(
    requestMessage: api_tb_ddx_pb.SearchGoodsRequest,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.SearchGoodsResponse|null) => void
  ): UnaryResponse;
  promoteByID(
    requestMessage: api_tb_ddx_pb.PromoteURLByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PromoteURLResponse|null) => void
  ): UnaryResponse;
  promoteByID(
    requestMessage: api_tb_ddx_pb.PromoteURLByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PromoteURLResponse|null) => void
  ): UnaryResponse;
  promoteByTKL(
    requestMessage: api_tb_ddx_pb.PromoteURLByTKLRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PromoteURLResponse|null) => void
  ): UnaryResponse;
  promoteByTKL(
    requestMessage: api_tb_ddx_pb.PromoteURLByTKLRequest,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PromoteURLResponse|null) => void
  ): UnaryResponse;
  publisherGet(
    requestMessage: api_tb_ddx_pb.PublisherGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PublisherGetResponse|null) => void
  ): UnaryResponse;
  publisherGet(
    requestMessage: api_tb_ddx_pb.PublisherGetRequest,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PublisherGetResponse|null) => void
  ): UnaryResponse;
  publisherSave(
    requestMessage: api_tb_ddx_pb.PublisherSaveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PublisherSaveResponse|null) => void
  ): UnaryResponse;
  publisherSave(
    requestMessage: api_tb_ddx_pb.PublisherSaveRequest,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.PublisherSaveResponse|null) => void
  ): UnaryResponse;
  syncOrderDetail(
    requestMessage: api_tb_ddx_pb.OrderDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.OrderDetailResponse|null) => void
  ): UnaryResponse;
  syncOrderDetail(
    requestMessage: api_tb_ddx_pb.OrderDetailRequest,
    callback: (error: ServiceError|null, responseMessage: api_tb_ddx_pb.OrderDetailResponse|null) => void
  ): UnaryResponse;
}

