const Sentry = require("@sentry/node");

class CFSentryImpl {
  SetupSentry(environment: String) {
    Sentry.init({
      dsn: "https://ad7936cb4d7f4f2b99c6571a8e7a4df7@o330525.ingest.sentry.io/4505085005725696",

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
      AttachStacktrace: true,
      EnableTracing: true,
      Environment: environment,
      Release: "2.0.2",
    });
  }

  CaptureError(api: String, message: String) {
    Sentry.captureMessage(api + "::" + message);
    Sentry.flush(2000);
  }
}

const CFSentry = new CFSentryImpl();
export default CFSentry;
