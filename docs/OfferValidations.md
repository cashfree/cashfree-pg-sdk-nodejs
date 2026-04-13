# OfferValidations

Offer validation object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_amount** | **number** | Minimum Amount for Offer to be Applicable | [optional] [default to undefined]
**max_allowed** | **number** | Maximum Amount for Offer to be Applicable | [default to undefined]
**payment_method** | [**OfferValidationsResponsePaymentMethod**](OfferValidationsResponsePaymentMethod.md) |  | [default to undefined]

## Example

```typescript
import { OfferValidations } from 'cashfree-pg';

const instance: OfferValidations = {
    min_amount,
    max_allowed,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
