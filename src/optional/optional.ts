export namespace Optional {
    export type ConsumerFunction<T> = (value: T) => void;
    export type EmptyFunction = () => void;
    export type PredicateFunction<T> = (value: T) => boolean;
    export type MapFunction<T, U> = (value: T) => U;
    export type SupplierFunction<T> = () => Optional<T>;
    export type ExceptionSupplierFunction<E extends Error> = () => E;
}

export class Optional<T> {
    
    private static readonly EMPTY: Optional<void> = new Optional();
    
    private readonly value: T | null;
    
    private constructor(value?: T) {
        this.value = value || null;
    }
    
    public static empty<T>(): Optional<T> {
        return Optional.EMPTY as unknown as Optional<T>;
    }
    
    public static of<T>(value: T): Optional<T> {
        return new Optional<T>(value);
    }
    
    public static ofNullable<T>(value: T | undefined | null): Optional<T> {
        if (value) {
            return Optional.of(value);
        }
        return Optional.empty();
    }
    
    public get(): T {
        if (this.value) {
            return this.value;
        }
        throw new Error("No value present!");
    }
    
    public isPresent(): boolean {
        return !!this.value;
    }
    
    public isEmpty(): boolean {
        return !this.value;
    }
    
    public ifPresent(func: Optional.ConsumerFunction<T>): void {
        if (this.value) {
            func(this.value);
        }
    }
    
    public ifPresentOrElse(func: Optional.ConsumerFunction<T>, emptyFunc: Optional.EmptyFunction): void {
        if (this.value) {
            func(this.value);
        } else {
            emptyFunc();
        }
    }
    
    public filter(predicate: Optional.PredicateFunction<T>): Optional<T> {
        if (!this.value) {
            return this;
        }
        const result = predicate(this.value);
        if (result) {
            return this;
        }
        return Optional.empty();
    }
    
    public map<U>(func: Optional.MapFunction<T, U>): Optional<U> {
        if (!this.value) {
            return Optional.empty();
        }
        return Optional.ofNullable(func(this.value));
    }
    
    public or(func: Optional.SupplierFunction<T>): Optional<T> {
        if (this.value) {
            return this;
        }
        return func();
    }
    
    public orElse(other: T): T {
        return this.value ? this.value : other;
    }
    
    public orElseThrow<E extends Error>(supplier?: Optional.ExceptionSupplierFunction<E>): T {
        if (this.value) {
            return this.value;
        }
        if (supplier) {
            throw supplier();
        } else {
            throw new Error("No value present");
        }
    }
    
}
