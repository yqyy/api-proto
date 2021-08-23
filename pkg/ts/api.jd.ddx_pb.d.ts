// package: jdpb
// file: api.jd.ddx.proto

import * as jspb from "google-protobuf";

export class CouponInfo extends jspb.Message {
  getTakeendtime(): number;
  setTakeendtime(value: number): void;

  getTakebegintime(): number;
  setTakebegintime(value: number): void;

  getRemainnum(): number;
  setRemainnum(value: number): void;

  getYn(): string;
  setYn(value: string): void;

  getNum(): number;
  setNum(value: number): void;

  getQuota(): number;
  setQuota(value: number): void;

  getLink(): string;
  setLink(value: string): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getBegintime(): number;
  setBegintime(value: number): void;

  getEndtime(): number;
  setEndtime(value: number): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouponInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CouponInfo): CouponInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CouponInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouponInfo;
  static deserializeBinaryFromReader(message: CouponInfo, reader: jspb.BinaryReader): CouponInfo;
}

export namespace CouponInfo {
  export type AsObject = {
    takeendtime: number,
    takebegintime: number,
    remainnum: number,
    yn: string,
    num: number,
    quota: number,
    link: string,
    discount: number,
    begintime: number,
    endtime: number,
    platform: string,
  }
}

export class CommissionInfo extends jspb.Message {
  getCommission(): number;
  setCommission(value: number): void;

  getCommissionshare(): number;
  setCommissionshare(value: number): void;

  getCouponcommission(): number;
  setCouponcommission(value: number): void;

  getPluscommissionshare(): number;
  setPluscommissionshare(value: number): void;

  getEndtime(): number;
  setEndtime(value: number): void;

  getStarttime(): number;
  setStarttime(value: number): void;

  getIslock(): number;
  setIslock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommissionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommissionInfo): CommissionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommissionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommissionInfo;
  static deserializeBinaryFromReader(message: CommissionInfo, reader: jspb.BinaryReader): CommissionInfo;
}

export namespace CommissionInfo {
  export type AsObject = {
    commission: number,
    commissionshare: number,
    couponcommission: number,
    pluscommissionshare: number,
    endtime: number,
    starttime: number,
    islock: number,
  }
}

export class ImageURL extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageURL.AsObject;
  static toObject(includeInstance: boolean, msg: ImageURL): ImageURL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageURL;
  static deserializeBinaryFromReader(message: ImageURL, reader: jspb.BinaryReader): ImageURL;
}

export namespace ImageURL {
  export type AsObject = {
    url: string,
  }
}

export class ImageInfo extends jspb.Message {
  clearImagelistList(): void;
  getImagelistList(): Array<ImageURL>;
  setImagelistList(value: Array<ImageURL>): void;
  addImagelist(value?: ImageURL, index?: number): ImageURL;

  getWhiteimage(): string;
  setWhiteimage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageInfo): ImageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageInfo;
  static deserializeBinaryFromReader(message: ImageInfo, reader: jspb.BinaryReader): ImageInfo;
}

export namespace ImageInfo {
  export type AsObject = {
    imagelistList: Array<ImageURL.AsObject>,
    whiteimage: string,
  }
}

export class PriceInfo extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  getHistorypriceday(): number;
  setHistorypriceday(value: number): void;

  hasLowestcouponprice(): boolean;
  clearLowestcouponprice(): void;
  getLowestcouponprice(): number;
  setLowestcouponprice(value: number): void;

  getLowestprice(): number;
  setLowestprice(value: number): void;

  getLowestpricetype(): number;
  setLowestpricetype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PriceInfo): PriceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfo;
  static deserializeBinaryFromReader(message: PriceInfo, reader: jspb.BinaryReader): PriceInfo;
}

export namespace PriceInfo {
  export type AsObject = {
    price: number,
    historypriceday: number,
    lowestcouponprice: number,
    lowestprice: number,
    lowestpricetype: number,
  }
}

export class PinGouInfo extends jspb.Message {
  getPingouprice(): number;
  setPingouprice(value: number): void;

  getPingoutmcount(): number;
  setPingoutmcount(value: number): void;

  getPingouurl(): string;
  setPingouurl(value: string): void;

  getPingoustarttime(): number;
  setPingoustarttime(value: number): void;

  getPingouendtime(): number;
  setPingouendtime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinGouInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PinGouInfo): PinGouInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinGouInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinGouInfo;
  static deserializeBinaryFromReader(message: PinGouInfo, reader: jspb.BinaryReader): PinGouInfo;
}

export namespace PinGouInfo {
  export type AsObject = {
    pingouprice: number,
    pingoutmcount: number,
    pingouurl: string,
    pingoustarttime: number,
    pingouendtime: number,
  }
}

export class ShopInfo extends jspb.Message {
  getShopid(): number;
  setShopid(value: number): void;

  getShoplabel(): string;
  setShoplabel(value: string): void;

  getShoplevel(): number;
  setShoplevel(value: number): void;

  getShopname(): string;
  setShopname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShopInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShopInfo): ShopInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShopInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShopInfo;
  static deserializeBinaryFromReader(message: ShopInfo, reader: jspb.BinaryReader): ShopInfo;
}

export namespace ShopInfo {
  export type AsObject = {
    shopid: number,
    shoplabel: string,
    shoplevel: number,
    shopname: string,
  }
}

export class PromotedData extends jspb.Message {
  getShorturl(): string;
  setShorturl(value: string): void;

  getClickurl(): string;
  setClickurl(value: string): void;

  hasJcommand(): boolean;
  clearJcommand(): void;
  getJcommand(): string;
  setJcommand(value: string): void;

  getNote(): string;
  setNote(value: string): void;

  getIsCoupon(): number;
  setIsCoupon(value: number): void;

  clearCouponinfoList(): void;
  getCouponinfoList(): Array<CouponInfo>;
  setCouponinfoList(value: Array<CouponInfo>): void;
  addCouponinfo(value?: CouponInfo, index?: number): CouponInfo;

  hasCommissioninfo(): boolean;
  clearCommissioninfo(): void;
  getCommissioninfo(): CommissionInfo | undefined;
  setCommissioninfo(value?: CommissionInfo): void;

  hasImageinfo(): boolean;
  clearImageinfo(): void;
  getImageinfo(): ImageInfo | undefined;
  setImageinfo(value?: ImageInfo): void;

  hasPriceinfo(): boolean;
  clearPriceinfo(): void;
  getPriceinfo(): PriceInfo | undefined;
  setPriceinfo(value?: PriceInfo): void;

  clearPingouinfoList(): void;
  getPingouinfoList(): Array<PinGouInfo>;
  setPingouinfoList(value: Array<PinGouInfo>): void;
  addPingouinfo(value?: PinGouInfo, index?: number): PinGouInfo;

  hasShopinfo(): boolean;
  clearShopinfo(): void;
  getShopinfo(): ShopInfo | undefined;
  setShopinfo(value?: ShopInfo): void;

  getSkuid(): number;
  setSkuid(value: number): void;

  getSkuname(): string;
  setSkuname(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotedData.AsObject;
  static toObject(includeInstance: boolean, msg: PromotedData): PromotedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotedData;
  static deserializeBinaryFromReader(message: PromotedData, reader: jspb.BinaryReader): PromotedData;
}

export namespace PromotedData {
  export type AsObject = {
    shorturl: string,
    clickurl: string,
    jcommand: string,
    note: string,
    isCoupon: number,
    couponinfoList: Array<CouponInfo.AsObject>,
    commissioninfo?: CommissionInfo.AsObject,
    imageinfo?: ImageInfo.AsObject,
    priceinfo?: PriceInfo.AsObject,
    pingouinfoList: Array<PinGouInfo.AsObject>,
    shopinfo?: ShopInfo.AsObject,
    skuid: number,
    skuname: string,
    owner: string,
  }
}

export class PromotionByUnionIDRequest extends jspb.Message {
  getMaterialid(): string;
  setMaterialid(value: string): void;

  getUnionid(): number;
  setUnionid(value: number): void;

  hasAutosearch(): boolean;
  clearAutosearch(): void;
  getAutosearch(): boolean;
  setAutosearch(value: boolean): void;

  hasType(): boolean;
  clearType(): void;
  getType(): number;
  setType(value: number): void;

  hasPositionid(): boolean;
  clearPositionid(): void;
  getPositionid(): number;
  setPositionid(value: number): void;

  hasCouponurl(): boolean;
  clearCouponurl(): void;
  getCouponurl(): string;
  setCouponurl(value: string): void;

  hasChaintype(): boolean;
  clearChaintype(): void;
  getChaintype(): number;
  setChaintype(value: number): void;

  hasSubunionid(): boolean;
  clearSubunionid(): void;
  getSubunionid(): string;
  setSubunionid(value: string): void;

  hasGiftcouponkey(): boolean;
  clearGiftcouponkey(): void;
  getGiftcouponkey(): string;
  setGiftcouponkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionByUnionIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionByUnionIDRequest): PromotionByUnionIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionByUnionIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionByUnionIDRequest;
  static deserializeBinaryFromReader(message: PromotionByUnionIDRequest, reader: jspb.BinaryReader): PromotionByUnionIDRequest;
}

export namespace PromotionByUnionIDRequest {
  export type AsObject = {
    materialid: string,
    unionid: number,
    autosearch: boolean,
    type: number,
    positionid: number,
    couponurl: string,
    chaintype: number,
    subunionid: string,
    giftcouponkey: string,
  }
}

export class PromotionByUnionIDResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): PromotedData | undefined;
  setData(value?: PromotedData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionByUnionIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionByUnionIDResponse): PromotionByUnionIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionByUnionIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionByUnionIDResponse;
  static deserializeBinaryFromReader(message: PromotionByUnionIDResponse, reader: jspb.BinaryReader): PromotionByUnionIDResponse;
}

export namespace PromotionByUnionIDResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: PromotedData.AsObject,
  }
}

