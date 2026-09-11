# OrderSettlementEntityPaymentDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **string** | Cashfree Payments unique ID to identify the payment. | [optional] [default to undefined]
**payment_time** | **string** | Date and time when the transaction was completed. | [optional] [default to undefined]
**payment_currency** | **string** | Currency of the payment. | [optional] [default to undefined]
**payment_amount** | **number** | Net amount of the transaction that was a part of this settlement. | [optional] [default to 0.0]
**pg_service_charge** | **number** | PG service charges that were deducted in this settlement. | [optional] [default to 0.0]
**pg_service_tax** | **number** | PG service taxes that were deducted in this settlement. | [optional] [default to 0.0]
**split_service_charge** | **number** | Split service charges that were deducted in this settlement. | [optional] [default to 0.0]
**split_service_tax** | **number** | Split service taxes that were deducted in this settlement. | [optional] [default to 0.0]
**surcharge** | **number** | Surcharge collected from the customer. | [optional] [default to 0.0]
**tax_on_surcharge** | **number** | Tax on surcharge. Upto 4 decimal points. | [optional] [default to 0.0]
**charges_currency** | **string** | Currency in which service charges are applied. | [optional] [default to undefined]
**forex_conversion_handling_charge** | **number** | Forex conversion handling charge. | [optional] [default to 0.0]
**forex_conversion_handling_tax** | **number** | Forex conversion handling tax. | [optional] [default to 0.0]
**forex_conversion_rate** | **number** | Forex conversion rate applied. | [optional] [default to 0.0]
**vendor_commission** | **number** | Vendor commission/split that was deducted in this settlement. | [optional] [default to 0.0]
**settlement_amount** | **number** | Amount after deducting all charges. | [optional] [default to 0.0]
**charge_type** | **string** | Indicates how Cashfree\&#39;s service charges are applied for this payment. | [optional] [default to undefined]
**charged_to** | **string** | Indicates who bears Cashfree\&#39;s service charges. | [optional] [default to undefined]

## Example

```typescript
import { OrderSettlementEntityPaymentDetails } from 'cashfree-pg';

const instance: OrderSettlementEntityPaymentDetails = {
    cf_payment_id,
    payment_time,
    payment_currency,
    payment_amount,
    pg_service_charge,
    pg_service_tax,
    split_service_charge,
    split_service_tax,
    surcharge,
    tax_on_surcharge,
    charges_currency,
    forex_conversion_handling_charge,
    forex_conversion_handling_tax,
    forex_conversion_rate,
    vendor_commission,
    settlement_amount,
    charge_type,
    charged_to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
