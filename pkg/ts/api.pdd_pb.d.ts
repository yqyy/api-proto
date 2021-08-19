// package: pddpb
// file: api.pdd.proto

import * as jspb from "google-protobuf";

export class QQAppInfo extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  getBannerUrl(): string;
  setBannerUrl(value: string): void;

  getDesc(): string;
  setDesc(value: string): void;

  getPagePath(): string;
  setPagePath(value: string): void;

  getQqAppIconUrl(): string;
  setQqAppIconUrl(value: string): void;

  getSourceDisplayName(): string;
  setSourceDisplayName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QQAppInfo.AsObject;
  static toObject(includeInstance: boolean, msg: QQAppInfo): QQAppInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QQAppInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QQAppInfo;
  static deserializeBinaryFromReader(message: QQAppInfo, reader: jspb.BinaryReader): QQAppInfo;
}

export namespace QQAppInfo {
  export type AsObject = {
    appId: string,
    bannerUrl: string,
    desc: string,
    pagePath: string,
    qqAppIconUrl: string,
    sourceDisplayName: string,
    title: string,
    userName: string,
  }
}

export class WeAppInfo extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  getBannerUrl(): string;
  setBannerUrl(value: string): void;

  getDesc(): string;
  setDesc(value: string): void;

  getPagePath(): string;
  setPagePath(value: string): void;

  getWeAppIconUrl(): string;
  setWeAppIconUrl(value: string): void;

  getSourceDisplayName(): string;
  setSourceDisplayName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeAppInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WeAppInfo): WeAppInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeAppInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeAppInfo;
  static deserializeBinaryFromReader(message: WeAppInfo, reader: jspb.BinaryReader): WeAppInfo;
}

export namespace WeAppInfo {
  export type AsObject = {
    appId: string,
    bannerUrl: string,
    desc: string,
    pagePath: string,
    weAppIconUrl: string,
    sourceDisplayName: string,
    title: string,
    userName: string,
  }
}

export class GoodsPromotionUrl extends jspb.Message {
  getMobileShortUrl(): string;
  setMobileShortUrl(value: string): void;

  getMobileUrl(): string;
  setMobileUrl(value: string): void;

  hasQqAppInfo(): boolean;
  clearQqAppInfo(): void;
  getQqAppInfo(): QQAppInfo | undefined;
  setQqAppInfo(value?: QQAppInfo): void;

  getSchemaUrl(): string;
  setSchemaUrl(value: string): void;

  getShortUrl(): string;
  setShortUrl(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  hasWeAppInfo(): boolean;
  clearWeAppInfo(): void;
  getWeAppInfo(): WeAppInfo | undefined;
  setWeAppInfo(value?: WeAppInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoodsPromotionUrl.AsObject;
  static toObject(includeInstance: boolean, msg: GoodsPromotionUrl): GoodsPromotionUrl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoodsPromotionUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoodsPromotionUrl;
  static deserializeBinaryFromReader(message: GoodsPromotionUrl, reader: jspb.BinaryReader): GoodsPromotionUrl;
}

export namespace GoodsPromotionUrl {
  export type AsObject = {
    mobileShortUrl: string,
    mobileUrl: string,
    qqAppInfo?: QQAppInfo.AsObject,
    schemaUrl: string,
    shortUrl: string,
    url: string,
    weAppInfo?: WeAppInfo.AsObject,
  }
}

export class GoodsPromotionUrlGenerateResponse extends jspb.Message {
  clearGoodsPromotionUrlListList(): void;
  getGoodsPromotionUrlListList(): Array<GoodsPromotionUrl>;
  setGoodsPromotionUrlListList(value: Array<GoodsPromotionUrl>): void;
  addGoodsPromotionUrlList(value?: GoodsPromotionUrl, index?: number): GoodsPromotionUrl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoodsPromotionUrlGenerateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoodsPromotionUrlGenerateResponse): GoodsPromotionUrlGenerateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoodsPromotionUrlGenerateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoodsPromotionUrlGenerateResponse;
  static deserializeBinaryFromReader(message: GoodsPromotionUrlGenerateResponse, reader: jspb.BinaryReader): GoodsPromotionUrlGenerateResponse;
}

export namespace GoodsPromotionUrlGenerateResponse {
  export type AsObject = {
    goodsPromotionUrlListList: Array<GoodsPromotionUrl.AsObject>,
  }
}

export class PromotionByURLRequest extends jspb.Message {
  getPId(): string;
  setPId(value: string): void;

  clearGoodsSignListList(): void;
  getGoodsSignListList(): Array<string>;
  setGoodsSignListList(value: Array<string>): void;
  addGoodsSignList(value: string, index?: number): string;

  hasCashGiftId(): boolean;
  clearCashGiftId(): void;
  getCashGiftId(): number;
  setCashGiftId(value: number): void;

  hasCashGiftName(): boolean;
  clearCashGiftName(): void;
  getCashGiftName(): string;
  setCashGiftName(value: string): void;

  hasCustomParameters(): boolean;
  clearCustomParameters(): void;
  getCustomParameters(): string;
  setCustomParameters(value: string): void;

  hasGenerateAuthorityUrl(): boolean;
  clearGenerateAuthorityUrl(): void;
  getGenerateAuthorityUrl(): boolean;
  setGenerateAuthorityUrl(value: boolean): void;

  hasGenerateMallCollectCoupon(): boolean;
  clearGenerateMallCollectCoupon(): void;
  getGenerateMallCollectCoupon(): boolean;
  setGenerateMallCollectCoupon(value: boolean): void;

  hasGenerateQqApp(): boolean;
  clearGenerateQqApp(): void;
  getGenerateQqApp(): boolean;
  setGenerateQqApp(value: boolean): void;

  hasGenerateSchemaUrl(): boolean;
  clearGenerateSchemaUrl(): void;
  getGenerateSchemaUrl(): boolean;
  setGenerateSchemaUrl(value: boolean): void;

  hasGenerateShortUrl(): boolean;
  clearGenerateShortUrl(): void;
  getGenerateShortUrl(): boolean;
  setGenerateShortUrl(value: boolean): void;

  hasGenerateWeApp(): boolean;
  clearGenerateWeApp(): void;
  getGenerateWeApp(): boolean;
  setGenerateWeApp(value: boolean): void;

  hasMaterialId(): boolean;
  clearMaterialId(): void;
  getMaterialId(): string;
  setMaterialId(value: string): void;

  hasMultiGroup(): boolean;
  clearMultiGroup(): void;
  getMultiGroup(): boolean;
  setMultiGroup(value: boolean): void;

  hasSearchId(): boolean;
  clearSearchId(): void;
  getSearchId(): string;
  setSearchId(value: string): void;

  hasZsDuoId(): boolean;
  clearZsDuoId(): void;
  getZsDuoId(): number;
  setZsDuoId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionByURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionByURLRequest): PromotionByURLRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionByURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionByURLRequest;
  static deserializeBinaryFromReader(message: PromotionByURLRequest, reader: jspb.BinaryReader): PromotionByURLRequest;
}

export namespace PromotionByURLRequest {
  export type AsObject = {
    pId: string,
    goodsSignListList: Array<string>,
    cashGiftId: number,
    cashGiftName: string,
    customParameters: string,
    generateAuthorityUrl: boolean,
    generateMallCollectCoupon: boolean,
    generateQqApp: boolean,
    generateSchemaUrl: boolean,
    generateShortUrl: boolean,
    generateWeApp: boolean,
    materialId: string,
    multiGroup: boolean,
    searchId: string,
    zsDuoId: number,
  }
}

export class PromotionByURLResponse extends jspb.Message {
  hasGoodsPromotionUrlGenerateResponse(): boolean;
  clearGoodsPromotionUrlGenerateResponse(): void;
  getGoodsPromotionUrlGenerateResponse(): GoodsPromotionUrlGenerateResponse | undefined;
  setGoodsPromotionUrlGenerateResponse(value?: GoodsPromotionUrlGenerateResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionByURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionByURLResponse): PromotionByURLResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionByURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionByURLResponse;
  static deserializeBinaryFromReader(message: PromotionByURLResponse, reader: jspb.BinaryReader): PromotionByURLResponse;
}

export namespace PromotionByURLResponse {
  export type AsObject = {
    goodsPromotionUrlGenerateResponse?: GoodsPromotionUrlGenerateResponse.AsObject,
  }
}

