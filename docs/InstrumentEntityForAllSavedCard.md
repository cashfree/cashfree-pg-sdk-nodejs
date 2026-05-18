# InstrumentEntityForAllSavedCard

Contains list of all saved cards for the customer. Merchants are advised to filter out saved cards basis token expiry sent in API response, to only show active saved cards/tokens on their checkout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **string** | Customer ID that merchant sends during [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create), against which the cards are saved for the customer. | [optional] [default to undefined]
**afa_reference** | **string** | cf_payment_id of the successful transaction done while saving instrument. | [optional] [default to undefined]
**instrument_id** | **string** | Identifier for the card saved at Cashfree. It is used for [cryptogram generation](https://www.cashfree.com/docs/api-reference/payments/latest/token-vault/generate-cryptogram) and in [order pay](https://www.cashfree.com/docs/api-reference/payments/latest/payments/pay) request for saved cards.. | [optional] [default to undefined]
**instrument_type** | **string** | Type of the saved instrument. Available option is &#x60;card&#x60;. | [optional] [default to undefined]
**instrument_uid** | **string** | Unique identifier for the saved card, used to identify a specific card. | [optional] [default to undefined]
**instrument_display** | **string** | Last 4 digits of actual card number, to be displayed to the customer for card identification. | [optional] [default to undefined]
**instrument_status** | **string** | Status of the saved instrument. Available options are &#x60;ACTIVE&#x60;, &#x60;INACTIVE&#x60;. | [optional] [default to undefined]
**created_at** | **string** | Timestamp at which instrument was saved. | [optional] [default to undefined]
**instrument_meta** | [**SavedInstrumentMeta**](SavedInstrumentMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InstrumentEntityForAllSavedCard } from 'cashfree-pg';

const instance: InstrumentEntityForAllSavedCard = {
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
