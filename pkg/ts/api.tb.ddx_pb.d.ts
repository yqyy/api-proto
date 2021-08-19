// package: tbpb
// file: api.tb.ddx.proto

import * as jspb from "google-protobuf";

export class SmallImages extends jspb.Message {
  clearStringList(): void;
  getStringList(): Array<string>;
  setStringList(value: Array<string>): void;
  addString(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmallImages.AsObject;
  static toObject(includeInstance: boolean, msg: SmallImages): SmallImages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmallImages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmallImages;
  static deserializeBinaryFromReader(message: SmallImages, reader: jspb.BinaryReader): SmallImages;
}

export namespace SmallImages {
  export type AsObject = {
    stringList: Array<string>,
  }
}

export class GoodsDetail extends jspb.Message {
  getCategoryId(): number;
  setCategoryId(value: number): void;

  getCategoryName(): string;
  setCategoryName(value: string): void;

  getCommissionRate(): string;
  setCommissionRate(value: string): void;

  getCommissionType(): string;
  setCommissionType(value: string): void;

  getCouponAmount(): string;
  setCouponAmount(value: string): void;

  getCouponEndTime(): string;
  setCouponEndTime(value: string): void;

  getCouponId(): string;
  setCouponId(value: string): void;

  getCouponInfo(): string;
  setCouponInfo(value: string): void;

  getCouponRemainCount(): number;
  setCouponRemainCount(value: number): void;

  getCouponShareUrl(): string;
  setCouponShareUrl(value: string): void;

  getCouponStartFee(): string;
  setCouponStartFee(value: string): void;

  getCouponStartTime(): string;
  setCouponStartTime(value: string): void;

  getCouponTotalCount(): number;
  setCouponTotalCount(value: number): void;

  getIncludeDxjh(): string;
  setIncludeDxjh(value: string): void;

  getIncludeMkt(): string;
  setIncludeMkt(value: string): void;

  getInfoDxjh(): string;
  setInfoDxjh(value: string): void;

  getItemDescription(): string;
  setItemDescription(value: string): void;

  getItemId(): number;
  setItemId(value: number): void;

  getItemUrl(): string;
  setItemUrl(value: string): void;

  getLevelOneCategoryId(): number;
  setLevelOneCategoryId(value: number): void;

  getLevelOneCategoryName(): string;
  setLevelOneCategoryName(value: string): void;

  getNick(): string;
  setNick(value: string): void;

  getNumIid(): number;
  setNumIid(value: number): void;

  getPictUrl(): string;
  setPictUrl(value: string): void;

  getPresaleDeposit(): string;
  setPresaleDeposit(value: string): void;

  getPresaleEndTime(): number;
  setPresaleEndTime(value: number): void;

  getPresaleStartTime(): number;
  setPresaleStartTime(value: number): void;

  getPresaleTailEndTime(): number;
  setPresaleTailEndTime(value: number): void;

  getPresaleTailStartTime(): number;
  setPresaleTailStartTime(value: number): void;

  getPresaleDiscountFeeText(): string;
  setPresaleDiscountFeeText(value: string): void;

  getProvcity(): string;
  setProvcity(value: string): void;

  getRealPostFee(): string;
  setRealPostFee(value: string): void;

  getReservePrice(): string;
  setReservePrice(value: string): void;

  getSellerId(): number;
  setSellerId(value: number): void;

  getShopDsr(): number;
  setShopDsr(value: number): void;

  getShortTitle(): string;
  setShortTitle(value: string): void;

  hasSmallImages(): boolean;
  clearSmallImages(): void;
  getSmallImages(): SmallImages | undefined;
  setSmallImages(value?: SmallImages): void;

  getSuperiorBrand(): string;
  setSuperiorBrand(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getTkTotalCommi(): string;
  setTkTotalCommi(value: string): void;

  getTkTotalSales(): string;
  setTkTotalSales(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getUserType(): number;
  setUserType(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getWhiteImage(): string;
  setWhiteImage(value: string): void;

  getXId(): string;
  setXId(value: string): void;

  getZkFinalPrice(): string;
  setZkFinalPrice(value: string): void;

  getShopTitle(): string;
  setShopTitle(value: string): void;

  getOetime(): string;
  setOetime(value: string): void;

  getOstime(): string;
  setOstime(value: string): void;

  getJddNum(): number;
  setJddNum(value: number): void;

  getJddPrice(): string;
  setJddPrice(value: string): void;

  getCoupon(): string;
  setCoupon(value: string): void;

  getUvSumPreSale(): string;
  setUvSumPreSale(value: string): void;

  getOrigPrice(): string;
  setOrigPrice(value: string): void;

  getTotalStock(): number;
  setTotalStock(value: number): void;

  getSellNum(): number;
  setSellNum(value: number): void;

  getStock(): number;
  setStock(value: number): void;

  getTmallPlayActivityInfo(): string;
  setTmallPlayActivityInfo(value: string): void;

  getLockRateEndTime(): number;
  setLockRateEndTime(value: number): void;

  getLockRateStartTime(): number;
  setLockRateStartTime(value: number): void;

  getLockRate(): string;
  setLockRate(value: string): void;

  getYsylTljSendTime(): string;
  setYsylTljSendTime(value: string): void;

  getYsylClickUrl(): string;
  setYsylClickUrl(value: string): void;

  getYsylCommissionRate(): string;
  setYsylCommissionRate(value: string): void;

  getYsylTljFace(): string;
  setYsylTljFace(value: string): void;

  getYsylTljUseEndTime(): string;
  setYsylTljUseEndTime(value: string): void;

  getYsylTljUseStartTime(): string;
  setYsylTljUseStartTime(value: string): void;

  getSalePrice(): string;
  setSalePrice(value: string): void;

  getKuadianPromotionInfo(): string;
  setKuadianPromotionInfo(value: string): void;

  getCommiScore(): string;
  setCommiScore(value: string): void;

  getMatchScore(): string;
  setMatchScore(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoodsDetail.AsObject;
  static toObject(includeInstance: boolean, msg: GoodsDetail): GoodsDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoodsDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoodsDetail;
  static deserializeBinaryFromReader(message: GoodsDetail, reader: jspb.BinaryReader): GoodsDetail;
}

export namespace GoodsDetail {
  export type AsObject = {
    categoryId: number,
    categoryName: string,
    commissionRate: string,
    commissionType: string,
    couponAmount: string,
    couponEndTime: string,
    couponId: string,
    couponInfo: string,
    couponRemainCount: number,
    couponShareUrl: string,
    couponStartFee: string,
    couponStartTime: string,
    couponTotalCount: number,
    includeDxjh: string,
    includeMkt: string,
    infoDxjh: string,
    itemDescription: string,
    itemId: number,
    itemUrl: string,
    levelOneCategoryId: number,
    levelOneCategoryName: string,
    nick: string,
    numIid: number,
    pictUrl: string,
    presaleDeposit: string,
    presaleEndTime: number,
    presaleStartTime: number,
    presaleTailEndTime: number,
    presaleTailStartTime: number,
    presaleDiscountFeeText: string,
    provcity: string,
    realPostFee: string,
    reservePrice: string,
    sellerId: number,
    shopDsr: number,
    shortTitle: string,
    smallImages?: SmallImages.AsObject,
    superiorBrand: string,
    title: string,
    tkTotalCommi: string,
    tkTotalSales: string,
    url: string,
    userType: number,
    volume: number,
    whiteImage: string,
    xId: string,
    zkFinalPrice: string,
    shopTitle: string,
    oetime: string,
    ostime: string,
    jddNum: number,
    jddPrice: string,
    coupon: string,
    uvSumPreSale: string,
    origPrice: string,
    totalStock: number,
    sellNum: number,
    stock: number,
    tmallPlayActivityInfo: string,
    lockRateEndTime: number,
    lockRateStartTime: number,
    lockRate: string,
    ysylTljSendTime: string,
    ysylClickUrl: string,
    ysylCommissionRate: string,
    ysylTljFace: string,
    ysylTljUseEndTime: string,
    ysylTljUseStartTime: string,
    salePrice: string,
    kuadianPromotionInfo: string,
    commiScore: string,
    matchScore: string,
  }
}

export class SearchGoodsRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): string;
  setCategory(value: string): void;

  hasHasCoupon(): boolean;
  clearHasCoupon(): void;
  getHasCoupon(): boolean;
  setHasCoupon(value: boolean): void;

  hasSort(): boolean;
  clearSort(): void;
  getSort(): string;
  setSort(value: string): void;

  hasPlatform(): boolean;
  clearPlatform(): void;
  getPlatform(): string;
  setPlatform(value: string): void;

  hasPageSize(): boolean;
  clearPageSize(): void;
  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageNo(): boolean;
  clearPageNo(): void;
  getPageNo(): number;
  setPageNo(value: number): void;

  hasStartDsr(): boolean;
  clearStartDsr(): void;
  getStartDsr(): number;
  setStartDsr(value: number): void;

  hasEndTkRate(): boolean;
  clearEndTkRate(): void;
  getEndTkRate(): number;
  setEndTkRate(value: number): void;

  hasStartTkRate(): boolean;
  clearStartTkRate(): void;
  getStartTkRate(): number;
  setStartTkRate(value: number): void;

  hasEndPrice(): boolean;
  clearEndPrice(): void;
  getEndPrice(): number;
  setEndPrice(value: number): void;

  hasStartPrice(): boolean;
  clearStartPrice(): void;
  getStartPrice(): number;
  setStartPrice(value: number): void;

  hasIsOverseas(): boolean;
  clearIsOverseas(): void;
  getIsOverseas(): boolean;
  setIsOverseas(value: boolean): void;

  hasIsTmall(): boolean;
  clearIsTmall(): void;
  getIsTmall(): boolean;
  setIsTmall(value: boolean): void;

  hasItemLoc(): boolean;
  clearItemLoc(): void;
  getItemLoc(): string;
  setItemLoc(value: string): void;

  hasMaterialId(): boolean;
  clearMaterialId(): void;
  getMaterialId(): number;
  setMaterialId(value: number): void;

  hasIp(): boolean;
  clearIp(): void;
  getIp(): string;
  setIp(value: string): void;

  hasIncludeRfdRate(): boolean;
  clearIncludeRfdRate(): void;
  getIncludeRfdRate(): boolean;
  setIncludeRfdRate(value: boolean): void;

  hasIncludeGoodRate(): boolean;
  clearIncludeGoodRate(): void;
  getIncludeGoodRate(): boolean;
  setIncludeGoodRate(value: boolean): void;

  hasIncludePayRate(): boolean;
  clearIncludePayRate(): void;
  getIncludePayRate(): boolean;
  setIncludePayRate(value: boolean): void;

  hasNeedPrepay(): boolean;
  clearNeedPrepay(): void;
  getNeedPrepay(): boolean;
  setNeedPrepay(value: boolean): void;

  hasNeedFreeShipment(): boolean;
  clearNeedFreeShipment(): void;
  getNeedFreeShipment(): boolean;
  setNeedFreeShipment(value: boolean): void;

  hasNpxLevel(): boolean;
  clearNpxLevel(): void;
  getNpxLevel(): number;
  setNpxLevel(value: number): void;

  hasEndKaTkRate(): boolean;
  clearEndKaTkRate(): void;
  getEndKaTkRate(): number;
  setEndKaTkRate(value: number): void;

  hasStartKaTkRate(): boolean;
  clearStartKaTkRate(): void;
  getStartKaTkRate(): number;
  setStartKaTkRate(value: number): void;

  hasLockRateEndTime(): boolean;
  clearLockRateEndTime(): void;
  getLockRateEndTime(): number;
  setLockRateEndTime(value: number): void;

  hasLockRateStartTime(): boolean;
  clearLockRateStartTime(): void;
  getLockRateStartTime(): number;
  setLockRateStartTime(value: number): void;

  hasRelationId(): boolean;
  clearRelationId(): void;
  getRelationId(): string;
  setRelationId(value: string): void;

  hasSpecialId(): boolean;
  clearSpecialId(): void;
  getSpecialId(): string;
  setSpecialId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoodsRequest): SearchGoodsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGoodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoodsRequest;
  static deserializeBinaryFromReader(message: SearchGoodsRequest, reader: jspb.BinaryReader): SearchGoodsRequest;
}

export namespace SearchGoodsRequest {
  export type AsObject = {
    keyword: string,
    category: string,
    hasCoupon: boolean,
    sort: string,
    platform: string,
    pageSize: number,
    pageNo: number,
    startDsr: number,
    endTkRate: number,
    startTkRate: number,
    endPrice: number,
    startPrice: number,
    isOverseas: boolean,
    isTmall: boolean,
    itemLoc: string,
    materialId: number,
    ip: string,
    includeRfdRate: boolean,
    includeGoodRate: boolean,
    includePayRate: boolean,
    needPrepay: boolean,
    needFreeShipment: boolean,
    npxLevel: number,
    endKaTkRate: number,
    startKaTkRate: number,
    lockRateEndTime: number,
    lockRateStartTime: number,
    relationId: string,
    specialId: string,
  }
}

export class SearchGoodsMsgData extends jspb.Message {
  getTotalResults(): number;
  setTotalResults(value: number): void;

  clearDataList(): void;
  getDataList(): Array<GoodsDetail>;
  setDataList(value: Array<GoodsDetail>): void;
  addData(value?: GoodsDetail, index?: number): GoodsDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoodsMsgData.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoodsMsgData): SearchGoodsMsgData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGoodsMsgData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoodsMsgData;
  static deserializeBinaryFromReader(message: SearchGoodsMsgData, reader: jspb.BinaryReader): SearchGoodsMsgData;
}

export namespace SearchGoodsMsgData {
  export type AsObject = {
    totalResults: number,
    dataList: Array<GoodsDetail.AsObject>,
  }
}

export class SearchGoodsResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): SearchGoodsMsgData | undefined;
  setData(value?: SearchGoodsMsgData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoodsResponse): SearchGoodsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGoodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoodsResponse;
  static deserializeBinaryFromReader(message: SearchGoodsResponse, reader: jspb.BinaryReader): SearchGoodsResponse;
}

export namespace SearchGoodsResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: SearchGoodsMsgData.AsObject,
  }
}

export class DdxTbApiSearchGoodsRes extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  getTotalResults(): number;
  setTotalResults(value: number): void;

  clearDataList(): void;
  getDataList(): Array<GoodsDetail>;
  setDataList(value: Array<GoodsDetail>): void;
  addData(value?: GoodsDetail, index?: number): GoodsDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DdxTbApiSearchGoodsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DdxTbApiSearchGoodsRes): DdxTbApiSearchGoodsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DdxTbApiSearchGoodsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DdxTbApiSearchGoodsRes;
  static deserializeBinaryFromReader(message: DdxTbApiSearchGoodsRes, reader: jspb.BinaryReader): DdxTbApiSearchGoodsRes;
}

export namespace DdxTbApiSearchGoodsRes {
  export type AsObject = {
    code: number,
    msg: string,
    totalResults: number,
    dataList: Array<GoodsDetail.AsObject>,
  }
}

export class PromoteURLByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): string;
  setSignature(value: string): void;

  hasPid(): boolean;
  clearPid(): void;
  getPid(): string;
  setPid(value: string): void;

  hasRelationId(): boolean;
  clearRelationId(): void;
  getRelationId(): string;
  setRelationId(value: string): void;

  hasTpwd(): boolean;
  clearTpwd(): void;
  getTpwd(): boolean;
  setTpwd(value: boolean): void;

  hasActivityId(): boolean;
  clearActivityId(): void;
  getActivityId(): string;
  setActivityId(value: string): void;

  hasLogo(): boolean;
  clearLogo(): void;
  getLogo(): string;
  setLogo(value: string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasItemInfo(): boolean;
  clearItemInfo(): void;
  getItemInfo(): boolean;
  setItemInfo(value: boolean): void;

  hasExtspk(): boolean;
  clearExtspk(): void;
  getExtspk(): boolean;
  setExtspk(value: boolean): void;

  hasLeftSymbol(): boolean;
  clearLeftSymbol(): void;
  getLeftSymbol(): string;
  setLeftSymbol(value: string): void;

  hasRightSymbol(): boolean;
  clearRightSymbol(): void;
  getRightSymbol(): string;
  setRightSymbol(value: string): void;

  hasShortUrl(): boolean;
  clearShortUrl(): void;
  getShortUrl(): boolean;
  setShortUrl(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteURLByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteURLByIDRequest): PromoteURLByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoteURLByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteURLByIDRequest;
  static deserializeBinaryFromReader(message: PromoteURLByIDRequest, reader: jspb.BinaryReader): PromoteURLByIDRequest;
}

export namespace PromoteURLByIDRequest {
  export type AsObject = {
    id: string,
    signature: string,
    pid: string,
    relationId: string,
    tpwd: boolean,
    activityId: string,
    logo: string,
    text: string,
    itemInfo: boolean,
    extspk: boolean,
    leftSymbol: string,
    rightSymbol: string,
    shortUrl: boolean,
  }
}

export class PromoteURLByTKLRequest extends jspb.Message {
  getTkl(): string;
  setTkl(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): string;
  setSignature(value: string): void;

  hasPid(): boolean;
  clearPid(): void;
  getPid(): string;
  setPid(value: string): void;

  hasRelationId(): boolean;
  clearRelationId(): void;
  getRelationId(): string;
  setRelationId(value: string): void;

  hasTpwd(): boolean;
  clearTpwd(): void;
  getTpwd(): boolean;
  setTpwd(value: boolean): void;

  hasActivityId(): boolean;
  clearActivityId(): void;
  getActivityId(): string;
  setActivityId(value: string): void;

  hasLogo(): boolean;
  clearLogo(): void;
  getLogo(): string;
  setLogo(value: string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasItemInfo(): boolean;
  clearItemInfo(): void;
  getItemInfo(): boolean;
  setItemInfo(value: boolean): void;

  hasExtspk(): boolean;
  clearExtspk(): void;
  getExtspk(): boolean;
  setExtspk(value: boolean): void;

  hasLeftSymbol(): boolean;
  clearLeftSymbol(): void;
  getLeftSymbol(): string;
  setLeftSymbol(value: string): void;

  hasRightSymbol(): boolean;
  clearRightSymbol(): void;
  getRightSymbol(): string;
  setRightSymbol(value: string): void;

  hasShortUrl(): boolean;
  clearShortUrl(): void;
  getShortUrl(): boolean;
  setShortUrl(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteURLByTKLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteURLByTKLRequest): PromoteURLByTKLRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoteURLByTKLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteURLByTKLRequest;
  static deserializeBinaryFromReader(message: PromoteURLByTKLRequest, reader: jspb.BinaryReader): PromoteURLByTKLRequest;
}

export namespace PromoteURLByTKLRequest {
  export type AsObject = {
    tkl: string,
    signature: string,
    pid: string,
    relationId: string,
    tpwd: boolean,
    activityId: string,
    logo: string,
    text: string,
    itemInfo: boolean,
    extspk: boolean,
    leftSymbol: string,
    rightSymbol: string,
    shortUrl: boolean,
  }
}

export class ItemInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getPictUrl(): string;
  setPictUrl(value: string): void;

  hasSmallImages(): boolean;
  clearSmallImages(): void;
  getSmallImages(): SmallImages | undefined;
  setSmallImages(value?: SmallImages): void;

  getReservePrice(): number;
  setReservePrice(value: number): void;

  getZkFinalPrice(): number;
  setZkFinalPrice(value: number): void;

  getQhFinalPrice(): number;
  setQhFinalPrice(value: number): void;

  getQhFinalCommission(): number;
  setQhFinalCommission(value: number): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getUserType(): number;
  setUserType(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getSellerId(): number;
  setSellerId(value: number): void;

  getNick(): string;
  setNick(value: string): void;

  getMaterialLibType(): string;
  setMaterialLibType(value: string): void;

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
    title: string,
    pictUrl: string,
    smallImages?: SmallImages.AsObject,
    reservePrice: number,
    zkFinalPrice: number,
    qhFinalPrice: number,
    qhFinalCommission: number,
    activityId: string,
    userType: number,
    volume: number,
    sellerId: number,
    nick: string,
    materialLibType: string,
  }
}

export class PromotedURLData extends jspb.Message {
  getCategoryId(): number;
  setCategoryId(value: number): void;

  getCouponClickUrl(): string;
  setCouponClickUrl(value: string): void;

  getCouponStartTime(): string;
  setCouponStartTime(value: string): void;

  getCouponEndTime(): string;
  setCouponEndTime(value: string): void;

  getCouponInfo(): string;
  setCouponInfo(value: string): void;

  getCoupon(): string;
  setCoupon(value: string): void;

  getItemId(): number;
  setItemId(value: number): void;

  getMaxCommissionRate(): string;
  setMaxCommissionRate(value: string): void;

  getCouponTotalCount(): number;
  setCouponTotalCount(value: number): void;

  getCouponRemainCount(): string;
  setCouponRemainCount(value: string): void;

  getMmCouponRemainCount(): number;
  setMmCouponRemainCount(value: number): void;

  getMmCouponTotalCount(): number;
  setMmCouponTotalCount(value: number): void;

  getMmCouponClickUrl(): string;
  setMmCouponClickUrl(value: string): void;

  getMmCouponStartTime(): string;
  setMmCouponStartTime(value: string): void;

  getMmCouponEndTime(): string;
  setMmCouponEndTime(value: string): void;

  getMmCouponInfo(): string;
  setMmCouponInfo(value: string): void;

  getCouponType(): number;
  setCouponType(value: number): void;

  getItemUrl(): string;
  setItemUrl(value: string): void;

  getCouponTpwd(): string;
  setCouponTpwd(value: string): void;

  getLongCouponTpwd(): string;
  setLongCouponTpwd(value: string): void;

  getItemTpwd(): string;
  setItemTpwd(value: string): void;

  getLongItemTpwd(): string;
  setLongItemTpwd(value: string): void;

  hasIteminfo(): boolean;
  clearIteminfo(): void;
  getIteminfo(): ItemInfo | undefined;
  setIteminfo(value?: ItemInfo): void;

  getYsylClickUrl(): string;
  setYsylClickUrl(value: string): void;

  getYsylTljFace(): string;
  setYsylTljFace(value: string): void;

  getYsylTljSendTime(): string;
  setYsylTljSendTime(value: string): void;

  getYsylCommissionRate(): string;
  setYsylCommissionRate(value: string): void;

  getYsylTljUseStartTime(): string;
  setYsylTljUseStartTime(value: string): void;

  getYsylTljUseEndTime(): string;
  setYsylTljUseEndTime(value: string): void;

  getMinCommissionRate(): string;
  setMinCommissionRate(value: string): void;

  getRewardInfo(): number;
  setRewardInfo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotedURLData.AsObject;
  static toObject(includeInstance: boolean, msg: PromotedURLData): PromotedURLData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotedURLData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotedURLData;
  static deserializeBinaryFromReader(message: PromotedURLData, reader: jspb.BinaryReader): PromotedURLData;
}

export namespace PromotedURLData {
  export type AsObject = {
    categoryId: number,
    couponClickUrl: string,
    couponStartTime: string,
    couponEndTime: string,
    couponInfo: string,
    coupon: string,
    itemId: number,
    maxCommissionRate: string,
    couponTotalCount: number,
    couponRemainCount: string,
    mmCouponRemainCount: number,
    mmCouponTotalCount: number,
    mmCouponClickUrl: string,
    mmCouponStartTime: string,
    mmCouponEndTime: string,
    mmCouponInfo: string,
    couponType: number,
    itemUrl: string,
    couponTpwd: string,
    longCouponTpwd: string,
    itemTpwd: string,
    longItemTpwd: string,
    iteminfo?: ItemInfo.AsObject,
    ysylClickUrl: string,
    ysylTljFace: string,
    ysylTljSendTime: string,
    ysylCommissionRate: string,
    ysylTljUseStartTime: string,
    ysylTljUseEndTime: string,
    minCommissionRate: string,
    rewardInfo: number,
  }
}

export class PromoteURLResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): PromotedURLData | undefined;
  setData(value?: PromotedURLData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteURLResponse): PromoteURLResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoteURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteURLResponse;
  static deserializeBinaryFromReader(message: PromoteURLResponse, reader: jspb.BinaryReader): PromoteURLResponse;
}

export namespace PromoteURLResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: PromotedURLData.AsObject,
  }
}

