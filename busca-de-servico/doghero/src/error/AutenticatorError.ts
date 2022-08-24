import { BaseError } from "./BaseError"

export class invalidAuthenticatorData extends BaseError {
    constructor() {
        super(400, "Unauthorized user")
    }
}

export class invalidToken extends BaseError {
    constructor() {
        super(400, "Tokem needs to be passed in headers")
    }
}