# Offers

Method | HTTP request | Description
------------- | ------------- | -------------
[**PGCreateOffer**](Offers.md#PGCreateOffer) | **Post** /offers | Create Offer
[**PGFetchOffer**](Offers.md#PGFetchOffer) | **Get** /offers/{offer_id} | Get Offer by ID



## PGCreateOffer

> PGCreateOffer(x_api_version: string, CreateOfferRequest: CreateOfferRequest, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<OfferEntity, any>>

Create Offer ([Docs](https://docs.cashfree.com/reference/pgcreateoffer))



### Example

```javascript
const request = {
    "offer_meta": {
      "offer_title": "Test Offer",
      "offer_description": "Offer Description",
      "offer_code": "CFTESTOFFER",
      "offer_start_time": "2023-03-21T08:09:51Z",
      "offer_end_time": "2024-03-21T08:09:51Z"
    },
    "offer_tnc": {
      "offer_tnc_type": "text",
      "offer_tnc_value": "Terms and Condition of the Offer"
    },
    "offer_details": {
      "offer_type": "DISCOUNT_AND_CASHBACK",
      "discount_details": {
        "discount_type": "flat",
        "discount_value": "10",
        "max_discount_amount": "10"
      },
      "cashback_details": {
        "cashback_type": "percentage",
        "cashback_value": "10",
        "max_cashback_amount": "10"
      }
    },
    "offer_validations": {
      "payment_method": {
        "card": {
          "type": [
            "cc"
          ],
          "bank_name": "hdfc bank",
          "scheme_name": [
            "visa"
          ]
        }
      },
      "min_amount": 15,
      "max_allowed": 100
    }
  }

Cashfree.PGCreateOffer("2022-09-01", request).then((response) => {
    console.log('Offer creation successful:', response.data);
})
.catch((error) => {
    console.error('Error while creating offers:', error);
});
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**createOfferRequest** | **CreateOfferRequest*** | Request body to create an offer at Cashfree | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response
```json
{
  offer_id: 'afbc424a-a21c-4e77-8b3d-5ac0d9b91974',
  offer_status: 'active',
  offer_meta: {
    offer_title: 'Test Offer',
    offer_description: 'Offer Description',
    offer_code: 'CFTESTOFFER',
    offer_start_time: '2023-03-21T08:09:51Z',
    offer_end_time: '2024-03-21T08:09:51Z'
  },
  offer_tnc: {
    offer_tnc_type: 'text',
    offer_tnc_value: 'Terms and Condition of the Offer'
  },
  offer_details: {
    offer_type: 'DISCOUNT_AND_CASHBACK',
    discount_details: {
      discount_type: 'flat',
      discount_value: 10,
      max_discount_amount: 10
    },
    cashback_details: {
      cashback_type: 'percentage',
      cashback_value: 10,
      max_cashback_amount: 10
    }
  },
  offer_validations: {
    min_amount: 15,
    max_allowed: 100,
    payment_method: { card: [Object] }
  }
}
```


## PGFetchOffer

> OfferEntity PGFetchOffer(ctx, offerId).XApiVersion(xApiVersion).XRequestId(xRequestId).XIdempotencyKey(xIdempotencyKey).Execute()

Get Offer by ID ([Docs](https://docs.cashfree.com/reference/pgfetchoffer))



### Example

```javascript
Cashfree.PGFetchOffer("2022-09-01", "afbc424a-a21c-4e77-8b3d-5ac0d9b91974").then((response) => {
    console.log('Offer Fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching offer:', error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offerId** | **string** | The offer ID for which you want to view the offer details. | 
**xApiVersion** | **string** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response
```json
{
  offer_id: 'afbc424a-a21c-4e77-8b3d-5ac0d9b91974',
  offer_status: 'active',
  offer_meta: {
    offer_title: 'Test Offer',
    offer_description: 'Offer Description',
    offer_code: 'CFTESTOFFER',
    offer_start_time: '2023-03-21T08:09:51Z',
    offer_end_time: '2024-03-21T08:09:51Z'
  },
  offer_tnc: {
    offer_tnc_type: 'text',
    offer_tnc_value: 'Terms and Condition of the Offer'
  },
  offer_details: {
    offer_type: 'DISCOUNT_AND_CASHBACK',
    discount_details: {
      discount_type: 'flat',
      discount_value: 10,
      max_discount_amount: 10
    },
    cashback_details: {
      cashback_type: 'percentage',
      cashback_value: 10,
      max_cashback_amount: 10
    }
  },
  offer_validations: {
    min_amount: 15,
    max_allowed: 100,
    payment_method: { card: [Object] }
  }
}
```

