# ShipmentDetails

Shipment details associated with shipping of order like tracking company, tracking number,tracking urls etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracking_company** | **string** | Tracking company name associated with order. | [default to undefined]
**tracking_urls** | **Array&lt;string&gt;** | Tracking Urls associated with order. | [default to undefined]
**tracking_numbers** | **Array&lt;string&gt;** | Tracking Numbers associated wih order. | [default to undefined]

## Example

```typescript
import { ShipmentDetails } from 'cashfree-pg';

const instance: ShipmentDetails = {
    tracking_company,
    tracking_urls,
    tracking_numbers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
