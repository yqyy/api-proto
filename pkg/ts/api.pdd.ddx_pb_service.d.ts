// package: pddxpb
// file: api.pdd.ddx.proto

import * as api_pdd_ddx_pb from "./api.pdd.ddx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PddApiServiceAuthorityQuery = {
  readonly methodName: string;
  readonly service: typeof PddApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pdd_ddx_pb.AuthorityQueryRequest;
  readonly responseType: typeof api_pdd_ddx_pb.AuthorityQueryResponse;
};

type PddApiServiceCreateMarketingURL = {
  readonly methodName: string;
  readonly service: typeof PddApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pdd_ddx_pb.CreateMarketingURLRequest;
  readonly responseType: typeof api_pdd_ddx_pb.CreateMarketingURLResponse;
};

type PddApiServiceURLConvert = {
  readonly methodName: string;
  readonly service: typeof PddApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pdd_ddx_pb.URLConvertRequest;
  readonly responseType: typeof api_pdd_ddx_pb.URLConvertResponse;
};

export class PddApiService {
  static readonly serviceName: string;
  static readonly AuthorityQuery: PddApiServiceAuthorityQuery;
  static readonly CreateMarketingURL: PddApiServiceCreateMarketingURL;
  static readonly URLConvert: PddApiServiceURLConvert;
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

export class PddApiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authorityQuery(
    requestMessage: api_pdd_ddx_pb.AuthorityQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pdd_ddx_pb.AuthorityQueryResponse|null) => void
  ): UnaryResponse;
  authorityQuery(
    requestMessage: api_pdd_ddx_pb.AuthorityQueryRequest,
    callback: (error: ServiceError|null, responseMessage: api_pdd_ddx_pb.AuthorityQueryResponse|null) => void
  ): UnaryResponse;
  createMarketingURL(
    requestMessage: api_pdd_ddx_pb.CreateMarketingURLRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pdd_ddx_pb.CreateMarketingURLResponse|null) => void
  ): UnaryResponse;
  createMarketingURL(
    requestMessage: api_pdd_ddx_pb.CreateMarketingURLRequest,
    callback: (error: ServiceError|null, responseMessage: api_pdd_ddx_pb.CreateMarketingURLResponse|null) => void
  ): UnaryResponse;
  uRLConvert(
    requestMessage: api_pdd_ddx_pb.URLConvertRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pdd_ddx_pb.URLConvertResponse|null) => void
  ): UnaryResponse;
  uRLConvert(
    requestMessage: api_pdd_ddx_pb.URLConvertRequest,
    callback: (error: ServiceError|null, responseMessage: api_pdd_ddx_pb.URLConvertResponse|null) => void
  ): UnaryResponse;
}

