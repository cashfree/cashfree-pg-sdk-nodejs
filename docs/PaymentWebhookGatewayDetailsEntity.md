# PaymentWebhookGatewayDetailsEntity

payment gateway details present in the webhook response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_name** | **string** |  | [optional] [default to undefined]
**gateway_order_id** | **string** |  | [optional] [default to undefined]
**gateway_order_reference_id** | **string** |  | [optional] [default to undefined]
**gateway_payment_id** | **string** |  | [optional] [default to undefined]
**gateway_status_code** | **string** |  | [optional] [default to undefined]
**gateway_settlement** | **string** |  | [optional] [default to undefined]
**gateway_reference_name** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentWebhookGatewayDetailsEntity } from 'cashfree-pg';

const instance: PaymentWebhookGatewayDetailsEntity = {
    gateway_name,
    gateway_order_id,
    gateway_order_reference_id,
    gateway_payment_id,
    gateway_status_code,
    gateway_settlement,
    gateway_reference_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
