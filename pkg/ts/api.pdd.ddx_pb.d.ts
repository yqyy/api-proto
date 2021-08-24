// package: pddxpb
// file: api.pdd.ddx.proto

import * as jspb from "google-protobuf";

export class AuthorityQueryData extends jspb.Message {
  getBind(): number;
  setBind(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorityQueryData.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorityQueryData): AuthorityQueryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorityQueryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorityQueryData;
  static deserializeBinaryFromReader(message: AuthorityQueryData, reader: jspb.BinaryReader): AuthorityQueryData;
}

export namespace AuthorityQueryData {
  export type AsObject = {
    bind: number,
  }
}

export class AuthorityQueryRequest extends jspb.Message {
  hasPid(): boolean;
  clearPid(): void;
  getPid(): string;
  setPid(value: string): void;

  hasCustomParameters(): boolean;
  clearCustomParameters(): void;
  getCustomParameters(): string;
  setCustomParameters(value: string): void;

  hasPddAuthId(): boolean;
  clearPddAuthId(): void;
  getPddAuthId(): string;
  setPddAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorityQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorityQueryRequest): AuthorityQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorityQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorityQueryRequest;
  static deserializeBinaryFromReader(message: AuthorityQueryRequest, reader: jspb.BinaryReader): AuthorityQueryRequest;
}

export namespace AuthorityQueryRequest {
  export type AsObject = {
    pid: string,
    customParameters: string,
    pddAuthId: string,
  }
}

export class AuthorityQueryResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AuthorityQueryData | undefined;
  setData(value?: AuthorityQueryData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorityQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorityQueryResponse): AuthorityQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorityQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorityQueryResponse;
  static deserializeBinaryFromReader(message: AuthorityQueryResponse, reader: jspb.BinaryReader): AuthorityQueryResponse;
}

export namespace AuthorityQueryResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: AuthorityQueryData.AsObject,
  }
}

export class Resource extends jspb.Message {
  getDesc(): string;
  setDesc(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    desc: string,
    url: string,
  }
}

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

export class URLInfo extends jspb.Message {
  getMobileShortUrl(): string;
  setMobileShortUrl(value: string): void;

  getMobileUrl(): string;
  setMobileUrl(value: string): void;

  getMultiGroupMobileShortUrl(): string;
  setMultiGroupMobileShortUrl(value: string): void;

  getMultiGroupMobileUrl(): string;
  setMultiGroupMobileUrl(value: string): void;

  getMultiGroupShortUrl(): string;
  setMultiGroupShortUrl(value: string): void;

  getMultiGroupUrl(): string;
  setMultiGroupUrl(value: string): void;

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
  toObject(includeInstance?: boolean): URLInfo.AsObject;
  static toObject(includeInstance: boolean, msg: URLInfo): URLInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: URLInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): URLInfo;
  static deserializeBinaryFromReader(message: URLInfo, reader: jspb.BinaryReader): URLInfo;
}

export namespace URLInfo {
  export type AsObject = {
    mobileShortUrl: string,
    mobileUrl: string,
    multiGroupMobileShortUrl: string,
    multiGroupMobileUrl: string,
    multiGroupShortUrl: string,
    multiGroupUrl: string,
    qqAppInfo?: QQAppInfo.AsObject,
    schemaUrl: string,
    shortUrl: string,
    url: string,
    weAppInfo?: WeAppInfo.AsObject,
  }
}

export class MarketingURLData extends jspb.Message {
  clearResourceListList(): void;
  getResourceListList(): Array<Resource>;
  setResourceListList(value: Array<Resource>): void;
  addResourceList(value?: Resource, index?: number): Resource;

  clearUrlListList(): void;
  getUrlListList(): Array<URLInfo>;
  setUrlListList(value: Array<URLInfo>): void;
  addUrlList(value?: URLInfo, index?: number): URLInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketingURLData.AsObject;
  static toObject(includeInstance: boolean, msg: MarketingURLData): MarketingURLData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketingURLData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketingURLData;
  static deserializeBinaryFromReader(message: MarketingURLData, reader: jspb.BinaryReader): MarketingURLData;
}

export namespace MarketingURLData {
  export type AsObject = {
    resourceListList: Array<Resource.AsObject>,
    urlListList: Array<URLInfo.AsObject>,
  }
}

export class CreateMarketingURLRequest extends jspb.Message {
  hasPIdList(): boolean;
  clearPIdList(): void;
  getPIdList(): string;
  setPIdList(value: string): void;

  hasCustomParameters(): boolean;
  clearCustomParameters(): void;
  getCustomParameters(): string;
  setCustomParameters(value: string): void;

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

  getChannelType(): number;
  setChannelType(value: number): void;

  hasScratchCardAmount(): boolean;
  clearScratchCardAmount(): void;
  getScratchCardAmount(): number;
  setScratchCardAmount(value: number): void;

  hasPddAuthId(): boolean;
  clearPddAuthId(): void;
  getPddAuthId(): string;
  setPddAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMarketingURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMarketingURLRequest): CreateMarketingURLRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMarketingURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMarketingURLRequest;
  static deserializeBinaryFromReader(message: CreateMarketingURLRequest, reader: jspb.BinaryReader): CreateMarketingURLRequest;
}

export namespace CreateMarketingURLRequest {
  export type AsObject = {
    pIdList: string,
    customParameters: string,
    generateQqApp: boolean,
    generateSchemaUrl: boolean,
    generateShortUrl: boolean,
    generateWeApp: boolean,
    channelType: number,
    scratchCardAmount: number,
    pddAuthId: string,
  }
}

export class CreateMarketingURLResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): MarketingURLData | undefined;
  setData(value?: MarketingURLData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMarketingURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMarketingURLResponse): CreateMarketingURLResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMarketingURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMarketingURLResponse;
  static deserializeBinaryFromReader(message: CreateMarketingURLResponse, reader: jspb.BinaryReader): CreateMarketingURLResponse;
}

export namespace CreateMarketingURLResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: MarketingURLData.AsObject,
  }
}

export class ItemInfo extends jspb.Message {
  getGoodsName(): string;
  setGoodsName(value: string): void;

  getGoodsId(): number;
  setGoodsId(value: number): void;

  getMinNormalPrice(): number;
  setMinNormalPrice(value: number): void;

  getMinGroupPrice(): number;
  setMinGroupPrice(value: number): void;

  getPromotionRate(): number;
  setPromotionRate(value: number): void;

  getPredictPromotionRate(): number;
  setPredictPromotionRate(value: number): void;

  getCouponMinOrderAmount(): number;
  setCouponMinOrderAmount(value: number): void;

  getCouponDiscount(): number;
  setCouponDiscount(value: number): void;

  getCouponTotalQuantity(): number;
  setCouponTotalQuantity(value: number): void;

  getCouponRemainQuantity(): number;
  setCouponRemainQuantity(value: number): void;

  getCouponStartTime(): number;
  setCouponStartTime(value: number): void;

  getCouponEndTime(): number;
  setCouponEndTime(value: number): void;

  getHasCoupon(): boolean;
  setHasCoupon(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ItemInfo): ItemInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemInfo;
  static deserializeBinaryFromReader(message: ItemInfo, reader: jspb.BinaryReader): ItemInfo;
}

export namespace ItemInfo {
  export type AsObject = {
    goodsName: string,
    goodsId: number,
    minNormalPrice: number,
    minGroupPrice: number,
    promotionRate: number,
    predictPromotionRate: number,
    couponMinOrderAmount: number,
    couponDiscount: number,
    couponTotalQuantity: number,
    couponRemainQuantity: number,
    couponStartTime: number,
    couponEndTime: number,
    hasCoupon: boolean,
  }
}

export class URLConvertData extends jspb.Message {
  getMobileShortUrl(): string;
  setMobileShortUrl(value: string): void;

  getMobileUrl(): string;
  setMobileUrl(value: string): void;

  getMultiGroupMobileShortUrl(): string;
  setMultiGroupMobileShortUrl(value: string): void;

  getMultiGroupMobileUrl(): string;
  setMultiGroupMobileUrl(value: string): void;

  getMultiGroupShortUrl(): string;
  setMultiGroupShortUrl(value: string): void;

  getMultiGroupUrl(): string;
  setMultiGroupUrl(value: string): void;

  getSchemaUrl(): string;
  setSchemaUrl(value: string): void;

  getShortUrl(): string;
  setShortUrl(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getGoodsId(): string;
  setGoodsId(value: string): void;

  hasIteminfo(): boolean;
  clearIteminfo(): void;
  getIteminfo(): ItemInfo | undefined;
  setIteminfo(value?: ItemInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): URLConvertData.AsObject;
  static toObject(includeInstance: boolean, msg: URLConvertData): URLConvertData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: URLConvertData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): URLConvertData;
  static deserializeBinaryFromReader(message: URLConvertData, reader: jspb.BinaryReader): URLConvertData;
}

export namespace URLConvertData {
  export type AsObject = {
    mobileShortUrl: string,
    mobileUrl: string,
    multiGroupMobileShortUrl: string,
    multiGroupMobileUrl: string,
    multiGroupShortUrl: string,
    multiGroupUrl: string,
    schemaUrl: string,
    shortUrl: string,
    url: string,
    goodsId: string,
    iteminfo?: ItemInfo.AsObject,
  }
}

export class URLConvertRequest extends jspb.Message {
  getSourceUrl(): string;
  setSourceUrl(value: string): void;

  hasPid(): boolean;
  clearPid(): void;
  getPid(): string;
  setPid(value: string): void;

  hasCustomParameters(): boolean;
  clearCustomParameters(): void;
  getCustomParameters(): string;
  setCustomParameters(value: string): void;

  hasGenerateSchemaUrl(): boolean;
  clearGenerateSchemaUrl(): void;
  getGenerateSchemaUrl(): boolean;
  setGenerateSchemaUrl(value: boolean): void;

  hasIteminfo(): boolean;
  clearIteminfo(): void;
  getIteminfo(): boolean;
  setIteminfo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): URLConvertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: URLConvertRequest): URLConvertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: URLConvertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): URLConvertRequest;
  static deserializeBinaryFromReader(message: URLConvertRequest, reader: jspb.BinaryReader): URLConvertRequest;
}

export namespace URLConvertRequest {
  export type AsObject = {
    sourceUrl: string,
    pid: string,
    customParameters: string,
    generateSchemaUrl: boolean,
    iteminfo: boolean,
  }
}

export class URLConvertResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): URLConvertData | undefined;
  setData(value?: URLConvertData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): URLConvertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: URLConvertResponse): URLConvertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: URLConvertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): URLConvertResponse;
  static deserializeBinaryFromReader(message: URLConvertResponse, reader: jspb.BinaryReader): URLConvertResponse;
}

export namespace URLConvertResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: URLConvertData.AsObject,
  }
}

export class SearchData extends jspb.Message {
  getHasMallCoupon(): boolean;
  setHasMallCoupon(value: boolean): void;

  getMallCouponId(): number;
  setMallCouponId(value: number): void;

  getMallCouponDiscountPct(): number;
  setMallCouponDiscountPct(value: number): void;

  getMallCouponMinOrderAmount(): number;
  setMallCouponMinOrderAmount(value: number): void;

  getMallCouponMaxDiscountAmount(): number;
  setMallCouponMaxDiscountAmount(value: number): void;

  getMallCouponTotalQuantity(): number;
  setMallCouponTotalQuantity(value: number): void;

  getMallCouponRemainQuantity(): number;
  setMallCouponRemainQuantity(value: number): void;

  getMallCouponStartTime(): number;
  setMallCouponStartTime(value: number): void;

  getMallCouponEndTime(): number;
  setMallCouponEndTime(value: number): void;

  getCreateAt(): number;
  setCreateAt(value: number): void;

  getGoodsId(): number;
  setGoodsId(value: number): void;

  getGoodsName(): string;
  setGoodsName(value: string): void;

  getGoodsDesc(): string;
  setGoodsDesc(value: string): void;

  getGoodsThumbnailUrl(): string;
  setGoodsThumbnailUrl(value: string): void;

  getGoodsImageUrl(): string;
  setGoodsImageUrl(value: string): void;

  getMinGroupPrice(): number;
  setMinGroupPrice(value: number): void;

  getMinNormalPrice(): number;
  setMinNormalPrice(value: number): void;

  getMallName(): string;
  setMallName(value: string): void;

  getMerchantType(): number;
  setMerchantType(value: number): void;

  getCategoryId(): number;
  setCategoryId(value: number): void;

  getCategoryName(): number;
  setCategoryName(value: number): void;

  getOptId(): number;
  setOptId(value: number): void;

  getOptName(): string;
  setOptName(value: string): void;

  clearOptIdsList(): void;
  getOptIdsList(): Array<number>;
  setOptIdsList(value: Array<number>): void;
  addOptIds(value: number, index?: number): number;

  clearCatIdsList(): void;
  getCatIdsList(): Array<number>;
  setCatIdsList(value: Array<number>): void;
  addCatIds(value: number, index?: number): number;

  getMallCps(): number;
  setMallCps(value: number): void;

  getHasCoupon(): boolean;
  setHasCoupon(value: boolean): void;

  getCouponMinOrderAmount(): number;
  setCouponMinOrderAmount(value: number): void;

  getCouponDiscount(): number;
  setCouponDiscount(value: number): void;

  getCouponTotalQuantity(): number;
  setCouponTotalQuantity(value: number): void;

  getCouponRemainQuantity(): number;
  setCouponRemainQuantity(value: number): void;

  getCouponStartTime(): number;
  setCouponStartTime(value: number): void;

  getCouponEndTime(): number;
  setCouponEndTime(value: number): void;

  getPromotionRate(): number;
  setPromotionRate(value: number): void;

  getSalesTip(): string;
  setSalesTip(value: string): void;

  getActivityType(): number;
  setActivityType(value: number): void;

  getCltCpnBatchSn(): string;
  setCltCpnBatchSn(value: string): void;

  getCltCpnStartTime(): number;
  setCltCpnStartTime(value: number): void;

  getCltCpnEndTime(): number;
  setCltCpnEndTime(value: number): void;

  getCltCpnQuantity(): number;
  setCltCpnQuantity(value: number): void;

  getCltCpnRemainQuantity(): number;
  setCltCpnRemainQuantity(value: number): void;

  getCltCpnDiscount(): number;
  setCltCpnDiscount(value: number): void;

  getCltCpnMinAmt(): number;
  setCltCpnMinAmt(value: number): void;

  getDescTxt(): string;
  setDescTxt(value: string): void;

  getServTxt(): string;
  setServTxt(value: string): void;

  getLgstTxt(): string;
  setLgstTxt(value: string): void;

  getPlanType(): number;
  setPlanType(value: number): void;

  getZsDuoId(): number;
  setZsDuoId(value: number): void;

  getOnlySceneAuth(): boolean;
  setOnlySceneAuth(value: boolean): void;

  getMallId(): number;
  setMallId(value: number): void;

  getPredictPromotionRate(): number;
  setPredictPromotionRate(value: number): void;

  getGoodsSign(): string;
  setGoodsSign(value: string): void;

  getTotalResults(): number;
  setTotalResults(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchData.AsObject;
  static toObject(includeInstance: boolean, msg: SearchData): SearchData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchData;
  static deserializeBinaryFromReader(message: SearchData, reader: jspb.BinaryReader): SearchData;
}

export namespace SearchData {
  export type AsObject = {
    hasMallCoupon: boolean,
    mallCouponId: number,
    mallCouponDiscountPct: number,
    mallCouponMinOrderAmount: number,
    mallCouponMaxDiscountAmount: number,
    mallCouponTotalQuantity: number,
    mallCouponRemainQuantity: number,
    mallCouponStartTime: number,
    mallCouponEndTime: number,
    createAt: number,
    goodsId: number,
    goodsName: string,
    goodsDesc: string,
    goodsThumbnailUrl: string,
    goodsImageUrl: string,
    minGroupPrice: number,
    minNormalPrice: number,
    mallName: string,
    merchantType: number,
    categoryId: number,
    categoryName: number,
    optId: number,
    optName: string,
    optIdsList: Array<number>,
    catIdsList: Array<number>,
    mallCps: number,
    hasCoupon: boolean,
    couponMinOrderAmount: number,
    couponDiscount: number,
    couponTotalQuantity: number,
    couponRemainQuantity: number,
    couponStartTime: number,
    couponEndTime: number,
    promotionRate: number,
    salesTip: string,
    activityType: number,
    cltCpnBatchSn: string,
    cltCpnStartTime: number,
    cltCpnEndTime: number,
    cltCpnQuantity: number,
    cltCpnRemainQuantity: number,
    cltCpnDiscount: number,
    cltCpnMinAmt: number,
    descTxt: string,
    servTxt: string,
    lgstTxt: string,
    planType: number,
    zsDuoId: number,
    onlySceneAuth: boolean,
    mallId: number,
    predictPromotionRate: number,
    goodsSign: string,
    totalResults: number,
  }
}

export class SearchRequest extends jspb.Message {
  hasKeyword(): boolean;
  clearKeyword(): void;
  getKeyword(): string;
  setKeyword(value: string): void;

  hasOptId(): boolean;
  clearOptId(): void;
  getOptId(): number;
  setOptId(value: number): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): number;
  setPage(value: number): void;

  hasPageSize(): boolean;
  clearPageSize(): void;
  getPageSize(): number;
  setPageSize(value: number): void;

  hasSortType(): boolean;
  clearSortType(): void;
  getSortType(): number;
  setSortType(value: number): void;

  hasWithCoupon(): boolean;
  clearWithCoupon(): void;
  getWithCoupon(): boolean;
  setWithCoupon(value: boolean): void;

  hasRangeList(): boolean;
  clearRangeList(): void;
  getRangeList(): string;
  setRangeList(value: string): void;

  hasCatId(): boolean;
  clearCatId(): void;
  getCatId(): number;
  setCatId(value: number): void;

  hasMerchantType(): boolean;
  clearMerchantType(): void;
  getMerchantType(): number;
  setMerchantType(value: number): void;

  hasPid(): boolean;
  clearPid(): void;
  getPid(): string;
  setPid(value: string): void;

  hasCustomParameters(): boolean;
  clearCustomParameters(): void;
  getCustomParameters(): string;
  setCustomParameters(value: string): void;

  clearMerchantTypeListList(): void;
  getMerchantTypeListList(): Array<number>;
  setMerchantTypeListList(value: Array<number>): void;
  addMerchantTypeList(value: number, index?: number): number;

  hasIsBrandGoods(): boolean;
  clearIsBrandGoods(): void;
  getIsBrandGoods(): boolean;
  setIsBrandGoods(value: boolean): void;

  clearActivityTagsList(): void;
  getActivityTagsList(): Array<number>;
  setActivityTagsList(value: Array<number>): void;
  addActivityTags(value: number, index?: number): number;

  clearBlockCatPackagesList(): void;
  getBlockCatPackagesList(): Array<number>;
  setBlockCatPackagesList(value: Array<number>): void;
  addBlockCatPackages(value: number, index?: number): number;

  clearGoodsSignListList(): void;
  getGoodsSignListList(): Array<string>;
  setGoodsSignListList(value: Array<string>): void;
  addGoodsSignList(value: string, index?: number): string;

  hasPddAuthId(): boolean;
  clearPddAuthId(): void;
  getPddAuthId(): string;
  setPddAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    keyword: string,
    optId: number,
    page: number,
    pageSize: number,
    sortType: number,
    withCoupon: boolean,
    rangeList: string,
    catId: number,
    merchantType: number,
    pid: string,
    customParameters: string,
    merchantTypeListList: Array<number>,
    isBrandGoods: boolean,
    activityTagsList: Array<number>,
    blockCatPackagesList: Array<number>,
    goodsSignListList: Array<string>,
    pddAuthId: string,
  }
}

export class SearchResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): SearchData | undefined;
  setData(value?: SearchData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: SearchData.AsObject,
  }
}

export class PromotedData extends jspb.Message {
  getWeAppWebViewShortUrl(): string;
  setWeAppWebViewShortUrl(value: string): void;

  getWeAppWebViewUrl(): string;
  setWeAppWebViewUrl(value: string): void;

  getMobileShortUrl(): string;
  setMobileShortUrl(value: string): void;

  getMobileUrl(): string;
  setMobileUrl(value: string): void;

  getShortUrl(): string;
  setShortUrl(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getWeiboAppWebViewShortUrl(): string;
  setWeiboAppWebViewShortUrl(value: string): void;

  getWeiboAppWebViewUrl(): string;
  setWeiboAppWebViewUrl(value: string): void;

  getSchemaUrl(): string;
  setSchemaUrl(value: string): void;

  hasWeAppInfo(): boolean;
  clearWeAppInfo(): void;
  getWeAppInfo(): WeAppInfo | undefined;
  setWeAppInfo(value?: WeAppInfo): void;

  hasIteminfo(): boolean;
  clearIteminfo(): void;
  getIteminfo(): ItemInfo | undefined;
  setIteminfo(value?: ItemInfo): void;

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
    weAppWebViewShortUrl: string,
    weAppWebViewUrl: string,
    mobileShortUrl: string,
    mobileUrl: string,
    shortUrl: string,
    url: string,
    weiboAppWebViewShortUrl: string,
    weiboAppWebViewUrl: string,
    schemaUrl: string,
    weAppInfo?: WeAppInfo.AsObject,
    iteminfo?: ItemInfo.AsObject,
  }
}

export class PromotionRequest extends jspb.Message {
  getGoodsSign(): string;
  setGoodsSign(value: string): void;

  hasPid(): boolean;
  clearPid(): void;
  getPid(): string;
  setPid(value: string): void;

  hasCustomParameters(): boolean;
  clearCustomParameters(): void;
  getCustomParameters(): string;
  setCustomParameters(value: string): void;

  hasCashGiftId(): boolean;
  clearCashGiftId(): void;
  getCashGiftId(): number;
  setCashGiftId(value: number): void;

  hasCashGiftName(): boolean;
  clearCashGiftName(): void;
  getCashGiftName(): string;
  setCashGiftName(value: string): void;

  hasIteminfo(): boolean;
  clearIteminfo(): void;
  getIteminfo(): boolean;
  setIteminfo(value: boolean): void;

  hasGenerateAuthorityUrl(): boolean;
  clearGenerateAuthorityUrl(): void;
  getGenerateAuthorityUrl(): boolean;
  setGenerateAuthorityUrl(value: boolean): void;

  hasGenerateShortUrl(): boolean;
  clearGenerateShortUrl(): void;
  getGenerateShortUrl(): boolean;
  setGenerateShortUrl(value: boolean): void;

  hasMultiGroup(): boolean;
  clearMultiGroup(): void;
  getMultiGroup(): boolean;
  setMultiGroup(value: boolean): void;

  hasGenerateWeappWebview(): boolean;
  clearGenerateWeappWebview(): void;
  getGenerateWeappWebview(): boolean;
  setGenerateWeappWebview(value: boolean): void;

  hasZsDuoId(): boolean;
  clearZsDuoId(): void;
  getZsDuoId(): string;
  setZsDuoId(value: string): void;

  hasGenerateWeApp(): boolean;
  clearGenerateWeApp(): void;
  getGenerateWeApp(): boolean;
  setGenerateWeApp(value: boolean): void;

  hasGenerateWeiboappWebview(): boolean;
  clearGenerateWeiboappWebview(): void;
  getGenerateWeiboappWebview(): boolean;
  setGenerateWeiboappWebview(value: boolean): void;

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

  hasSearchId(): boolean;
  clearSearchId(): void;
  getSearchId(): string;
  setSearchId(value: string): void;

  hasForceDuoId(): boolean;
  clearForceDuoId(): void;
  getForceDuoId(): boolean;
  setForceDuoId(value: boolean): void;

  hasGoodsIdList(): boolean;
  clearGoodsIdList(): void;
  getGoodsIdList(): string;
  setGoodsIdList(value: string): void;

  hasPddAuthId(): boolean;
  clearPddAuthId(): void;
  getPddAuthId(): string;
  setPddAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionRequest): PromotionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionRequest;
  static deserializeBinaryFromReader(message: PromotionRequest, reader: jspb.BinaryReader): PromotionRequest;
}

export namespace PromotionRequest {
  export type AsObject = {
    goodsSign: string,
    pid: string,
    customParameters: string,
    cashGiftId: number,
    cashGiftName: string,
    iteminfo: boolean,
    generateAuthorityUrl: boolean,
    generateShortUrl: boolean,
    multiGroup: boolean,
    generateWeappWebview: boolean,
    zsDuoId: string,
    generateWeApp: boolean,
    generateWeiboappWebview: boolean,
    generateMallCollectCoupon: boolean,
    generateQqApp: boolean,
    generateSchemaUrl: boolean,
    searchId: string,
    forceDuoId: boolean,
    goodsIdList: string,
    pddAuthId: string,
  }
}

export class PromotionResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): PromotedData | undefined;
  setData(value?: PromotedData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionResponse): PromotionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionResponse;
  static deserializeBinaryFromReader(message: PromotionResponse, reader: jspb.BinaryReader): PromotionResponse;
}

export namespace PromotionResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: PromotedData.AsObject,
  }
}

