# SettlementReconEntityDataInnerPaymentDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_amount** | **number** | Payment amount captured. | [optional] [default to undefined]
**payment_currency** | **string** | Payment Curreny type - INR. | [optional] [default to undefined]
**bank_reference** | **string** | Unique transaction reference number of the payment. | [optional] [default to undefined]
**payment_time** | **string** | Date and time when the payment was initiated. | [optional] [default to undefined]
**payment_mode** | **string** | Mode of the payment. | [optional] [default to undefined]
**payment_service_charge** | **number** | Service charge applicable for the payment. | [optional] [default to undefined]
**payment_service_tax** | **number** | Service tax applicable on the payment. | [optional] [default to undefined]
**cf_payment_id** | **string** | Cashfree Payments unique ID to identify a payment. | [optional] [default to undefined]
**status** | **string** | Status of the Payment. | [optional] [default to undefined]
**forex_conversion_handling_charge** | **string** | Forex Conversion Service Charge. | [optional] [default to undefined]
**forex_conversion_handling_tax** | **string** | Forex Conversion Service Tax. | [optional] [default to undefined]
**charges_currency** | **string** | Forex Charges Curreny type - INR. | [optional] [default to undefined]

## Example

```typescript
import { SettlementReconEntityDataInnerPaymentDetails } from 'cashfree-pg';

const instance: SettlementReconEntityDataInnerPaymentDetails = {
    payment_amount,
    payment_currency,
    bank_reference,
    payment_time,
    payment_mode,
    payment_service_charge,
    payment_service_tax,
    cf_payment_id,
    status,
    forex_conversion_handling_charge,
    forex_conversion_handling_tax,
    charges_currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
