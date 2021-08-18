// package: pb
// file: api.jd.ddx.proto

import * as api_jd_ddx_pb from "./api.jd.ddx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type JdApiServicePromotionByUnionID = {
  readonly methodName: string;
  readonly service: typeof JdApiService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_jd_ddx_pb.PromotionByUnionIDRequest;
  readonly responseType: typeof api_jd_ddx_pb.PromotionByUnionIDResponse;
};

export class JdApiService {
  static readonly serviceName: string;
  static readonly PromotionByUnionID: JdApiServicePromotionByUnionID;
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

export class JdApiServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  promotionByUnionID(
    requestMessage: api_jd_ddx_pb.PromotionByUnionIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_jd_ddx_pb.PromotionByUnionIDResponse|null) => void
  ): UnaryResponse;
  promotionByUnionID(
    requestMessage: api_jd_ddx_pb.PromotionByUnionIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_jd_ddx_pb.PromotionByUnionIDResponse|null) => void
  ): UnaryResponse;
}

