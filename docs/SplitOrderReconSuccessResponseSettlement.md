# SplitOrderReconSuccessResponseSettlement

Details of the settlement information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **string** | Type of entity. Example: \&quot;settlement\&quot;. | [optional] [default to undefined]
**cf_settlement_id** | **number** | Unique Cashfree settlement ID. | [optional] [default to undefined]
**cf_payment_id** | **number** | Unique Cashfree payment ID associated with the order. | [optional] [default to undefined]
**order_id** | **string** | Unique identifier for the order. | [optional] [default to undefined]
**order_currency** | **string** | Currency of the order. Example: \&quot;INR\&quot;. | [optional] [default to undefined]
**transfer_id** | **string** | Unique transfer ID if available, otherwise null. | [optional] [default to undefined]
**order_amount** | **number** | Total amount of the order. | [optional] [default to undefined]
**service_charge** | **number** | Service charge for the order. | [optional] [default to undefined]
**service_tax** | **number** | Service tax for the order. | [optional] [default to undefined]
**settlement_amount** | **number** | Amount to be settled after charges and tax. | [optional] [default to undefined]
**settlement_currency** | **string** | Currency of the settlement. Example: \&quot;INR\&quot;. | [optional] [default to undefined]
**transfer_utr** | **string** | UTR (Unique Transaction Reference) for the transfer if available, otherwise null. | [optional] [default to undefined]
**transfer_time** | **string** | Time of transfer if available, otherwise null. | [optional] [default to undefined]
**payment_time** | **string** | Timestamp when payment was made. | [optional] [default to undefined]

## Example

```typescript
import { SplitOrderReconSuccessResponseSettlement } from 'cashfree-pg';

const instance: SplitOrderReconSuccessResponseSettlement = {
    entity,
    cf_settlement_id,
    cf_payment_id,
    order_id,
    order_currency,
    transfer_id,
    order_amount,
    service_charge,
    service_tax,
    settlement_amount,
    settlement_currency,
    transfer_utr,
    transfer_time,
    payment_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
