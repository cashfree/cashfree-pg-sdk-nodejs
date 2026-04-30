# OrderMeta

Optional meta details to control how the customer pays and how payment journey completes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_url** | **string** | This is the [URL](https://www.cashfree.com/devstudio/thankyou?order_id&#x3D;devstudio_734905336776434862) to which the customer will be redirected after the payment reaches a terminal state (success, failed or cancelled). We recommend keeping context of &#x60;order_id&#x60; in your &#x60;return_url&#x60; so that you can identify the order when customer lands on your page. Cashfree triggers a **GET request** to this URL. Maximum URL length: 250 characters. | [optional] [default to undefined]
**notify_url** | **string** | Notification URL for server-server communication. Useful when user\&#39;s connection drops while re-directing. NotifyUrl should be an https URL. Maximum length: 250. | [optional] [default to undefined]
**payment_methods** | **any** | Specifies the allowed payment modes for this order. To restrict payment options,  provide a comma-separated list of values from the following options: &#x60;cc&#x60;, &#x60;dc&#x60;, &#x60;ccc&#x60;,  &#x60;ppc&#x60;, &#x60;nb&#x60;, &#x60;upi&#x60;, &#x60;paypal&#x60;, &#x60;app&#x60;, &#x60;paylater&#x60;, &#x60;cardlessemi&#x60;, &#x60;dcemi&#x60;, &#x60;ccemi&#x60;,  &#x60;banktransfer&#x60;, &#x60;applepay&#x60;. Leave this field blank to display all available payment methods. | [optional] [default to undefined]
**payment_methods_filters** | [**OrderMetaPaymentMethodsFilters**](OrderMetaPaymentMethodsFilters.md) |  | [optional] [default to undefined]
**offer_filters** | [**OrderMetaOfferFilters**](OrderMetaOfferFilters.md) |  | [optional] [default to undefined]
**upi_app_priority** | **any** | Set the priority of UPI apps that you want to show for this order. Pass values in list among following options - \&quot;gpay\&quot;,\&quot;phonepe\&quot;,\&quot;paytm\&quot;,\&quot;navi\&quot;,\&quot;cred\&quot;,\&quot;supermoney\&quot;,\&quot;amazonpay\&quot;,\&quot;bhim\&quot;,\&quot;mobikwik\&quot;,\&quot;airtel\&quot;,\&quot;popclub\&quot;,\&quot;kiwi\&quot;. | [optional] [default to undefined]

## Example

```typescript
import { OrderMeta } from 'cashfree-pg';

const instance: OrderMeta = {
    return_url,
    notify_url,
    payment_methods,
    payment_methods_filters,
    offer_filters,
    upi_app_priority,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
