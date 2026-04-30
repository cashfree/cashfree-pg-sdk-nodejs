# DeletedInstrumentEntity

Delete saved card instrument object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **string** | Customer ID against which the card is saved. | [optional] [default to undefined]
**afa_reference** | **string** | cf_payment_id of the successful transaction done while saving instrument. | [optional] [default to undefined]
**instrument_id** | **string** | Identifier for the card saved at Cashfree, which was requested to be deleted. | [optional] [default to undefined]
**instrument_type** | **string** | Type of the saved instrument. | [optional] [default to undefined]
**instrument_uid** | **string** | Unique identifier for the saved card, used to identify a specific card. | [optional] [default to undefined]
**instrument_display** | **string** | Last four digits of actual card number. | [optional] [default to undefined]
**instrument_status** | **string** | Status of the saved instrument. This would be &#x60;INACTIVE&#x60; when the instrument is successfully deleted. | [optional] [default to undefined]
**created_at** | **string** | Timestamp at which instrument was saved. | [optional] [default to undefined]
**instrument_meta** | [**SavedInstrumentMeta**](SavedInstrumentMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeletedInstrumentEntity } from 'cashfree-pg';

const instance: DeletedInstrumentEntity = {
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
