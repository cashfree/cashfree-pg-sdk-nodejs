# SettlementEntity

Settlement entity object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **string** |  | [optional] [default to undefined]
**cf_settlement_id** | **string** |  | [optional] [default to undefined]
**settlement_currency** | **string** |  | [optional] [default to undefined]
**order_id** | **string** |  | [optional] [default to undefined]
**entity** | **string** |  | [optional] [default to undefined]
**order_amount** | **number** |  | [optional] [default to undefined]
**payment_time** | **string** |  | [optional] [default to undefined]
**service_charge** | **number** |  | [optional] [default to undefined]
**service_tax** | **number** |  | [optional] [default to undefined]
**settlement_amount** | **number** |  | [optional] [default to undefined]
**settlement_id** | **number** |  | [optional] [default to undefined]
**transfer_id** | **number** |  | [optional] [default to undefined]
**transfer_time** | **string** |  | [optional] [default to undefined]
**transfer_utr** | **string** |  | [optional] [default to undefined]
**forex_conversion_handling_charge** | **number** | Cashfree forex conversion charges for refund processing | [optional] [default to undefined]
**forex_conversion_handling_tax** | **number** | Cashfree forex conversion tax for refund processing | [optional] [default to undefined]
**forex_conversion_rate** | **number** | Cashfree forex conversion rate for refund processing | [optional] [default to undefined]
**charges_currency** | **string** | Cashfree refund charges currency for a refund | [optional] [default to undefined]

## Example

```typescript
import { SettlementEntity } from 'cashfree-pg';

const instance: SettlementEntity = {
    cf_payment_id,
    cf_settlement_id,
    settlement_currency,
    order_id,
    entity,
    order_amount,
    payment_time,
    service_charge,
    service_tax,
    settlement_amount,
    settlement_id,
    transfer_id,
    transfer_time,
    transfer_utr,
    forex_conversion_handling_charge,
    forex_conversion_handling_tax,
    forex_conversion_rate,
    charges_currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
