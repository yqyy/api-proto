// package: commspb
// file: svc.commission.proto

import * as jspb from "google-protobuf";

export class UserBindOrderReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getOrdersn(): string;
  setOrdersn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserBindOrderReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserBindOrderReq): UserBindOrderReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserBindOrderReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserBindOrderReq;
  static deserializeBinaryFromReader(message: UserBindOrderReq, reader: jspb.BinaryReader): UserBindOrderReq;
}

export namespace UserBindOrderReq {
  export type AsObject = {
    userid: string,
    ordersn: string,
  }
}

export class UserBindOrderRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserBindOrderRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserBindOrderRes): UserBindOrderRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserBindOrderRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserBindOrderRes;
  static deserializeBinaryFromReader(message: UserBindOrderRes, reader: jspb.BinaryReader): UserBindOrderRes;
}

export namespace UserBindOrderRes {
  export type AsObject = {
    code: number,
    msg: string,
  }
}

export class UserBindPhoneReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserBindPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserBindPhoneReq): UserBindPhoneReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserBindPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserBindPhoneReq;
  static deserializeBinaryFromReader(message: UserBindPhoneReq, reader: jspb.BinaryReader): UserBindPhoneReq;
}

export namespace UserBindPhoneReq {
  export type AsObject = {
    userid: string,
    phone: string,
  }
}

export class UserBindPhoneRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserBindPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserBindPhoneRes): UserBindPhoneRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserBindPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserBindPhoneRes;
  static deserializeBinaryFromReader(message: UserBindPhoneRes, reader: jspb.BinaryReader): UserBindPhoneRes;
}

export namespace UserBindPhoneRes {
  export type AsObject = {
    code: number,
    msg: string,
  }
}

export class UserDividendOrder extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getOrdersn(): string;
  setOrdersn(value: string): void;

  getOrderstatus(): number;
  setOrderstatus(value: number): void;

  getOrdervendor(): number;
  setOrdervendor(value: number): void;

  getPaystauts(): number;
  setPaystauts(value: number): void;

  getCashreqsn(): string;
  setCashreqsn(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getOrderamount(): number;
  setOrderamount(value: number): void;

  getOrdercreatetime(): string;
  setOrdercreatetime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDividendOrder.AsObject;
  static toObject(includeInstance: boolean, msg: UserDividendOrder): UserDividendOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDividendOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDividendOrder;
  static deserializeBinaryFromReader(message: UserDividendOrder, reader: jspb.BinaryReader): UserDividendOrder;
}

export namespace UserDividendOrder {
  export type AsObject = {
    userid: string,
    ordersn: string,
    orderstatus: number,
    ordervendor: number,
    paystauts: number,
    cashreqsn: string,
    amount: number,
    orderamount: number,
    ordercreatetime: string,
  }
}

export class UserGetOrdersReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserGetOrdersReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserGetOrdersReq): UserGetOrdersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserGetOrdersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserGetOrdersReq;
  static deserializeBinaryFromReader(message: UserGetOrdersReq, reader: jspb.BinaryReader): UserGetOrdersReq;
}

export namespace UserGetOrdersReq {
  export type AsObject = {
    userid: string,
  }
}

export class UserGetOrdersRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  clearDataList(): void;
  getDataList(): Array<UserDividendOrder>;
  setDataList(value: Array<UserDividendOrder>): void;
  addData(value?: UserDividendOrder, index?: number): UserDividendOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserGetOrdersRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserGetOrdersRes): UserGetOrdersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserGetOrdersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserGetOrdersRes;
  static deserializeBinaryFromReader(message: UserGetOrdersRes, reader: jspb.BinaryReader): UserGetOrdersRes;
}

export namespace UserGetOrdersRes {
  export type AsObject = {
    code: number,
    msg: string,
    dataList: Array<UserDividendOrder.AsObject>,
  }
}

export class Balance extends jspb.Message {
  getUnliquidated(): number;
  setUnliquidated(value: number): void;

  getPayable(): number;
  setPayable(value: number): void;

  getProcessing(): number;
  setProcessing(value: number): void;

  getPaid(): number;
  setPaid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    unliquidated: number,
    payable: number,
    processing: number,
    paid: number,
  }
}

export class UserQueryBalanceReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQueryBalanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserQueryBalanceReq): UserQueryBalanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserQueryBalanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQueryBalanceReq;
  static deserializeBinaryFromReader(message: UserQueryBalanceReq, reader: jspb.BinaryReader): UserQueryBalanceReq;
}

export namespace UserQueryBalanceReq {
  export type AsObject = {
    userid: string,
  }
}

export class UserQueryBalanceRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Balance | undefined;
  setData(value?: Balance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQueryBalanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserQueryBalanceRes): UserQueryBalanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserQueryBalanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQueryBalanceRes;
  static deserializeBinaryFromReader(message: UserQueryBalanceRes, reader: jspb.BinaryReader): UserQueryBalanceRes;
}

export namespace UserQueryBalanceRes {
  export type AsObject = {
    code: number,
    msg: string,
    data?: Balance.AsObject,
  }
}

export class DrawMoneyDetail extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  clearOrdersList(): void;
  getOrdersList(): Array<UserDividendOrder>;
  setOrdersList(value: Array<UserDividendOrder>): void;
  addOrders(value?: UserDividendOrder, index?: number): UserDividendOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawMoneyDetail.AsObject;
  static toObject(includeInstance: boolean, msg: DrawMoneyDetail): DrawMoneyDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrawMoneyDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawMoneyDetail;
  static deserializeBinaryFromReader(message: DrawMoneyDetail, reader: jspb.BinaryReader): DrawMoneyDetail;
}

export namespace DrawMoneyDetail {
  export type AsObject = {
    amount: number,
    ordersList: Array<UserDividendOrder.AsObject>,
  }
}

export class UserDrawMoneyReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDrawMoneyReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserDrawMoneyReq): UserDrawMoneyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDrawMoneyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDrawMoneyReq;
  static deserializeBinaryFromReader(message: UserDrawMoneyReq, reader: jspb.BinaryReader): UserDrawMoneyReq;
}

export namespace UserDrawMoneyReq {
  export type AsObject = {
    userid: string,
    phone: string,
  }
}

export class UserDrawMoneyRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): DrawMoneyDetail | undefined;
  setData(value?: DrawMoneyDetail): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDrawMoneyRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserDrawMoneyRes): UserDrawMoneyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDrawMoneyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDrawMoneyRes;
  static deserializeBinaryFromReader(message: UserDrawMoneyRes, reader: jspb.BinaryReader): UserDrawMoneyRes;
}

export namespace UserDrawMoneyRes {
  export type AsObject = {
    code: number,
    msg: string,
    data?: DrawMoneyDetail.AsObject,
  }
}

export class DrawMoneyRecords extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getReqsn(): string;
  setReqsn(value: string): void;

  getOrdersns(): string;
  setOrdersns(value: string): void;

  getReqamount(): number;
  setReqamount(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getPaidamount(): number;
  setPaidamount(value: number): void;

  getPaymethod(): number;
  setPaymethod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawMoneyRecords.AsObject;
  static toObject(includeInstance: boolean, msg: DrawMoneyRecords): DrawMoneyRecords.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrawMoneyRecords, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawMoneyRecords;
  static deserializeBinaryFromReader(message: DrawMoneyRecords, reader: jspb.BinaryReader): DrawMoneyRecords;
}

export namespace DrawMoneyRecords {
  export type AsObject = {
    userid: string,
    reqsn: string,
    ordersns: string,
    reqamount: number,
    status: number,
    paidamount: number,
    paymethod: number,
  }
}

export class UserDrawMoneyRecordsReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDrawMoneyRecordsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserDrawMoneyRecordsReq): UserDrawMoneyRecordsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDrawMoneyRecordsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDrawMoneyRecordsReq;
  static deserializeBinaryFromReader(message: UserDrawMoneyRecordsReq, reader: jspb.BinaryReader): UserDrawMoneyRecordsReq;
}

export namespace UserDrawMoneyRecordsReq {
  export type AsObject = {
    userid: string,
  }
}

export class UserDrawMoneyRecordsRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  clearDataList(): void;
  getDataList(): Array<DrawMoneyRecords>;
  setDataList(value: Array<DrawMoneyRecords>): void;
  addData(value?: DrawMoneyRecords, index?: number): DrawMoneyRecords;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDrawMoneyRecordsRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserDrawMoneyRecordsRes): UserDrawMoneyRecordsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDrawMoneyRecordsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDrawMoneyRecordsRes;
  static deserializeBinaryFromReader(message: UserDrawMoneyRecordsRes, reader: jspb.BinaryReader): UserDrawMoneyRecordsRes;
}

export namespace UserDrawMoneyRecordsRes {
  export type AsObject = {
    code: number,
    msg: string,
    dataList: Array<DrawMoneyRecords.AsObject>,
  }
}

