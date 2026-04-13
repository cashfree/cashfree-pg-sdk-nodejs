# OfferValidationsResponse

Offer validation object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_allowed** | **number** | Maximum Amount for Offer to be Applicable | [optional] [default to undefined]
**min_amount** | **number** | Minimum Amount for Offer to be Applicable | [optional] [default to undefined]
**payment_method** | [**OfferValidationsResponsePaymentMethod**](OfferValidationsResponsePaymentMethod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OfferValidationsResponse } from 'cashfree-pg';

const instance: OfferValidationsResponse = {
    max_allowed,
    min_amount,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
