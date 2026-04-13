# OfferDetails

Offer details and type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_type** | **string** | Offer Type for the Offer. | [default to undefined]
**discount_details** | [**DiscountDetails**](DiscountDetails.md) |  | [optional] [default to undefined]
**cashback_details** | [**CashbackDetails**](CashbackDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OfferDetails } from 'cashfree-pg';

const instance: OfferDetails = {
    offer_type,
    discount_details,
    cashback_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
