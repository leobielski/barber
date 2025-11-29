
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BarberShop
 * 
 */
export type BarberShop = $Result.DefaultSelection<Prisma.$BarberShopPayload>
/**
 * Model BarberShopService
 * 
 */
export type BarberShopService = $Result.DefaultSelection<Prisma.$BarberShopServicePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BarberShops
 * const barberShops = await prisma.barberShop.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BarberShops
   * const barberShops = await prisma.barberShop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barberShop`: Exposes CRUD operations for the **BarberShop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarberShops
    * const barberShops = await prisma.barberShop.findMany()
    * ```
    */
  get barberShop(): Prisma.BarberShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barberShopService`: Exposes CRUD operations for the **BarberShopService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarberShopServices
    * const barberShopServices = await prisma.barberShopService.findMany()
    * ```
    */
  get barberShopService(): Prisma.BarberShopServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BarberShop: 'BarberShop',
    BarberShopService: 'BarberShopService',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barberShop" | "barberShopService" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BarberShop: {
        payload: Prisma.$BarberShopPayload<ExtArgs>
        fields: Prisma.BarberShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarberShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarberShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>
          }
          findFirst: {
            args: Prisma.BarberShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarberShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>
          }
          findMany: {
            args: Prisma.BarberShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>[]
          }
          create: {
            args: Prisma.BarberShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>
          }
          createMany: {
            args: Prisma.BarberShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarberShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>[]
          }
          delete: {
            args: Prisma.BarberShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>
          }
          update: {
            args: Prisma.BarberShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>
          }
          deleteMany: {
            args: Prisma.BarberShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarberShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarberShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>[]
          }
          upsert: {
            args: Prisma.BarberShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopPayload>
          }
          aggregate: {
            args: Prisma.BarberShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarberShop>
          }
          groupBy: {
            args: Prisma.BarberShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarberShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarberShopCountArgs<ExtArgs>
            result: $Utils.Optional<BarberShopCountAggregateOutputType> | number
          }
        }
      }
      BarberShopService: {
        payload: Prisma.$BarberShopServicePayload<ExtArgs>
        fields: Prisma.BarberShopServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarberShopServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarberShopServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>
          }
          findFirst: {
            args: Prisma.BarberShopServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarberShopServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>
          }
          findMany: {
            args: Prisma.BarberShopServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>[]
          }
          create: {
            args: Prisma.BarberShopServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>
          }
          createMany: {
            args: Prisma.BarberShopServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarberShopServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>[]
          }
          delete: {
            args: Prisma.BarberShopServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>
          }
          update: {
            args: Prisma.BarberShopServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>
          }
          deleteMany: {
            args: Prisma.BarberShopServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarberShopServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarberShopServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>[]
          }
          upsert: {
            args: Prisma.BarberShopServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberShopServicePayload>
          }
          aggregate: {
            args: Prisma.BarberShopServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarberShopService>
          }
          groupBy: {
            args: Prisma.BarberShopServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarberShopServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarberShopServiceCountArgs<ExtArgs>
            result: $Utils.Optional<BarberShopServiceCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    barberShop?: BarberShopOmit
    barberShopService?: BarberShopServiceOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BarberShopCountOutputType
   */

  export type BarberShopCountOutputType = {
    services: number
    bookings: number
  }

  export type BarberShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | BarberShopCountOutputTypeCountServicesArgs
    bookings?: boolean | BarberShopCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * BarberShopCountOutputType without action
   */
  export type BarberShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopCountOutputType
     */
    select?: BarberShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarberShopCountOutputType without action
   */
  export type BarberShopCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberShopServiceWhereInput
  }

  /**
   * BarberShopCountOutputType without action
   */
  export type BarberShopCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BarberShopServiceCountOutputType
   */

  export type BarberShopServiceCountOutputType = {
    bookings: number
  }

  export type BarberShopServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | BarberShopServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * BarberShopServiceCountOutputType without action
   */
  export type BarberShopServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopServiceCountOutputType
     */
    select?: BarberShopServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarberShopServiceCountOutputType without action
   */
  export type BarberShopServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BarberShop
   */

  export type AggregateBarberShop = {
    _count: BarberShopCountAggregateOutputType | null
    _min: BarberShopMinAggregateOutputType | null
    _max: BarberShopMaxAggregateOutputType | null
  }

  export type BarberShopMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarberShopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarberShopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    description: number
    imageUrl: number
    phones: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarberShopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarberShopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarberShopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    phones?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarberShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarberShop to aggregate.
     */
    where?: BarberShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShops to fetch.
     */
    orderBy?: BarberShopOrderByWithRelationInput | BarberShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarberShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarberShops
    **/
    _count?: true | BarberShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarberShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarberShopMaxAggregateInputType
  }

  export type GetBarberShopAggregateType<T extends BarberShopAggregateArgs> = {
        [P in keyof T & keyof AggregateBarberShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarberShop[P]>
      : GetScalarType<T[P], AggregateBarberShop[P]>
  }




  export type BarberShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberShopWhereInput
    orderBy?: BarberShopOrderByWithAggregationInput | BarberShopOrderByWithAggregationInput[]
    by: BarberShopScalarFieldEnum[] | BarberShopScalarFieldEnum
    having?: BarberShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarberShopCountAggregateInputType | true
    _min?: BarberShopMinAggregateInputType
    _max?: BarberShopMaxAggregateInputType
  }

  export type BarberShopGroupByOutputType = {
    id: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones: string[]
    createdAt: Date
    updatedAt: Date
    _count: BarberShopCountAggregateOutputType | null
    _min: BarberShopMinAggregateOutputType | null
    _max: BarberShopMaxAggregateOutputType | null
  }

  type GetBarberShopGroupByPayload<T extends BarberShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarberShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarberShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarberShopGroupByOutputType[P]>
            : GetScalarType<T[P], BarberShopGroupByOutputType[P]>
        }
      >
    >


  export type BarberShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | BarberShop$servicesArgs<ExtArgs>
    bookings?: boolean | BarberShop$bookingsArgs<ExtArgs>
    _count?: boolean | BarberShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barberShop"]>

  export type BarberShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["barberShop"]>

  export type BarberShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["barberShop"]>

  export type BarberShopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarberShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "description" | "imageUrl" | "phones" | "createdAt" | "updatedAt", ExtArgs["result"]["barberShop"]>
  export type BarberShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | BarberShop$servicesArgs<ExtArgs>
    bookings?: boolean | BarberShop$bookingsArgs<ExtArgs>
    _count?: boolean | BarberShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarberShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BarberShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarberShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarberShop"
    objects: {
      services: Prisma.$BarberShopServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      description: string
      imageUrl: string
      phones: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barberShop"]>
    composites: {}
  }

  type BarberShopGetPayload<S extends boolean | null | undefined | BarberShopDefaultArgs> = $Result.GetResult<Prisma.$BarberShopPayload, S>

  type BarberShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarberShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarberShopCountAggregateInputType | true
    }

  export interface BarberShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarberShop'], meta: { name: 'BarberShop' } }
    /**
     * Find zero or one BarberShop that matches the filter.
     * @param {BarberShopFindUniqueArgs} args - Arguments to find a BarberShop
     * @example
     * // Get one BarberShop
     * const barberShop = await prisma.barberShop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarberShopFindUniqueArgs>(args: SelectSubset<T, BarberShopFindUniqueArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarberShop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarberShopFindUniqueOrThrowArgs} args - Arguments to find a BarberShop
     * @example
     * // Get one BarberShop
     * const barberShop = await prisma.barberShop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarberShopFindUniqueOrThrowArgs>(args: SelectSubset<T, BarberShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarberShop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopFindFirstArgs} args - Arguments to find a BarberShop
     * @example
     * // Get one BarberShop
     * const barberShop = await prisma.barberShop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarberShopFindFirstArgs>(args?: SelectSubset<T, BarberShopFindFirstArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarberShop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopFindFirstOrThrowArgs} args - Arguments to find a BarberShop
     * @example
     * // Get one BarberShop
     * const barberShop = await prisma.barberShop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarberShopFindFirstOrThrowArgs>(args?: SelectSubset<T, BarberShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarberShops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarberShops
     * const barberShops = await prisma.barberShop.findMany()
     * 
     * // Get first 10 BarberShops
     * const barberShops = await prisma.barberShop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barberShopWithIdOnly = await prisma.barberShop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarberShopFindManyArgs>(args?: SelectSubset<T, BarberShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarberShop.
     * @param {BarberShopCreateArgs} args - Arguments to create a BarberShop.
     * @example
     * // Create one BarberShop
     * const BarberShop = await prisma.barberShop.create({
     *   data: {
     *     // ... data to create a BarberShop
     *   }
     * })
     * 
     */
    create<T extends BarberShopCreateArgs>(args: SelectSubset<T, BarberShopCreateArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarberShops.
     * @param {BarberShopCreateManyArgs} args - Arguments to create many BarberShops.
     * @example
     * // Create many BarberShops
     * const barberShop = await prisma.barberShop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarberShopCreateManyArgs>(args?: SelectSubset<T, BarberShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarberShops and returns the data saved in the database.
     * @param {BarberShopCreateManyAndReturnArgs} args - Arguments to create many BarberShops.
     * @example
     * // Create many BarberShops
     * const barberShop = await prisma.barberShop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarberShops and only return the `id`
     * const barberShopWithIdOnly = await prisma.barberShop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarberShopCreateManyAndReturnArgs>(args?: SelectSubset<T, BarberShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarberShop.
     * @param {BarberShopDeleteArgs} args - Arguments to delete one BarberShop.
     * @example
     * // Delete one BarberShop
     * const BarberShop = await prisma.barberShop.delete({
     *   where: {
     *     // ... filter to delete one BarberShop
     *   }
     * })
     * 
     */
    delete<T extends BarberShopDeleteArgs>(args: SelectSubset<T, BarberShopDeleteArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarberShop.
     * @param {BarberShopUpdateArgs} args - Arguments to update one BarberShop.
     * @example
     * // Update one BarberShop
     * const barberShop = await prisma.barberShop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarberShopUpdateArgs>(args: SelectSubset<T, BarberShopUpdateArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarberShops.
     * @param {BarberShopDeleteManyArgs} args - Arguments to filter BarberShops to delete.
     * @example
     * // Delete a few BarberShops
     * const { count } = await prisma.barberShop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarberShopDeleteManyArgs>(args?: SelectSubset<T, BarberShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarberShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarberShops
     * const barberShop = await prisma.barberShop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarberShopUpdateManyArgs>(args: SelectSubset<T, BarberShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarberShops and returns the data updated in the database.
     * @param {BarberShopUpdateManyAndReturnArgs} args - Arguments to update many BarberShops.
     * @example
     * // Update many BarberShops
     * const barberShop = await prisma.barberShop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarberShops and only return the `id`
     * const barberShopWithIdOnly = await prisma.barberShop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarberShopUpdateManyAndReturnArgs>(args: SelectSubset<T, BarberShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarberShop.
     * @param {BarberShopUpsertArgs} args - Arguments to update or create a BarberShop.
     * @example
     * // Update or create a BarberShop
     * const barberShop = await prisma.barberShop.upsert({
     *   create: {
     *     // ... data to create a BarberShop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarberShop we want to update
     *   }
     * })
     */
    upsert<T extends BarberShopUpsertArgs>(args: SelectSubset<T, BarberShopUpsertArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarberShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopCountArgs} args - Arguments to filter BarberShops to count.
     * @example
     * // Count the number of BarberShops
     * const count = await prisma.barberShop.count({
     *   where: {
     *     // ... the filter for the BarberShops we want to count
     *   }
     * })
    **/
    count<T extends BarberShopCountArgs>(
      args?: Subset<T, BarberShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarberShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarberShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarberShopAggregateArgs>(args: Subset<T, BarberShopAggregateArgs>): Prisma.PrismaPromise<GetBarberShopAggregateType<T>>

    /**
     * Group by BarberShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarberShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarberShopGroupByArgs['orderBy'] }
        : { orderBy?: BarberShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarberShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarberShop model
   */
  readonly fields: BarberShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarberShop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarberShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends BarberShop$servicesArgs<ExtArgs> = {}>(args?: Subset<T, BarberShop$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends BarberShop$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, BarberShop$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BarberShop model
   */
  interface BarberShopFieldRefs {
    readonly id: FieldRef<"BarberShop", 'String'>
    readonly name: FieldRef<"BarberShop", 'String'>
    readonly address: FieldRef<"BarberShop", 'String'>
    readonly description: FieldRef<"BarberShop", 'String'>
    readonly imageUrl: FieldRef<"BarberShop", 'String'>
    readonly phones: FieldRef<"BarberShop", 'String[]'>
    readonly createdAt: FieldRef<"BarberShop", 'DateTime'>
    readonly updatedAt: FieldRef<"BarberShop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BarberShop findUnique
   */
  export type BarberShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * Filter, which BarberShop to fetch.
     */
    where: BarberShopWhereUniqueInput
  }

  /**
   * BarberShop findUniqueOrThrow
   */
  export type BarberShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * Filter, which BarberShop to fetch.
     */
    where: BarberShopWhereUniqueInput
  }

  /**
   * BarberShop findFirst
   */
  export type BarberShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * Filter, which BarberShop to fetch.
     */
    where?: BarberShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShops to fetch.
     */
    orderBy?: BarberShopOrderByWithRelationInput | BarberShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarberShops.
     */
    cursor?: BarberShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarberShops.
     */
    distinct?: BarberShopScalarFieldEnum | BarberShopScalarFieldEnum[]
  }

  /**
   * BarberShop findFirstOrThrow
   */
  export type BarberShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * Filter, which BarberShop to fetch.
     */
    where?: BarberShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShops to fetch.
     */
    orderBy?: BarberShopOrderByWithRelationInput | BarberShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarberShops.
     */
    cursor?: BarberShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarberShops.
     */
    distinct?: BarberShopScalarFieldEnum | BarberShopScalarFieldEnum[]
  }

  /**
   * BarberShop findMany
   */
  export type BarberShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * Filter, which BarberShops to fetch.
     */
    where?: BarberShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShops to fetch.
     */
    orderBy?: BarberShopOrderByWithRelationInput | BarberShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarberShops.
     */
    cursor?: BarberShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShops.
     */
    skip?: number
    distinct?: BarberShopScalarFieldEnum | BarberShopScalarFieldEnum[]
  }

  /**
   * BarberShop create
   */
  export type BarberShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * The data needed to create a BarberShop.
     */
    data: XOR<BarberShopCreateInput, BarberShopUncheckedCreateInput>
  }

  /**
   * BarberShop createMany
   */
  export type BarberShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarberShops.
     */
    data: BarberShopCreateManyInput | BarberShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarberShop createManyAndReturn
   */
  export type BarberShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * The data used to create many BarberShops.
     */
    data: BarberShopCreateManyInput | BarberShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarberShop update
   */
  export type BarberShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * The data needed to update a BarberShop.
     */
    data: XOR<BarberShopUpdateInput, BarberShopUncheckedUpdateInput>
    /**
     * Choose, which BarberShop to update.
     */
    where: BarberShopWhereUniqueInput
  }

  /**
   * BarberShop updateMany
   */
  export type BarberShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarberShops.
     */
    data: XOR<BarberShopUpdateManyMutationInput, BarberShopUncheckedUpdateManyInput>
    /**
     * Filter which BarberShops to update
     */
    where?: BarberShopWhereInput
    /**
     * Limit how many BarberShops to update.
     */
    limit?: number
  }

  /**
   * BarberShop updateManyAndReturn
   */
  export type BarberShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * The data used to update BarberShops.
     */
    data: XOR<BarberShopUpdateManyMutationInput, BarberShopUncheckedUpdateManyInput>
    /**
     * Filter which BarberShops to update
     */
    where?: BarberShopWhereInput
    /**
     * Limit how many BarberShops to update.
     */
    limit?: number
  }

  /**
   * BarberShop upsert
   */
  export type BarberShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * The filter to search for the BarberShop to update in case it exists.
     */
    where: BarberShopWhereUniqueInput
    /**
     * In case the BarberShop found by the `where` argument doesn't exist, create a new BarberShop with this data.
     */
    create: XOR<BarberShopCreateInput, BarberShopUncheckedCreateInput>
    /**
     * In case the BarberShop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarberShopUpdateInput, BarberShopUncheckedUpdateInput>
  }

  /**
   * BarberShop delete
   */
  export type BarberShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
    /**
     * Filter which BarberShop to delete.
     */
    where: BarberShopWhereUniqueInput
  }

  /**
   * BarberShop deleteMany
   */
  export type BarberShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarberShops to delete
     */
    where?: BarberShopWhereInput
    /**
     * Limit how many BarberShops to delete.
     */
    limit?: number
  }

  /**
   * BarberShop.services
   */
  export type BarberShop$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    where?: BarberShopServiceWhereInput
    orderBy?: BarberShopServiceOrderByWithRelationInput | BarberShopServiceOrderByWithRelationInput[]
    cursor?: BarberShopServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarberShopServiceScalarFieldEnum | BarberShopServiceScalarFieldEnum[]
  }

  /**
   * BarberShop.bookings
   */
  export type BarberShop$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * BarberShop without action
   */
  export type BarberShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShop
     */
    select?: BarberShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShop
     */
    omit?: BarberShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopInclude<ExtArgs> | null
  }


  /**
   * Model BarberShopService
   */

  export type AggregateBarberShopService = {
    _count: BarberShopServiceCountAggregateOutputType | null
    _avg: BarberShopServiceAvgAggregateOutputType | null
    _sum: BarberShopServiceSumAggregateOutputType | null
    _min: BarberShopServiceMinAggregateOutputType | null
    _max: BarberShopServiceMaxAggregateOutputType | null
  }

  export type BarberShopServiceAvgAggregateOutputType = {
    priceInCents: number | null
  }

  export type BarberShopServiceSumAggregateOutputType = {
    priceInCents: number | null
  }

  export type BarberShopServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceInCents: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    barberShopId: string | null
  }

  export type BarberShopServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceInCents: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    barberShopId: string | null
  }

  export type BarberShopServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    priceInCents: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    barberShopId: number
    _all: number
  }


  export type BarberShopServiceAvgAggregateInputType = {
    priceInCents?: true
  }

  export type BarberShopServiceSumAggregateInputType = {
    priceInCents?: true
  }

  export type BarberShopServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceInCents?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    barberShopId?: true
  }

  export type BarberShopServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceInCents?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    barberShopId?: true
  }

  export type BarberShopServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceInCents?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    barberShopId?: true
    _all?: true
  }

  export type BarberShopServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarberShopService to aggregate.
     */
    where?: BarberShopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShopServices to fetch.
     */
    orderBy?: BarberShopServiceOrderByWithRelationInput | BarberShopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarberShopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarberShopServices
    **/
    _count?: true | BarberShopServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarberShopServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarberShopServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarberShopServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarberShopServiceMaxAggregateInputType
  }

  export type GetBarberShopServiceAggregateType<T extends BarberShopServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBarberShopService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarberShopService[P]>
      : GetScalarType<T[P], AggregateBarberShopService[P]>
  }




  export type BarberShopServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberShopServiceWhereInput
    orderBy?: BarberShopServiceOrderByWithAggregationInput | BarberShopServiceOrderByWithAggregationInput[]
    by: BarberShopServiceScalarFieldEnum[] | BarberShopServiceScalarFieldEnum
    having?: BarberShopServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarberShopServiceCountAggregateInputType | true
    _avg?: BarberShopServiceAvgAggregateInputType
    _sum?: BarberShopServiceSumAggregateInputType
    _min?: BarberShopServiceMinAggregateInputType
    _max?: BarberShopServiceMaxAggregateInputType
  }

  export type BarberShopServiceGroupByOutputType = {
    id: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    barberShopId: string
    _count: BarberShopServiceCountAggregateOutputType | null
    _avg: BarberShopServiceAvgAggregateOutputType | null
    _sum: BarberShopServiceSumAggregateOutputType | null
    _min: BarberShopServiceMinAggregateOutputType | null
    _max: BarberShopServiceMaxAggregateOutputType | null
  }

  type GetBarberShopServiceGroupByPayload<T extends BarberShopServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarberShopServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarberShopServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarberShopServiceGroupByOutputType[P]>
            : GetScalarType<T[P], BarberShopServiceGroupByOutputType[P]>
        }
      >
    >


  export type BarberShopServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceInCents?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barberShopId?: boolean
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    bookings?: boolean | BarberShopService$bookingsArgs<ExtArgs>
    _count?: boolean | BarberShopServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barberShopService"]>

  export type BarberShopServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceInCents?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barberShopId?: boolean
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barberShopService"]>

  export type BarberShopServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceInCents?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barberShopId?: boolean
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barberShopService"]>

  export type BarberShopServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    priceInCents?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barberShopId?: boolean
  }

  export type BarberShopServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "priceInCents" | "imageUrl" | "createdAt" | "updatedAt" | "barberShopId", ExtArgs["result"]["barberShopService"]>
  export type BarberShopServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    bookings?: boolean | BarberShopService$bookingsArgs<ExtArgs>
    _count?: boolean | BarberShopServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarberShopServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
  }
  export type BarberShopServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
  }

  export type $BarberShopServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarberShopService"
    objects: {
      barberShop: Prisma.$BarberShopPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      priceInCents: number
      imageUrl: string
      createdAt: Date
      updatedAt: Date
      barberShopId: string
    }, ExtArgs["result"]["barberShopService"]>
    composites: {}
  }

  type BarberShopServiceGetPayload<S extends boolean | null | undefined | BarberShopServiceDefaultArgs> = $Result.GetResult<Prisma.$BarberShopServicePayload, S>

  type BarberShopServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarberShopServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarberShopServiceCountAggregateInputType | true
    }

  export interface BarberShopServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarberShopService'], meta: { name: 'BarberShopService' } }
    /**
     * Find zero or one BarberShopService that matches the filter.
     * @param {BarberShopServiceFindUniqueArgs} args - Arguments to find a BarberShopService
     * @example
     * // Get one BarberShopService
     * const barberShopService = await prisma.barberShopService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarberShopServiceFindUniqueArgs>(args: SelectSubset<T, BarberShopServiceFindUniqueArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarberShopService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarberShopServiceFindUniqueOrThrowArgs} args - Arguments to find a BarberShopService
     * @example
     * // Get one BarberShopService
     * const barberShopService = await prisma.barberShopService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarberShopServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, BarberShopServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarberShopService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopServiceFindFirstArgs} args - Arguments to find a BarberShopService
     * @example
     * // Get one BarberShopService
     * const barberShopService = await prisma.barberShopService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarberShopServiceFindFirstArgs>(args?: SelectSubset<T, BarberShopServiceFindFirstArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarberShopService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopServiceFindFirstOrThrowArgs} args - Arguments to find a BarberShopService
     * @example
     * // Get one BarberShopService
     * const barberShopService = await prisma.barberShopService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarberShopServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, BarberShopServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarberShopServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarberShopServices
     * const barberShopServices = await prisma.barberShopService.findMany()
     * 
     * // Get first 10 BarberShopServices
     * const barberShopServices = await prisma.barberShopService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barberShopServiceWithIdOnly = await prisma.barberShopService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarberShopServiceFindManyArgs>(args?: SelectSubset<T, BarberShopServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarberShopService.
     * @param {BarberShopServiceCreateArgs} args - Arguments to create a BarberShopService.
     * @example
     * // Create one BarberShopService
     * const BarberShopService = await prisma.barberShopService.create({
     *   data: {
     *     // ... data to create a BarberShopService
     *   }
     * })
     * 
     */
    create<T extends BarberShopServiceCreateArgs>(args: SelectSubset<T, BarberShopServiceCreateArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarberShopServices.
     * @param {BarberShopServiceCreateManyArgs} args - Arguments to create many BarberShopServices.
     * @example
     * // Create many BarberShopServices
     * const barberShopService = await prisma.barberShopService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarberShopServiceCreateManyArgs>(args?: SelectSubset<T, BarberShopServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarberShopServices and returns the data saved in the database.
     * @param {BarberShopServiceCreateManyAndReturnArgs} args - Arguments to create many BarberShopServices.
     * @example
     * // Create many BarberShopServices
     * const barberShopService = await prisma.barberShopService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarberShopServices and only return the `id`
     * const barberShopServiceWithIdOnly = await prisma.barberShopService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarberShopServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, BarberShopServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarberShopService.
     * @param {BarberShopServiceDeleteArgs} args - Arguments to delete one BarberShopService.
     * @example
     * // Delete one BarberShopService
     * const BarberShopService = await prisma.barberShopService.delete({
     *   where: {
     *     // ... filter to delete one BarberShopService
     *   }
     * })
     * 
     */
    delete<T extends BarberShopServiceDeleteArgs>(args: SelectSubset<T, BarberShopServiceDeleteArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarberShopService.
     * @param {BarberShopServiceUpdateArgs} args - Arguments to update one BarberShopService.
     * @example
     * // Update one BarberShopService
     * const barberShopService = await prisma.barberShopService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarberShopServiceUpdateArgs>(args: SelectSubset<T, BarberShopServiceUpdateArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarberShopServices.
     * @param {BarberShopServiceDeleteManyArgs} args - Arguments to filter BarberShopServices to delete.
     * @example
     * // Delete a few BarberShopServices
     * const { count } = await prisma.barberShopService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarberShopServiceDeleteManyArgs>(args?: SelectSubset<T, BarberShopServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarberShopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarberShopServices
     * const barberShopService = await prisma.barberShopService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarberShopServiceUpdateManyArgs>(args: SelectSubset<T, BarberShopServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarberShopServices and returns the data updated in the database.
     * @param {BarberShopServiceUpdateManyAndReturnArgs} args - Arguments to update many BarberShopServices.
     * @example
     * // Update many BarberShopServices
     * const barberShopService = await prisma.barberShopService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarberShopServices and only return the `id`
     * const barberShopServiceWithIdOnly = await prisma.barberShopService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarberShopServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, BarberShopServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarberShopService.
     * @param {BarberShopServiceUpsertArgs} args - Arguments to update or create a BarberShopService.
     * @example
     * // Update or create a BarberShopService
     * const barberShopService = await prisma.barberShopService.upsert({
     *   create: {
     *     // ... data to create a BarberShopService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarberShopService we want to update
     *   }
     * })
     */
    upsert<T extends BarberShopServiceUpsertArgs>(args: SelectSubset<T, BarberShopServiceUpsertArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarberShopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopServiceCountArgs} args - Arguments to filter BarberShopServices to count.
     * @example
     * // Count the number of BarberShopServices
     * const count = await prisma.barberShopService.count({
     *   where: {
     *     // ... the filter for the BarberShopServices we want to count
     *   }
     * })
    **/
    count<T extends BarberShopServiceCountArgs>(
      args?: Subset<T, BarberShopServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarberShopServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarberShopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarberShopServiceAggregateArgs>(args: Subset<T, BarberShopServiceAggregateArgs>): Prisma.PrismaPromise<GetBarberShopServiceAggregateType<T>>

    /**
     * Group by BarberShopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberShopServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarberShopServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarberShopServiceGroupByArgs['orderBy'] }
        : { orderBy?: BarberShopServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarberShopServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberShopServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarberShopService model
   */
  readonly fields: BarberShopServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarberShopService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarberShopServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barberShop<T extends BarberShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarberShopDefaultArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends BarberShopService$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, BarberShopService$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BarberShopService model
   */
  interface BarberShopServiceFieldRefs {
    readonly id: FieldRef<"BarberShopService", 'String'>
    readonly name: FieldRef<"BarberShopService", 'String'>
    readonly description: FieldRef<"BarberShopService", 'String'>
    readonly priceInCents: FieldRef<"BarberShopService", 'Int'>
    readonly imageUrl: FieldRef<"BarberShopService", 'String'>
    readonly createdAt: FieldRef<"BarberShopService", 'DateTime'>
    readonly updatedAt: FieldRef<"BarberShopService", 'DateTime'>
    readonly barberShopId: FieldRef<"BarberShopService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BarberShopService findUnique
   */
  export type BarberShopServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberShopService to fetch.
     */
    where: BarberShopServiceWhereUniqueInput
  }

  /**
   * BarberShopService findUniqueOrThrow
   */
  export type BarberShopServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberShopService to fetch.
     */
    where: BarberShopServiceWhereUniqueInput
  }

  /**
   * BarberShopService findFirst
   */
  export type BarberShopServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberShopService to fetch.
     */
    where?: BarberShopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShopServices to fetch.
     */
    orderBy?: BarberShopServiceOrderByWithRelationInput | BarberShopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarberShopServices.
     */
    cursor?: BarberShopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarberShopServices.
     */
    distinct?: BarberShopServiceScalarFieldEnum | BarberShopServiceScalarFieldEnum[]
  }

  /**
   * BarberShopService findFirstOrThrow
   */
  export type BarberShopServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberShopService to fetch.
     */
    where?: BarberShopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShopServices to fetch.
     */
    orderBy?: BarberShopServiceOrderByWithRelationInput | BarberShopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarberShopServices.
     */
    cursor?: BarberShopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarberShopServices.
     */
    distinct?: BarberShopServiceScalarFieldEnum | BarberShopServiceScalarFieldEnum[]
  }

  /**
   * BarberShopService findMany
   */
  export type BarberShopServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberShopServices to fetch.
     */
    where?: BarberShopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberShopServices to fetch.
     */
    orderBy?: BarberShopServiceOrderByWithRelationInput | BarberShopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarberShopServices.
     */
    cursor?: BarberShopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberShopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberShopServices.
     */
    skip?: number
    distinct?: BarberShopServiceScalarFieldEnum | BarberShopServiceScalarFieldEnum[]
  }

  /**
   * BarberShopService create
   */
  export type BarberShopServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BarberShopService.
     */
    data: XOR<BarberShopServiceCreateInput, BarberShopServiceUncheckedCreateInput>
  }

  /**
   * BarberShopService createMany
   */
  export type BarberShopServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarberShopServices.
     */
    data: BarberShopServiceCreateManyInput | BarberShopServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarberShopService createManyAndReturn
   */
  export type BarberShopServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * The data used to create many BarberShopServices.
     */
    data: BarberShopServiceCreateManyInput | BarberShopServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarberShopService update
   */
  export type BarberShopServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BarberShopService.
     */
    data: XOR<BarberShopServiceUpdateInput, BarberShopServiceUncheckedUpdateInput>
    /**
     * Choose, which BarberShopService to update.
     */
    where: BarberShopServiceWhereUniqueInput
  }

  /**
   * BarberShopService updateMany
   */
  export type BarberShopServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarberShopServices.
     */
    data: XOR<BarberShopServiceUpdateManyMutationInput, BarberShopServiceUncheckedUpdateManyInput>
    /**
     * Filter which BarberShopServices to update
     */
    where?: BarberShopServiceWhereInput
    /**
     * Limit how many BarberShopServices to update.
     */
    limit?: number
  }

  /**
   * BarberShopService updateManyAndReturn
   */
  export type BarberShopServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * The data used to update BarberShopServices.
     */
    data: XOR<BarberShopServiceUpdateManyMutationInput, BarberShopServiceUncheckedUpdateManyInput>
    /**
     * Filter which BarberShopServices to update
     */
    where?: BarberShopServiceWhereInput
    /**
     * Limit how many BarberShopServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarberShopService upsert
   */
  export type BarberShopServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BarberShopService to update in case it exists.
     */
    where: BarberShopServiceWhereUniqueInput
    /**
     * In case the BarberShopService found by the `where` argument doesn't exist, create a new BarberShopService with this data.
     */
    create: XOR<BarberShopServiceCreateInput, BarberShopServiceUncheckedCreateInput>
    /**
     * In case the BarberShopService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarberShopServiceUpdateInput, BarberShopServiceUncheckedUpdateInput>
  }

  /**
   * BarberShopService delete
   */
  export type BarberShopServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
    /**
     * Filter which BarberShopService to delete.
     */
    where: BarberShopServiceWhereUniqueInput
  }

  /**
   * BarberShopService deleteMany
   */
  export type BarberShopServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarberShopServices to delete
     */
    where?: BarberShopServiceWhereInput
    /**
     * Limit how many BarberShopServices to delete.
     */
    limit?: number
  }

  /**
   * BarberShopService.bookings
   */
  export type BarberShopService$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * BarberShopService without action
   */
  export type BarberShopServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberShopService
     */
    select?: BarberShopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarberShopService
     */
    omit?: BarberShopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberShopServiceInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    date: Date | null
    canceled: boolean | null
    canceledAt: Date | null
    barberShopId: string | null
    serviceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    canceled: boolean | null
    canceledAt: Date | null
    barberShopId: string | null
    serviceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    date: number
    canceled: number
    canceledAt: number
    barberShopId: number
    serviceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    date?: true
    canceled?: true
    canceledAt?: true
    barberShopId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    date?: true
    canceled?: true
    canceledAt?: true
    barberShopId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    date?: true
    canceled?: true
    canceledAt?: true
    barberShopId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    date: Date
    canceled: boolean | null
    canceledAt: Date | null
    barberShopId: string
    serviceId: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    canceled?: boolean
    canceledAt?: boolean
    barberShopId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    service?: boolean | BarberShopServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    canceled?: boolean
    canceledAt?: boolean
    barberShopId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    service?: boolean | BarberShopServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    canceled?: boolean
    canceledAt?: boolean
    barberShopId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    service?: boolean | BarberShopServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    date?: boolean
    canceled?: boolean
    canceledAt?: boolean
    barberShopId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "canceled" | "canceledAt" | "barberShopId" | "serviceId" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    service?: boolean | BarberShopServiceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    service?: boolean | BarberShopServiceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberShop?: boolean | BarberShopDefaultArgs<ExtArgs>
    service?: boolean | BarberShopServiceDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      barberShop: Prisma.$BarberShopPayload<ExtArgs>
      service: Prisma.$BarberShopServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      canceled: boolean | null
      canceledAt: Date | null
      barberShopId: string
      serviceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barberShop<T extends BarberShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarberShopDefaultArgs<ExtArgs>>): Prisma__BarberShopClient<$Result.GetResult<Prisma.$BarberShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends BarberShopServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarberShopServiceDefaultArgs<ExtArgs>>): Prisma__BarberShopServiceClient<$Result.GetResult<Prisma.$BarberShopServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly date: FieldRef<"Booking", 'DateTime'>
    readonly canceled: FieldRef<"Booking", 'Boolean'>
    readonly canceledAt: FieldRef<"Booking", 'DateTime'>
    readonly barberShopId: FieldRef<"Booking", 'String'>
    readonly serviceId: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BarberShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    description: 'description',
    imageUrl: 'imageUrl',
    phones: 'phones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BarberShopScalarFieldEnum = (typeof BarberShopScalarFieldEnum)[keyof typeof BarberShopScalarFieldEnum]


  export const BarberShopServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    priceInCents: 'priceInCents',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    barberShopId: 'barberShopId'
  };

  export type BarberShopServiceScalarFieldEnum = (typeof BarberShopServiceScalarFieldEnum)[keyof typeof BarberShopServiceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    date: 'date',
    canceled: 'canceled',
    canceledAt: 'canceledAt',
    barberShopId: 'barberShopId',
    serviceId: 'serviceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BarberShopWhereInput = {
    AND?: BarberShopWhereInput | BarberShopWhereInput[]
    OR?: BarberShopWhereInput[]
    NOT?: BarberShopWhereInput | BarberShopWhereInput[]
    id?: StringFilter<"BarberShop"> | string
    name?: StringFilter<"BarberShop"> | string
    address?: StringFilter<"BarberShop"> | string
    description?: StringFilter<"BarberShop"> | string
    imageUrl?: StringFilter<"BarberShop"> | string
    phones?: StringNullableListFilter<"BarberShop">
    createdAt?: DateTimeFilter<"BarberShop"> | Date | string
    updatedAt?: DateTimeFilter<"BarberShop"> | Date | string
    services?: BarberShopServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type BarberShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    phones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: BarberShopServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type BarberShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarberShopWhereInput | BarberShopWhereInput[]
    OR?: BarberShopWhereInput[]
    NOT?: BarberShopWhereInput | BarberShopWhereInput[]
    name?: StringFilter<"BarberShop"> | string
    address?: StringFilter<"BarberShop"> | string
    description?: StringFilter<"BarberShop"> | string
    imageUrl?: StringFilter<"BarberShop"> | string
    phones?: StringNullableListFilter<"BarberShop">
    createdAt?: DateTimeFilter<"BarberShop"> | Date | string
    updatedAt?: DateTimeFilter<"BarberShop"> | Date | string
    services?: BarberShopServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type BarberShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    phones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarberShopCountOrderByAggregateInput
    _max?: BarberShopMaxOrderByAggregateInput
    _min?: BarberShopMinOrderByAggregateInput
  }

  export type BarberShopScalarWhereWithAggregatesInput = {
    AND?: BarberShopScalarWhereWithAggregatesInput | BarberShopScalarWhereWithAggregatesInput[]
    OR?: BarberShopScalarWhereWithAggregatesInput[]
    NOT?: BarberShopScalarWhereWithAggregatesInput | BarberShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BarberShop"> | string
    name?: StringWithAggregatesFilter<"BarberShop"> | string
    address?: StringWithAggregatesFilter<"BarberShop"> | string
    description?: StringWithAggregatesFilter<"BarberShop"> | string
    imageUrl?: StringWithAggregatesFilter<"BarberShop"> | string
    phones?: StringNullableListFilter<"BarberShop">
    createdAt?: DateTimeWithAggregatesFilter<"BarberShop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BarberShop"> | Date | string
  }

  export type BarberShopServiceWhereInput = {
    AND?: BarberShopServiceWhereInput | BarberShopServiceWhereInput[]
    OR?: BarberShopServiceWhereInput[]
    NOT?: BarberShopServiceWhereInput | BarberShopServiceWhereInput[]
    id?: StringFilter<"BarberShopService"> | string
    name?: StringFilter<"BarberShopService"> | string
    description?: StringFilter<"BarberShopService"> | string
    priceInCents?: IntFilter<"BarberShopService"> | number
    imageUrl?: StringFilter<"BarberShopService"> | string
    createdAt?: DateTimeFilter<"BarberShopService"> | Date | string
    updatedAt?: DateTimeFilter<"BarberShopService"> | Date | string
    barberShopId?: StringFilter<"BarberShopService"> | string
    barberShop?: XOR<BarberShopScalarRelationFilter, BarberShopWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type BarberShopServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceInCents?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barberShopId?: SortOrder
    barberShop?: BarberShopOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type BarberShopServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarberShopServiceWhereInput | BarberShopServiceWhereInput[]
    OR?: BarberShopServiceWhereInput[]
    NOT?: BarberShopServiceWhereInput | BarberShopServiceWhereInput[]
    name?: StringFilter<"BarberShopService"> | string
    description?: StringFilter<"BarberShopService"> | string
    priceInCents?: IntFilter<"BarberShopService"> | number
    imageUrl?: StringFilter<"BarberShopService"> | string
    createdAt?: DateTimeFilter<"BarberShopService"> | Date | string
    updatedAt?: DateTimeFilter<"BarberShopService"> | Date | string
    barberShopId?: StringFilter<"BarberShopService"> | string
    barberShop?: XOR<BarberShopScalarRelationFilter, BarberShopWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type BarberShopServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceInCents?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barberShopId?: SortOrder
    _count?: BarberShopServiceCountOrderByAggregateInput
    _avg?: BarberShopServiceAvgOrderByAggregateInput
    _max?: BarberShopServiceMaxOrderByAggregateInput
    _min?: BarberShopServiceMinOrderByAggregateInput
    _sum?: BarberShopServiceSumOrderByAggregateInput
  }

  export type BarberShopServiceScalarWhereWithAggregatesInput = {
    AND?: BarberShopServiceScalarWhereWithAggregatesInput | BarberShopServiceScalarWhereWithAggregatesInput[]
    OR?: BarberShopServiceScalarWhereWithAggregatesInput[]
    NOT?: BarberShopServiceScalarWhereWithAggregatesInput | BarberShopServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BarberShopService"> | string
    name?: StringWithAggregatesFilter<"BarberShopService"> | string
    description?: StringWithAggregatesFilter<"BarberShopService"> | string
    priceInCents?: IntWithAggregatesFilter<"BarberShopService"> | number
    imageUrl?: StringWithAggregatesFilter<"BarberShopService"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BarberShopService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BarberShopService"> | Date | string
    barberShopId?: StringWithAggregatesFilter<"BarberShopService"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    canceled?: BoolNullableFilter<"Booking"> | boolean | null
    canceledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    barberShopId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    barberShop?: XOR<BarberShopScalarRelationFilter, BarberShopWhereInput>
    service?: XOR<BarberShopServiceScalarRelationFilter, BarberShopServiceWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    canceled?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    barberShopId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barberShop?: BarberShopOrderByWithRelationInput
    service?: BarberShopServiceOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    date?: DateTimeFilter<"Booking"> | Date | string
    canceled?: BoolNullableFilter<"Booking"> | boolean | null
    canceledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    barberShopId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    barberShop?: XOR<BarberShopScalarRelationFilter, BarberShopWhereInput>
    service?: XOR<BarberShopServiceScalarRelationFilter, BarberShopServiceWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    canceled?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    barberShopId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    canceled?: BoolNullableWithAggregatesFilter<"Booking"> | boolean | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    barberShopId?: StringWithAggregatesFilter<"Booking"> | string
    serviceId?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type BarberShopCreateInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarberShopCreatephonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: BarberShopServiceCreateNestedManyWithoutBarberShopInput
    bookings?: BookingCreateNestedManyWithoutBarberShopInput
  }

  export type BarberShopUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarberShopCreatephonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: BarberShopServiceUncheckedCreateNestedManyWithoutBarberShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBarberShopInput
  }

  export type BarberShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: BarberShopServiceUpdateManyWithoutBarberShopNestedInput
    bookings?: BookingUpdateManyWithoutBarberShopNestedInput
  }

  export type BarberShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: BarberShopServiceUncheckedUpdateManyWithoutBarberShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBarberShopNestedInput
  }

  export type BarberShopCreateManyInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarberShopCreatephonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarberShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberShopServiceCreateInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barberShop: BarberShopCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type BarberShopServiceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barberShopId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type BarberShopServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberShop?: BarberShopUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type BarberShopServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberShopId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type BarberShopServiceCreateManyInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barberShopId: string
  }

  export type BarberShopServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberShopServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberShopId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barberShop: BarberShopCreateNestedOneWithoutBookingsInput
    service: BarberShopServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    barberShopId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberShop?: BarberShopUpdateOneRequiredWithoutBookingsNestedInput
    service?: BarberShopServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barberShopId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    barberShopId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barberShopId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BarberShopServiceListRelationFilter = {
    every?: BarberShopServiceWhereInput
    some?: BarberShopServiceWhereInput
    none?: BarberShopServiceWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BarberShopServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarberShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    phones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarberShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarberShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BarberShopScalarRelationFilter = {
    is?: BarberShopWhereInput
    isNot?: BarberShopWhereInput
  }

  export type BarberShopServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceInCents?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barberShopId?: SortOrder
  }

  export type BarberShopServiceAvgOrderByAggregateInput = {
    priceInCents?: SortOrder
  }

  export type BarberShopServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceInCents?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barberShopId?: SortOrder
  }

  export type BarberShopServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceInCents?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barberShopId?: SortOrder
  }

  export type BarberShopServiceSumOrderByAggregateInput = {
    priceInCents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BarberShopServiceScalarRelationFilter = {
    is?: BarberShopServiceWhereInput
    isNot?: BarberShopServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    canceled?: SortOrder
    canceledAt?: SortOrder
    barberShopId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    canceled?: SortOrder
    canceledAt?: SortOrder
    barberShopId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    canceled?: SortOrder
    canceledAt?: SortOrder
    barberShopId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BarberShopCreatephonesInput = {
    set: string[]
  }

  export type BarberShopServiceCreateNestedManyWithoutBarberShopInput = {
    create?: XOR<BarberShopServiceCreateWithoutBarberShopInput, BarberShopServiceUncheckedCreateWithoutBarberShopInput> | BarberShopServiceCreateWithoutBarberShopInput[] | BarberShopServiceUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BarberShopServiceCreateOrConnectWithoutBarberShopInput | BarberShopServiceCreateOrConnectWithoutBarberShopInput[]
    createMany?: BarberShopServiceCreateManyBarberShopInputEnvelope
    connect?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutBarberShopInput = {
    create?: XOR<BookingCreateWithoutBarberShopInput, BookingUncheckedCreateWithoutBarberShopInput> | BookingCreateWithoutBarberShopInput[] | BookingUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberShopInput | BookingCreateOrConnectWithoutBarberShopInput[]
    createMany?: BookingCreateManyBarberShopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BarberShopServiceUncheckedCreateNestedManyWithoutBarberShopInput = {
    create?: XOR<BarberShopServiceCreateWithoutBarberShopInput, BarberShopServiceUncheckedCreateWithoutBarberShopInput> | BarberShopServiceCreateWithoutBarberShopInput[] | BarberShopServiceUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BarberShopServiceCreateOrConnectWithoutBarberShopInput | BarberShopServiceCreateOrConnectWithoutBarberShopInput[]
    createMany?: BarberShopServiceCreateManyBarberShopInputEnvelope
    connect?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutBarberShopInput = {
    create?: XOR<BookingCreateWithoutBarberShopInput, BookingUncheckedCreateWithoutBarberShopInput> | BookingCreateWithoutBarberShopInput[] | BookingUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberShopInput | BookingCreateOrConnectWithoutBarberShopInput[]
    createMany?: BookingCreateManyBarberShopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BarberShopUpdatephonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BarberShopServiceUpdateManyWithoutBarberShopNestedInput = {
    create?: XOR<BarberShopServiceCreateWithoutBarberShopInput, BarberShopServiceUncheckedCreateWithoutBarberShopInput> | BarberShopServiceCreateWithoutBarberShopInput[] | BarberShopServiceUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BarberShopServiceCreateOrConnectWithoutBarberShopInput | BarberShopServiceCreateOrConnectWithoutBarberShopInput[]
    upsert?: BarberShopServiceUpsertWithWhereUniqueWithoutBarberShopInput | BarberShopServiceUpsertWithWhereUniqueWithoutBarberShopInput[]
    createMany?: BarberShopServiceCreateManyBarberShopInputEnvelope
    set?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    disconnect?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    delete?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    connect?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    update?: BarberShopServiceUpdateWithWhereUniqueWithoutBarberShopInput | BarberShopServiceUpdateWithWhereUniqueWithoutBarberShopInput[]
    updateMany?: BarberShopServiceUpdateManyWithWhereWithoutBarberShopInput | BarberShopServiceUpdateManyWithWhereWithoutBarberShopInput[]
    deleteMany?: BarberShopServiceScalarWhereInput | BarberShopServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutBarberShopNestedInput = {
    create?: XOR<BookingCreateWithoutBarberShopInput, BookingUncheckedCreateWithoutBarberShopInput> | BookingCreateWithoutBarberShopInput[] | BookingUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberShopInput | BookingCreateOrConnectWithoutBarberShopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarberShopInput | BookingUpsertWithWhereUniqueWithoutBarberShopInput[]
    createMany?: BookingCreateManyBarberShopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarberShopInput | BookingUpdateWithWhereUniqueWithoutBarberShopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarberShopInput | BookingUpdateManyWithWhereWithoutBarberShopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarberShopServiceUncheckedUpdateManyWithoutBarberShopNestedInput = {
    create?: XOR<BarberShopServiceCreateWithoutBarberShopInput, BarberShopServiceUncheckedCreateWithoutBarberShopInput> | BarberShopServiceCreateWithoutBarberShopInput[] | BarberShopServiceUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BarberShopServiceCreateOrConnectWithoutBarberShopInput | BarberShopServiceCreateOrConnectWithoutBarberShopInput[]
    upsert?: BarberShopServiceUpsertWithWhereUniqueWithoutBarberShopInput | BarberShopServiceUpsertWithWhereUniqueWithoutBarberShopInput[]
    createMany?: BarberShopServiceCreateManyBarberShopInputEnvelope
    set?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    disconnect?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    delete?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    connect?: BarberShopServiceWhereUniqueInput | BarberShopServiceWhereUniqueInput[]
    update?: BarberShopServiceUpdateWithWhereUniqueWithoutBarberShopInput | BarberShopServiceUpdateWithWhereUniqueWithoutBarberShopInput[]
    updateMany?: BarberShopServiceUpdateManyWithWhereWithoutBarberShopInput | BarberShopServiceUpdateManyWithWhereWithoutBarberShopInput[]
    deleteMany?: BarberShopServiceScalarWhereInput | BarberShopServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutBarberShopNestedInput = {
    create?: XOR<BookingCreateWithoutBarberShopInput, BookingUncheckedCreateWithoutBarberShopInput> | BookingCreateWithoutBarberShopInput[] | BookingUncheckedCreateWithoutBarberShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberShopInput | BookingCreateOrConnectWithoutBarberShopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarberShopInput | BookingUpsertWithWhereUniqueWithoutBarberShopInput[]
    createMany?: BookingCreateManyBarberShopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarberShopInput | BookingUpdateWithWhereUniqueWithoutBarberShopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarberShopInput | BookingUpdateManyWithWhereWithoutBarberShopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarberShopCreateNestedOneWithoutServicesInput = {
    create?: XOR<BarberShopCreateWithoutServicesInput, BarberShopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BarberShopCreateOrConnectWithoutServicesInput
    connect?: BarberShopWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarberShopUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<BarberShopCreateWithoutServicesInput, BarberShopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BarberShopCreateOrConnectWithoutServicesInput
    upsert?: BarberShopUpsertWithoutServicesInput
    connect?: BarberShopWhereUniqueInput
    update?: XOR<XOR<BarberShopUpdateToOneWithWhereWithoutServicesInput, BarberShopUpdateWithoutServicesInput>, BarberShopUncheckedUpdateWithoutServicesInput>
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarberShopCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BarberShopCreateWithoutBookingsInput, BarberShopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarberShopCreateOrConnectWithoutBookingsInput
    connect?: BarberShopWhereUniqueInput
  }

  export type BarberShopServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BarberShopServiceCreateWithoutBookingsInput, BarberShopServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarberShopServiceCreateOrConnectWithoutBookingsInput
    connect?: BarberShopServiceWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BarberShopUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<BarberShopCreateWithoutBookingsInput, BarberShopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarberShopCreateOrConnectWithoutBookingsInput
    upsert?: BarberShopUpsertWithoutBookingsInput
    connect?: BarberShopWhereUniqueInput
    update?: XOR<XOR<BarberShopUpdateToOneWithWhereWithoutBookingsInput, BarberShopUpdateWithoutBookingsInput>, BarberShopUncheckedUpdateWithoutBookingsInput>
  }

  export type BarberShopServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<BarberShopServiceCreateWithoutBookingsInput, BarberShopServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarberShopServiceCreateOrConnectWithoutBookingsInput
    upsert?: BarberShopServiceUpsertWithoutBookingsInput
    connect?: BarberShopServiceWhereUniqueInput
    update?: XOR<XOR<BarberShopServiceUpdateToOneWithWhereWithoutBookingsInput, BarberShopServiceUpdateWithoutBookingsInput>, BarberShopServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BarberShopServiceCreateWithoutBarberShopInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type BarberShopServiceUncheckedCreateWithoutBarberShopInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type BarberShopServiceCreateOrConnectWithoutBarberShopInput = {
    where: BarberShopServiceWhereUniqueInput
    create: XOR<BarberShopServiceCreateWithoutBarberShopInput, BarberShopServiceUncheckedCreateWithoutBarberShopInput>
  }

  export type BarberShopServiceCreateManyBarberShopInputEnvelope = {
    data: BarberShopServiceCreateManyBarberShopInput | BarberShopServiceCreateManyBarberShopInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutBarberShopInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: BarberShopServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutBarberShopInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutBarberShopInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBarberShopInput, BookingUncheckedCreateWithoutBarberShopInput>
  }

  export type BookingCreateManyBarberShopInputEnvelope = {
    data: BookingCreateManyBarberShopInput | BookingCreateManyBarberShopInput[]
    skipDuplicates?: boolean
  }

  export type BarberShopServiceUpsertWithWhereUniqueWithoutBarberShopInput = {
    where: BarberShopServiceWhereUniqueInput
    update: XOR<BarberShopServiceUpdateWithoutBarberShopInput, BarberShopServiceUncheckedUpdateWithoutBarberShopInput>
    create: XOR<BarberShopServiceCreateWithoutBarberShopInput, BarberShopServiceUncheckedCreateWithoutBarberShopInput>
  }

  export type BarberShopServiceUpdateWithWhereUniqueWithoutBarberShopInput = {
    where: BarberShopServiceWhereUniqueInput
    data: XOR<BarberShopServiceUpdateWithoutBarberShopInput, BarberShopServiceUncheckedUpdateWithoutBarberShopInput>
  }

  export type BarberShopServiceUpdateManyWithWhereWithoutBarberShopInput = {
    where: BarberShopServiceScalarWhereInput
    data: XOR<BarberShopServiceUpdateManyMutationInput, BarberShopServiceUncheckedUpdateManyWithoutBarberShopInput>
  }

  export type BarberShopServiceScalarWhereInput = {
    AND?: BarberShopServiceScalarWhereInput | BarberShopServiceScalarWhereInput[]
    OR?: BarberShopServiceScalarWhereInput[]
    NOT?: BarberShopServiceScalarWhereInput | BarberShopServiceScalarWhereInput[]
    id?: StringFilter<"BarberShopService"> | string
    name?: StringFilter<"BarberShopService"> | string
    description?: StringFilter<"BarberShopService"> | string
    priceInCents?: IntFilter<"BarberShopService"> | number
    imageUrl?: StringFilter<"BarberShopService"> | string
    createdAt?: DateTimeFilter<"BarberShopService"> | Date | string
    updatedAt?: DateTimeFilter<"BarberShopService"> | Date | string
    barberShopId?: StringFilter<"BarberShopService"> | string
  }

  export type BookingUpsertWithWhereUniqueWithoutBarberShopInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutBarberShopInput, BookingUncheckedUpdateWithoutBarberShopInput>
    create: XOR<BookingCreateWithoutBarberShopInput, BookingUncheckedCreateWithoutBarberShopInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutBarberShopInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutBarberShopInput, BookingUncheckedUpdateWithoutBarberShopInput>
  }

  export type BookingUpdateManyWithWhereWithoutBarberShopInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBarberShopInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    canceled?: BoolNullableFilter<"Booking"> | boolean | null
    canceledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    barberShopId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BarberShopCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarberShopCreatephonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutBarberShopInput
  }

  export type BarberShopUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarberShopCreatephonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutBarberShopInput
  }

  export type BarberShopCreateOrConnectWithoutServicesInput = {
    where: BarberShopWhereUniqueInput
    create: XOR<BarberShopCreateWithoutServicesInput, BarberShopUncheckedCreateWithoutServicesInput>
  }

  export type BookingCreateWithoutServiceInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    barberShop: BarberShopCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    barberShopId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BarberShopUpsertWithoutServicesInput = {
    update: XOR<BarberShopUpdateWithoutServicesInput, BarberShopUncheckedUpdateWithoutServicesInput>
    create: XOR<BarberShopCreateWithoutServicesInput, BarberShopUncheckedCreateWithoutServicesInput>
    where?: BarberShopWhereInput
  }

  export type BarberShopUpdateToOneWithWhereWithoutServicesInput = {
    where?: BarberShopWhereInput
    data: XOR<BarberShopUpdateWithoutServicesInput, BarberShopUncheckedUpdateWithoutServicesInput>
  }

  export type BarberShopUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutBarberShopNestedInput
  }

  export type BarberShopUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutBarberShopNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type BarberShopCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarberShopCreatephonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: BarberShopServiceCreateNestedManyWithoutBarberShopInput
  }

  export type BarberShopUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarberShopCreatephonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: BarberShopServiceUncheckedCreateNestedManyWithoutBarberShopInput
  }

  export type BarberShopCreateOrConnectWithoutBookingsInput = {
    where: BarberShopWhereUniqueInput
    create: XOR<BarberShopCreateWithoutBookingsInput, BarberShopUncheckedCreateWithoutBookingsInput>
  }

  export type BarberShopServiceCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barberShop: BarberShopCreateNestedOneWithoutServicesInput
  }

  export type BarberShopServiceUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barberShopId: string
  }

  export type BarberShopServiceCreateOrConnectWithoutBookingsInput = {
    where: BarberShopServiceWhereUniqueInput
    create: XOR<BarberShopServiceCreateWithoutBookingsInput, BarberShopServiceUncheckedCreateWithoutBookingsInput>
  }

  export type BarberShopUpsertWithoutBookingsInput = {
    update: XOR<BarberShopUpdateWithoutBookingsInput, BarberShopUncheckedUpdateWithoutBookingsInput>
    create: XOR<BarberShopCreateWithoutBookingsInput, BarberShopUncheckedCreateWithoutBookingsInput>
    where?: BarberShopWhereInput
  }

  export type BarberShopUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BarberShopWhereInput
    data: XOR<BarberShopUpdateWithoutBookingsInput, BarberShopUncheckedUpdateWithoutBookingsInput>
  }

  export type BarberShopUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: BarberShopServiceUpdateManyWithoutBarberShopNestedInput
  }

  export type BarberShopUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarberShopUpdatephonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: BarberShopServiceUncheckedUpdateManyWithoutBarberShopNestedInput
  }

  export type BarberShopServiceUpsertWithoutBookingsInput = {
    update: XOR<BarberShopServiceUpdateWithoutBookingsInput, BarberShopServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<BarberShopServiceCreateWithoutBookingsInput, BarberShopServiceUncheckedCreateWithoutBookingsInput>
    where?: BarberShopServiceWhereInput
  }

  export type BarberShopServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BarberShopServiceWhereInput
    data: XOR<BarberShopServiceUpdateWithoutBookingsInput, BarberShopServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type BarberShopServiceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberShop?: BarberShopUpdateOneRequiredWithoutServicesNestedInput
  }

  export type BarberShopServiceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberShopId?: StringFieldUpdateOperationsInput | string
  }

  export type BarberShopServiceCreateManyBarberShopInput = {
    id?: string
    name: string
    description: string
    priceInCents: number
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyBarberShopInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarberShopServiceUpdateWithoutBarberShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type BarberShopServiceUncheckedUpdateWithoutBarberShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type BarberShopServiceUncheckedUpdateManyWithoutBarberShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutBarberShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: BarberShopServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutBarberShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutBarberShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyServiceInput = {
    id?: string
    date: Date | string
    canceled?: boolean | null
    canceledAt?: Date | string | null
    barberShopId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberShop?: BarberShopUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barberShopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barberShopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}