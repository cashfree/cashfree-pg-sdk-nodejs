# ReconEntityDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_details** | [**ReconEntityDataInnerEventDetails**](ReconEntityDataInnerEventDetails.md) |  | [optional] [default to undefined]
**order_details** | [**ReconEntityDataInnerOrderDetails**](ReconEntityDataInnerOrderDetails.md) |  | [optional] [default to undefined]
**customer_details** | [**ReconEntityDataInnerCustomerDetails**](ReconEntityDataInnerCustomerDetails.md) |  | [optional] [default to undefined]
**payment_details** | [**ReconEntityDataInnerPaymentDetails**](ReconEntityDataInnerPaymentDetails.md) |  | [optional] [default to undefined]
**settlement_details** | [**ReconEntityDataInnerSettlementDetails**](ReconEntityDataInnerSettlementDetails.md) |  | [optional] [default to undefined]
**dispute_details** | [**ReconEntityDataInnerDisputeDetails**](ReconEntityDataInnerDisputeDetails.md) |  | [optional] [default to undefined]
**refund_details** | [**ReconEntityDataInnerRefundDetails**](ReconEntityDataInnerRefundDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReconEntityDataInner } from 'cashfree-pg';

const instance: ReconEntityDataInner = {
    event_details,
    order_details,
    customer_details,
    payment_details,
    settlement_details,
    dispute_details,
    refund_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
