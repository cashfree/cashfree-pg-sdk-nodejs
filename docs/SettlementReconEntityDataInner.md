# SettlementReconEntityDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_details** | [**SettlementReconEntityDataInnerEventDetails**](SettlementReconEntityDataInnerEventDetails.md) |  | [optional] [default to undefined]
**order_details** | [**SettlementReconEntityDataInnerOrderDetails**](SettlementReconEntityDataInnerOrderDetails.md) |  | [optional] [default to undefined]
**customer_details** | [**SettlementReconEntityDataInnerCustomerDetails**](SettlementReconEntityDataInnerCustomerDetails.md) |  | [optional] [default to undefined]
**payment_details** | [**SettlementReconEntityDataInnerPaymentDetails**](SettlementReconEntityDataInnerPaymentDetails.md) |  | [optional] [default to undefined]
**settlement_details** | [**SettlementReconEntityDataInnerSettlementDetails**](SettlementReconEntityDataInnerSettlementDetails.md) |  | [optional] [default to undefined]
**dispute_details** | [**Array&lt;SettlementReconEntityDataInnerDisputeDetailsInner&gt;**](SettlementReconEntityDataInnerDisputeDetailsInner.md) | List of disputes linked to this event. | [optional] [default to undefined]
**refund_details** | [**Array&lt;ReconEntityDataInnerRefundDetails&gt;**](ReconEntityDataInnerRefundDetails.md) | List of refunds linked to this event. | [optional] [default to undefined]

## Example

```typescript
import { SettlementReconEntityDataInner } from 'cashfree-pg';

const instance: SettlementReconEntityDataInner = {
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
