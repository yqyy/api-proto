// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package commspb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CommissionServiceClient is the client API for CommissionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CommissionServiceClient interface {
	UserBindOrder(ctx context.Context, in *UserBindOrderReq, opts ...grpc.CallOption) (*UserBindOrderRes, error)
	UserBindPhone(ctx context.Context, in *UserBindPhoneReq, opts ...grpc.CallOption) (*UserBindPhoneRes, error)
	UserGetOrders(ctx context.Context, in *UserGetOrdersReq, opts ...grpc.CallOption) (*UserGetOrdersRes, error)
	UserQueryBalance(ctx context.Context, in *UserQueryBalanceReq, opts ...grpc.CallOption) (*UserQueryBalanceRes, error)
	UserWithdrawMoney(ctx context.Context, in *UserDrawMoneyReq, opts ...grpc.CallOption) (*UserDrawMoneyRes, error)
	UserQueryDrawMoneyRecords(ctx context.Context, in *UserDrawMoneyRecordsReq, opts ...grpc.CallOption) (*UserDrawMoneyRecordsRes, error)
}

type commissionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCommissionServiceClient(cc grpc.ClientConnInterface) CommissionServiceClient {
	return &commissionServiceClient{cc}
}

func (c *commissionServiceClient) UserBindOrder(ctx context.Context, in *UserBindOrderReq, opts ...grpc.CallOption) (*UserBindOrderRes, error) {
	out := new(UserBindOrderRes)
	err := c.cc.Invoke(ctx, "/commspb.CommissionService/UserBindOrder", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commissionServiceClient) UserBindPhone(ctx context.Context, in *UserBindPhoneReq, opts ...grpc.CallOption) (*UserBindPhoneRes, error) {
	out := new(UserBindPhoneRes)
	err := c.cc.Invoke(ctx, "/commspb.CommissionService/UserBindPhone", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commissionServiceClient) UserGetOrders(ctx context.Context, in *UserGetOrdersReq, opts ...grpc.CallOption) (*UserGetOrdersRes, error) {
	out := new(UserGetOrdersRes)
	err := c.cc.Invoke(ctx, "/commspb.CommissionService/UserGetOrders", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commissionServiceClient) UserQueryBalance(ctx context.Context, in *UserQueryBalanceReq, opts ...grpc.CallOption) (*UserQueryBalanceRes, error) {
	out := new(UserQueryBalanceRes)
	err := c.cc.Invoke(ctx, "/commspb.CommissionService/UserQueryBalance", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commissionServiceClient) UserWithdrawMoney(ctx context.Context, in *UserDrawMoneyReq, opts ...grpc.CallOption) (*UserDrawMoneyRes, error) {
	out := new(UserDrawMoneyRes)
	err := c.cc.Invoke(ctx, "/commspb.CommissionService/UserWithdrawMoney", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commissionServiceClient) UserQueryDrawMoneyRecords(ctx context.Context, in *UserDrawMoneyRecordsReq, opts ...grpc.CallOption) (*UserDrawMoneyRecordsRes, error) {
	out := new(UserDrawMoneyRecordsRes)
	err := c.cc.Invoke(ctx, "/commspb.CommissionService/UserQueryDrawMoneyRecords", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CommissionServiceServer is the server API for CommissionService service.
// All implementations must embed UnimplementedCommissionServiceServer
// for forward compatibility
type CommissionServiceServer interface {
	UserBindOrder(context.Context, *UserBindOrderReq) (*UserBindOrderRes, error)
	UserBindPhone(context.Context, *UserBindPhoneReq) (*UserBindPhoneRes, error)
	UserGetOrders(context.Context, *UserGetOrdersReq) (*UserGetOrdersRes, error)
	UserQueryBalance(context.Context, *UserQueryBalanceReq) (*UserQueryBalanceRes, error)
	UserWithdrawMoney(context.Context, *UserDrawMoneyReq) (*UserDrawMoneyRes, error)
	UserQueryDrawMoneyRecords(context.Context, *UserDrawMoneyRecordsReq) (*UserDrawMoneyRecordsRes, error)
	mustEmbedUnimplementedCommissionServiceServer()
}

// UnimplementedCommissionServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCommissionServiceServer struct {
}

func (UnimplementedCommissionServiceServer) UserBindOrder(context.Context, *UserBindOrderReq) (*UserBindOrderRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UserBindOrder not implemented")
}
func (UnimplementedCommissionServiceServer) UserBindPhone(context.Context, *UserBindPhoneReq) (*UserBindPhoneRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UserBindPhone not implemented")
}
func (UnimplementedCommissionServiceServer) UserGetOrders(context.Context, *UserGetOrdersReq) (*UserGetOrdersRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UserGetOrders not implemented")
}
func (UnimplementedCommissionServiceServer) UserQueryBalance(context.Context, *UserQueryBalanceReq) (*UserQueryBalanceRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UserQueryBalance not implemented")
}
func (UnimplementedCommissionServiceServer) UserWithdrawMoney(context.Context, *UserDrawMoneyReq) (*UserDrawMoneyRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UserWithdrawMoney not implemented")
}
func (UnimplementedCommissionServiceServer) UserQueryDrawMoneyRecords(context.Context, *UserDrawMoneyRecordsReq) (*UserDrawMoneyRecordsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UserQueryDrawMoneyRecords not implemented")
}
func (UnimplementedCommissionServiceServer) mustEmbedUnimplementedCommissionServiceServer() {}

// UnsafeCommissionServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CommissionServiceServer will
// result in compilation errors.
type UnsafeCommissionServiceServer interface {
	mustEmbedUnimplementedCommissionServiceServer()
}

func RegisterCommissionServiceServer(s grpc.ServiceRegistrar, srv CommissionServiceServer) {
	s.RegisterService(&CommissionService_ServiceDesc, srv)
}

func _CommissionService_UserBindOrder_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserBindOrderReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommissionServiceServer).UserBindOrder(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/commspb.CommissionService/UserBindOrder",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommissionServiceServer).UserBindOrder(ctx, req.(*UserBindOrderReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CommissionService_UserBindPhone_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserBindPhoneReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommissionServiceServer).UserBindPhone(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/commspb.CommissionService/UserBindPhone",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommissionServiceServer).UserBindPhone(ctx, req.(*UserBindPhoneReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CommissionService_UserGetOrders_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserGetOrdersReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommissionServiceServer).UserGetOrders(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/commspb.CommissionService/UserGetOrders",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommissionServiceServer).UserGetOrders(ctx, req.(*UserGetOrdersReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CommissionService_UserQueryBalance_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserQueryBalanceReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommissionServiceServer).UserQueryBalance(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/commspb.CommissionService/UserQueryBalance",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommissionServiceServer).UserQueryBalance(ctx, req.(*UserQueryBalanceReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CommissionService_UserWithdrawMoney_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserDrawMoneyReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommissionServiceServer).UserWithdrawMoney(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/commspb.CommissionService/UserWithdrawMoney",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommissionServiceServer).UserWithdrawMoney(ctx, req.(*UserDrawMoneyReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CommissionService_UserQueryDrawMoneyRecords_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserDrawMoneyRecordsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommissionServiceServer).UserQueryDrawMoneyRecords(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/commspb.CommissionService/UserQueryDrawMoneyRecords",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommissionServiceServer).UserQueryDrawMoneyRecords(ctx, req.(*UserDrawMoneyRecordsReq))
	}
	return interceptor(ctx, in, info, handler)
}

// CommissionService_ServiceDesc is the grpc.ServiceDesc for CommissionService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CommissionService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "commspb.CommissionService",
	HandlerType: (*CommissionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UserBindOrder",
			Handler:    _CommissionService_UserBindOrder_Handler,
		},
		{
			MethodName: "UserBindPhone",
			Handler:    _CommissionService_UserBindPhone_Handler,
		},
		{
			MethodName: "UserGetOrders",
			Handler:    _CommissionService_UserGetOrders_Handler,
		},
		{
			MethodName: "UserQueryBalance",
			Handler:    _CommissionService_UserQueryBalance_Handler,
		},
		{
			MethodName: "UserWithdrawMoney",
			Handler:    _CommissionService_UserWithdrawMoney_Handler,
		},
		{
			MethodName: "UserQueryDrawMoneyRecords",
			Handler:    _CommissionService_UserQueryDrawMoneyRecords_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "svc.commission.proto",
}
