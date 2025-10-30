import { ErrorType } from '@shlinkio/shlink-js-sdk/api-contract';
import { ProblemDetailsError } from '@shlinkio/shlink-js-sdk/api-contract';

export declare interface InvalidArgumentError extends ProblemDetailsError {
    type: typeof ErrorType.INVALID_ARGUMENT;
    invalidElements: string[];
}

export declare interface InvalidShortUrlDeletion extends ProblemDetailsError {
    type: typeof ErrorType.INVALID_SHORT_URL_DELETION;
    threshold: number;
}


export * from "@shlinkio/shlink-js-sdk/api-contract";

export { }
