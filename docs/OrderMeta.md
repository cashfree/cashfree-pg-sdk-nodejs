# OrderMeta

Optional meta details to control how the customer pays and how payment journey completes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_url** | **string** | The URL to which user will be redirected to after the payment on bank OTP page. Maximum length: 250. We suggest to keep context of order_id in your return_url so that you can identify the order when customer lands on your page. Example of return_url format could be https://www.cashfree.com/devstudio/thankyou | [optional] [default to undefined]
**notify_url** | **string** | Notification URL for server-server communication. Useful when user\&#39;s connection drops while re-directing. NotifyUrl should be an https URL. Maximum length: 250. | [optional] [default to undefined]
**payment_methods** | **any** | Allowed payment modes for this order. Pass comma-separated values among following options - \&quot;cc\&quot;, \&quot;dc\&quot;, \&quot;ccc\&quot;, \&quot;ppc\&quot;,\&quot;nb\&quot;,\&quot;upi\&quot;,\&quot;paypal\&quot;,\&quot;app\&quot;,\&quot;paylater\&quot;,\&quot;cardlessemi\&quot;,\&quot;dcemi\&quot;,\&quot;ccemi\&quot;,\&quot;banktransfer\&quot;. Leave it blank to show all available payment methods | [optional] [default to undefined]
**payment_methods_filters** | [**OrderMetaPaymentMethodsFilters**](OrderMetaPaymentMethodsFilters.md) |  | [optional] [default to undefined]
**upi_app_priority** | **any** | Set the priority of UPI apps that you want to show for this order. Pass values in list among following options - \&quot;gpay\&quot;,\&quot;phonepe\&quot;,\&quot;paytm\&quot;,\&quot;navi\&quot;,\&quot;cred\&quot;,\&quot;supermoney\&quot;,\&quot;amazonpay\&quot;,\&quot;bhim\&quot;,\&quot;mobikwik\&quot;,\&quot;airtel\&quot;,\&quot;popclub\&quot;,\&quot;kiwi\&quot; | [optional] [default to undefined]
**offer_filters** | [**OrderMetaOfferFilters**](OrderMetaOfferFilters.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderMeta } from 'cashfree-pg';

const instance: OrderMeta = {
    return_url,
    notify_url,
    payment_methods,
    payment_methods_filters,
    upi_app_priority,
    offer_filters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
