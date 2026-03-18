# InstrumentEntity

Saved card instrument object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **string** | customer_id for which the instrument was saved | [optional] [default to undefined]
**afa_reference** | **string** | cf_payment_id of the successful transaction done while saving instrument | [optional] [default to undefined]
**instrument_id** | **string** | saved instrument id | [optional] [default to undefined]
**instrument_type** | **string** | Type of the saved instrument | [optional] [default to undefined]
**instrument_uid** | **string** | Unique id for the saved instrument | [optional] [default to undefined]
**instrument_display** | **string** | masked card number displayed to the customer | [optional] [default to undefined]
**instrument_status** | **string** | Status of the saved instrument. | [optional] [default to undefined]
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
