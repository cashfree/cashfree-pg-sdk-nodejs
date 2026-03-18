# PaymentEntity

payment entity full object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **string** |  | [optional] [default to undefined]
**order_id** | **string** |  | [optional] [default to undefined]
**entity** | **string** |  | [optional] [default to undefined]
**error_details** | [**ErrorDetailsInPaymentsEntity**](ErrorDetailsInPaymentsEntity.md) |  | [optional] [default to undefined]
**is_captured** | **boolean** |  | [optional] [default to undefined]
**order_amount** | **number** | Order amount can be different from payment amount if you collect service fee from the customer | [optional] [default to undefined]
**payment_group** | **string** | Type of payment group. One of [\&#39;prepaid_card\&#39;, \&#39;upi_ppi_offline\&#39;, \&#39;cash\&#39;, \&#39;upi_credit_card\&#39;, \&#39;paypal\&#39;, \&#39;net_banking\&#39;, \&#39;cardless_emi\&#39;, \&#39;credit_card\&#39;, \&#39;bank_transfer\&#39;, \&#39;pay_later\&#39;, \&#39;debit_card_emi\&#39;, \&#39;debit_card\&#39;, \&#39;wallet\&#39;, \&#39;upi_ppi\&#39;, \&#39;upi\&#39;, \&#39;credit_card_emi\&#39;] | [optional] [default to undefined]
**payment_currency** | **string** |  | [optional] [default to undefined]
**payment_amount** | **number** |  | [optional] [default to undefined]
**payment_time** | **string** | This is the time when the payment was initiated | [optional] [default to undefined]
**payment_completion_time** | **string** | This is the time when the payment reaches its terminal state | [optional] [default to undefined]
**payment_status** | **string** | The transaction status can be one of  [\&quot;SUCCESS\&quot;, \&quot;NOT_ATTEMPTED\&quot;, \&quot;FAILED\&quot;, \&quot;USER_DROPPED\&quot;, \&quot;VOID\&quot;, \&quot;CANCELLED\&quot;, \&quot;PENDING\&quot;] | [optional] [default to undefined]
**payment_message** | **string** |  | [optional] [default to undefined]
**bank_reference** | **string** |  | [optional] [default to undefined]
**auth_id** | **string** |  | [optional] [default to undefined]
**order_currency** | **string** |  | [optional] [default to undefined]
**authorization** | [**AuthorizationInPaymentsEntity**](AuthorizationInPaymentsEntity.md) |  | [optional] [default to undefined]
**payment_method** | [**PaymentEntityPaymentMethod**](PaymentEntityPaymentMethod.md) |  | [optional] [default to undefined]
**international_payment** | [**InternationalPaymentEntity**](InternationalPaymentEntity.md) |  | [optional] [default to undefined]
**payment_gateway_details** | [**PaymentGatewayDetails**](PaymentGatewayDetails.md) |  | [optional] [default to undefined]
**payment_surcharge** | [**PaymentEntityPaymentSurcharge**](PaymentEntityPaymentSurcharge.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentEntity } from 'cashfree-pg';

const instance: PaymentEntity = {
    cf_payment_id,
    order_id,
    entity,
    error_details,
    is_captured,
    order_amount,
    payment_group,
    payment_currency,
    payment_amount,
    payment_time,
    payment_completion_time,
    payment_status,
    payment_message,
    bank_reference,
    auth_id,
    order_currency,
    authorization,
    payment_method,
    international_payment,
    payment_gateway_details,
    payment_surcharge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
