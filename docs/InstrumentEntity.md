# InstrumentEntity

Use this API to fetch specific saved card stored for the customer in Cashfree’s [Token Vault](https://www.cashfree.com/docs/payments/features/token-vault).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **string** | Customer ID that merchant sends during [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create), against which the cards are saved for the customer. | [optional] [default to undefined]
**afa_reference** | **string** | cf_payment_id of the successful transaction done while saving instrument. | [optional] [default to undefined]
**instrument_id** | **string** | Identifier for the card saved at Cashfree. | [optional] [default to undefined]
**instrument_type** | **string** | Type of the saved instrument. Available option is &#x60;card&#x60;. | [optional] [default to undefined]
**instrument_uid** | **string** | Unique identifier for the saved card, used to identify a specific card. | [optional] [default to undefined]
**instrument_display** | **string** | Last four digits of actual card number. | [optional] [default to undefined]
**instrument_status** | **string** | Status of the saved instrument. Available options are &#x60;ACTIVE&#x60;, &#x60;INACTIVE&#x60;. | [optional] [default to undefined]
**created_at** | **string** | Timestamp at which instrument was saved. | [optional] [default to undefined]
**instrument_meta** | [**SavedInstrumentMeta**](SavedInstrumentMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InstrumentEntity } from 'cashfree-pg';

const instance: InstrumentEntity = {
    customer_id,
    afa_reference,
    instrument_id,
    instrument_type,
    instrument_uid,
    instrument_display,
    instrument_status,
    created_at,
    instrument_meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
