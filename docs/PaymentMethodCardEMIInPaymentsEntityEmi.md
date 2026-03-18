# PaymentMethodCardEMIInPaymentsEntityEmi


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** |  | [optional] [default to undefined]
**card_number** | **string** |  | [optional] [default to undefined]
**card_network** | **string** |  | [optional] [default to undefined]
**card_type** | **string** |  | [optional] [default to undefined]
**card_country** | **string** |  | [optional] [default to undefined]
**card_bank_name** | **string** |  | [optional] [default to undefined]
**card_network_reference_id** | **string** |  | [optional] [default to undefined]
**emi_tenure** | **number** |  | [optional] [default to undefined]
**emi_details** | [**PaymentMethodCardEMIInPaymentsEntityEmiEmiDetails**](PaymentMethodCardEMIInPaymentsEntityEmiEmiDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodCardEMIInPaymentsEntityEmi } from 'cashfree-pg';

const instance: PaymentMethodCardEMIInPaymentsEntityEmi = {
    channel,
    card_number,
    card_network,
    card_type,
    card_country,
    card_bank_name,
    card_network_reference_id,
    emi_tenure,
    emi_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
