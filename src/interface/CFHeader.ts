export class CFHeader {
    public requestID?: string;
    public idempotencyKey?: string;
    constructor(requestID = null, idempotencyKey=null ) {
        if (requestID != null) {
            this.requestID = requestID;
        }
        if (idempotencyKey != null) {
            this.idempotencyKey = idempotencyKey;
        }
    }
}