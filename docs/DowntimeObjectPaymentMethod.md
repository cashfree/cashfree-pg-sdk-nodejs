# DowntimeObjectPaymentMethod

The impacted payment method details (only one of the types allowed at a time).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upi** | [**UPIDowntimeUpi**](UPIDowntimeUpi.md) |  | [optional] [default to undefined]
**card** | [**CardDowntimeCard**](CardDowntimeCard.md) |  | [optional] [default to undefined]
**net_banking** | [**NetBankingDowntimeNetBanking**](NetBankingDowntimeNetBanking.md) |  | [optional] [default to undefined]
**wallet** | [**WalletDowntimeWallet**](WalletDowntimeWallet.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DowntimeObjectPaymentMethod } from 'cashfree-pg';

const instance: DowntimeObjectPaymentMethod = {
    upi,
    card,
    net_banking,
    wallet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
