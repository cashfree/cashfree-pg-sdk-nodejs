# UpdateOrderExtendedRequest

Request Body to Update extended data related to order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_details** | [**Array&lt;ShipmentDetails&gt;**](ShipmentDetails.md) | Shipment details, such as the tracking company, tracking number, and tracking URLs, associated with the shipping of an order. Either &#x60;shipment_details&#x60; or &#x60;order_delivery_status&#x60; is required. | [default to undefined]
**order_delivery_status** | [**OrderDeliveryStatus**](OrderDeliveryStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrderExtendedRequest } from 'cashfree-pg';

const instance: UpdateOrderExtendedRequest = {
    shipment_details,
    order_delivery_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
