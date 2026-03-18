# CreateSubscriptionRequestPlanDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **string** | The unique identifier used to create plan. You only need to pass this field if you had already created plan. Otherwise use the other fields here to define the plan. | [optional] [default to undefined]
**plan_name** | **string** | Specify plan name for easy reference. | [optional] [default to undefined]
**plan_type** | **string** | Possible values ON_DEMAND or PERIODIC. PERIODIC - Payments are triggered automatically at fixed intervals defined by the merchant. ON_DEMAND - Merchant needs to trigger/charge the customer explicitly with the required amount. | [optional] [default to undefined]
**plan_currency** | **string** | INR by default. | [optional] [default to undefined]
**plan_amount** | **number** | The amount to be charged for PERIODIC plan. This is a conditional parameter, only required for PERIODIC plans. | [optional] [default to undefined]
**plan_max_amount** | **number** | This is the maximum amount that can be charged on a subscription. | [optional] [default to undefined]
**plan_max_cycles** | **number** | Maximum number of debits set for the plan. The subscription will automatically change to COMPLETED status once this limit is reached. | [optional] [default to undefined]
**plan_intervals** | **number** | Number of intervals of intervalType between every subscription payment. For example, to charge a customer bi-weekly use intervalType as “week” and intervals as 2. Required for PERIODIC plan. The default value is 1. | [optional] [default to undefined]
**plan_interval_type** | **string** | The type of interval for a PERIODIC plan like DAY, WEEK, MONTH, or YEAR. This is a conditional parameter only applicable for PERIODIC plans. | [optional] [default to undefined]
**plan_note** | **string** | Note for the plan. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionRequestPlanDetails } from 'cashfree-pg';

const instance: CreateSubscriptionRequestPlanDetails = {
    plan_id,
    plan_name,
    plan_type,
    plan_currency,
    plan_amount,
    plan_max_amount,
    plan_max_cycles,
    plan_intervals,
    plan_interval_type,
    plan_note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
