/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AttachmentResponse */
export interface AttachmentResponse {
  /**
   * Id
   * @format uuid
   */
  id: string;
  /** Name */
  name: string;
  /** Path */
  path: string;
  /** Uri */
  uri: string;
  /**
   * Createdat
   * @format date-time
   */
  createdAt: string;
}

/** AuthApiError */
export interface AuthApiError {
  code: ErrorCodes;
  /** Message */
  message: string;
  payload: AuthApiErrorPayload;
}

/** AuthApiErrorPayload */
export interface AuthApiErrorPayload {
  code: AuthErrorCodes;
}

/** AuthErrorCodes */
export type AuthErrorCodes =
  | "invalid_credentials"
  | "invalid_signature"
  | "invalid_token"
  | "expired_signature"
  | "google_auth";

/** BaseCategory */
export interface BaseCategory {
  /**
   * Name
   * @maxLength 100
   */
  name: string;
}

/** Body_authenticate_api_v1_auth_google_authentication_post */
export interface BodyAuthenticateApiV1AuthGoogleAuthenticationPost {
  /** Code */
  code: string;
}

/** Body_create_attachment_api_v1_storage_attachments_post */
export interface BodyCreateAttachmentApiV1StorageAttachmentsPost {
  /**
   * Attachment
   * @format binary
   */
  attachment: File;
}

/** Body_set_feedback_answer_api_v1_feedbacks__feedback_id__answer_post */
export interface BodySetFeedbackAnswerApiV1FeedbacksFeedbackIdAnswerPost {
  /**
   * Answer
   * @minLength 3
   * @maxLength 1000
   */
  answer: string;
}

/** Body_set_route_as_complete_api_v1_routes_complete_post */
export interface BodySetRouteAsCompleteApiV1RoutesCompletePost {
  /**
   * Route Id
   * @format uuid
   */
  route_id: string;
}

/** Body_update_refresh_token_api_v1_auth_refresh_post */
export interface BodyUpdateRefreshTokenApiV1AuthRefreshPost {
  /** Refresh Token */
  refresh_token: string;
}

/** CategoryResponse */
export interface CategoryResponse {
  /**
   * Name
   * @maxLength 100
   */
  name: string;
  /**
   * Id
   * @format uuid
   */
  id: string;
  /**
   * Createdat
   * @format date-time
   */
  createdAt: string;
}

/** CityCreate */
export interface CityCreate {
  /**
   * Name
   * @pattern ^[а-яА-Я\s\-]{1,100}$
   */
  name: string;
  /**
   * Description
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  /**
   * Imageid
   * @format uuid
   */
  imageId: string;
}

/** CityResponse */
export interface CityResponse {
  /**
   * Id
   * @format uuid
   */
  id: string;
  /** Name */
  name: string;
  /** Description */
  description: string;
  /**
   * Createdat
   * @format date-time
   */
  createdAt: string;
  image: AttachmentResponse;
  /** Routecount */
  routeCount: number;
}

/** CityUpdateRequest */
export interface CityUpdateRequest {
  /** Name */
  name?: string | null;
  /** Description */
  description?: string | null;
  /** Imageid */
  imageId?: string | null;
}

/** CountPaginationResults[CategoryResponse] */
export interface CountPaginationResultsCategoryResponse {
  /** Count */
  count: number;
  /** Items */
  items: CategoryResponse[];
}

/** CountPaginationResults[CityResponse] */
export interface CountPaginationResultsCityResponse {
  /** Count */
  count: number;
  /** Items */
  items: CityResponse[];
}

/** CountPaginationResults[EventResponse] */
export interface CountPaginationResultsEventResponse {
  /** Count */
  count: number;
  /** Items */
  items: EventResponse[];
}

/** CountPaginationResults[FeedbackResponse] */
export interface CountPaginationResultsFeedbackResponse {
  /** Count */
  count: number;
  /** Items */
  items: FeedbackResponse[];
}

/** CountPaginationResults[RouteResponse] */
export interface CountPaginationResultsRouteResponse {
  /** Count */
  count: number;
  /** Items */
  items: RouteResponse[];
}

/** CountPaginationResults[WaypointResponse] */
export interface CountPaginationResultsWaypointResponse {
  /** Count */
  count: number;
  /** Items */
  items: WaypointResponse[];
}

/** ErrorCodes */
export type ErrorCodes =
  | "api_error"
  | "not_found"
  | "auth_error"
  | "permission_error"
  | "database_error"
  | "validation_error";

/** EventCreateRequest */
export interface EventCreateRequest {
  /**
   * Date
   * @format date
   */
  date: string;
  /**
   * Name
   * @maxLength 100
   */
  name: string;
  /**
   * Description
   * @maxLength 1000
   */
  description: string;
  /** Latitude */
  latitude?: number | string | null;
  /** Longitude */
  longitude?: number | string | null;
  /** Cityid */
  cityId?: string | null;
  /**
   * Routeids
   * @default []
   */
  routeIds?: string[];
}

/** EventDateWhere */
export interface EventDateWhere {
  /** Day */
  day?: number | null;
  /** Month */
  month?: number | null;
  /** Year */
  year?: number | null;
}

/** EventListRequest */
export interface EventListRequest {
  filters?: EventWhere | null;
}

/** EventResponse */
export interface EventResponse {
  /**
   * Id
   * @format uuid
   */
  id: string;
  /**
   * Date
   * @format date
   */
  date: string;
  /** Name */
  name: string;
  /** Description */
  description: string;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  city?: CityResponse | null;
  /** Routes */
  routes?: RouteResponse[] | null;
}

/** EventUpdateRequest */
export interface EventUpdateRequest {
  /** Date */
  date?: string | null;
  /** Name */
  name?: string | null;
  /** Description */
  description?: string | null;
  /** Latitude */
  latitude?: number | string | null;
  /** Longitude */
  longitude?: number | string | null;
  /** Cityid */
  cityId?: string | null;
  /** Routeids */
  routeIds?: string[] | null;
}

/** EventWhere */
export interface EventWhere {
  date?: EventDateWhere | null;
}

/** FeedbackCreateRequest */
export interface FeedbackCreateRequest {
  /**
   * Text
   * @maxLength 5000
   */
  text: string;
  /**
   * Platformname
   * @maxLength 100
   */
  platformName: string;
  /**
   * Platformos
   * @maxLength 100
   */
  platformOs: string;
  /**
   * Appversion
   * @maxLength 100
   */
  appVersion: string;
  /** Attachmentids */
  attachmentIds: string[];
}

/** FeedbackListRequest */
export interface FeedbackListRequest {
  filters?: FeedbackWhere | null;
}

/** FeedbackResponse */
export interface FeedbackResponse {
  /**
   * Id
   * @format uuid
   */
  id: string;
  /**
   * Createdat
   * @format date-time
   */
  createdAt: string;
  status: FeedbackStatus;
  /** Text */
  text: string;
  /** Platformname */
  platformName: string;
  /** Platformos */
  platformOs: string;
  /** Appversion */
  appVersion: string;
  user: UserResponse;
  /** Attachments */
  attachments: AttachmentResponse[];
}

/** FeedbackSort */
export type FeedbackSort = "created_at";

/** FeedbackStatus */
export type FeedbackStatus = "new" | "viewed" | "processed";

/** FeedbackWhere */
export interface FeedbackWhere {
  /** Status */
  status?: FeedbackStatus[] | FeedbackStatus | null;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** RouteCreateRequest */
export interface RouteCreateRequest {
  /**
   * Name
   * @minLength 3
   * @maxLength 100
   */
  name: string;
  /**
   * Description
   * @minLength 3
   * @maxLength 1000
   */
  description: string;
  /**
   * Cityid
   * @format uuid
   */
  cityId: string;
  /**
   * Categoryid
   * @format uuid
   */
  categoryId: string;
  /**
   * Durationtime
   * @min 0
   */
  durationTime: number;
  /**
   * Durationdistance
   * @min 0
   */
  durationDistance: number;
  /**
   * Price
   * @min 0
   */
  price?: number;
  /**
   * Attachmentid
   * @format uuid
   */
  attachmentId: string;
}

/** RouteListRequest */
export interface RouteListRequest {
  /** Search */
  search?: string | null;
  filters?: RouteWhere | null;
}

/** RouteResponse */
export interface RouteResponse {
  /**
   * Id
   * @format uuid
   */
  id: string;
  /**
   * Createdat
   * @format date-time
   */
  createdAt: string;
  status: RouteStatus;
  /** Name */
  name: string;
  /**
   * Cityid
   * @format uuid
   */
  cityId: string;
  /**
   * Categoryid
   * @format uuid
   */
  categoryId: string;
  /** Description */
  description: string;
  /** Durationtime */
  durationTime: number;
  /** Durationdistance */
  durationDistance: number;
  /** Price */
  price: number | null;
  attachment: AttachmentResponse;
}

/** RouteSort */
export type RouteSort = "created_at" | "updated_at" | "name" | "city_name";

/** RouteStatus */
export type RouteStatus = "draft" | "active";

/** RouteUpdateRequest */
export interface RouteUpdateRequest {
  /** Name */
  name?: string | null;
  /** Description */
  description?: string | null;
  /** Cityid */
  cityId?: string | null;
  /** Categoryid */
  categoryId?: string | null;
  /** Durationtime */
  durationTime?: number | null;
  /** Durationdistance */
  durationDistance?: number | null;
  /** Price */
  price?: number | null;
  /** Attachmentid */
  attachmentId?: string | null;
}

/** RouteWhere */
export interface RouteWhere {
  /** Cityname */
  cityName?: string[] | string | null;
  /** Cityid */
  cityId?: string[] | string | null;
  /** Categoryid */
  categoryId?: string[] | string | null;
  /** Status */
  status?: RouteStatus[] | RouteStatus | null;
}

/**
 * SimpleApiError
 * A simple model for HTTP errors without payload.
 */
export interface SimpleApiError {
  code: ErrorCodes;
  /** Message */
  message: string;
}

/** SortOrders */
export type SortOrders = "asc" | "desc";

/** TokenResponse */
export interface TokenResponse {
  /** Accesstoken */
  accessToken: string;
  /** Refreshtoken */
  refreshToken: string;
  /**
   * Tokentype
   * @default "bearer"
   */
  tokenType?: string;
}

/** UserAuthenticateRequest */
export interface UserAuthenticateRequest {
  /** Email */
  email: string;
  /** Password */
  password: string;
}

/** UserChangeEmailRequest */
export interface UserChangeEmailRequest {
  /**
   * Email
   * @pattern ^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$
   */
  email: string;
}

/** UserChangePasswordRequest */
export interface UserChangePasswordRequest {
  /**
   * Password
   * @pattern ^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,16}$
   */
  password: string;
}

/** UserRegisterRequest */
export interface UserRegisterRequest {
  /**
   * Email
   * @pattern ^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$
   */
  email: string;
  /**
   * Password
   * @pattern ^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,16}$
   */
  password: string;
}

/** UserResponse */
export interface UserResponse {
  /**
   * Id
   * @format uuid
   */
  id: string;
  /** Email */
  email: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/** ValidationErrorCodes */
export type ValidationErrorCodes = "uniqueness_violation" | "invalid_status" | "integrity_violation";

/** ValidationErrorPayload */
export interface ValidationErrorPayload {
  type: ValidationErrorCodes;
  /** Hint */
  hint?: string | null;
  /** Field */
  field?: string | null;
}

/** WaypointCreateRequest */
export interface WaypointCreateRequest {
  /**
   * Routeid
   * @format uuid
   */
  routeId: string;
  /** Order */
  order: number;
  /**
   * Name
   * @minLength 3
   * @maxLength 100
   */
  name: string;
  /**
   * Description
   * @minLength 3
   * @maxLength 1000
   */
  description: string;
  /** Latitude */
  latitude: number | string;
  /** Longitude */
  longitude: number | string;
  /**
   * Audioid
   * @format uuid
   */
  audioId: string;
  /**
   * Attachmentids
   * @maxItems 5
   */
  attachmentIds: string[];
  /** Materials */
  materials?: WaypointMaterialCreate[];
}

/** WaypointListRequest */
export interface WaypointListRequest {
  filters?: WaypointWhere | null;
}

/** WaypointMaterialCreate */
export interface WaypointMaterialCreate {
  /**
   * Name
   * @minLength 3
   * @maxLength 100
   */
  name: string;
  /**
   * Description
   * @minLength 3
   * @maxLength 100
   */
  description: string;
  /** Year */
  year: number;
}

/** WaypointMaterialResponse */
export interface WaypointMaterialResponse {
  /** Name */
  name: string;
  /** Description */
  description: string;
  /** Year */
  year: number;
}

/** WaypointResponse */
export interface WaypointResponse {
  /**
   * Id
   * @format uuid
   */
  id: string;
  /**
   * Createdat
   * @format date-time
   */
  createdAt: string;
  /** Order */
  order: number;
  /** Name */
  name: string;
  /** Description */
  description: string;
  /** Latitude */
  latitude: string;
  /** Longitude */
  longitude: string;
  /**
   * Audioid
   * @format uuid
   */
  audioId: string;
  /** Attachments */
  attachments: AttachmentResponse[];
  audio: AttachmentResponse;
  /** Materials */
  materials: WaypointMaterialResponse[];
}

/** WaypointSort */
export type WaypointSort = "created_at" | "order";

/** WaypointUpdateBatchRequest */
export interface WaypointUpdateBatchRequest {
  /**
   * Id
   * @format uuid
   */
  id: string;
  payload: WaypointUpdateRequest;
}

/** WaypointUpdateRequest */
export interface WaypointUpdateRequest {
  /** Order */
  order?: number | null;
  /** Name */
  name?: string | null;
  /** Description */
  description?: string | null;
  /** Latitude */
  latitude?: number | string | null;
  /** Longitude */
  longitude?: number | string | null;
  /** Audioid */
  audioId?: string | null;
  /** Attachmentids */
  attachmentIds?: string[] | null;
  /** Materials */
  materials?: WaypointMaterialCreate[] | null;
}

/** WaypointWhere */
export interface WaypointWhere {
  /** Routeid */
  routeId?: string[] | string | null;
}

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title RusGuide
 * @version 0.16.3
 *
 *
 * RusGuide Server
 *
 * ## Changelog
 * ### 0.16.3
 *
 * - **fix** city schemas validation
 *
 * ### 0.16.2
 *
 * - **fix** email update issues
 *
 * ### 0.16.1
 *
 * - **fix** city name validation
 *
 * ### 0.16.0
 *
 * - **feat** events
 *
 * ### 0.15.0
 *
 * - **feat** change email
 *
 * ### 0.14.1
 *
 * - **fix** send email celery task queue
 *
 * ### 0.14.0
 *
 * - **feat** answer to feedback email notification
 *
 * ### 0.13.2
 *
 * - **fix** handle uniqueness violation
 *
 * ### 0.13.1
 *
 * - **fix** message queue settings
 *
 * ### 0.13.0
 *
 * - **feat** complete route
 *
 * ### 0.12.10
 *
 * - **fix** route/waypoint delete command
 *
 * ### 0.12.9
 *
 * - **test** get-me and change-password tests
 *
 * ### 0.12.8
 *
 * - **fix** route filters
 * - **fix** city route count field
 *
 * ### 0.12.7
 *
 * - **fix** update waypoint attachments
 *
 * ### 0.12.6
 *
 * - **fix** update waypoint batch validation error
 *
 * ### 0.12.5
 *
 * - **fix** waypoint coordinate type
 * - **fix** update waypoint batch
 * - **fix** create waypoint batch without materials
 *
 * ### 0.12.4
 *
 * - **fix** route list error
 *
 * ### 0.12.3
 *
 * - **fix** waypoint attachment on batch creation
 *
 * ### 0.12.2
 *
 * - **fix** r
 *
 * > See full changelog in repository "src" dir
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags auth
     * @name RegisterApiV1AuthRegistrationPost
     * @summary Register
     * @request POST:/api/v1/auth/registration
     * @secure
     */
    registerApiV1AuthRegistrationPost: (data: UserRegisterRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/auth/registration`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthenticateApiV1AuthAuthenticationPost
     * @summary Authenticate
     * @request POST:/api/v1/auth/authentication
     * @secure
     */
    authenticateApiV1AuthAuthenticationPost: (data: UserAuthenticateRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/auth/authentication`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name UpdateRefreshTokenApiV1AuthRefreshPost
     * @summary Update Refresh Token
     * @request POST:/api/v1/auth/refresh
     * @secure
     */
    updateRefreshTokenApiV1AuthRefreshPost: (
      data: BodyUpdateRefreshTokenApiV1AuthRefreshPost,
      params: RequestParams = {},
    ) =>
      this.request<TokenResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/auth/refresh`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name ChangePasswordApiV1AuthChangePasswordPost
     * @summary Change Password
     * @request POST:/api/v1/auth/change-password
     * @secure
     */
    changePasswordApiV1AuthChangePasswordPost: (data: UserChangePasswordRequest, params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/auth/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetMeApiV1UsersMeGet
     * @summary Get Me
     * @request GET:/api/v1/users/me
     * @secure
     */
    getMeApiV1UsersMeGet: (params: RequestParams = {}) =>
      this.request<UserResponse, AuthApiError | SimpleApiError | ValidationError>({
        path: `/api/v1/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name ChangeEmailApiV1UsersChangeEmailPost
     * @summary Change Email
     * @request POST:/api/v1/users/change-email
     * @secure
     */
    changeEmailApiV1UsersChangeEmailPost: (data: UserChangeEmailRequest, params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/users/change-email`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name GetUriApiV1AuthGoogleUriGet
     * @summary Get Uri
     * @request GET:/api/v1/auth/google/uri
     * @secure
     */
    getUriApiV1AuthGoogleUriGet: (params: RequestParams = {}) =>
      this.request<string, AuthApiError | SimpleApiError | ValidationError>({
        path: `/api/v1/auth/google/uri`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthenticateApiV1AuthGoogleAuthenticationPost
     * @summary Authenticate
     * @request POST:/api/v1/auth/google/authentication
     * @secure
     */
    authenticateApiV1AuthGoogleAuthenticationPost: (
      data: BodyAuthenticateApiV1AuthGoogleAuthenticationPost,
      params: RequestParams = {},
    ) =>
      this.request<TokenResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/auth/google/authentication`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags attachments
     * @name CreateAttachmentApiV1StorageAttachmentsPost
     * @summary Create Attachment
     * @request POST:/api/v1/storage/attachments
     * @secure
     */
    createAttachmentApiV1StorageAttachmentsPost: (
      data: BodyCreateAttachmentApiV1StorageAttachmentsPost,
      params: RequestParams = {},
    ) =>
      this.request<AttachmentResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/storage/attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags attachments
     * @name GetAttachmentApiV1StorageAttachmentsAttachmentIdGet
     * @summary Get Attachment
     * @request GET:/api/v1/storage/attachments/{attachment_id}
     * @secure
     */
    getAttachmentApiV1StorageAttachmentsAttachmentIdGet: (attachmentId: string, params: RequestParams = {}) =>
      this.request<AttachmentResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/storage/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feedbacks
     * @name CreateFeedbackApiV1FeedbacksPost
     * @summary Create Feedback
     * @request POST:/api/v1/feedbacks
     * @secure
     */
    createFeedbackApiV1FeedbacksPost: (data: FeedbackCreateRequest, params: RequestParams = {}) =>
      this.request<FeedbackResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/feedbacks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feedbacks
     * @name RetrieveFeedbackListApiV1FeedbacksListPost
     * @summary Retrieve Feedback List
     * @request POST:/api/v1/feedbacks/list
     * @secure
     */
    retrieveFeedbackListApiV1FeedbacksListPost: (
      data: FeedbackListRequest,
      query?: {
        /**
         * Skip
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @default 100
         */
        limit?: number;
        /**
         * Sort
         * @default "created_at"
         */
        sort?: FeedbackSort | null;
        /**
         * Order
         * @default "asc"
         */
        order?: SortOrders;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CountPaginationResultsFeedbackResponse,
        AuthApiError | SimpleApiError | ValidationError | HTTPValidationError
      >({
        path: `/api/v1/feedbacks/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feedbacks
     * @name RetrieveFeedbackApiV1FeedbacksFeedbackIdGet
     * @summary Retrieve Feedback
     * @request GET:/api/v1/feedbacks/{feedback_id}
     * @secure
     */
    retrieveFeedbackApiV1FeedbacksFeedbackIdGet: (feedbackId: string, params: RequestParams = {}) =>
      this.request<FeedbackResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/feedbacks/${feedbackId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feedbacks
     * @name SetFeedbackAsViewedApiV1FeedbacksFeedbackIdViewedPost
     * @summary Set Feedback As Viewed
     * @request POST:/api/v1/feedbacks/{feedback_id}/viewed
     * @secure
     */
    setFeedbackAsViewedApiV1FeedbacksFeedbackIdViewedPost: (feedbackId: string, params: RequestParams = {}) =>
      this.request<FeedbackResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/feedbacks/${feedbackId}/viewed`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feedbacks
     * @name SetFeedbackAnswerApiV1FeedbacksFeedbackIdAnswerPost
     * @summary Set Feedback Answer
     * @request POST:/api/v1/feedbacks/{feedback_id}/answer
     * @secure
     */
    setFeedbackAnswerApiV1FeedbacksFeedbackIdAnswerPost: (
      feedbackId: string,
      data: BodySetFeedbackAnswerApiV1FeedbacksFeedbackIdAnswerPost,
      params: RequestParams = {},
    ) =>
      this.request<FeedbackResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/feedbacks/${feedbackId}/answer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name CreateCityApiV1CitiesPost
     * @summary Create City
     * @request POST:/api/v1/cities
     * @secure
     */
    createCityApiV1CitiesPost: (data: CityCreate, params: RequestParams = {}) =>
      this.request<CityResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/cities`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name GetCityApiV1CitiesCityIdGet
     * @summary Get City
     * @request GET:/api/v1/cities/{city_id}
     * @secure
     */
    getCityApiV1CitiesCityIdGet: (cityId: string, params: RequestParams = {}) =>
      this.request<CityResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/cities/${cityId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name UpdateCityApiV1CitiesCityIdPatch
     * @summary Update City
     * @request PATCH:/api/v1/cities/{city_id}
     * @secure
     */
    updateCityApiV1CitiesCityIdPatch: (cityId: string, data: CityUpdateRequest, params: RequestParams = {}) =>
      this.request<CityResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/cities/${cityId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name DeleteCityApiV1CitiesCityIdDelete
     * @summary Delete City
     * @request DELETE:/api/v1/cities/{city_id}
     * @secure
     */
    deleteCityApiV1CitiesCityIdDelete: (cityId: string, params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/cities/${cityId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name RetrieveCityListApiV1CitiesListPost
     * @summary Retrieve City List
     * @request POST:/api/v1/cities/list
     * @secure
     */
    retrieveCityListApiV1CitiesListPost: (
      query?: {
        /**
         * Skip
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CountPaginationResultsCityResponse,
        AuthApiError | SimpleApiError | ValidationError | HTTPValidationError
      >({
        path: `/api/v1/cities/list`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categories
     * @name CreateCategoryApiV1CategoriesPost
     * @summary Create Category
     * @request POST:/api/v1/categories
     * @secure
     */
    createCategoryApiV1CategoriesPost: (data: BaseCategory, params: RequestParams = {}) =>
      this.request<CategoryResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/categories`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categories
     * @name GetCategoryApiV1CategoriesCategoryIdGet
     * @summary Get Category
     * @request GET:/api/v1/categories/{category_id}
     * @secure
     */
    getCategoryApiV1CategoriesCategoryIdGet: (categoryId: string, params: RequestParams = {}) =>
      this.request<CategoryResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/categories/${categoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categories
     * @name UpdateCategoryApiV1CategoriesCategoryIdPatch
     * @summary Update Category
     * @request PATCH:/api/v1/categories/{category_id}
     * @secure
     */
    updateCategoryApiV1CategoriesCategoryIdPatch: (
      categoryId: string,
      data: BaseCategory,
      params: RequestParams = {},
    ) =>
      this.request<CategoryResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/categories/${categoryId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categories
     * @name DeleteCategoryApiV1CategoriesCategoryIdDelete
     * @summary Delete Category
     * @request DELETE:/api/v1/categories/{category_id}
     * @secure
     */
    deleteCategoryApiV1CategoriesCategoryIdDelete: (categoryId: string, params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/categories/${categoryId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags categories
     * @name RetrieveCategoryListApiV1CategoriesListPost
     * @summary Retrieve Category List
     * @request POST:/api/v1/categories/list
     * @secure
     */
    retrieveCategoryListApiV1CategoriesListPost: (
      query?: {
        /**
         * Skip
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CountPaginationResultsCategoryResponse,
        AuthApiError | SimpleApiError | ValidationError | HTTPValidationError
      >({
        path: `/api/v1/categories/list`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags routes
     * @name CreateRouteApiV1RoutesPost
     * @summary Create Route
     * @request POST:/api/v1/routes
     * @secure
     */
    createRouteApiV1RoutesPost: (data: RouteCreateRequest, params: RequestParams = {}) =>
      this.request<RouteResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/routes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags routes
     * @name UpdateRouteApiV1RoutesRouteIdPatch
     * @summary Update Route
     * @request PATCH:/api/v1/routes/{route_id}
     * @secure
     */
    updateRouteApiV1RoutesRouteIdPatch: (routeId: string, data: RouteUpdateRequest, params: RequestParams = {}) =>
      this.request<RouteResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/routes/${routeId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags routes
     * @name RetrieveRouteApiV1RoutesRouteIdGet
     * @summary Retrieve Route
     * @request GET:/api/v1/routes/{route_id}
     * @secure
     */
    retrieveRouteApiV1RoutesRouteIdGet: (routeId: string, params: RequestParams = {}) =>
      this.request<RouteResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/routes/${routeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags routes
     * @name DeleteWaypointApiV1RoutesRouteIdDelete
     * @summary Delete Waypoint
     * @request DELETE:/api/v1/routes/{route_id}
     * @secure
     */
    deleteWaypointApiV1RoutesRouteIdDelete: (routeId: string, params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/routes/${routeId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags routes
     * @name RetrieveCompleteRouteListApiV1RoutesCompleteGet
     * @summary Retrieve Complete Route List
     * @request GET:/api/v1/routes/complete
     * @secure
     */
    retrieveCompleteRouteListApiV1RoutesCompleteGet: (
      query?: {
        /**
         * Skip
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CountPaginationResultsRouteResponse,
        AuthApiError | SimpleApiError | ValidationError | HTTPValidationError
      >({
        path: `/api/v1/routes/complete`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags routes
     * @name SetRouteAsCompleteApiV1RoutesCompletePost
     * @summary Set Route As Complete
     * @request POST:/api/v1/routes/complete
     * @secure
     */
    setRouteAsCompleteApiV1RoutesCompletePost: (
      data: BodySetRouteAsCompleteApiV1RoutesCompletePost,
      params: RequestParams = {},
    ) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/routes/complete`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags routes
     * @name RetrieveRouteListApiV1RoutesListPost
     * @summary Retrieve Route List
     * @request POST:/api/v1/routes/list
     * @secure
     */
    retrieveRouteListApiV1RoutesListPost: (
      data: RouteListRequest,
      query?: {
        /**
         * Skip
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @default 100
         */
        limit?: number;
        /**
         * Sort
         * @default "created_at"
         */
        sort?: RouteSort | null;
        /**
         * Order
         * @default "asc"
         */
        order?: SortOrders;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CountPaginationResultsRouteResponse,
        AuthApiError | SimpleApiError | ValidationError | HTTPValidationError
      >({
        path: `/api/v1/routes/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags waypoints
     * @name CreateWaypointApiV1WaypointsPost
     * @summary Create Waypoint
     * @request POST:/api/v1/waypoints
     * @secure
     */
    createWaypointApiV1WaypointsPost: (data: WaypointCreateRequest, params: RequestParams = {}) =>
      this.request<WaypointResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/waypoints`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags waypoints
     * @name CreateWaypointBatchApiV1WaypointsBatchPost
     * @summary Create Waypoint Batch
     * @request POST:/api/v1/waypoints/batch
     * @secure
     */
    createWaypointBatchApiV1WaypointsBatchPost: (data: WaypointCreateRequest[], params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/waypoints/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags waypoints
     * @name UpdateWaypointBatchApiV1WaypointsBatchPatch
     * @summary Update Waypoint Batch
     * @request PATCH:/api/v1/waypoints/batch
     * @secure
     */
    updateWaypointBatchApiV1WaypointsBatchPatch: (data: WaypointUpdateBatchRequest[], params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/waypoints/batch`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags waypoints
     * @name RetrieveWaypointListApiV1WaypointsListPost
     * @summary Retrieve Waypoint List
     * @request POST:/api/v1/waypoints/list
     * @secure
     */
    retrieveWaypointListApiV1WaypointsListPost: (
      data: WaypointListRequest,
      query?: {
        /**
         * Skip
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @default 100
         */
        limit?: number;
        /**
         * Sort
         * @default "order"
         */
        sort?: WaypointSort | null;
        /**
         * Order
         * @default "asc"
         */
        order?: SortOrders;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CountPaginationResultsWaypointResponse,
        AuthApiError | SimpleApiError | ValidationError | HTTPValidationError
      >({
        path: `/api/v1/waypoints/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags waypoints
     * @name RetrieveWaypointApiV1WaypointsWaypointIdGet
     * @summary Retrieve Waypoint
     * @request GET:/api/v1/waypoints/{waypoint_id}
     * @secure
     */
    retrieveWaypointApiV1WaypointsWaypointIdGet: (waypointId: string, params: RequestParams = {}) =>
      this.request<WaypointResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/waypoints/${waypointId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags waypoints
     * @name UpdateWaypointApiV1WaypointsWaypointIdPatch
     * @summary Update Waypoint
     * @request PATCH:/api/v1/waypoints/{waypoint_id}
     * @secure
     */
    updateWaypointApiV1WaypointsWaypointIdPatch: (
      waypointId: string,
      data: WaypointUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<WaypointResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/waypoints/${waypointId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags waypoints
     * @name DeleteWaypointApiV1WaypointsWaypointIdDelete
     * @summary Delete Waypoint
     * @request DELETE:/api/v1/waypoints/{waypoint_id}
     * @secure
     */
    deleteWaypointApiV1WaypointsWaypointIdDelete: (waypointId: string, params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/waypoints/${waypointId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name CreateEventApiV1EventsPost
     * @summary Create Event
     * @request POST:/api/v1/events
     * @secure
     */
    createEventApiV1EventsPost: (data: EventCreateRequest, params: RequestParams = {}) =>
      this.request<EventResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/events`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name RetrieveEventListApiV1EventsListPost
     * @summary Retrieve Event List
     * @request POST:/api/v1/events/list
     * @secure
     */
    retrieveEventListApiV1EventsListPost: (data: EventListRequest, params: RequestParams = {}) =>
      this.request<
        CountPaginationResultsEventResponse,
        AuthApiError | SimpleApiError | ValidationError | HTTPValidationError
      >({
        path: `/api/v1/events/list`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name UpdateEventApiV1EventsEventIdPatch
     * @summary Update Event
     * @request PATCH:/api/v1/events/{event_id}
     * @secure
     */
    updateEventApiV1EventsEventIdPatch: (eventId: string, data: EventUpdateRequest, params: RequestParams = {}) =>
      this.request<EventResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/events/${eventId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name RetrieveEventApiV1EventsEventIdGet
     * @summary Retrieve Event
     * @request GET:/api/v1/events/{event_id}
     * @secure
     */
    retrieveEventApiV1EventsEventIdGet: (eventId: string, params: RequestParams = {}) =>
      this.request<EventResponse, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/events/${eventId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name DeleteEventApiV1EventsEventIdDelete
     * @summary Delete Event
     * @request DELETE:/api/v1/events/{event_id}
     * @secure
     */
    deleteEventApiV1EventsEventIdDelete: (eventId: string, params: RequestParams = {}) =>
      this.request<void, AuthApiError | SimpleApiError | ValidationError | HTTPValidationError>({
        path: `/api/v1/events/${eventId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
