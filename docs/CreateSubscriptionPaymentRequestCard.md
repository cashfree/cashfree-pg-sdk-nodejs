# CreateSubscriptionPaymentRequestCard

payment method card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_cvv** | **string** | Card CVV | [optional] [default to undefined]
**card_expiry_mm** | **string** | Card expiry month | [optional] [default to undefined]
**card_expiry_yy** | **string** | Card expiry year | [optional] [default to undefined]
**card_holder_name** | **string** | Card holder name | [optional] [default to undefined]
**card_network** | **string** | Card network | [optional] [default to undefined]
**card_number** | **string** | Card number | [optional] [default to undefined]
**card_type** | **string** | Card type | [optional] [default to undefined]
**channel** | **string** | Channel. can be link | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionPaymentRequestCard } from 'cashfree-pg';

const instance: CreateSubscriptionPaymentRequestCard = {
    card_cvv,
    card_expiry_mm,
    card_expiry_yy,
    card_holder_name,
    card_network,
    card_number,
    card_type,
    channel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
