export interface ILogger {
    warn(): void ;
    info(): void;
    error(): void;
    debug(): void;
}

export class ProductionLogger implements ILogger {
    warn(): void {
        console.warn('warn');
    }
    info(): void {
    }
    error(): void {
        console.warn('error');
    }
    debug(): void {
    }

}

export class DevelopmentLogger implements ILogger {
    warn(): void {
        console.warn('warn');
    }
    info(): void {
        console.warn('info');
    }
    error(): void {
        console.warn('error');
    }
    debug(): void {
        console.warn('debug');
    }

}