# ESOrderReconResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**settlement_eligibility_time** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**merchant_order_id** | **string** |  | [optional] [default to undefined]
**tx_time** | **string** |  | [optional] [default to undefined]
**settled** | **string** |  | [optional] [default to undefined]
**entity_id** | **string** |  | [optional] [default to undefined]
**merchant_settlement_utr** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**sale_type** | **string** |  | [optional] [default to undefined]
**customer_name** | **string** |  | [optional] [default to undefined]
**customer_email** | **string** |  | [optional] [default to undefined]
**customer_phone** | **string** |  | [optional] [default to undefined]
**merchant_vendor_commission** | **string** |  | [optional] [default to undefined]
**split_service_charge** | **string** |  | [optional] [default to undefined]
**split_service_tax** | **string** |  | [optional] [default to undefined]
**pg_service_tax** | **string** |  | [optional] [default to undefined]
**pg_service_charge** | **string** |  | [optional] [default to undefined]
**pg_charge_postpaid** | **string** |  | [optional] [default to undefined]
**merchant_settlement_id** | **string** |  | [optional] [default to undefined]
**added_on** | **string** |  | [optional] [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**entity_type** | **string** |  | [optional] [default to undefined]
**settlement_initiated_on** | **string** |  | [optional] [default to undefined]
**settlement_time** | **string** |  | [optional] [default to undefined]
**order_splits** | [**Array&lt;ESOrderReconResponseDataInnerOrderSplitsInner&gt;**](ESOrderReconResponseDataInnerOrderSplitsInner.md) |  | [optional] [default to undefined]
**eligible_split_balance** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ESOrderReconResponseDataInner } from 'cashfree-pg';

const instance: ESOrderReconResponseDataInner = {
    amount,
    settlement_eligibility_time,
    status,
    merchant_order_id,
    tx_time,
    settled,
    entity_id,
    merchant_settlement_utr,
    currency,
    sale_type,
    customer_name,
    customer_email,
    customer_phone,
    merchant_vendor_commission,
    split_service_charge,
    split_service_tax,
    pg_service_tax,
    pg_service_charge,
    pg_charge_postpaid,
    merchant_settlement_id,
    added_on,
    tags,
    entity_type,
    settlement_initiated_on,
    settlement_time,
    order_splits,
    eligible_split_balance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
