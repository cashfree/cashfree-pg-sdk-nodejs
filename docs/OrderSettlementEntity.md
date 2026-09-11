# OrderSettlementEntity

Settlement details for a specific order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_details** | [**OrderSettlementEntityOrderDetails**](OrderSettlementEntityOrderDetails.md) |  | [optional] [default to undefined]
**payment_details** | [**OrderSettlementEntityPaymentDetails**](OrderSettlementEntityPaymentDetails.md) |  | [optional] [default to undefined]
**customer_details** | [**OrderSettlementEntityCustomerDetails**](OrderSettlementEntityCustomerDetails.md) |  | [optional] [default to undefined]
**settlement_details** | [**OrderSettlementEntitySettlementDetails**](OrderSettlementEntitySettlementDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderSettlementEntity } from 'cashfree-pg';

const instance: OrderSettlementEntity = {
    order_details,
    payment_details,
    customer_details,
    settlement_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
