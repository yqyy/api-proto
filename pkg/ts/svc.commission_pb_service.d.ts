// package: commspb
// file: svc.commission.proto

import * as svc_commission_pb from "./svc.commission_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CommissionServiceUserBindOrder = {
  readonly methodName: string;
  readonly service: typeof CommissionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof svc_commission_pb.UserBindOrderReq;
  readonly responseType: typeof svc_commission_pb.UserBindOrderRes;
};

type CommissionServiceUserBindPhone = {
  readonly methodName: string;
  readonly service: typeof CommissionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof svc_commission_pb.UserBindPhoneReq;
  readonly responseType: typeof svc_commission_pb.UserBindPhoneRes;
};

type CommissionServiceUserQueryBalance = {
  readonly methodName: string;
  readonly service: typeof CommissionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof svc_commission_pb.UserQueryBalanceReq;
  readonly responseType: typeof svc_commission_pb.UserQueryBalanceRes;
};

type CommissionServiceUserWithdrawMoney = {
  readonly methodName: string;
  readonly service: typeof CommissionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof svc_commission_pb.UserDrawMoneyReq;
  readonly responseType: typeof svc_commission_pb.UserDrawMoneyReq;
};

export class CommissionService {
  static readonly serviceName: string;
  static readonly UserBindOrder: CommissionServiceUserBindOrder;
  static readonly UserBindPhone: CommissionServiceUserBindPhone;
  static readonly UserQueryBalance: CommissionServiceUserQueryBalance;
  static readonly UserWithdrawMoney: CommissionServiceUserWithdrawMoney;
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

export class CommissionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  userBindOrder(
    requestMessage: svc_commission_pb.UserBindOrderReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserBindOrderRes|null) => void
  ): UnaryResponse;
  userBindOrder(
    requestMessage: svc_commission_pb.UserBindOrderReq,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserBindOrderRes|null) => void
  ): UnaryResponse;
  userBindPhone(
    requestMessage: svc_commission_pb.UserBindPhoneReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserBindPhoneRes|null) => void
  ): UnaryResponse;
  userBindPhone(
    requestMessage: svc_commission_pb.UserBindPhoneReq,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserBindPhoneRes|null) => void
  ): UnaryResponse;
  userQueryBalance(
    requestMessage: svc_commission_pb.UserQueryBalanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserQueryBalanceRes|null) => void
  ): UnaryResponse;
  userQueryBalance(
    requestMessage: svc_commission_pb.UserQueryBalanceReq,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserQueryBalanceRes|null) => void
  ): UnaryResponse;
  userWithdrawMoney(
    requestMessage: svc_commission_pb.UserDrawMoneyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserDrawMoneyReq|null) => void
  ): UnaryResponse;
  userWithdrawMoney(
    requestMessage: svc_commission_pb.UserDrawMoneyReq,
    callback: (error: ServiceError|null, responseMessage: svc_commission_pb.UserDrawMoneyReq|null) => void
  ): UnaryResponse;
}

