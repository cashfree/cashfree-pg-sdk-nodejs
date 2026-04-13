# PaymentEntityPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**PaymentMethodCardInPaymentsEntityCard**](PaymentMethodCardInPaymentsEntityCard.md) |  | [optional] [default to undefined]
**netbanking** | [**PaymentMethodNetBankingInPaymentsEntityNetbanking**](PaymentMethodNetBankingInPaymentsEntityNetbanking.md) |  | [optional] [default to undefined]
**upi** | [**PaymentMethodUPIInPaymentsEntityUpi**](PaymentMethodUPIInPaymentsEntityUpi.md) |  | [optional] [default to undefined]
**app** | [**PaymentMethodAppInPaymentsEntityApp**](PaymentMethodAppInPaymentsEntityApp.md) |  | [optional] [default to undefined]
**cardless_emi** | [**PaymentMethodAppInPaymentsEntityApp**](PaymentMethodAppInPaymentsEntityApp.md) |  | [optional] [default to undefined]
**paylater** | [**PaymentMethodAppInPaymentsEntityApp**](PaymentMethodAppInPaymentsEntityApp.md) |  | [optional] [default to undefined]
**emi** | [**PaymentMethodCardEMIInPaymentsEntityEmi**](PaymentMethodCardEMIInPaymentsEntityEmi.md) |  | [optional] [default to undefined]
**banktransfer** | [**PaymentMethodBankTransferInPaymentsEntityBanktransfer**](PaymentMethodBankTransferInPaymentsEntityBanktransfer.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentEntityPaymentMethod } from 'cashfree-pg';

const instance: PaymentEntityPaymentMethod = {
    card,
    netbanking,
    upi,
    app,
    cardless_emi,
    paylater,
    emi,
    banktransfer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
