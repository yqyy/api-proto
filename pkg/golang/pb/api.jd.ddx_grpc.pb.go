// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pb

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

// JdApiServiceClient is the client API for JdApiService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type JdApiServiceClient interface {
	PromotionByUnionID(ctx context.Context, in *PromotionByUnionIDRequest, opts ...grpc.CallOption) (*PromotionByUnionIDResponse, error)
}

type jdApiServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewJdApiServiceClient(cc grpc.ClientConnInterface) JdApiServiceClient {
	return &jdApiServiceClient{cc}
}

func (c *jdApiServiceClient) PromotionByUnionID(ctx context.Context, in *PromotionByUnionIDRequest, opts ...grpc.CallOption) (*PromotionByUnionIDResponse, error) {
	out := new(PromotionByUnionIDResponse)
	err := c.cc.Invoke(ctx, "/pb.JdApiService/PromotionByUnionID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// JdApiServiceServer is the server API for JdApiService service.
// All implementations must embed UnimplementedJdApiServiceServer
// for forward compatibility
type JdApiServiceServer interface {
	PromotionByUnionID(context.Context, *PromotionByUnionIDRequest) (*PromotionByUnionIDResponse, error)
	mustEmbedUnimplementedJdApiServiceServer()
}

// UnimplementedJdApiServiceServer must be embedded to have forward compatible implementations.
type UnimplementedJdApiServiceServer struct {
}

func (UnimplementedJdApiServiceServer) PromotionByUnionID(context.Context, *PromotionByUnionIDRequest) (*PromotionByUnionIDResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PromotionByUnionID not implemented")
}
func (UnimplementedJdApiServiceServer) mustEmbedUnimplementedJdApiServiceServer() {}

// UnsafeJdApiServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to JdApiServiceServer will
// result in compilation errors.
type UnsafeJdApiServiceServer interface {
	mustEmbedUnimplementedJdApiServiceServer()
}

func RegisterJdApiServiceServer(s grpc.ServiceRegistrar, srv JdApiServiceServer) {
	s.RegisterService(&JdApiService_ServiceDesc, srv)
}

func _JdApiService_PromotionByUnionID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PromotionByUnionIDRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JdApiServiceServer).PromotionByUnionID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.JdApiService/PromotionByUnionID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JdApiServiceServer).PromotionByUnionID(ctx, req.(*PromotionByUnionIDRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// JdApiService_ServiceDesc is the grpc.ServiceDesc for JdApiService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var JdApiService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.JdApiService",
	HandlerType: (*JdApiServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PromotionByUnionID",
			Handler:    _JdApiService_PromotionByUnionID_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api.jd.ddx.proto",
}
