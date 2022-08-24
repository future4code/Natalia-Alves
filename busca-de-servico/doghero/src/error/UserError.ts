import { BaseError } from "./BaseError";

export class invalidEmail extends BaseError {
    constructor() {
        super(415, "invalid email is required to have '@'")
    }
}

export class invalidPassword extends BaseError {
    constructor() {
        super(400, "Invalid password!")
    }
}

export class invalidUserEmail extends BaseError {
    constructor() {
        super(404, "This email is already registered")
    }
}

export class invalidUser extends BaseError {
    constructor() {
        super(404, "User is not registered")
    }
}

export class invalidPasswordCreate extends BaseError {
    constructor() {
        super(415, "Invalid password must be longer than 6 characters")
    }
}
