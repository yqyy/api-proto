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

  getCouponRemainCount(): number;
  setCouponRemainCount(value: number): void;

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
    couponRemainCount: number,
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

export class OfflineInfo extends jspb.Message {
  getShopName(): string;
  setShopName(value: string): void;

  getShopType(): string;
  setShopType(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getDetailAddress(): string;
  setDetailAddress(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getShopCertifyType(): string;
  setShopCertifyType(value: string): void;

  getCertifyNumber(): string;
  setCertifyNumber(value: string): void;

  getCareer(): string;
  setCareer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineInfo): OfflineInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineInfo;
  static deserializeBinaryFromReader(message: OfflineInfo, reader: jspb.BinaryReader): OfflineInfo;
}

export namespace OfflineInfo {
  export type AsObject = {
    shopName: string,
    shopType: string,
    phoneNumber: string,
    detailAddress: string,
    location: string,
    shopCertifyType: string,
    certifyNumber: string,
    career: string,
  }
}

export class MapData extends jspb.Message {
  getReationApp(): string;
  setReationApp(value: string): void;

  getCreateDate(): string;
  setCreateDate(value: string): void;

  getAccountName(): string;
  setAccountName(value: string): void;

  getReaName(): string;
  setReaName(value: string): void;

  getReationId(): number;
  setReationId(value: number): void;

  getOffineScene(): string;
  setOffineScene(value: string): void;

  getOnineScene(): string;
  setOnineScene(value: string): void;

  getNote(): string;
  setNote(value: string): void;

  getRootPid(): string;
  setRootPid(value: string): void;

  getRtag(): string;
  setRtag(value: string): void;

  hasOffineInfo(): boolean;
  clearOffineInfo(): void;
  getOffineInfo(): OfflineInfo | undefined;
  setOffineInfo(value?: OfflineInfo): void;

  getSpecialId(): number;
  setSpecialId(value: number): void;

  getPunishStatus(): string;
  setPunishStatus(value: string): void;

  getExternalId(): string;
  setExternalId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapData.AsObject;
  static toObject(includeInstance: boolean, msg: MapData): MapData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapData;
  static deserializeBinaryFromReader(message: MapData, reader: jspb.BinaryReader): MapData;
}

export namespace MapData {
  export type AsObject = {
    reationApp: string,
    createDate: string,
    accountName: string,
    reaName: string,
    reationId: number,
    offineScene: string,
    onineScene: string,
    note: string,
    rootPid: string,
    rtag: string,
    offineInfo?: OfflineInfo.AsObject,
    specialId: number,
    punishStatus: string,
    externalId: string,
  }
}

export class InviterList extends jspb.Message {
  clearMapDataList(): void;
  getMapDataList(): Array<MapData>;
  setMapDataList(value: Array<MapData>): void;
  addMapData(value?: MapData, index?: number): MapData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviterList.AsObject;
  static toObject(includeInstance: boolean, msg: InviterList): InviterList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviterList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviterList;
  static deserializeBinaryFromReader(message: InviterList, reader: jspb.BinaryReader): InviterList;
}

export namespace InviterList {
  export type AsObject = {
    mapDataList: Array<MapData.AsObject>,
  }
}

export class RootPidChannelList extends jspb.Message {
  clearStringList(): void;
  getStringList(): Array<string>;
  setStringList(value: Array<string>): void;
  addString(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootPidChannelList.AsObject;
  static toObject(includeInstance: boolean, msg: RootPidChannelList): RootPidChannelList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RootPidChannelList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootPidChannelList;
  static deserializeBinaryFromReader(message: RootPidChannelList, reader: jspb.BinaryReader): RootPidChannelList;
}

export namespace RootPidChannelList {
  export type AsObject = {
    stringList: Array<string>,
  }
}

export class PublisherData extends jspb.Message {
  hasInviterList(): boolean;
  clearInviterList(): void;
  getInviterList(): InviterList | undefined;
  setInviterList(value?: InviterList): void;

  hasRootPidChannelList(): boolean;
  clearRootPidChannelList(): void;
  getRootPidChannelList(): RootPidChannelList | undefined;
  setRootPidChannelList(value?: RootPidChannelList): void;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublisherData.AsObject;
  static toObject(includeInstance: boolean, msg: PublisherData): PublisherData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublisherData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublisherData;
  static deserializeBinaryFromReader(message: PublisherData, reader: jspb.BinaryReader): PublisherData;
}

export namespace PublisherData {
  export type AsObject = {
    inviterList?: InviterList.AsObject,
    rootPidChannelList?: RootPidChannelList.AsObject,
    totalCount: number,
  }
}

export class PublisherGetRequest extends jspb.Message {
  getInfoType(): number;
  setInfoType(value: number): void;

  getRelationApp(): string;
  setRelationApp(value: string): void;

  hasRelationId(): boolean;
  clearRelationId(): void;
  getRelationId(): number;
  setRelationId(value: number): void;

  hasPageNo(): boolean;
  clearPageNo(): void;
  getPageNo(): number;
  setPageNo(value: number): void;

  hasPageSize(): boolean;
  clearPageSize(): void;
  getPageSize(): number;
  setPageSize(value: number): void;

  hasSpecialId(): boolean;
  clearSpecialId(): void;
  getSpecialId(): string;
  setSpecialId(value: string): void;

  hasExternalId(): boolean;
  clearExternalId(): void;
  getExternalId(): string;
  setExternalId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublisherGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublisherGetRequest): PublisherGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublisherGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublisherGetRequest;
  static deserializeBinaryFromReader(message: PublisherGetRequest, reader: jspb.BinaryReader): PublisherGetRequest;
}

export namespace PublisherGetRequest {
  export type AsObject = {
    infoType: number,
    relationApp: string,
    relationId: number,
    pageNo: number,
    pageSize: number,
    specialId: string,
    externalId: string,
  }
}

export class PublisherGetResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): PublisherData | undefined;
  setData(value?: PublisherData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublisherGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublisherGetResponse): PublisherGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublisherGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublisherGetResponse;
  static deserializeBinaryFromReader(message: PublisherGetResponse, reader: jspb.BinaryReader): PublisherGetResponse;
}

export namespace PublisherGetResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: PublisherData.AsObject,
  }
}

export class PublisherSaveData extends jspb.Message {
  getAuthorizationUrl(): string;
  setAuthorizationUrl(value: string): void;

  getNote(): string;
  setNote(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublisherSaveData.AsObject;
  static toObject(includeInstance: boolean, msg: PublisherSaveData): PublisherSaveData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublisherSaveData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublisherSaveData;
  static deserializeBinaryFromReader(message: PublisherSaveData, reader: jspb.BinaryReader): PublisherSaveData;
}

export namespace PublisherSaveData {
  export type AsObject = {
    authorizationUrl: string,
    note: string,
  }
}

export class PublisherSaveRequest extends jspb.Message {
  getCallbackUrl(): string;
  setCallbackUrl(value: string): void;

  hasCallbackDataFormat(): boolean;
  clearCallbackDataFormat(): void;
  getCallbackDataFormat(): string;
  setCallbackDataFormat(value: string): void;

  getNote(): string;
  setNote(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): number;
  setType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublisherSaveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublisherSaveRequest): PublisherSaveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublisherSaveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublisherSaveRequest;
  static deserializeBinaryFromReader(message: PublisherSaveRequest, reader: jspb.BinaryReader): PublisherSaveRequest;
}

export namespace PublisherSaveRequest {
  export type AsObject = {
    callbackUrl: string,
    callbackDataFormat: string,
    note: string,
    type: number,
  }
}

export class PublisherSaveResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): PublisherSaveData | undefined;
  setData(value?: PublisherSaveData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublisherSaveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublisherSaveResponse): PublisherSaveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublisherSaveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublisherSaveResponse;
  static deserializeBinaryFromReader(message: PublisherSaveResponse, reader: jspb.BinaryReader): PublisherSaveResponse;
}

export namespace PublisherSaveResponse {
  export type AsObject = {
    code: number,
    msg: string,
    data?: PublisherSaveData.AsObject,
  }
}

export class ServiceFee extends jspb.Message {
  getShareRelativeRate(): string;
  setShareRelativeRate(value: string): void;

  getShareFee(): string;
  setShareFee(value: string): void;

  getSharePreFee(): string;
  setSharePreFee(value: string): void;

  getTkShareRoleType(): number;
  setTkShareRoleType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceFee.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceFee): ServiceFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceFee;
  static deserializeBinaryFromReader(message: ServiceFee, reader: jspb.BinaryReader): ServiceFee;
}

export namespace ServiceFee {
  export type AsObject = {
    shareRelativeRate: string,
    shareFee: string,
    sharePreFee: string,
    tkShareRoleType: number,
  }
}

export class OrderDetail extends jspb.Message {
  getTbPaidTime(): string;
  setTbPaidTime(value: string): void;

  getTkPaidTime(): string;
  setTkPaidTime(value: string): void;

  getPayPrice(): string;
  setPayPrice(value: string): void;

  getPubShareFee(): string;
  setPubShareFee(value: string): void;

  getTradeId(): string;
  setTradeId(value: string): void;

  getTkOrderRole(): number;
  setTkOrderRole(value: number): void;

  getTkEarningTime(): string;
  setTkEarningTime(value: string): void;

  getAdzoneId(): number;
  setAdzoneId(value: number): void;

  getPubShareRate(): string;
  setPubShareRate(value: string): void;

  getRefundTag(): number;
  setRefundTag(value: number): void;

  getSubsidyRate(): string;
  setSubsidyRate(value: string): void;

  getTkTotalRate(): string;
  setTkTotalRate(value: string): void;

  getItemCategoryName(): string;
  setItemCategoryName(value: string): void;

  getSellerNick(): string;
  setSellerNick(value: string): void;

  getPubId(): number;
  setPubId(value: number): void;

  getAlimamaRate(): string;
  setAlimamaRate(value: string): void;

  getSubsidyType(): string;
  setSubsidyType(value: string): void;

  getItemImg(): string;
  setItemImg(value: string): void;

  getPubSharePreFee(): string;
  setPubSharePreFee(value: string): void;

  getAlipayTotalPrice(): string;
  setAlipayTotalPrice(value: string): void;

  getItemTitle(): string;
  setItemTitle(value: string): void;

  getModifiedTime(): string;
  setModifiedTime(value: string): void;

  getSiteName(): string;
  setSiteName(value: string): void;

  getItemNum(): number;
  setItemNum(value: number): void;

  getSubsidyFee(): string;
  setSubsidyFee(value: string): void;

  getAlimamaShareFee(): string;
  setAlimamaShareFee(value: string): void;

  getTradeParentId(): string;
  setTradeParentId(value: string): void;

  getOrderType(): string;
  setOrderType(value: string): void;

  getTkCreateTime(): string;
  setTkCreateTime(value: string): void;

  getFlowSource(): string;
  setFlowSource(value: string): void;

  getTerminalType(): string;
  setTerminalType(value: string): void;

  getClickTime(): string;
  setClickTime(value: string): void;

  getTkStatus(): number;
  setTkStatus(value: number): void;

  getItemPrice(): string;
  setItemPrice(value: string): void;

  getItemId(): string;
  setItemId(value: string): void;

  getAdzoneName(): string;
  setAdzoneName(value: string): void;

  getTotalCommissionRate(): string;
  setTotalCommissionRate(value: string): void;

  getItemLink(): string;
  setItemLink(value: string): void;

  getSiteId(): number;
  setSiteId(value: number): void;

  getSellerShopTitle(): string;
  setSellerShopTitle(value: string): void;

  getIncomeRate(): string;
  setIncomeRate(value: string): void;

  getTotalCommissionFee(): string;
  setTotalCommissionFee(value: string): void;

  getSpecialId(): number;
  setSpecialId(value: number): void;

  getRelationId(): number;
  setRelationId(value: number): void;

  getTkDepositTime(): string;
  setTkDepositTime(value: string): void;

  getTbDepositTime(): string;
  setTbDepositTime(value: string): void;

  getDepositPrice(): string;
  setDepositPrice(value: string): void;

  getTkCommissionPreFeeForMediaPlatform(): string;
  setTkCommissionPreFeeForMediaPlatform(value: string): void;

  getTkCommissionFeeForMediaPlatform(): string;
  setTkCommissionFeeForMediaPlatform(value: string): void;

  getTkCommissionRateForMediaPlatform(): string;
  setTkCommissionRateForMediaPlatform(value: string): void;

  getAlscId(): string;
  setAlscId(value: string): void;

  getAlscPid(): string;
  setAlscPid(value: string): void;

  clearServiceFeeDtoListList(): void;
  getServiceFeeDtoListList(): Array<ServiceFee>;
  setServiceFeeDtoListList(value: Array<ServiceFee>): void;
  addServiceFeeDtoList(value?: ServiceFee, index?: number): ServiceFee;

  getLxRid(): string;
  setLxRid(value: string): void;

  getIsLx(): string;
  setIsLx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDetail.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDetail): OrderDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDetail;
  static deserializeBinaryFromReader(message: OrderDetail, reader: jspb.BinaryReader): OrderDetail;
}

export namespace OrderDetail {
  export type AsObject = {
    tbPaidTime: string,
    tkPaidTime: string,
    payPrice: string,
    pubShareFee: string,
    tradeId: string,
    tkOrderRole: number,
    tkEarningTime: string,
    adzoneId: number,
    pubShareRate: string,
    refundTag: number,
    subsidyRate: string,
    tkTotalRate: string,
    itemCategoryName: string,
    sellerNick: string,
    pubId: number,
    alimamaRate: string,
    subsidyType: string,
    itemImg: string,
    pubSharePreFee: string,
    alipayTotalPrice: string,
    itemTitle: string,
    modifiedTime: string,
    siteName: string,
    itemNum: number,
    subsidyFee: string,
    alimamaShareFee: string,
    tradeParentId: string,
    orderType: string,
    tkCreateTime: string,
    flowSource: string,
    terminalType: string,
    clickTime: string,
    tkStatus: number,
    itemPrice: string,
    itemId: string,
    adzoneName: string,
    totalCommissionRate: string,
    itemLink: string,
    siteId: number,
    sellerShopTitle: string,
    incomeRate: string,
    totalCommissionFee: string,
    specialId: number,
    relationId: number,
    tkDepositTime: string,
    tbDepositTime: string,
    depositPrice: string,
    tkCommissionPreFeeForMediaPlatform: string,
    tkCommissionFeeForMediaPlatform: string,
    tkCommissionRateForMediaPlatform: string,
    alscId: string,
    alscPid: string,
    serviceFeeDtoListList: Array<ServiceFee.AsObject>,
    lxRid: string,
    isLx: string,
  }
}

export class OrderDetailRequest extends jspb.Message {
  getStartTime(): string;
  setStartTime(value: string): void;

  getEndTime(): string;
  setEndTime(value: string): void;

  hasQueryType(): boolean;
  clearQueryType(): void;
  getQueryType(): number;
  setQueryType(value: number): void;

  hasPositionIndex(): boolean;
  clearPositionIndex(): void;
  getPositionIndex(): string;
  setPositionIndex(value: string): void;

  hasPageSize(): boolean;
  clearPageSize(): void;
  getPageSize(): number;
  setPageSize(value: number): void;

  hasPageNo(): boolean;
  clearPageNo(): void;
  getPageNo(): number;
  setPageNo(value: number): void;

  hasMemberType(): boolean;
  clearMemberType(): void;
  getMemberType(): number;
  setMemberType(value: number): void;

  hasTkStatus(): boolean;
  clearTkStatus(): void;
  getTkStatus(): number;
  setTkStatus(value: number): void;

  hasJumpType(): boolean;
  clearJumpType(): void;
  getJumpType(): number;
  setJumpType(value: number): void;

  hasOrderScene(): boolean;
  clearOrderScene(): void;
  getOrderScene(): number;
  setOrderScene(value: number): void;

  hasAccessToke(): boolean;
  clearAccessToke(): void;
  getAccessToke(): string;
  setAccessToke(value: string): void;

  hasTbAuthId(): boolean;
  clearTbAuthId(): void;
  getTbAuthId(): string;
  setTbAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDetailRequest): OrderDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDetailRequest;
  static deserializeBinaryFromReader(message: OrderDetailRequest, reader: jspb.BinaryReader): OrderDetailRequest;
}

export namespace OrderDetailRequest {
  export type AsObject = {
    startTime: string,
    endTime: string,
    queryType: number,
    positionIndex: string,
    pageSize: number,
    pageNo: number,
    memberType: number,
    tkStatus: number,
    jumpType: number,
    orderScene: number,
    accessToke: string,
    tbAuthId: string,
  }
}

export class OrderDetailResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  getHasPre(): boolean;
  setHasPre(value: boolean): void;

  getHasNext(): boolean;
  setHasNext(value: boolean): void;

  getPageNo(): number;
  setPageNo(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPositionIndex(): string;
  setPositionIndex(value: string): void;

  clearDataList(): void;
  getDataList(): Array<OrderDetail>;
  setDataList(value: Array<OrderDetail>): void;
  addData(value?: OrderDetail, index?: number): OrderDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDetailResponse): OrderDetailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDetailResponse;
  static deserializeBinaryFromReader(message: OrderDetailResponse, reader: jspb.BinaryReader): OrderDetailResponse;
}

export namespace OrderDetailResponse {
  export type AsObject = {
    code: number,
    msg: string,
    hasPre: boolean,
    hasNext: boolean,
    pageNo: number,
    pageSize: number,
    positionIndex: string,
    dataList: Array<OrderDetail.AsObject>,
  }
}

