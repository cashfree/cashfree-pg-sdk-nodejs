# PaymentWebhookDataEntity

data entity in webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**PaymentWebhookOrderEntity**](PaymentWebhookOrderEntity.md) |  | [optional] [default to undefined]
**payment** | [**PaymentEntity**](PaymentEntity.md) |  | [optional] [default to undefined]
**customer_details** | [**PaymentWebhookCustomerEntity**](PaymentWebhookCustomerEntity.md) |  | [optional] [default to undefined]
**error_details** | [**PaymentWebhookErrorEntity**](PaymentWebhookErrorEntity.md) |  | [optional] [default to undefined]
**payment_gateway_details** | [**PaymentWebhookGatewayDetailsEntity**](PaymentWebhookGatewayDetailsEntity.md) |  | [optional] [default to undefined]
**payment_offers** | [**Array&lt;OfferEntity&gt;**](OfferEntity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentWebhookDataEntity } from 'cashfree-pg';

const instance: PaymentWebhookDataEntity = {
    order,
    payment,
    customer_details,
    error_details,
    payment_gateway_details,
    payment_offers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
