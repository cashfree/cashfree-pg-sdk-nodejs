import { 
    CFOrderPayResponse, 
    CFOrder, 
    CFPaymentsEntity, 
    CFRefund, 
    CFSettlementsEntity, 
    CFFetchAllSavedInstruments, 
    CFCryptogram, 
    CFLink, 
    CFLinkOrders,
    CFLinkCancelledResponse  
} from "../model/models";

interface Dictionary<T> {
    [Key: string]: T;
}
import { IncomingHttpHeaders } from 'http';

class CFOrderResponse {
    cfOrder?: CFOrder;
    cfHeaders?: IncomingHttpHeaders;


    constructor(cfOrder: CFOrder, cfHeaders: IncomingHttpHeaders = {}) {
        this.cfOrder = cfOrder;
        this.cfHeaders = cfHeaders;
    }
}

class CFPayResponse {
    cfOrderPayResponse?: CFOrderPayResponse;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfOrderPayResponse: CFOrderPayResponse, cfHeaders: Dictionary<string> = {}) {
        this.cfOrderPayResponse = cfOrderPayResponse;
        this.cfHeaders = cfHeaders;
    }
}

class CFPaymentsForOrderResponse {
    cfPaymentsEntities?: Array<CFPaymentsEntity>;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfPaymentsEntities: Array<CFPaymentsEntity>, cfHeaders: Dictionary<string> = {}) {
        this.cfPaymentsEntities = cfPaymentsEntities;
        this.cfHeaders = cfHeaders;
    }
}

class CFPaymentEntityResponse {
    cfPaymentsEntity?: CFPaymentsEntity;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfPaymentsEntity?: CFPaymentsEntity, cfHeaders: Dictionary<string> = {}) {
        this.cfPaymentsEntity = cfPaymentsEntity;
        this.cfHeaders = cfHeaders;
    }
}

class CFRefundResponse {
    cfRefund?: CFRefund;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfRefund: CFRefund, cfHeaders: Dictionary<string> = {}) {
        this.cfRefund = cfRefund;
        this.cfHeaders = cfHeaders;
    }
}

class CFAllRefundsResponse {
    cfRefunds?: Array<CFRefund>;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfRefunds: Array<CFRefund>, cfHeaders: Dictionary<string> = {}) {
        this.cfRefunds = cfRefunds;
        this.cfHeaders = cfHeaders;
    }
}

class CFSettlementsResponse {
    cfSettlementsEntity?: CFSettlementsEntity;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfSettlementsEntity: CFSettlementsEntity, cfHeaders: Dictionary<string> = {}) {
        this.cfSettlementsEntity = cfSettlementsEntity;
        this.cfHeaders = cfHeaders;
    }
}

class CFAllInstrumentsResponse {
    cfInstruments?: Array<CFFetchAllSavedInstruments>;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfInstruments: Array<CFFetchAllSavedInstruments>, cfHeaders: Dictionary<string> = {}) {
        this.cfInstruments = cfInstruments;
        this.cfHeaders = cfHeaders;
    }
}

class CFInstrumentsResponse {
    cfInstrument?: CFFetchAllSavedInstruments;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfInstrument: CFFetchAllSavedInstruments, cfHeaders: Dictionary<string> = {}) {
        this.cfInstrument = cfInstrument;
        this.cfHeaders = cfHeaders;
    }
}

class CFCryptogramResponse {
    cfCryptogram?: CFCryptogram;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfCryptogram: CFCryptogram, cfHeaders: Dictionary<string> = {}) {
        this.cfCryptogram = cfCryptogram;
        this.cfHeaders = cfHeaders;
    }
}

class CFLinkResponse {
    cfLink?: CFLink;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfLink: CFLink, cfHeaders: Dictionary<string> = {}) {
        this.cfLink = cfLink;
        this.cfHeaders = cfHeaders;
    }
}

class CFCancelledLinkResponse {
    cfLink?: CFLinkCancelledResponse;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfLink: CFLinkCancelledResponse, cfHeaders: Dictionary<string> = {}) {
        this.cfLink = cfLink;
        this.cfHeaders = cfHeaders;
    }
}

class CFPaymentLinkOrdersRespnse {
    cfLinkOrders?: Array<CFLinkOrders>;
    cfHeaders?: IncomingHttpHeaders;

    constructor(cfLinkOrders?: Array<CFLinkOrders>, cfHeaders: Dictionary<string> = {}) {
        this.cfLinkOrders = cfLinkOrders;
        this.cfHeaders = cfHeaders;
    }
}


export {
    CFOrderResponse,
    CFPayResponse,
    CFPaymentsForOrderResponse,
    CFPaymentEntityResponse,
    CFRefundResponse,
    CFAllRefundsResponse,
    CFSettlementsResponse,
    CFAllInstrumentsResponse,
    CFInstrumentsResponse,
    CFCryptogramResponse,
    CFLinkResponse,
    CFCancelledLinkResponse,
    CFPaymentLinkOrdersRespnse,
}