class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError };

/* The stack property of an Error object typically contains a stack track,
 which is a list of function calls that were made at the time the error occurred. 
 It provides information about the sequence of function calls leading up to the error.*/