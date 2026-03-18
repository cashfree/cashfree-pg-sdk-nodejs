# OfferQueries

Offer Query Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | OrderId of the order. Either of &#x60;order_id&#x60; or &#x60;order_amount&#x60; is mandatory. | [optional] [default to undefined]
**amount** | **number** | Amount of the order. OrderId of the order. Either of &#x60;order_id&#x60; or &#x60;order_amount&#x60; is mandatory. | [optional] [default to undefined]

## Example

```typescript
import { OfferQueries } from 'cashfree-pg';

const instance: OfferQueries = {
    order_id,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
