require('dotenv').config();
const { Cashfree, CardChannelEnum, AppProviderEnum, CFEnvironment } = require("cashfree-pg");
const { test, expect } = require("@jest/globals");

const cashfree = new Cashfree(
  CFEnvironment.SANDBOX,
  process.env.XCLIENTIDSANDBOX,
  process.env.XCLIENTSECRETSANDBOX
);

const orderAmount = 1;
async function createOrderAndReturnSessionId() {
  const orderId = "order_" + Math.floor(Math.random() * 100000000);
  const request = {
    order_amount: orderAmount,
    order_currency: "INR",
    order_id: orderId,
    customer_details: {
      customer_id: "testCustomer",
      customer_phone: "9999999999",
      customer_email: "test@cashfree.com"
    },
    order_meta: {
      return_url:
        "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}"
    }
  };

  const response = await cashfree.PGCreateOrder(request);
  expect(response.data.payment_session_id).toBeDefined();
  return { sessionId: response.data.payment_session_id, orderId: orderId };
}

test("Create Order", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  expect(sessionId).toBeDefined();
});

test("Pay Netbanking", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      netbanking: {
        netbanking_bank_code: 3087,
        channel: "link"
      }
    }
  };

  const response = await cashfree.PGPayOrder(request);
  expect(response.data.channel).toBe("link");
  expect(response.data.payment_method).toBe("netbanking");
  expect(Number(response.data.payment_amount)).toBeGreaterThanOrEqual(orderAmount);
});

test("Pay Card", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      card: {
        channel: CardChannelEnum.LINK,
        card_number: "4838305610460100",
        card_holder_name: "Tushar Gupta",
        card_expiry_mm: "06",
        card_expiry_yy: "30",
        card_cvv: "123"
      }
    }
  };

  const response = await cashfree.PGPayOrder(request);
  expect(response.data.channel).toBe("link");
  expect(response.data.payment_method).toBe("card");
  expect(Number(response.data.payment_amount)).toBeGreaterThanOrEqual(orderAmount);
});

test("Pay Card with Empty CVV", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      card: {
        channel: CardChannelEnum.LINK,
        card_number: "4838305610460100",
        card_holder_name: "Tushar Gupta",
        card_expiry_mm: "06",
        card_expiry_yy: "30",
        card_cvv: ""
      }
    }
  };

  await expect(cashfree.PGPayOrder(request)).rejects.toMatchObject({
    response: {
      data: {
        code: "card_cvv_missing",
        type: "invalid_request_error",
        message: expect.stringContaining("card_cvv")
      }
    }
  });
});

test("Pay Wallet - PhonePe", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      app: {
        provider: AppProviderEnum.PHONEPE,
        phone: "8474090512",
        channel: "link"
      }
    }
  };

  const response = await cashfree.PGPayOrder(request);
  expect(response.status).toBe(200);
});

test("Invalid Currency", async () => {
  const request = {
    order_amount: orderAmount,
    order_currency: "INjR",
    customer_details: {
      customer_id: "iij",
      customer_name: "abcd",
      customer_email: "success@eligibility.com",
      customer_phone: "9999999999"
    }
  };

  await expect(cashfree.PGCreateOrder(request)).rejects.toMatchObject({
    response: {
      data: {
        code: "order_currency_invalid",
        type: "invalid_request_error",
        message: expect.stringContaining("order_currency")
      }
    }
  });
});

test("Invalid Amount", async () => {
  const request = {
    order_amount: -100,
    order_currency: "INR",
    customer_details: {
      customer_id: "iij",
      customer_name: "abcd",
      customer_email: "success@eligibility.com",
      customer_phone: "9999999999"
    }
  };

  await expect(cashfree.PGCreateOrder(request)).rejects.toMatchObject({
    response: {
      data: {
        code: "order_amount_invalid",
        type: "invalid_request_error",
        message: expect.stringContaining("Invalid amount")
      }
    }
  });
});

test("Empty Customer Phone", async () => {
  const request = {
    order_amount: orderAmount,
    order_currency: "INR",
    customer_details: {
      customer_id: "iij",
      customer_name: "abcd",
      customer_email: "success@eligibility.com",
      customer_phone: ""
    }
  };

  await expect(cashfree.PGCreateOrder(request)).rejects.toMatchObject({
    response: {
      data: {
        code: "customer_details.customer_phone_missing",
        type: "invalid_request_error",
        message: expect.stringContaining("customer_phone")
      }
    }
  });
});

test("Order Pay Net Banking Test", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      netbanking: {
        netbanking_bank_code: 3087,
        channel: "link",
      },
    },
  };

  const response = await cashfree.PGPayOrder(request);
  expect(response.data.channel).toBe("link");
  expect(response.data.payment_method).toBe("netbanking");
  expect(Number(response.data.payment_amount)).toBeGreaterThanOrEqual(orderAmount);
});

test("Order Pay Card Payment Test", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      card: {
        channel: CardChannelEnum.LINK,
        card_number: "4838305610460100",
        card_holder_name: "Tushar Gupta",
        card_expiry_mm: "06",
        card_expiry_yy: "30",
        card_cvv: "123",
      },
    },
  };

const response = await cashfree.PGPayOrder(request);
  expect(response.data.channel).toBe("link");
  expect(response.data.payment_method).toBe("card");
  expect(Number(response.data.payment_amount)).toBeGreaterThanOrEqual(orderAmount);
});

test("Order Pay Card Payment with Empty CVV Test", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      card: {
        channel: CardChannelEnum.LINK,
        card_number: "4838305610460100",
        card_holder_name: "Tushar Gupta",
        card_expiry_mm: "06",
        card_expiry_yy: "30",
        card_cvv: "",
      },
    },
  };

  try {
    await cashfree.PGPayOrder(request);
    throw new Error("Expected error but request passed");
  } catch (error) {
    expect(error.response.data.message).toBe("card_cvv : is missing in the request. Value received: ");
    expect(error.response.data.code).toBe("card_cvv_missing");
    expect(error.response.data.type).toBe("invalid_request_error");
  }
});

test("Order Pay Wallet Test", async () => {
  const { sessionId } = await createOrderAndReturnSessionId();
  const request = {
    payment_session_id: sessionId,
    payment_method: {
      app: {
        provider: AppProviderEnum.PHONEPE,
        phone: "8474090512",
        channel: "link",
      },
    },
  };

  const response = await cashfree.PGPayOrder(request);
  expect(response.status).toBe(200);
});

test("Get Order Test", async () => {
  const { orderId } = await createOrderAndReturnSessionId();
  const response = await cashfree.PGFetchOrder(orderId);
  expect(response.data.order_currency).toBe("INR");
});

test("Get Payments For an Order Test", async () => {
  const { orderId } = await createOrderAndReturnSessionId();
  const response = await cashfree.PGOrderFetchPayments(orderId);
  expect(response.status).toBe(200);
});
