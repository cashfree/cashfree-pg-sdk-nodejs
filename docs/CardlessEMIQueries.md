# CardlessEMIQueries

cardless EMI query object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | OrderId of the order. Either of &#x60;order_id&#x60; or &#x60;amount&#x60; is mandatory. | [optional] [default to undefined]
**amount** | **number** | Amount of the order. OrderId of the order. Either of &#x60;order_id&#x60; or &#x60;amount&#x60; is mandatory. | [optional] [default to undefined]
**customer_details** | [**CustomerDetailsCardlessEMI**](CustomerDetailsCardlessEMI.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CardlessEMIQueries } from 'cashfree-pg';

const instance: CardlessEMIQueries = {
    order_id,
    amount,
    customer_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
