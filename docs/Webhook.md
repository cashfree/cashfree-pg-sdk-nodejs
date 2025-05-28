# Webhook


## PGVerifyWebhookSignature

> PGVerifyWebhookSignature(signature: string, rawBody: string, timestamp: string): PGWebhookEvent

Verify Webhook Signatures ([Docs](https://docs.cashfree.com/reference/pg-webhook)

### Example

```javascript
app.post('/webhook', function (req, res) {
    try {
        const response = Cashfree.PGVerifyWebhookSignature(req.headers["x-webhook-signature"], req.rawBody, req.headers["x-webhook-timestamp"]);
        console.log(response.object)
    } catch (err) {
        console.log(err.message)
    }
})
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**signature** | **string** | The "x-webhook-signature" present in the headers received | 
**rawBody** | **string** | The request body received in the request in string format |
**timestamp** | **string** | The "x-webhook-timestamp" present in the headers received | 


### Response

```json
{
    "type": "PAYMENT_SUCCESS_WEBHOOK",
    "rawBody":"{\"type\":\"PAYMENT_SUCCESS_WEBHOOK\",\"data\":{}}",
    "object": {
        "type": "PAYMENT_SUCCESS_WEBHOOK",
        "data": {
            
        }
    }
}
```

`Note:` The `object` in the response is returned as a JSON object. But it can be of any of the following types:
- [Payment Webhook](https://docs.cashfree.com/docs/payment-webhooks)
- [Refund Webhook](https://docs.cashfree.com/docs/refunds-webhook)
- [Settlement Webhook](https://docs.cashfree.com/docs/settlements-webhook)
- [Instrument Webhook](https://docs.cashfree.com/docs/instrument-webhook)

