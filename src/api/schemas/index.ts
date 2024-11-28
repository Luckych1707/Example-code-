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

export type Status = "finished" | "active" | "cancel" | "not_done";

export type Gender = "male" | "female" | "other";

export interface Goal {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Gaol"
   */
  name?: string;
}

export interface Country {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Germany"
   */
  name?: string;
  /** @example "🇦🇩" */
  flag?: string;
  /**
   * @minLength 2
   * @maxLength 3
   * @example "AG"
   */
  shortname?: string;
}

export interface Model1 {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Gaol"
   */
  name?: string;
}

export type Goals = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Gaol"
   */
  name?: string;
}[];

export interface Subscription {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fitnessssss"
   */
  name?: string;
  smallPrice?: number;
  mediumPrice?: number;
  highPrice?: number;
  maxPrice?: number;
  smallAmount?: number;
  mediumAmount?: number;
  highAmount?: number;
  maxAmount?: number;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  fileId: string;
  goals?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Gaol"
     */
    name?: string;
  }[];
}

export interface Model2 {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  restOfSession?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name?: string;
    smallPrice?: number;
    mediumPrice?: number;
    highPrice?: number;
    maxPrice?: number;
    smallAmount?: number;
    mediumAmount?: number;
    highAmount?: number;
    maxAmount?: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    goals?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    }[];
  };
}

export type Subscriptions = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  restOfSession?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name?: string;
    smallPrice?: number;
    mediumPrice?: number;
    highPrice?: number;
    maxPrice?: number;
    smallAmount?: number;
    mediumAmount?: number;
    highAmount?: number;
    maxAmount?: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    goals?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    }[];
  };
}[];

export interface Model3 {
  cardHolder?: string;
  cardNumber?: string;
  expiry?: string;
}

export type Cards = {
  cardHolder?: string;
  cardNumber?: string;
  expiry?: string;
}[];

export type FavoritesTrainer = string[];

export interface City {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Gaol"
   */
  name?: string;
}

export interface UserSchema {
  id?: string;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  emailConfirm?: boolean;
  gender?: "male" | "female" | "other";
  /** @example "admin" */
  role?: string;
  /**
   * @minLength 10
   * @maxLength 20
   * @example "Alexandrov"
   */
  phone?: string;
  injures?: boolean;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  notification?: boolean;
  pushId?: string;
  socialId?: string;
  stripeCustomerId?: string;
  roleId?: string;
  countryId?: string;
  goalId?: string;
  fileId?: string;
  cityId?: string;
  languageId?: string;
  security?: string;
  goal?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Gaol"
     */
    name?: string;
  };
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
  };
  subscriptions?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    restOfSession?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name?: string;
      smallPrice?: number;
      mediumPrice?: number;
      highPrice?: number;
      maxPrice?: number;
      smallAmount?: number;
      mediumAmount?: number;
      highAmount?: number;
      maxAmount?: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      goals?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      }[];
    };
  }[];
  avatar?: string;
  cards?: {
    cardHolder?: string;
    cardNumber?: string;
    expiry?: string;
  }[];
  favoritesTrainer?: string[];
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Gaol"
     */
    name?: string;
  };
  timeToNotification?: number;
}

export interface Model4 {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Paris"
   */
  name?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  /** @example "+07:00" */
  utcOffset: string;
}

export type Cities = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Paris"
   */
  name?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  /** @example "+07:00" */
  utcOffset: string;
}[];

export interface CountrySchema {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Germany"
   */
  name?: string;
  /** @example "🇦🇩" */
  flag?: string;
  /**
   * @minLength 2
   * @maxLength 3
   * @example "AG"
   */
  shortname?: string;
  cities?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    /** @example "+07:00" */
    utcOffset: string;
  }[];
}

export interface CitySchema {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Paris"
   */
  name?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
  };
  /** @example "+07:00" */
  utcOffset: string;
}

export interface Model5 {
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}

export type Reviews = {
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}[];

export interface LanguageSchema {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Russian"
   */
  name?: string;
}

export type Languages = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Russian"
   */
  name?: string;
}[];

export interface DictionarySchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  languages?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Russian"
     */
    name?: string;
  }[];
}

export interface CertificateSchema {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  name?: string;
}

export type Certificates = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  name?: string;
}[];

export interface GoalSchema {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 30
   * @example "Gaol"
   */
  name?: string;
}

export type Model6 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 30
   * @example "Gaol"
   */
  name?: string;
}[];

export interface Image {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "Fake trainer/scam"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
}

export interface SubscriptionSchema {
  id: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fitnessssss"
   */
  name: string;
  /**
   * @min 1
   * @max 9999
   */
  smallPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  mediumPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  highPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  maxPrice: number;
  /**
   * @min 1
   * @max 99
   */
  smallAmount: number;
  /**
   * @min 1
   * @max 99
   */
  mediumAmount: number;
  /**
   * @min 1
   * @max 99
   */
  highAmount: number;
  /**
   * @min 1
   * @max 99
   */
  maxAmount: number;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  goals: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 30
     * @example "Gaol"
     */
    name?: string;
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  fileId: string;
  image?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "Fake trainer/scam"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  };
}

export interface Model7 {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}

export type Images = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}[];

export type Settings = object;

export interface TrainerSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  cityId: string;
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    /** @example "+07:00" */
    utcOffset: string;
  };
  gender?: "male" | "female" | "other";
  /**
   * @minLength 2
   * @maxLength 5000
   * @example "Alexandrov"
   */
  about?: string;
  rating?: number;
  reviews?: {
    rating?: number;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  dictionaryId: string;
  dictionary?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    languages?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Russian"
       */
      name?: string;
    }[];
  };
  certificates?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    name?: string;
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
  /**
   * @minLength 10
   * @maxLength 20
   * @example "+93247587346178"
   */
  phone?: string;
  experience?: number;
  images?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @maxLength 1000
     * @example "sfece"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
    /** @format date */
    createdAt?: string;
  }[];
  /** @format date */
  deletedAt?: string;
  settings?: object;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
}

export interface LocationSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Location name"
   */
  name?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "address"
   */
  address?: string;
  /**
   * @min -90
   * @max 90
   */
  latitude?: number;
  /**
   * @min -180
   * @max 180
   */
  longitude?: number;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "url"
   */
  url?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
}

export interface BookingSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  status?: "finished" | "active" | "cancel" | "not_done";
  /** @format date */
  bookingDate?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  locationId: string;
  location?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  };
  /**
   * @minLength 2
   * @maxLength 500
   * @example "comment"
   */
  comment?: string;
  /** @example "-03:00" */
  utcOffset?: string;
}

export type Items = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  status?: "finished" | "active" | "cancel" | "not_done";
  /** @format date */
  bookingDate?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  locationId: string;
  location?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  };
  /**
   * @minLength 2
   * @maxLength 500
   * @example "comment"
   */
  comment?: string;
  /** @example "-03:00" */
  utcOffset?: string;
}[];

export interface Result {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    status?: "finished" | "active" | "cancel" | "not_done";
    /** @format date */
    bookingDate?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    trainer?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    locationId: string;
    location?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Location name"
       */
      name?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "address"
       */
      address?: string;
      /**
       * @min -90
       * @max 90
       */
      latitude?: number;
      /**
       * @min -180
       * @max 180
       */
      longitude?: number;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "url"
       */
      url?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
    };
    /**
     * @minLength 2
     * @maxLength 500
     * @example "comment"
     */
    comment?: string;
    /** @example "-03:00" */
    utcOffset?: string;
  }[];
}

export interface OutputPaginationSchema {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      status?: "finished" | "active" | "cancel" | "not_done";
      /** @format date */
      bookingDate?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      trainer?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
          cities?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            /** @example "+07:00" */
            utcOffset: string;
          }[];
        };
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        cityId: string;
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          /** @example "+07:00" */
          utcOffset: string;
        };
        gender?: "male" | "female" | "other";
        /**
         * @minLength 2
         * @maxLength 5000
         * @example "Alexandrov"
         */
        about?: string;
        rating?: number;
        reviews?: {
          rating?: number;
          /**
           * @minLength 2
           * @maxLength 500
           * @example "Fake trainer/scam"
           */
          text?: string;
          user?: {
            id?: string;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            emailConfirm?: boolean;
            gender?: "male" | "female" | "other";
            /** @example "admin" */
            role?: string;
            /**
             * @minLength 10
             * @maxLength 20
             * @example "Alexandrov"
             */
            phone?: string;
            injures?: boolean;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            notification?: boolean;
            pushId?: string;
            socialId?: string;
            stripeCustomerId?: string;
            roleId?: string;
            countryId?: string;
            goalId?: string;
            fileId?: string;
            cityId?: string;
            languageId?: string;
            security?: string;
            goal?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            subscriptions?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name?: string;
                smallPrice?: number;
                mediumPrice?: number;
                highPrice?: number;
                maxPrice?: number;
                smallAmount?: number;
                mediumAmount?: number;
                highAmount?: number;
                maxAmount?: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                goals?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
              };
            }[];
            avatar?: string;
            cards?: {
              cardHolder?: string;
              cardNumber?: string;
              expiry?: string;
            }[];
            favoritesTrainer?: string[];
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            timeToNotification?: number;
          };
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        dictionaryId: string;
        dictionary?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          trainerId: string;
          languages?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Russian"
             */
            name?: string;
          }[];
        };
        certificates?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fake trainer/scam"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name: string;
          /**
           * @min 1
           * @max 9999
           */
          smallPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          mediumPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          highPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          maxPrice: number;
          /**
           * @min 1
           * @max 99
           */
          smallAmount: number;
          /**
           * @min 1
           * @max 99
           */
          mediumAmount: number;
          /**
           * @min 1
           * @max 99
           */
          highAmount: number;
          /**
           * @min 1
           * @max 99
           */
          maxAmount: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          goals: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 30
             * @example "Gaol"
             */
            name?: string;
          }[];
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          image?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "filename"
             */
            filename?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "Fake trainer/scam"
             */
            key?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        };
        /**
         * @minLength 10
         * @maxLength 20
         * @example "+93247587346178"
         */
        phone?: string;
        experience?: number;
        images?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @maxLength 1000
           * @example "sfece"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
          /** @format date */
          createdAt?: string;
        }[];
        /** @format date */
        deletedAt?: string;
        settings?: object;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      locationId: string;
      location?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Location name"
         */
        name?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "address"
         */
        address?: string;
        /**
         * @min -90
         * @max 90
         */
        latitude?: number;
        /**
         * @min -180
         * @max 180
         */
        longitude?: number;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "url"
         */
        url?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
          cities?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            /** @example "+07:00" */
            utcOffset: string;
          }[];
        };
      };
      /**
       * @minLength 2
       * @maxLength 500
       * @example "comment"
       */
      comment?: string;
      /** @example "-03:00" */
      utcOffset?: string;
    }[];
  };
}

export type Model8 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  name?: string;
}[];

export interface Model9 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    name?: string;
  }[];
}

export interface Model10 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
  };
}

export type Model11 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Paris"
   */
  name?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
  };
  /** @example "+07:00" */
  utcOffset: string;
}[];

export interface Model12 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    /** @example "+07:00" */
    utcOffset: string;
  }[];
}

export interface Model13 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
}

export type Model14 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Germany"
   */
  name?: string;
  /** @example "🇦🇩" */
  flag?: string;
  /**
   * @minLength 2
   * @maxLength 3
   * @example "AG"
   */
  shortname?: string;
  cities?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    /** @example "+07:00" */
    utcOffset: string;
  }[];
}[];

export interface Model15 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  }[];
}

export interface Model16 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    }[];
  };
}

export type Model17 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 30
   * @example "Gaol"
   */
  name?: string;
}[];

export interface Model18 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 30
     * @example "Gaol"
     */
    name?: string;
  }[];
}

export interface Model19 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
  };
}

export type Model20 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Russian"
   */
  name?: string;
}[];

export interface Model21 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Russian"
     */
    name?: string;
  }[];
}

export interface Model22 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Russian"
       */
      name?: string;
    }[];
  };
}

export type Model23 = {
  id: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fitnessssss"
   */
  name: string;
  /**
   * @min 1
   * @max 9999
   */
  smallPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  mediumPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  highPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  maxPrice: number;
  /**
   * @min 1
   * @max 99
   */
  smallAmount: number;
  /**
   * @min 1
   * @max 99
   */
  mediumAmount: number;
  /**
   * @min 1
   * @max 99
   */
  highAmount: number;
  /**
   * @min 1
   * @max 99
   */
  maxAmount: number;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  goals: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 30
     * @example "Gaol"
     */
    name?: string;
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  fileId: string;
  image?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "Fake trainer/scam"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  };
}[];

export interface Model24 {
  /** @example 10 */
  count?: number;
  items?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  }[];
}

export interface Model25 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    }[];
  };
}

export type Model26 = "male";

export type Model27 = "male"[];

export interface Model28 {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Paris"
   */
  name?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
}

export interface Model29 {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}

export type Model30 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}[];

export interface Model31 {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
}

export type Users = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
}[];

export interface TrainerSchemaMobile {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  gender?: "male"[];
  /**
   * @minLength 2
   * @maxLength 5000
   * @example "Alexandrov"
   */
  about?: string;
  rating?: number;
  isFavourite?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  dictionaryId: string;
  dictionary?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    languages?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Russian"
       */
      name?: string;
    }[];
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  cityId: string;
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
  };
  /**
   * @minLength 10
   * @maxLength 20
   * @example "+93247587346178"
   */
  phone?: string;
  experience?: number;
  images?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @maxLength 1000
     * @example "sfece"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
    /** @format date */
    createdAt?: string;
  }[];
  users?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
  }[];
  settings?: object;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
}

export type Model32 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  gender?: "male"[];
  /**
   * @minLength 2
   * @maxLength 5000
   * @example "Alexandrov"
   */
  about?: string;
  rating?: number;
  isFavourite?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  dictionaryId: string;
  dictionary?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    languages?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Russian"
       */
      name?: string;
    }[];
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  cityId: string;
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
  };
  /**
   * @minLength 10
   * @maxLength 20
   * @example "+93247587346178"
   */
  phone?: string;
  experience?: number;
  images?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @maxLength 1000
     * @example "sfece"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
    /** @format date */
    createdAt?: string;
  }[];
  users?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
  }[];
  settings?: object;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
}[];

export interface Model33 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    gender?: "male"[];
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    isFavourite?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    users?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
    }[];
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  }[];
}

export interface Model34 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      gender?: "male"[];
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      isFavourite?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      users?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
      }[];
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    }[];
  };
}

export interface UserSubscriptionSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /** @example "2" */
  restOfSession?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
}

export type Model35 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /** @example "2" */
  restOfSession?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
}[];

export interface Model36 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "2" */
    restOfSession?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
  }[];
}

export interface Model37 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "2" */
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
    }[];
  };
}

export type Model38 = {
  id?: string;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  emailConfirm?: boolean;
  gender?: "male" | "female" | "other";
  /** @example "admin" */
  role?: string;
  /**
   * @minLength 10
   * @maxLength 20
   * @example "Alexandrov"
   */
  phone?: string;
  injures?: boolean;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  notification?: boolean;
  pushId?: string;
  socialId?: string;
  stripeCustomerId?: string;
  roleId?: string;
  countryId?: string;
  goalId?: string;
  fileId?: string;
  cityId?: string;
  languageId?: string;
  security?: string;
  goal?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Gaol"
     */
    name?: string;
  };
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
  };
  subscriptions?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    restOfSession?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name?: string;
      smallPrice?: number;
      mediumPrice?: number;
      highPrice?: number;
      maxPrice?: number;
      smallAmount?: number;
      mediumAmount?: number;
      highAmount?: number;
      maxAmount?: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      goals?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      }[];
    };
  }[];
  avatar?: string;
  cards?: {
    cardHolder?: string;
    cardNumber?: string;
    expiry?: string;
  }[];
  favoritesTrainer?: string[];
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Gaol"
     */
    name?: string;
  };
  timeToNotification?: number;
}[];

export interface Model39 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  }[];
}

export interface Model40 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    }[];
  };
}

export interface OutputOkSchema {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    status?: "finished" | "active" | "cancel" | "not_done";
    /** @format date */
    bookingDate?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    trainer?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    locationId: string;
    location?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Location name"
       */
      name?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "address"
       */
      address?: string;
      /**
       * @min -90
       * @max 90
       */
      latitude?: number;
      /**
       * @min -180
       * @max 180
       */
      longitude?: number;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "url"
       */
      url?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
    };
    /**
     * @minLength 2
     * @maxLength 500
     * @example "comment"
     */
    comment?: string;
    /** @example "-03:00" */
    utcOffset?: string;
  };
}

export interface Model41 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    name?: string;
  };
}

export interface Model42 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    /** @example "+07:00" */
    utcOffset: string;
  };
}

export type Model43 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Germany"
   */
  name?: string;
  /** @example "🇦🇩" */
  flag?: string;
  /**
   * @minLength 2
   * @maxLength 3
   * @example "AG"
   */
  shortname?: string;
  cities?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    /** @example "+07:00" */
    utcOffset: string;
  }[];
}[];

export interface Model44 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  }[];
}

export interface Model45 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    }[];
  };
}

export interface Model46 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
}

export interface FileSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "Fake trainer/scam"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
}

export interface Model47 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "Fake trainer/scam"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  };
}

export interface Model48 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 30
     * @example "Gaol"
     */
    name?: string;
  };
}

export interface Model49 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Russian"
     */
    name?: string;
  };
}

export interface Model50 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  };
}

export interface NotificationSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  title?: string;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
}

export type Model51 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  title?: string;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
}[];

export interface Model52 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    title?: string;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  }[];
}

export interface Model53 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      title?: string;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    }[];
  };
}

export interface CountUnreadNotifications {
  /**
   * @min 0
   * @example 10
   */
  count?: number;
}

export interface Model54 {
  /** @example true */
  ok?: boolean;
  result?: {
    /**
     * @min 0
     * @example 10
     */
    count?: number;
  };
}

export interface Model55 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    title?: string;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  };
}

export interface ReviewSchemaWithTimestampz {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @min 1
   * @max 5
   * @example 4
   */
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /** @example "2020-01-01T00:00:00.000Z" */
  createdAt?: number;
  /** @example "2020-01-01T00:00:00.000Z" */
  updatedAt?: number;
}

export interface Model56 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @min 1
     * @max 5
     * @example 4
     */
    rating?: number;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    trainer?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    };
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /** @example "2020-01-01T00:00:00.000Z" */
    createdAt?: number;
    /** @example "2020-01-01T00:00:00.000Z" */
    updatedAt?: number;
  };
}

export interface Model57 {
  /** @example true */
  ok?: boolean;
  result?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
}

export type Model58 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  cityId: string;
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    /** @example "+07:00" */
    utcOffset: string;
  };
  gender?: "male" | "female" | "other";
  /**
   * @minLength 2
   * @maxLength 5000
   * @example "Alexandrov"
   */
  about?: string;
  rating?: number;
  reviews?: {
    rating?: number;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  dictionaryId: string;
  dictionary?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    languages?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Russian"
       */
      name?: string;
    }[];
  };
  certificates?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    name?: string;
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
  /**
   * @minLength 10
   * @maxLength 20
   * @example "+93247587346178"
   */
  phone?: string;
  experience?: number;
  images?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @maxLength 1000
     * @example "sfece"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
    /** @format date */
    createdAt?: string;
  }[];
  /** @format date */
  deletedAt?: string;
  settings?: object;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
}[];

export interface Model59 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  }[];
}

export interface Model60 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    }[];
  };
}

export type Model61 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  cityId: string;
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    /** @example "+07:00" */
    utcOffset: string;
  };
  gender?: "male" | "female" | "other";
  /**
   * @minLength 2
   * @maxLength 5000
   * @example "Alexandrov"
   */
  about?: string;
  rating?: number;
  reviews?: {
    rating?: number;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  dictionaryId: string;
  dictionary?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    languages?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Russian"
       */
      name?: string;
    }[];
  };
  certificates?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    name?: string;
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
  /**
   * @minLength 10
   * @maxLength 20
   * @example "+93247587346178"
   */
  phone?: string;
  experience?: number;
  images?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @maxLength 1000
     * @example "sfece"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
    /** @format date */
    createdAt?: string;
  }[];
  /** @format date */
  deletedAt?: string;
  settings?: object;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
}[];

export interface Model62 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  }[];
}

export interface Model63 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    }[];
  };
}

export interface Model64 {
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}

export type Model65 = {
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}[];

export interface Model66 {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}

export type Model67 = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}[];

export interface Model68 {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}

export type Videos = {
  id?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "filename"
   */
  filename?: string;
  /**
   * @maxLength 1000
   * @example "sfece"
   */
  key?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
  /** @format date */
  createdAt?: string;
}[];

export interface TrainerSchemaWithVideos {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  cityId: string;
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    /** @example "+07:00" */
    utcOffset: string;
  };
  gender?: "male" | "female" | "other";
  /**
   * @minLength 2
   * @maxLength 5000
   * @example "Alexandrov"
   */
  about?: string;
  rating?: number;
  reviews?: {
    rating?: number;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  dictionaryId: string;
  dictionary?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    languages?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Russian"
       */
      name?: string;
    }[];
  };
  certificates?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    name?: string;
  }[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
  /**
   * @minLength 10
   * @maxLength 20
   * @example "+93247587346178"
   */
  phone?: string;
  experience?: number;
  images?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @maxLength 1000
     * @example "sfece"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
    /** @format date */
    createdAt?: string;
  }[];
  videos?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @maxLength 1000
     * @example "sfece"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
    /** @format date */
    createdAt?: string;
  }[];
  /** @format date */
  deletedAt?: string;
  settings?: object;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
}

export interface Model69 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    videos?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
}

export interface Model70 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "2" */
    restOfSession?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
  };
}

export type Model71 = {
  id?: string;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  emailConfirm?: boolean;
  gender?: "male" | "female" | "other";
  /** @example "admin" */
  role?: string;
  /**
   * @minLength 10
   * @maxLength 20
   * @example "Alexandrov"
   */
  phone?: string;
  injures?: boolean;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  notification?: boolean;
  pushId?: string;
  socialId?: string;
  stripeCustomerId?: string;
  roleId?: string;
  countryId?: string;
  goalId?: string;
  fileId?: string;
  cityId?: string;
  languageId?: string;
  security?: string;
  goal?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Gaol"
     */
    name?: string;
  };
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
  };
  subscriptions?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    restOfSession?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name?: string;
      smallPrice?: number;
      mediumPrice?: number;
      highPrice?: number;
      maxPrice?: number;
      smallAmount?: number;
      mediumAmount?: number;
      highAmount?: number;
      maxAmount?: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      goals?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      }[];
    };
  }[];
  avatar?: string;
  cards?: {
    cardHolder?: string;
    cardNumber?: string;
    expiry?: string;
  }[];
  favoritesTrainer?: string[];
  city?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Gaol"
     */
    name?: string;
  };
  timeToNotification?: number;
}[];

export interface Model72 {
  /** @example 10 */
  count?: number;
  items?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  }[];
}

export interface Model73 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    }[];
  };
}

export interface BookingSchemaWithoutUser {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  status?: "finished" | "active" | "cancel" | "not_done";
  /** @format date */
  bookingDate?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  locationId: string;
  location?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  };
  /**
   * @minLength 2
   * @maxLength 500
   * @example "comment"
   */
  comment?: string;
}

export type Model74 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  status?: "finished" | "active" | "cancel" | "not_done";
  /** @format date */
  bookingDate?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  locationId: string;
  location?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  };
  /**
   * @minLength 2
   * @maxLength 500
   * @example "comment"
   */
  comment?: string;
}[];

export interface Model75 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    status?: "finished" | "active" | "cancel" | "not_done";
    /** @format date */
    bookingDate?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    trainer?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    locationId: string;
    location?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Location name"
       */
      name?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "address"
       */
      address?: string;
      /**
       * @min -90
       * @max 90
       */
      latitude?: number;
      /**
       * @min -180
       * @max 180
       */
      longitude?: number;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "url"
       */
      url?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
    };
    /**
     * @minLength 2
     * @maxLength 500
     * @example "comment"
     */
    comment?: string;
  }[];
}

export interface Model76 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      status?: "finished" | "active" | "cancel" | "not_done";
      /** @format date */
      bookingDate?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      trainer?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
          cities?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            /** @example "+07:00" */
            utcOffset: string;
          }[];
        };
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        cityId: string;
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          /** @example "+07:00" */
          utcOffset: string;
        };
        gender?: "male" | "female" | "other";
        /**
         * @minLength 2
         * @maxLength 5000
         * @example "Alexandrov"
         */
        about?: string;
        rating?: number;
        reviews?: {
          rating?: number;
          /**
           * @minLength 2
           * @maxLength 500
           * @example "Fake trainer/scam"
           */
          text?: string;
          user?: {
            id?: string;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            emailConfirm?: boolean;
            gender?: "male" | "female" | "other";
            /** @example "admin" */
            role?: string;
            /**
             * @minLength 10
             * @maxLength 20
             * @example "Alexandrov"
             */
            phone?: string;
            injures?: boolean;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            notification?: boolean;
            pushId?: string;
            socialId?: string;
            stripeCustomerId?: string;
            roleId?: string;
            countryId?: string;
            goalId?: string;
            fileId?: string;
            cityId?: string;
            languageId?: string;
            security?: string;
            goal?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            subscriptions?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name?: string;
                smallPrice?: number;
                mediumPrice?: number;
                highPrice?: number;
                maxPrice?: number;
                smallAmount?: number;
                mediumAmount?: number;
                highAmount?: number;
                maxAmount?: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                goals?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
              };
            }[];
            avatar?: string;
            cards?: {
              cardHolder?: string;
              cardNumber?: string;
              expiry?: string;
            }[];
            favoritesTrainer?: string[];
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            timeToNotification?: number;
          };
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        dictionaryId: string;
        dictionary?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          trainerId: string;
          languages?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Russian"
             */
            name?: string;
          }[];
        };
        certificates?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fake trainer/scam"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name: string;
          /**
           * @min 1
           * @max 9999
           */
          smallPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          mediumPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          highPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          maxPrice: number;
          /**
           * @min 1
           * @max 99
           */
          smallAmount: number;
          /**
           * @min 1
           * @max 99
           */
          mediumAmount: number;
          /**
           * @min 1
           * @max 99
           */
          highAmount: number;
          /**
           * @min 1
           * @max 99
           */
          maxAmount: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          goals: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 30
             * @example "Gaol"
             */
            name?: string;
          }[];
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          image?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "filename"
             */
            filename?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "Fake trainer/scam"
             */
            key?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        };
        /**
         * @minLength 10
         * @maxLength 20
         * @example "+93247587346178"
         */
        phone?: string;
        experience?: number;
        images?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @maxLength 1000
           * @example "sfece"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
          /** @format date */
          createdAt?: string;
        }[];
        /** @format date */
        deletedAt?: string;
        settings?: object;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      locationId: string;
      location?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Location name"
         */
        name?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "address"
         */
        address?: string;
        /**
         * @min -90
         * @max 90
         */
        latitude?: number;
        /**
         * @min -180
         * @max 180
         */
        longitude?: number;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "url"
         */
        url?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
          cities?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            /** @example "+07:00" */
            utcOffset: string;
          }[];
        };
      };
      /**
       * @minLength 2
       * @maxLength 500
       * @example "comment"
       */
      comment?: string;
    }[];
  };
}

export type Model77 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /** @example "2" */
  restOfSession?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  subscription?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
}[];

export interface Model78 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "2" */
    restOfSession?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
  }[];
}

export interface Model79 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "2" */
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
    }[];
  };
}

export interface Model80 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}

export type Model81 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Location name"
   */
  name?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "address"
   */
  address?: string;
  /**
   * @min -90
   * @max 90
   */
  latitude?: number;
  /**
   * @min -180
   * @max 180
   */
  longitude?: number;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "url"
   */
  url?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  country?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
}[];

export interface Model82 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  }[];
}

export interface Model83 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Location name"
       */
      name?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "address"
       */
      address?: string;
      /**
       * @min -90
       * @max 90
       */
      latitude?: number;
      /**
       * @min -180
       * @max 180
       */
      longitude?: number;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "url"
       */
      url?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
    }[];
  };
}

export type Model84 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @min 1
   * @max 5
   * @example 4
   */
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /** @example "2020-01-01T00:00:00.000Z" */
  createdAt?: number;
  /** @example "2020-01-01T00:00:00.000Z" */
  updatedAt?: number;
}[];

export interface Model85 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @min 1
     * @max 5
     * @example 4
     */
    rating?: number;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    trainer?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    };
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /** @example "2020-01-01T00:00:00.000Z" */
    createdAt?: number;
    /** @example "2020-01-01T00:00:00.000Z" */
    updatedAt?: number;
  }[];
}

export interface Model86 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @min 1
       * @max 5
       * @example 4
       */
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      trainer?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
          cities?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            /** @example "+07:00" */
            utcOffset: string;
          }[];
        };
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        cityId: string;
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          /** @example "+07:00" */
          utcOffset: string;
        };
        gender?: "male" | "female" | "other";
        /**
         * @minLength 2
         * @maxLength 5000
         * @example "Alexandrov"
         */
        about?: string;
        rating?: number;
        reviews?: {
          rating?: number;
          /**
           * @minLength 2
           * @maxLength 500
           * @example "Fake trainer/scam"
           */
          text?: string;
          user?: {
            id?: string;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            emailConfirm?: boolean;
            gender?: "male" | "female" | "other";
            /** @example "admin" */
            role?: string;
            /**
             * @minLength 10
             * @maxLength 20
             * @example "Alexandrov"
             */
            phone?: string;
            injures?: boolean;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            notification?: boolean;
            pushId?: string;
            socialId?: string;
            stripeCustomerId?: string;
            roleId?: string;
            countryId?: string;
            goalId?: string;
            fileId?: string;
            cityId?: string;
            languageId?: string;
            security?: string;
            goal?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            subscriptions?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name?: string;
                smallPrice?: number;
                mediumPrice?: number;
                highPrice?: number;
                maxPrice?: number;
                smallAmount?: number;
                mediumAmount?: number;
                highAmount?: number;
                maxAmount?: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                goals?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
              };
            }[];
            avatar?: string;
            cards?: {
              cardHolder?: string;
              cardNumber?: string;
              expiry?: string;
            }[];
            favoritesTrainer?: string[];
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            timeToNotification?: number;
          };
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        dictionaryId: string;
        dictionary?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          trainerId: string;
          languages?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Russian"
             */
            name?: string;
          }[];
        };
        certificates?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fake trainer/scam"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name: string;
          /**
           * @min 1
           * @max 9999
           */
          smallPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          mediumPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          highPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          maxPrice: number;
          /**
           * @min 1
           * @max 99
           */
          smallAmount: number;
          /**
           * @min 1
           * @max 99
           */
          mediumAmount: number;
          /**
           * @min 1
           * @max 99
           */
          highAmount: number;
          /**
           * @min 1
           * @max 99
           */
          maxAmount: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          goals: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 30
             * @example "Gaol"
             */
            name?: string;
          }[];
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          image?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "filename"
             */
            filename?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "Fake trainer/scam"
             */
            key?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        };
        /**
         * @minLength 10
         * @maxLength 20
         * @example "+93247587346178"
         */
        phone?: string;
        experience?: number;
        images?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @maxLength 1000
           * @example "sfece"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
          /** @format date */
          createdAt?: string;
        }[];
        /** @format date */
        deletedAt?: string;
        settings?: object;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
      };
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
      /** @example "2020-01-01T00:00:00.000Z" */
      createdAt?: number;
      /** @example "2020-01-01T00:00:00.000Z" */
      updatedAt?: number;
    }[];
  };
}

/** @example "sunday" */
export type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export interface TimeSlotSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}

export type Model87 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export interface Model88 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
}

export interface Model89 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
  };
}

export type Model90 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  status?: "finished" | "active" | "cancel" | "not_done";
  /** @format date */
  bookingDate?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  locationId: string;
  location?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  };
  /**
   * @minLength 2
   * @maxLength 500
   * @example "comment"
   */
  comment?: string;
}[];

export interface Model91 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    status?: "finished" | "active" | "cancel" | "not_done";
    /** @format date */
    bookingDate?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
    trainer?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    locationId: string;
    location?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Location name"
       */
      name?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "address"
       */
      address?: string;
      /**
       * @min -90
       * @max 90
       */
      latitude?: number;
      /**
       * @min -180
       * @max 180
       */
      longitude?: number;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "url"
       */
      url?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
    };
    /**
     * @minLength 2
     * @maxLength 500
     * @example "comment"
     */
    comment?: string;
  }[];
}

export interface Model92 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      status?: "finished" | "active" | "cancel" | "not_done";
      /** @format date */
      bookingDate?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      trainer?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
          cities?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            /** @example "+07:00" */
            utcOffset: string;
          }[];
        };
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        cityId: string;
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          /** @example "+07:00" */
          utcOffset: string;
        };
        gender?: "male" | "female" | "other";
        /**
         * @minLength 2
         * @maxLength 5000
         * @example "Alexandrov"
         */
        about?: string;
        rating?: number;
        reviews?: {
          rating?: number;
          /**
           * @minLength 2
           * @maxLength 500
           * @example "Fake trainer/scam"
           */
          text?: string;
          user?: {
            id?: string;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            emailConfirm?: boolean;
            gender?: "male" | "female" | "other";
            /** @example "admin" */
            role?: string;
            /**
             * @minLength 10
             * @maxLength 20
             * @example "Alexandrov"
             */
            phone?: string;
            injures?: boolean;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            notification?: boolean;
            pushId?: string;
            socialId?: string;
            stripeCustomerId?: string;
            roleId?: string;
            countryId?: string;
            goalId?: string;
            fileId?: string;
            cityId?: string;
            languageId?: string;
            security?: string;
            goal?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            subscriptions?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name?: string;
                smallPrice?: number;
                mediumPrice?: number;
                highPrice?: number;
                maxPrice?: number;
                smallAmount?: number;
                mediumAmount?: number;
                highAmount?: number;
                maxAmount?: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                goals?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
              };
            }[];
            avatar?: string;
            cards?: {
              cardHolder?: string;
              cardNumber?: string;
              expiry?: string;
            }[];
            favoritesTrainer?: string[];
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            timeToNotification?: number;
          };
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        dictionaryId: string;
        dictionary?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          trainerId: string;
          languages?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Russian"
             */
            name?: string;
          }[];
        };
        certificates?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fake trainer/scam"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name: string;
          /**
           * @min 1
           * @max 9999
           */
          smallPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          mediumPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          highPrice: number;
          /**
           * @min 1
           * @max 9999
           */
          maxPrice: number;
          /**
           * @min 1
           * @max 99
           */
          smallAmount: number;
          /**
           * @min 1
           * @max 99
           */
          mediumAmount: number;
          /**
           * @min 1
           * @max 99
           */
          highAmount: number;
          /**
           * @min 1
           * @max 99
           */
          maxAmount: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          goals: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 30
             * @example "Gaol"
             */
            name?: string;
          }[];
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          image?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "filename"
             */
            filename?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "Fake trainer/scam"
             */
            key?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        };
        /**
         * @minLength 10
         * @maxLength 20
         * @example "+93247587346178"
         */
        phone?: string;
        experience?: number;
        images?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @maxLength 1000
           * @example "sfece"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
          /** @format date */
          createdAt?: string;
        }[];
        /** @format date */
        deletedAt?: string;
        settings?: object;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      locationId: string;
      location?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Location name"
         */
        name?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "address"
         */
        address?: string;
        /**
         * @min -90
         * @max 90
         */
        latitude?: number;
        /**
         * @min -180
         * @max 180
         */
        longitude?: number;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "url"
         */
        url?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
          cities?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            /** @example "+07:00" */
            utcOffset: string;
          }[];
        };
      };
      /**
       * @minLength 2
       * @maxLength 500
       * @example "comment"
       */
      comment?: string;
    }[];
  };
}

export interface StatsSchema {
  /**
   * @min 1
   * @max 5
   * @example 4
   */
  rating?: number;
  /**
   * @min 0
   * @max 500
   * @example 4
   */
  rating_count?: number;
}

export type Model93 = {
  /**
   * @min 1
   * @max 5
   * @example 4
   */
  rating?: number;
  /**
   * @min 0
   * @max 500
   * @example 4
   */
  rating_count?: number;
}[];

export interface Model94 {
  /** @example 10 */
  count?: number;
  items?: {
    /**
     * @min 1
     * @max 5
     * @example 4
     */
    rating?: number;
    /**
     * @min 0
     * @max 500
     * @example 4
     */
    rating_count?: number;
  }[];
}

export interface Model95 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /**
       * @min 1
       * @max 5
       * @example 4
       */
      rating?: number;
      /**
       * @min 0
       * @max 500
       * @example 4
       */
      rating_count?: number;
    }[];
  };
}

export type Model96 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export interface Model97 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
}

export interface Model98 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
  };
}

export type Monday = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export type Tuesday = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export type Wednesday = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export type Thursday = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export type Friday = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export type Saturday = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export type Sunday = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export interface Model99 {
  monday?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
  tuesday?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
  wednesday?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
  thursday?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
  friday?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
  saturday?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
  sunday?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
}

export interface Model100 {
  /** @example 10 */
  count?: number;
  items?: {
    monday?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
    tuesday?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
    wednesday?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
    thursday?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
    friday?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
    saturday?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
    sunday?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
  };
}

export interface ListTimeSlotAdmin {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      monday?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @format date
         * @example "2020-01-01"
         */
        date?: string;
        /** @example "10:00" */
        time?: string;
        /** @example "sunday" */
        dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
        /** @example true */
        isAvilable?: boolean;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      }[];
      tuesday?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @format date
         * @example "2020-01-01"
         */
        date?: string;
        /** @example "10:00" */
        time?: string;
        /** @example "sunday" */
        dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
        /** @example true */
        isAvilable?: boolean;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      }[];
      wednesday?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @format date
         * @example "2020-01-01"
         */
        date?: string;
        /** @example "10:00" */
        time?: string;
        /** @example "sunday" */
        dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
        /** @example true */
        isAvilable?: boolean;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      }[];
      thursday?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @format date
         * @example "2020-01-01"
         */
        date?: string;
        /** @example "10:00" */
        time?: string;
        /** @example "sunday" */
        dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
        /** @example true */
        isAvilable?: boolean;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      }[];
      friday?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @format date
         * @example "2020-01-01"
         */
        date?: string;
        /** @example "10:00" */
        time?: string;
        /** @example "sunday" */
        dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
        /** @example true */
        isAvilable?: boolean;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      }[];
      saturday?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @format date
         * @example "2020-01-01"
         */
        date?: string;
        /** @example "10:00" */
        time?: string;
        /** @example "sunday" */
        dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
        /** @example true */
        isAvilable?: boolean;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      }[];
      sunday?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @format date
         * @example "2020-01-01"
         */
        date?: string;
        /** @example "10:00" */
        time?: string;
        /** @example "sunday" */
        dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
        /** @example true */
        isAvilable?: boolean;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      }[];
    };
  };
}

export interface CreateBookingSchema {
  bookingDate: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  locationId: string;
}

export interface CreateCertificateSchema {
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  name?: string;
}

export interface Model101 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    name?: string;
  };
}

export interface CreateCitySchema {
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Paris"
   */
  name?: string;
  /** @example "+07:00" */
  utcOffset: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
}

export interface Model102 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Paris"
     */
    name?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    /** @example "+07:00" */
    utcOffset: string;
  };
}

export interface CreateCountrySchema {
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Germany"
   */
  name: string;
  /**
   * @minLength 2
   * @maxLength 3
   * @example "AG"
   */
  shortname: string;
  /** @example "🇦🇩" */
  flag?: string;
}

export interface Model103 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Germany"
     */
    name?: string;
    /** @example "🇦🇩" */
    flag?: string;
    /**
     * @minLength 2
     * @maxLength 3
     * @example "AG"
     */
    shortname?: string;
    cities?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      /** @example "+07:00" */
      utcOffset: string;
    }[];
  };
}

export interface Model104 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "Fake trainer/scam"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  };
}

export interface CreateGoalSchema {
  /**
   * @minLength 2
   * @maxLength 30
   * @example "Gaol"
   */
  name?: string;
}

export interface Model105 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 30
     * @example "Gaol"
     */
    name?: string;
  };
}

export interface CreateLanguageSchema {
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Russian"
   */
  name?: string;
}

export interface Model106 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Russian"
     */
    name?: string;
  };
}

export interface CreateLocationSchema {
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Location name"
   */
  name?: string;
  /**
   * @minLength 2
   * @maxLength 1000
   * @example "address"
   */
  address?: string;
  /**
   * @min -90
   * @max 90
   */
  latitude?: number;
  /**
   * @min -180
   * @max 180
   */
  longitude?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
}

export interface Model107 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Location name"
     */
    name?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "address"
     */
    address?: string;
    /**
     * @min -90
     * @max 90
     */
    latitude?: number;
    /**
     * @min -180
     * @max 180
     */
    longitude?: number;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "url"
     */
    url?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
  };
}

export interface CreateNotificationSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  userId: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  title?: string;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
}

export interface Model108 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    title?: string;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  };
}

export interface CreateReviewSchema {
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}

export interface ReviewSchema {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @min 1
   * @max 5
   * @example 4
   */
  rating?: number;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  trainer?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}

export interface Model109 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @min 1
     * @max 5
     * @example 4
     */
    rating?: number;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    trainer?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
        cities?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Paris"
           */
          name?: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          countryId: string;
          /** @example "+07:00" */
          utcOffset: string;
        }[];
      };
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      cityId: string;
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        /** @example "+07:00" */
        utcOffset: string;
      };
      gender?: "male" | "female" | "other";
      /**
       * @minLength 2
       * @maxLength 5000
       * @example "Alexandrov"
       */
      about?: string;
      rating?: number;
      reviews?: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        user?: {
          id?: string;
          /**
           * @minLength 3
           * @maxLength 100
           * @example "email@example.com"
           */
          email?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandr"
           */
          firstName?: string;
          /**
           * @minLength 2
           * @maxLength 200
           * @example "Alexandrov"
           */
          lastName?: string;
          emailConfirm?: boolean;
          gender?: "male" | "female" | "other";
          /** @example "admin" */
          role?: string;
          /**
           * @minLength 10
           * @maxLength 20
           * @example "Alexandrov"
           */
          phone?: string;
          injures?: boolean;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          notification?: boolean;
          pushId?: string;
          socialId?: string;
          stripeCustomerId?: string;
          roleId?: string;
          countryId?: string;
          goalId?: string;
          fileId?: string;
          cityId?: string;
          languageId?: string;
          security?: string;
          goal?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          country?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
          };
          subscriptions?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name?: string;
              smallPrice?: number;
              mediumPrice?: number;
              highPrice?: number;
              maxPrice?: number;
              smallAmount?: number;
              mediumAmount?: number;
              highAmount?: number;
              maxAmount?: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              goals?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              }[];
            };
          }[];
          avatar?: string;
          cards?: {
            cardHolder?: string;
            cardNumber?: string;
            expiry?: string;
          }[];
          favoritesTrainer?: string[];
          city?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          };
          timeToNotification?: number;
        };
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      dictionaryId: string;
      dictionary?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        languages?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Russian"
           */
          name?: string;
        }[];
      };
      certificates?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 30
           * @example "Gaol"
           */
          name?: string;
        }[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        image?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "filename"
           */
          filename?: string;
          /**
           * @minLength 2
           * @maxLength 1000
           * @example "Fake trainer/scam"
           */
          key?: string;
          /**
           * @maxLength 100
           * @example "type"
           */
          type?: string;
        };
      };
      /**
       * @minLength 10
       * @maxLength 20
       * @example "+93247587346178"
       */
      phone?: string;
      experience?: number;
      images?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @maxLength 1000
         * @example "sfece"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
        /** @format date */
        createdAt?: string;
      }[];
      /** @format date */
      deletedAt?: string;
      settings?: object;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
    };
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
  };
}

export type Model110 = string[];

export interface CreateSubscriptionSchema {
  /**
   * @minLength 2
   * @maxLength 30
   * @example "Fitnessssss"
   */
  name: string;
  /**
   * @min 1
   * @max 9999
   */
  smallPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  mediumPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  highPrice: number;
  /**
   * @min 1
   * @max 9999
   */
  maxPrice: number;
  /**
   * @min 1
   * @max 99
   */
  smallAmount: number;
  /**
   * @min 1
   * @max 99
   */
  mediumAmount: number;
  /**
   * @min 1
   * @max 99
   */
  highAmount: number;
  /**
   * @min 1
   * @max 99
   */
  maxAmount: number;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  goals: string[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  fileId: string;
}

export interface Model111 {
  /** @example true */
  ok?: boolean;
  result?: {
    id: string;
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fitnessssss"
     */
    name: string;
    /**
     * @min 1
     * @max 9999
     */
    smallPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    mediumPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    highPrice: number;
    /**
     * @min 1
     * @max 9999
     */
    maxPrice: number;
    /**
     * @min 1
     * @max 99
     */
    smallAmount: number;
    /**
     * @min 1
     * @max 99
     */
    mediumAmount: number;
    /**
     * @min 1
     * @max 99
     */
    highAmount: number;
    /**
     * @min 1
     * @max 99
     */
    maxAmount: number;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    goals: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 30
       * @example "Gaol"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    fileId: string;
    image?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "Fake trainer/scam"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    };
  };
}

export type Model112 = string[];

export type Model113 = string[];

export type Model114 = string[];

export interface CreateTrainersSchema {
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  firstName: string;
  experience: number;
  gender: "male" | "female" | "other";
  /**
   * @minLength 2
   * @maxLength 5000
   * @example "about"
   */
  about?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  countryId: string;
  languages: string[];
  certificates: string[];
  images: string[];
  /**
   * @minLength 10
   * @maxLength 20
   * @example "+93247587346178"
   */
  phone: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  cityId: string;
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
}

export interface Model115 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
}

export interface CreateUserSubscriptionSchema {
  /** @example "2" */
  restOfSession?: number;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  subscriptionId: string;
}

export interface Model116 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /** @example "2" */
    restOfSession?: number;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    userId: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
  };
}

export interface ChangePasswordRequest {
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  oldPassword: string;
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  newPassword: string;
}

export interface OutputEmptySchema {
  /** @example true */
  ok?: boolean;
}

export interface JwtTokens {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  access?: string;
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
  refresh?: string;
}

export interface Model117 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export interface Model118 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export interface Model119 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export type Ids = string[];

export interface Model120 {
  ids?: string[];
}

export type Model121 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Fake trainer/scam"
   */
  title?: string;
  /**
   * @minLength 2
   * @maxLength 500
   * @example "Fake trainer/scam"
   */
  text?: string;
  /**
   * @maxLength 100
   * @example "type"
   */
  type?: string;
}[];

export interface Model122 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /**
     * @minLength 2
     * @maxLength 100
     * @example "Fake trainer/scam"
     */
    title?: string;
    /**
     * @minLength 2
     * @maxLength 500
     * @example "Fake trainer/scam"
     */
    text?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  }[];
}

export interface Model123 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      title?: string;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
    }[];
  };
}

export interface Model124 {
  subscriptionId: string;
  numberOfSession: number;
}

export interface Model125 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export interface CheckVerificationCodeSchema {
  /** @example "111111" */
  code?: number;
}

export interface Model126 {
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email: string;
}

export interface UserSchemaWithNewPassword {
  user?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  newPassword?: string;
  /** @example "111111" */
  verificationCode?: number;
}

export interface Model127 {
  /** @example true */
  ok?: boolean;
  result?: {
    user?: {
      id?: string;
      /**
       * @minLength 3
       * @maxLength 100
       * @example "email@example.com"
       */
      email?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandr"
       */
      firstName?: string;
      /**
       * @minLength 2
       * @maxLength 200
       * @example "Alexandrov"
       */
      lastName?: string;
      emailConfirm?: boolean;
      gender?: "male" | "female" | "other";
      /** @example "admin" */
      role?: string;
      /**
       * @minLength 10
       * @maxLength 20
       * @example "Alexandrov"
       */
      phone?: string;
      injures?: boolean;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      notification?: boolean;
      pushId?: string;
      socialId?: string;
      stripeCustomerId?: string;
      roleId?: string;
      countryId?: string;
      goalId?: string;
      fileId?: string;
      cityId?: string;
      languageId?: string;
      security?: string;
      goal?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      subscriptions?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        subscription?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Fitnessssss"
           */
          name?: string;
          smallPrice?: number;
          mediumPrice?: number;
          highPrice?: number;
          maxPrice?: number;
          smallAmount?: number;
          mediumAmount?: number;
          highAmount?: number;
          maxAmount?: number;
          /**
           * @min 1
           * @max 999999
           */
          loyaltyPoints?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          fileId: string;
          goals?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Gaol"
             */
            name?: string;
          }[];
        };
      }[];
      avatar?: string;
      cards?: {
        cardHolder?: string;
        cardNumber?: string;
        expiry?: string;
      }[];
      favoritesTrainer?: string[];
      city?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Gaol"
         */
        name?: string;
      };
      timeToNotification?: number;
    };
    /**
     * @minLength 8
     * @maxLength 30
     * @example "pa@s$word"
     */
    newPassword?: string;
    /** @example "111111" */
    verificationCode?: number;
  };
}

export interface Model128 {
  /** @example "3e09ceed489255166ca022987d32fb46bf846fa92a29cbbd8330705d0fbd3f4e" */
  token: string;
  /**
   * @min 100000
   * @max 999999
   * @example 123653
   */
  code: number;
}

export interface Model129 {
  /** @example "3e09ceed489255166ca022987d32fb46bf846fa92a29cbbd8330705d0fbd3f4e" */
  token: string;
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  password: string;
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  confirmPassword: string;
}

export interface Model130 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}

export interface Model131 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export interface Model132 {
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email: string;
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  password: string;
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  repeatPassword: string;
}

export interface Model133 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export interface Model134 {
  /** @example "123gewrewijr321" */
  idToken: string;
}

export interface Model135 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export interface Model136 {
  /** @example "123gewrewijr321" */
  idToken: string;
}

export interface Model137 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
    access?: string;
    /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
    refresh?: string;
  };
}

export interface Model138 {
  /** @maxLength 50 */
  accountId?: string;
  returnLink?: string;
}

export interface FromToSchema {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}

export type Model139 = {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}[];

export type Model140 = {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}[];

export type Model141 = {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}[];

export type Model142 = {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}[];

export type Model143 = {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}[];

export type Model144 = {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}[];

export type Model145 = {
  /**
   * @min 0
   * @max 24
   * @example 9
   */
  from?: number;
  /**
   * @min 0
   * @max 24
   * @example 18
   */
  to?: number;
}[];

export interface CreateTimeSlotsSchema {
  monday?: {
    /**
     * @min 0
     * @max 24
     * @example 9
     */
    from?: number;
    /**
     * @min 0
     * @max 24
     * @example 18
     */
    to?: number;
  }[];
  tuesday?: {
    /**
     * @min 0
     * @max 24
     * @example 9
     */
    from?: number;
    /**
     * @min 0
     * @max 24
     * @example 18
     */
    to?: number;
  }[];
  wednesday?: {
    /**
     * @min 0
     * @max 24
     * @example 9
     */
    from?: number;
    /**
     * @min 0
     * @max 24
     * @example 18
     */
    to?: number;
  }[];
  thursday?: {
    /**
     * @min 0
     * @max 24
     * @example 9
     */
    from?: number;
    /**
     * @min 0
     * @max 24
     * @example 18
     */
    to?: number;
  }[];
  friday?: {
    /**
     * @min 0
     * @max 24
     * @example 9
     */
    from?: number;
    /**
     * @min 0
     * @max 24
     * @example 18
     */
    to?: number;
  }[];
  saturday?: {
    /**
     * @min 0
     * @max 24
     * @example 9
     */
    from?: number;
    /**
     * @min 0
     * @max 24
     * @example 18
     */
    to?: number;
  }[];
  sunday?: {
    /**
     * @min 0
     * @max 24
     * @example 9
     */
    from?: number;
    /**
     * @min 0
     * @max 24
     * @example 18
     */
    to?: number;
  }[];
}

export type Model146 = {
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  id: string;
  /**
   * @format date
   * @example "2020-01-01"
   */
  date?: string;
  /** @example "10:00" */
  time?: string;
  /** @example "sunday" */
  dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
  /** @example true */
  isAvilable?: boolean;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId: string;
}[];

export interface Model147 {
  /** @example 10 */
  count?: number;
  items?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @format date
     * @example "2020-01-01"
     */
    date?: string;
    /** @example "10:00" */
    time?: string;
    /** @example "sunday" */
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    /** @example true */
    isAvilable?: boolean;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    trainerId: string;
  }[];
}

export interface Model148 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example 10 */
    count?: number;
    items?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /**
       * @format date
       * @example "2020-01-01"
       */
      date?: string;
      /** @example "10:00" */
      time?: string;
      /** @example "sunday" */
      dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /** @example true */
      isAvilable?: boolean;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
    }[];
  };
}

export interface Model149 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    countryId: string;
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
      cities?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        /** @example "+07:00" */
        utcOffset: string;
      }[];
    };
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    cityId: string;
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Paris"
       */
      name?: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      countryId: string;
      country?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name?: string;
        /** @example "🇦🇩" */
        flag?: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname?: string;
      };
      /** @example "+07:00" */
      utcOffset: string;
    };
    gender?: "male" | "female" | "other";
    /**
     * @minLength 2
     * @maxLength 5000
     * @example "Alexandrov"
     */
    about?: string;
    rating?: number;
    reviews?: {
      rating?: number;
      /**
       * @minLength 2
       * @maxLength 500
       * @example "Fake trainer/scam"
       */
      text?: string;
      user?: {
        id?: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        emailConfirm?: boolean;
        gender?: "male" | "female" | "other";
        /** @example "admin" */
        role?: string;
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone?: string;
        injures?: boolean;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        notification?: boolean;
        pushId?: string;
        socialId?: string;
        stripeCustomerId?: string;
        roleId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        security?: string;
        goal?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        country?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Germany"
           */
          name?: string;
          /** @example "🇦🇩" */
          flag?: string;
          /**
           * @minLength 2
           * @maxLength 3
           * @example "AG"
           */
          shortname?: string;
        };
        subscriptions?: {
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          id: string;
          restOfSession?: number;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          userId: string;
          /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
          subscriptionId: string;
          subscription?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name?: string;
            smallPrice?: number;
            mediumPrice?: number;
            highPrice?: number;
            maxPrice?: number;
            smallAmount?: number;
            mediumAmount?: number;
            highAmount?: number;
            maxAmount?: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            goals?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        }[];
        avatar?: string;
        cards?: {
          cardHolder?: string;
          cardNumber?: string;
          expiry?: string;
        }[];
        favoritesTrainer?: string[];
        city?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        };
        timeToNotification?: number;
      };
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    dictionaryId: string;
    dictionary?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      trainerId: string;
      languages?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      }[];
    };
    certificates?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fake trainer/scam"
       */
      name?: string;
    }[];
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    subscriptionId: string;
    subscription?: {
      id: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Fitnessssss"
       */
      name: string;
      /**
       * @min 1
       * @max 9999
       */
      smallPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      mediumPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      highPrice: number;
      /**
       * @min 1
       * @max 9999
       */
      maxPrice: number;
      /**
       * @min 1
       * @max 99
       */
      smallAmount: number;
      /**
       * @min 1
       * @max 99
       */
      mediumAmount: number;
      /**
       * @min 1
       * @max 99
       */
      highAmount: number;
      /**
       * @min 1
       * @max 99
       */
      maxAmount: number;
      /**
       * @min 1
       * @max 999999
       */
      loyaltyPoints?: number;
      goals: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      }[];
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      fileId: string;
      image?: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        id: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "filename"
         */
        filename?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "Fake trainer/scam"
         */
        key?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      };
    };
    /**
     * @minLength 10
     * @maxLength 20
     * @example "+93247587346178"
     */
    phone?: string;
    experience?: number;
    images?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 1000
       * @example "filename"
       */
      filename?: string;
      /**
       * @maxLength 1000
       * @example "sfece"
       */
      key?: string;
      /**
       * @maxLength 100
       * @example "type"
       */
      type?: string;
      /** @format date */
      createdAt?: string;
    }[];
    /** @format date */
    deletedAt?: string;
    settings?: object;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
  };
}

export type Model150 = "finished" | "active" | "not_done";

export interface PutBookingSchema {
  status?: "finished" | "active" | "not_done";
  bookingDate?: string;
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  trainerId?: string;
}

export interface Model151 {
  /** @example true */
  ok?: boolean;
  result?: {
    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
    id: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "filename"
     */
    filename?: string;
    /**
     * @minLength 2
     * @maxLength 1000
     * @example "Fake trainer/scam"
     */
    key?: string;
    /**
     * @maxLength 100
     * @example "type"
     */
    type?: string;
  };
}

export type Model152 = string[];

export interface PutSubscriptionSchema {
  /**
   * @minLength 2
   * @maxLength 30
   * @example "Fitnessssss"
   */
  name?: string;
  smallPrice?: number;
  mediumPrice?: number;
  highPrice?: number;
  maxPrice?: number;
  smallAmount?: number;
  mediumAmount?: number;
  highAmount?: number;
  maxAmount?: number;
  /**
   * @min 1
   * @max 999999
   */
  loyaltyPoints?: number;
  goals?: string[];
  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
  fileId: string;
}

export interface Model153 {
  name?: string;
}

export interface Model154 {
  pushId: string;
}

export interface PutUserSchema {
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  firstName?: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  lastName?: string;
  gender?: "male" | "female" | "other";
  /**
   * @minLength 10
   * @maxLength 20
   * @example "Alexandrov"
   */
  phone: string;
  injures?: boolean;
  notification?: boolean;
  pushId?: string;
  countryId?: string;
  goalId?: string;
  fileId?: string;
  cityId?: string;
  languageId?: string;
  timeToNotification?: number;
}

export interface Model155 {
  /** @example true */
  ok?: boolean;
  result?: {
    id?: string;
    /**
     * @minLength 3
     * @maxLength 100
     * @example "email@example.com"
     */
    email?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandr"
     */
    firstName?: string;
    /**
     * @minLength 2
     * @maxLength 200
     * @example "Alexandrov"
     */
    lastName?: string;
    emailConfirm?: boolean;
    gender?: "male" | "female" | "other";
    /** @example "admin" */
    role?: string;
    /**
     * @minLength 10
     * @maxLength 20
     * @example "Alexandrov"
     */
    phone?: string;
    injures?: boolean;
    /**
     * @min 1
     * @max 999999
     */
    loyaltyPoints?: number;
    notification?: boolean;
    pushId?: string;
    socialId?: string;
    stripeCustomerId?: string;
    roleId?: string;
    countryId?: string;
    goalId?: string;
    fileId?: string;
    cityId?: string;
    languageId?: string;
    security?: string;
    goal?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    country?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Germany"
       */
      name?: string;
      /** @example "🇦🇩" */
      flag?: string;
      /**
       * @minLength 2
       * @maxLength 3
       * @example "AG"
       */
      shortname?: string;
    };
    subscriptions?: {
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      id: string;
      restOfSession?: number;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      userId: string;
      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
      subscriptionId: string;
      subscription?: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
        goals?: {
          id?: string;
          /**
           * @minLength 2
           * @maxLength 100
           * @example "Gaol"
           */
          name?: string;
        }[];
      };
    }[];
    avatar?: string;
    cards?: {
      cardHolder?: string;
      cardNumber?: string;
      expiry?: string;
    }[];
    favoritesTrainer?: string[];
    city?: {
      id?: string;
      /**
       * @minLength 2
       * @maxLength 100
       * @example "Gaol"
       */
      name?: string;
    };
    timeToNotification?: number;
  };
}

export interface CancelBookingSchema {
  /**
   * @minLength 2
   * @maxLength 500
   * @example "comment"
   */
  comment: string;
}

export interface Model156 {
  user?: string;
  /** @example "Success deleted" */
  message?: string;
}

export interface Model157 {
  /** @example true */
  ok?: boolean;
  result?: {
    user?: string;
    /** @example "Success deleted" */
    message?: string;
  };
}

export interface LoginData {
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email: string;
  /** @example "pa@s$word" */
  password: string;
}

export interface CreateNewUser {
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email: string;
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  password: string;
  /**
   * @minLength 8
   * @maxLength 30
   * @example "pa@s$word"
   */
  repeatPassword: string;
  /** @example "123gewrewijr321" */
  pushId: string;
}

export interface CreateNewAdmin {
  /**
   * @minLength 3
   * @maxLength 100
   * @example "email@example.com"
   */
  email: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandr"
   */
  lastName: string;
  /**
   * @minLength 2
   * @maxLength 200
   * @example "Alexandrov"
   */
  firstName: string;
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
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://toptrainers-dev.aldera-soft.ru/api",
    });
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
 * @title API Documentation
 * @version 1.1.0
 * @baseUrl https://toptrainers-dev.aldera-soft.ru/api
 *
 * API Documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  booking = {
    /**
     * No description
     *
     * @tags booking
     * @name GetBooking
     * @summary List all booking
     * @request GET:/booking
     * @secure
     */
    getBooking: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              status?: "finished" | "active" | "cancel" | "not_done";
              /** @format date */
              bookingDate?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              trainer?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                cityId: string;
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  /** @example "+07:00" */
                  utcOffset: string;
                };
                gender?: "male" | "female" | "other";
                /**
                 * @minLength 2
                 * @maxLength 5000
                 * @example "Alexandrov"
                 */
                about?: string;
                rating?: number;
                reviews?: {
                  rating?: number;
                  /**
                   * @minLength 2
                   * @maxLength 500
                   * @example "Fake trainer/scam"
                   */
                  text?: string;
                  user?: {
                    id?: string;
                    /**
                     * @minLength 3
                     * @maxLength 100
                     * @example "email@example.com"
                     */
                    email?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandr"
                     */
                    firstName?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandrov"
                     */
                    lastName?: string;
                    emailConfirm?: boolean;
                    gender?: "male" | "female" | "other";
                    /** @example "admin" */
                    role?: string;
                    /**
                     * @minLength 10
                     * @maxLength 20
                     * @example "Alexandrov"
                     */
                    phone?: string;
                    injures?: boolean;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    notification?: boolean;
                    pushId?: string;
                    socialId?: string;
                    stripeCustomerId?: string;
                    roleId?: string;
                    countryId?: string;
                    goalId?: string;
                    fileId?: string;
                    cityId?: string;
                    languageId?: string;
                    security?: string;
                    goal?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    country?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Germany"
                       */
                      name?: string;
                      /** @example "🇦🇩" */
                      flag?: string;
                      /**
                       * @minLength 2
                       * @maxLength 3
                       * @example "AG"
                       */
                      shortname?: string;
                    };
                    subscriptions?: {
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      id: string;
                      restOfSession?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      userId: string;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      subscriptionId: string;
                      subscription?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Fitnessssss"
                         */
                        name?: string;
                        smallPrice?: number;
                        mediumPrice?: number;
                        highPrice?: number;
                        maxPrice?: number;
                        smallAmount?: number;
                        mediumAmount?: number;
                        highAmount?: number;
                        maxAmount?: number;
                        /**
                         * @min 1
                         * @max 999999
                         */
                        loyaltyPoints?: number;
                        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                        fileId: string;
                        goals?: {
                          id?: string;
                          /**
                           * @minLength 2
                           * @maxLength 100
                           * @example "Gaol"
                           */
                          name?: string;
                        }[];
                      };
                    }[];
                    avatar?: string;
                    cards?: {
                      cardHolder?: string;
                      cardNumber?: string;
                      expiry?: string;
                    }[];
                    favoritesTrainer?: string[];
                    city?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    timeToNotification?: number;
                  };
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                dictionaryId: string;
                dictionary?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  trainerId: string;
                  languages?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Russian"
                     */
                    name?: string;
                  }[];
                };
                certificates?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fake trainer/scam"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name: string;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  smallPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  mediumPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  highPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  maxPrice: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  smallAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  mediumAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  highAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  maxAmount: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  goals: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 30
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  image?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "filename"
                     */
                    filename?: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "Fake trainer/scam"
                     */
                    key?: string;
                    /**
                     * @maxLength 100
                     * @example "type"
                     */
                    type?: string;
                  };
                };
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "+93247587346178"
                 */
                phone?: string;
                experience?: number;
                images?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @maxLength 1000
                   * @example "sfece"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                  /** @format date */
                  createdAt?: string;
                }[];
                /** @format date */
                deletedAt?: string;
                settings?: object;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              locationId: string;
              location?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Location name"
                 */
                name?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "address"
                 */
                address?: string;
                /**
                 * @min -90
                 * @max 90
                 */
                latitude?: number;
                /**
                 * @min -180
                 * @max 180
                 */
                longitude?: number;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "url"
                 */
                url?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
              };
              /**
               * @minLength 2
               * @maxLength 500
               * @example "comment"
               */
              comment?: string;
              /** @example "-03:00" */
              utcOffset?: string;
            }[];
          };
        },
        any
      >({
        path: `/booking`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name PostBooking
     * @summary Create new booking
     * @request POST:/booking
     * @secure
     */
    postBooking: (
      body: {
        bookingDate: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        locationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            status?: "finished" | "active" | "cancel" | "not_done";
            /** @format date */
            bookingDate?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            trainerId: string;
            trainer?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              cityId: string;
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                /** @example "+07:00" */
                utcOffset: string;
              };
              gender?: "male" | "female" | "other";
              /**
               * @minLength 2
               * @maxLength 5000
               * @example "Alexandrov"
               */
              about?: string;
              rating?: number;
              reviews?: {
                rating?: number;
                /**
                 * @minLength 2
                 * @maxLength 500
                 * @example "Fake trainer/scam"
                 */
                text?: string;
                user?: {
                  id?: string;
                  /**
                   * @minLength 3
                   * @maxLength 100
                   * @example "email@example.com"
                   */
                  email?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandr"
                   */
                  firstName?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandrov"
                   */
                  lastName?: string;
                  emailConfirm?: boolean;
                  gender?: "male" | "female" | "other";
                  /** @example "admin" */
                  role?: string;
                  /**
                   * @minLength 10
                   * @maxLength 20
                   * @example "Alexandrov"
                   */
                  phone?: string;
                  injures?: boolean;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  notification?: boolean;
                  pushId?: string;
                  socialId?: string;
                  stripeCustomerId?: string;
                  roleId?: string;
                  countryId?: string;
                  goalId?: string;
                  fileId?: string;
                  cityId?: string;
                  languageId?: string;
                  security?: string;
                  goal?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  subscriptions?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    restOfSession?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    userId: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    subscriptionId: string;
                    subscription?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Fitnessssss"
                       */
                      name?: string;
                      smallPrice?: number;
                      mediumPrice?: number;
                      highPrice?: number;
                      maxPrice?: number;
                      smallAmount?: number;
                      mediumAmount?: number;
                      highAmount?: number;
                      maxAmount?: number;
                      /**
                       * @min 1
                       * @max 999999
                       */
                      loyaltyPoints?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      fileId: string;
                      goals?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Gaol"
                         */
                        name?: string;
                      }[];
                    };
                  }[];
                  avatar?: string;
                  cards?: {
                    cardHolder?: string;
                    cardNumber?: string;
                    expiry?: string;
                  }[];
                  favoritesTrainer?: string[];
                  city?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  timeToNotification?: number;
                };
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              dictionaryId: string;
              dictionary?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
                languages?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Russian"
                   */
                  name?: string;
                }[];
              };
              certificates?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fake trainer/scam"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
              /**
               * @minLength 10
               * @maxLength 20
               * @example "+93247587346178"
               */
              phone?: string;
              experience?: number;
              images?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @maxLength 1000
                 * @example "sfece"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
                /** @format date */
                createdAt?: string;
              }[];
              /** @format date */
              deletedAt?: string;
              settings?: object;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
            };
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            locationId: string;
            location?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Location name"
               */
              name?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "address"
               */
              address?: string;
              /**
               * @min -90
               * @max 90
               */
              latitude?: number;
              /**
               * @min -180
               * @max 180
               */
              longitude?: number;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "url"
               */
              url?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
            };
            /**
             * @minLength 2
             * @maxLength 500
             * @example "comment"
             */
            comment?: string;
            /** @example "-03:00" */
            utcOffset?: string;
          };
        },
        any
      >({
        path: `/booking`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name GetBookingId
     * @summary Get booking entry by id
     * @request GET:/booking/{id}
     * @secure
     */
    getBookingId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            status?: "finished" | "active" | "cancel" | "not_done";
            /** @format date */
            bookingDate?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            trainerId: string;
            trainer?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              cityId: string;
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                /** @example "+07:00" */
                utcOffset: string;
              };
              gender?: "male" | "female" | "other";
              /**
               * @minLength 2
               * @maxLength 5000
               * @example "Alexandrov"
               */
              about?: string;
              rating?: number;
              reviews?: {
                rating?: number;
                /**
                 * @minLength 2
                 * @maxLength 500
                 * @example "Fake trainer/scam"
                 */
                text?: string;
                user?: {
                  id?: string;
                  /**
                   * @minLength 3
                   * @maxLength 100
                   * @example "email@example.com"
                   */
                  email?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandr"
                   */
                  firstName?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandrov"
                   */
                  lastName?: string;
                  emailConfirm?: boolean;
                  gender?: "male" | "female" | "other";
                  /** @example "admin" */
                  role?: string;
                  /**
                   * @minLength 10
                   * @maxLength 20
                   * @example "Alexandrov"
                   */
                  phone?: string;
                  injures?: boolean;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  notification?: boolean;
                  pushId?: string;
                  socialId?: string;
                  stripeCustomerId?: string;
                  roleId?: string;
                  countryId?: string;
                  goalId?: string;
                  fileId?: string;
                  cityId?: string;
                  languageId?: string;
                  security?: string;
                  goal?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  subscriptions?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    restOfSession?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    userId: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    subscriptionId: string;
                    subscription?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Fitnessssss"
                       */
                      name?: string;
                      smallPrice?: number;
                      mediumPrice?: number;
                      highPrice?: number;
                      maxPrice?: number;
                      smallAmount?: number;
                      mediumAmount?: number;
                      highAmount?: number;
                      maxAmount?: number;
                      /**
                       * @min 1
                       * @max 999999
                       */
                      loyaltyPoints?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      fileId: string;
                      goals?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Gaol"
                         */
                        name?: string;
                      }[];
                    };
                  }[];
                  avatar?: string;
                  cards?: {
                    cardHolder?: string;
                    cardNumber?: string;
                    expiry?: string;
                  }[];
                  favoritesTrainer?: string[];
                  city?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  timeToNotification?: number;
                };
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              dictionaryId: string;
              dictionary?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
                languages?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Russian"
                   */
                  name?: string;
                }[];
              };
              certificates?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fake trainer/scam"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
              /**
               * @minLength 10
               * @maxLength 20
               * @example "+93247587346178"
               */
              phone?: string;
              experience?: number;
              images?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @maxLength 1000
                 * @example "sfece"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
                /** @format date */
                createdAt?: string;
              }[];
              /** @format date */
              deletedAt?: string;
              settings?: object;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
            };
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            locationId: string;
            location?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Location name"
               */
              name?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "address"
               */
              address?: string;
              /**
               * @min -90
               * @max 90
               */
              latitude?: number;
              /**
               * @min -180
               * @max 180
               */
              longitude?: number;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "url"
               */
              url?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
            };
            /**
             * @minLength 2
             * @maxLength 500
             * @example "comment"
             */
            comment?: string;
            /** @example "-03:00" */
            utcOffset?: string;
          };
        },
        any
      >({
        path: `/booking/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name PutBookingId
     * @summary Update booking entry
     * @request PUT:/booking/{id}
     * @secure
     */
    putBookingId: (
      id: string,
      body: {
        status?: "finished" | "active" | "not_done";
        bookingDate?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/booking/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name DeleteBookingId
     * @summary Delete booking entry
     * @request DELETE:/booking/{id}
     * @secure
     */
    deleteBookingId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/booking/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name PutBookingIdNotdone
     * @summary Update booking entry status to not done
     * @request PUT:/booking/{id}/notdone
     * @secure
     */
    putBookingIdNotdone: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/booking/${id}/notdone`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name PutBookingIdCancel
     * @summary Update booking entry
     * @request PUT:/booking/{id}/cancel
     * @secure
     */
    putBookingIdCancel: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 500
         * @example "comment"
         */
        comment: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/booking/${id}/cancel`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name PutBookingIdFinished
     * @summary Update booking entry status to finished
     * @request PUT:/booking/{id}/finished
     * @secure
     */
    putBookingIdFinished: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/booking/${id}/finished`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
  certificates = {
    /**
     * No description
     *
     * @tags certificates
     * @name GetCertificates
     * @summary List all certificates
     * @request GET:/certificates
     * @secure
     */
    getCertificates: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fake trainer/scam"
               */
              name?: string;
            }[];
          };
        },
        any
      >({
        path: `/certificates`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificates
     * @name PostCertificates
     * @summary Create new certificate
     * @request POST:/certificates
     * @secure
     */
    postCertificates: (
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fake trainer/scam"
             */
            name?: string;
          };
        },
        any
      >({
        path: `/certificates`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificates
     * @name GetCertificatesId
     * @summary Get certificate entry by id
     * @request GET:/certificates/{id}
     * @secure
     */
    getCertificatesId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fake trainer/scam"
             */
            name?: string;
          };
        },
        any
      >({
        path: `/certificates/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificates
     * @name PutCertificatesId
     * @summary Update certificate entry
     * @request PUT:/certificates/{id}
     * @secure
     */
    putCertificatesId: (
      id: string,
      body: {
        id?: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/certificates/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificates
     * @name DeleteCertificatesId
     * @summary Delete certificate entry
     * @request DELETE:/certificates/{id}
     * @secure
     */
    deleteCertificatesId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/certificates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  cities = {
    /**
     * No description
     *
     * @tags cities
     * @name GetCities
     * @summary List all cities
     * @request GET:/cities
     * @secure
     */
    getCities: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Paris"
               */
              name?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              /** @example "+07:00" */
              utcOffset: string;
            }[];
          };
        },
        any
      >({
        path: `/cities`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name PostCities
     * @summary Create new city
     * @request POST:/cities
     * @secure
     */
    postCities: (
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "+07:00" */
        utcOffset: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            /** @example "+07:00" */
            utcOffset: string;
          };
        },
        any
      >({
        path: `/cities`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name GetCitiesId
     * @summary Get city entry by id
     * @request GET:/cities/{id}
     * @secure
     */
    getCitiesId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Paris"
             */
            name?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            /** @example "+07:00" */
            utcOffset: string;
          };
        },
        any
      >({
        path: `/cities/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name PutCitiesId
     * @summary Update city entry
     * @request PUT:/cities/{id}
     * @secure
     */
    putCitiesId: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Paris"
         */
        name?: string;
        /** @example "+07:00" */
        utcOffset: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/cities/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cities
     * @name DeleteCitiesId
     * @summary Delete city entry
     * @request DELETE:/cities/{id}
     * @secure
     */
    deleteCitiesId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/cities/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  countries = {
    /**
     * No description
     *
     * @tags countries
     * @name GetCountries
     * @summary List all countries
     * @request GET:/countries
     * @secure
     */
    getCountries: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
              cities?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                /** @example "+07:00" */
                utcOffset: string;
              }[];
            }[];
          };
        },
        any
      >({
        path: `/countries`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags countries
     * @name PostCountries
     * @summary Create new country
     * @request POST:/countries
     * @secure
     */
    postCountries: (
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname: string;
        /** @example "🇦🇩" */
        flag?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
            cities?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Paris"
               */
              name?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              /** @example "+07:00" */
              utcOffset: string;
            }[];
          };
        },
        any
      >({
        path: `/countries`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags countries
     * @name GetCountriesWithcities
     * @summary List all countries
     * @request GET:/countries/with-cities
     * @secure
     */
    getCountriesWithcities: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
              cities?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                /** @example "+07:00" */
                utcOffset: string;
              }[];
            }[];
          };
        },
        any
      >({
        path: `/countries/with-cities`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags countries
     * @name GetCountriesId
     * @summary Get country entry by id
     * @request GET:/countries/{id}
     * @secure
     */
    getCountriesId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Germany"
             */
            name?: string;
            /** @example "🇦🇩" */
            flag?: string;
            /**
             * @minLength 2
             * @maxLength 3
             * @example "AG"
             */
            shortname?: string;
            cities?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Paris"
               */
              name?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              /** @example "+07:00" */
              utcOffset: string;
            }[];
          };
        },
        any
      >({
        path: `/countries/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags countries
     * @name PutCountriesId
     * @summary Update country entry
     * @request PUT:/countries/{id}
     * @secure
     */
    putCountriesId: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Germany"
         */
        name: string;
        /**
         * @minLength 2
         * @maxLength 3
         * @example "AG"
         */
        shortname: string;
        /** @example "🇦🇩" */
        flag?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/countries/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags countries
     * @name DeleteCountriesId
     * @summary Delete country entry
     * @request DELETE:/countries/{id}
     * @secure
     */
    deleteCountriesId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/countries/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags only for back
     * @name PostCountriesParse
     * @summary Create countries by csv
     * @request POST:/countries/parse
     * @secure
     */
    postCountriesParse: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/countries/parse`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  goals = {
    /**
     * No description
     *
     * @tags goals
     * @name GetGoals
     * @summary List all goals
     * @request GET:/goals
     * @secure
     */
    getGoals: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 30
               * @example "Gaol"
               */
              name?: string;
            }[];
          };
        },
        any
      >({
        path: `/goals`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags goals
     * @name PostGoals
     * @summary Create new goal
     * @request POST:/goals
     * @secure
     */
    postGoals: (
      body: {
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 30
             * @example "Gaol"
             */
            name?: string;
          };
        },
        any
      >({
        path: `/goals`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags goals
     * @name GetGoalsId
     * @summary Get goal entry by id
     * @request GET:/goals/{id}
     * @secure
     */
    getGoalsId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 30
             * @example "Gaol"
             */
            name?: string;
          };
        },
        any
      >({
        path: `/goals/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags goals
     * @name PutGoalsId
     * @summary Update goal entry
     * @request PUT:/goals/{id}
     * @secure
     */
    putGoalsId: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Gaol"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/goals/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags goals
     * @name DeleteGoalsId
     * @summary Delete goal entry
     * @request DELETE:/goals/{id}
     * @secure
     */
    deleteGoalsId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/goals/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  language = {
    /**
     * No description
     *
     * @tags language
     * @name GetLanguage
     * @summary List all language
     * @request GET:/language
     * @secure
     */
    getLanguage: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Russian"
               */
              name?: string;
            }[];
          };
        },
        any
      >({
        path: `/language`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags language
     * @name PostLanguage
     * @summary Create new language
     * @request POST:/language
     * @secure
     */
    postLanguage: (
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Russian"
             */
            name?: string;
          };
        },
        any
      >({
        path: `/language`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags language
     * @name GetLanguageId
     * @summary Get language entry by id
     * @request GET:/language/{id}
     * @secure
     */
    getLanguageId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Russian"
             */
            name?: string;
          };
        },
        any
      >({
        path: `/language/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags language
     * @name PutLanguageId
     * @summary Update language entry
     * @request PUT:/language/{id}
     * @secure
     */
    putLanguageId: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Russian"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/language/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags language
     * @name DeleteLanguageId
     * @summary Delete language entry
     * @request DELETE:/language/{id}
     * @secure
     */
    deleteLanguageId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/language/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  subscriptions = {
    /**
     * No description
     *
     * @tags subscriptions
     * @name GetSubscriptions
     * @summary List all subscriptions
     * @request GET:/subscriptions
     * @secure
     */
    getSubscriptions: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name: string;
              /**
               * @min 1
               * @max 9999
               */
              smallPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              mediumPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              highPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              maxPrice: number;
              /**
               * @min 1
               * @max 99
               */
              smallAmount: number;
              /**
               * @min 1
               * @max 99
               */
              mediumAmount: number;
              /**
               * @min 1
               * @max 99
               */
              highAmount: number;
              /**
               * @min 1
               * @max 99
               */
              maxAmount: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              goals: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 30
                 * @example "Gaol"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              image?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "Fake trainer/scam"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
              };
            }[];
          };
        },
        any
      >({
        path: `/subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subscriptions
     * @name PostSubscriptions
     * @summary Create new subscription
     * @request POST:/subscriptions
     * @secure
     */
    postSubscriptions: (
      body: {
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Fitnessssss"
         */
        name: string;
        /**
         * @min 1
         * @max 9999
         */
        smallPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        mediumPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        highPrice: number;
        /**
         * @min 1
         * @max 9999
         */
        maxPrice: number;
        /**
         * @min 1
         * @max 99
         */
        smallAmount: number;
        /**
         * @min 1
         * @max 99
         */
        mediumAmount: number;
        /**
         * @min 1
         * @max 99
         */
        highAmount: number;
        /**
         * @min 1
         * @max 99
         */
        maxAmount: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals: string[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name: string;
            /**
             * @min 1
             * @max 9999
             */
            smallPrice: number;
            /**
             * @min 1
             * @max 9999
             */
            mediumPrice: number;
            /**
             * @min 1
             * @max 9999
             */
            highPrice: number;
            /**
             * @min 1
             * @max 9999
             */
            maxPrice: number;
            /**
             * @min 1
             * @max 99
             */
            smallAmount: number;
            /**
             * @min 1
             * @max 99
             */
            mediumAmount: number;
            /**
             * @min 1
             * @max 99
             */
            highAmount: number;
            /**
             * @min 1
             * @max 99
             */
            maxAmount: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            goals: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 30
               * @example "Gaol"
               */
              name?: string;
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            image?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "filename"
               */
              filename?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "Fake trainer/scam"
               */
              key?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
            };
          };
        },
        any
      >({
        path: `/subscriptions`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subscriptions
     * @name GetSubscriptionsId
     * @summary Get subscription entry by id
     * @request GET:/subscriptions/{id}
     * @secure
     */
    getSubscriptionsId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fitnessssss"
             */
            name: string;
            /**
             * @min 1
             * @max 9999
             */
            smallPrice: number;
            /**
             * @min 1
             * @max 9999
             */
            mediumPrice: number;
            /**
             * @min 1
             * @max 9999
             */
            highPrice: number;
            /**
             * @min 1
             * @max 9999
             */
            maxPrice: number;
            /**
             * @min 1
             * @max 99
             */
            smallAmount: number;
            /**
             * @min 1
             * @max 99
             */
            mediumAmount: number;
            /**
             * @min 1
             * @max 99
             */
            highAmount: number;
            /**
             * @min 1
             * @max 99
             */
            maxAmount: number;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            goals: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 30
               * @example "Gaol"
               */
              name?: string;
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            fileId: string;
            image?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "filename"
               */
              filename?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "Fake trainer/scam"
               */
              key?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
            };
          };
        },
        any
      >({
        path: `/subscriptions/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subscriptions
     * @name PutSubscriptionsId
     * @summary Update subscription entry
     * @request PUT:/subscriptions/{id}
     * @secure
     */
    putSubscriptionsId: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 30
         * @example "Fitnessssss"
         */
        name?: string;
        smallPrice?: number;
        mediumPrice?: number;
        highPrice?: number;
        maxPrice?: number;
        smallAmount?: number;
        mediumAmount?: number;
        highAmount?: number;
        maxAmount?: number;
        /**
         * @min 1
         * @max 999999
         */
        loyaltyPoints?: number;
        goals?: string[];
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        fileId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/subscriptions/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subscriptions
     * @name DeleteSubscriptionsId
     * @summary Delete subscription entry
     * @request DELETE:/subscriptions/{id}
     * @secure
     */
    deleteSubscriptionsId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/subscriptions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  trainers = {
    /**
     * No description
     *
     * @tags trainers
     * @name GetTrainers
     * @summary Get trainers
     * @request GET:/trainers
     * @secure
     */
    getTrainers: (
      query?: {
        goal?: string[];
        favourites?: boolean;
        country?: string[];
        gender?: "male" | "female" | "other";
        language?: string[];
        query?: string;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        subscriptionId?: string[];
        cityId?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              gender?: "male"[];
              /**
               * @minLength 2
               * @maxLength 5000
               * @example "Alexandrov"
               */
              about?: string;
              rating?: number;
              isFavourite?: boolean;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              dictionaryId: string;
              dictionary?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
                languages?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Russian"
                   */
                  name?: string;
                }[];
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              cityId: string;
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
              };
              /**
               * @minLength 10
               * @maxLength 20
               * @example "+93247587346178"
               */
              phone?: string;
              experience?: number;
              images?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @maxLength 1000
                 * @example "sfece"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
                /** @format date */
                createdAt?: string;
              }[];
              users?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
              }[];
              settings?: object;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
            }[];
          };
        },
        any
      >({
        path: `/trainers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers
     * @name PostTrainers
     * @summary Create new trainer
     * @request POST:/trainers
     * @secure
     */
    postTrainers: (
      body: {
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        firstName: string;
        experience: number;
        gender: "male" | "female" | "other";
        /**
         * @minLength 2
         * @maxLength 5000
         * @example "about"
         */
        about?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        languages: string[];
        certificates: string[];
        images: string[];
        /**
         * @minLength 10
         * @maxLength 20
         * @example "+93247587346178"
         */
        phone: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        cityId: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
              cities?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                /** @example "+07:00" */
                utcOffset: string;
              }[];
            };
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            cityId: string;
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Paris"
               */
              name?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              /** @example "+07:00" */
              utcOffset: string;
            };
            gender?: "male" | "female" | "other";
            /**
             * @minLength 2
             * @maxLength 5000
             * @example "Alexandrov"
             */
            about?: string;
            rating?: number;
            reviews?: {
              rating?: number;
              /**
               * @minLength 2
               * @maxLength 500
               * @example "Fake trainer/scam"
               */
              text?: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            dictionaryId: string;
            dictionary?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              languages?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Russian"
                 */
                name?: string;
              }[];
            };
            certificates?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fake trainer/scam"
               */
              name?: string;
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name: string;
              /**
               * @min 1
               * @max 9999
               */
              smallPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              mediumPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              highPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              maxPrice: number;
              /**
               * @min 1
               * @max 99
               */
              smallAmount: number;
              /**
               * @min 1
               * @max 99
               */
              mediumAmount: number;
              /**
               * @min 1
               * @max 99
               */
              highAmount: number;
              /**
               * @min 1
               * @max 99
               */
              maxAmount: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              goals: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 30
                 * @example "Gaol"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              image?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "Fake trainer/scam"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
              };
            };
            /**
             * @minLength 10
             * @maxLength 20
             * @example "+93247587346178"
             */
            phone?: string;
            experience?: number;
            images?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "filename"
               */
              filename?: string;
              /**
               * @maxLength 1000
               * @example "sfece"
               */
              key?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
              /** @format date */
              createdAt?: string;
            }[];
            /** @format date */
            deletedAt?: string;
            settings?: object;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
          };
        },
        any
      >({
        path: `/trainers`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers
     * @name GetTrainersAll
     * @summary Get all trainers
     * @request GET:/trainers/all
     * @secure
     */
    getTrainersAll: (
      query?: {
        goal?: string[];
        favourites?: boolean;
        country?: string[];
        gender?: "male" | "female" | "other";
        language?: string[];
        query?: string;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        subscriptionId?: string[];
        cityId?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              cityId: string;
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                /** @example "+07:00" */
                utcOffset: string;
              };
              gender?: "male" | "female" | "other";
              /**
               * @minLength 2
               * @maxLength 5000
               * @example "Alexandrov"
               */
              about?: string;
              rating?: number;
              reviews?: {
                rating?: number;
                /**
                 * @minLength 2
                 * @maxLength 500
                 * @example "Fake trainer/scam"
                 */
                text?: string;
                user?: {
                  id?: string;
                  /**
                   * @minLength 3
                   * @maxLength 100
                   * @example "email@example.com"
                   */
                  email?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandr"
                   */
                  firstName?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandrov"
                   */
                  lastName?: string;
                  emailConfirm?: boolean;
                  gender?: "male" | "female" | "other";
                  /** @example "admin" */
                  role?: string;
                  /**
                   * @minLength 10
                   * @maxLength 20
                   * @example "Alexandrov"
                   */
                  phone?: string;
                  injures?: boolean;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  notification?: boolean;
                  pushId?: string;
                  socialId?: string;
                  stripeCustomerId?: string;
                  roleId?: string;
                  countryId?: string;
                  goalId?: string;
                  fileId?: string;
                  cityId?: string;
                  languageId?: string;
                  security?: string;
                  goal?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  subscriptions?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    restOfSession?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    userId: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    subscriptionId: string;
                    subscription?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Fitnessssss"
                       */
                      name?: string;
                      smallPrice?: number;
                      mediumPrice?: number;
                      highPrice?: number;
                      maxPrice?: number;
                      smallAmount?: number;
                      mediumAmount?: number;
                      highAmount?: number;
                      maxAmount?: number;
                      /**
                       * @min 1
                       * @max 999999
                       */
                      loyaltyPoints?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      fileId: string;
                      goals?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Gaol"
                         */
                        name?: string;
                      }[];
                    };
                  }[];
                  avatar?: string;
                  cards?: {
                    cardHolder?: string;
                    cardNumber?: string;
                    expiry?: string;
                  }[];
                  favoritesTrainer?: string[];
                  city?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  timeToNotification?: number;
                };
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              dictionaryId: string;
              dictionary?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
                languages?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Russian"
                   */
                  name?: string;
                }[];
              };
              certificates?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fake trainer/scam"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
              /**
               * @minLength 10
               * @maxLength 20
               * @example "+93247587346178"
               */
              phone?: string;
              experience?: number;
              images?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @maxLength 1000
                 * @example "sfece"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
                /** @format date */
                createdAt?: string;
              }[];
              /** @format date */
              deletedAt?: string;
              settings?: object;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
            }[];
          };
        },
        any
      >({
        path: `/trainers/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers
     * @name GetTrainersDeleted
     * @summary Get deleted trainers
     * @request GET:/trainers/deleted
     * @secure
     */
    getTrainersDeleted: (
      query?: {
        goal?: string[];
        favourites?: boolean;
        country?: string[];
        gender?: "male" | "female" | "other";
        language?: string[];
        query?: string;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        subscriptionId?: string[];
        cityId?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              cityId: string;
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                /** @example "+07:00" */
                utcOffset: string;
              };
              gender?: "male" | "female" | "other";
              /**
               * @minLength 2
               * @maxLength 5000
               * @example "Alexandrov"
               */
              about?: string;
              rating?: number;
              reviews?: {
                rating?: number;
                /**
                 * @minLength 2
                 * @maxLength 500
                 * @example "Fake trainer/scam"
                 */
                text?: string;
                user?: {
                  id?: string;
                  /**
                   * @minLength 3
                   * @maxLength 100
                   * @example "email@example.com"
                   */
                  email?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandr"
                   */
                  firstName?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandrov"
                   */
                  lastName?: string;
                  emailConfirm?: boolean;
                  gender?: "male" | "female" | "other";
                  /** @example "admin" */
                  role?: string;
                  /**
                   * @minLength 10
                   * @maxLength 20
                   * @example "Alexandrov"
                   */
                  phone?: string;
                  injures?: boolean;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  notification?: boolean;
                  pushId?: string;
                  socialId?: string;
                  stripeCustomerId?: string;
                  roleId?: string;
                  countryId?: string;
                  goalId?: string;
                  fileId?: string;
                  cityId?: string;
                  languageId?: string;
                  security?: string;
                  goal?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  subscriptions?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    restOfSession?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    userId: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    subscriptionId: string;
                    subscription?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Fitnessssss"
                       */
                      name?: string;
                      smallPrice?: number;
                      mediumPrice?: number;
                      highPrice?: number;
                      maxPrice?: number;
                      smallAmount?: number;
                      mediumAmount?: number;
                      highAmount?: number;
                      maxAmount?: number;
                      /**
                       * @min 1
                       * @max 999999
                       */
                      loyaltyPoints?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      fileId: string;
                      goals?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Gaol"
                         */
                        name?: string;
                      }[];
                    };
                  }[];
                  avatar?: string;
                  cards?: {
                    cardHolder?: string;
                    cardNumber?: string;
                    expiry?: string;
                  }[];
                  favoritesTrainer?: string[];
                  city?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  timeToNotification?: number;
                };
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              dictionaryId: string;
              dictionary?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
                languages?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Russian"
                   */
                  name?: string;
                }[];
              };
              certificates?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fake trainer/scam"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
              /**
               * @minLength 10
               * @maxLength 20
               * @example "+93247587346178"
               */
              phone?: string;
              experience?: number;
              images?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @maxLength 1000
                 * @example "sfece"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
                /** @format date */
                createdAt?: string;
              }[];
              /** @format date */
              deletedAt?: string;
              settings?: object;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
            }[];
          };
        },
        any
      >({
        path: `/trainers/deleted`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers
     * @name GetTrainersId
     * @summary Get trainer
     * @request GET:/trainers/{id}
     * @secure
     */
    getTrainersId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
              cities?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                /** @example "+07:00" */
                utcOffset: string;
              }[];
            };
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            cityId: string;
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Paris"
               */
              name?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              /** @example "+07:00" */
              utcOffset: string;
            };
            gender?: "male" | "female" | "other";
            /**
             * @minLength 2
             * @maxLength 5000
             * @example "Alexandrov"
             */
            about?: string;
            rating?: number;
            reviews?: {
              rating?: number;
              /**
               * @minLength 2
               * @maxLength 500
               * @example "Fake trainer/scam"
               */
              text?: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            dictionaryId: string;
            dictionary?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              languages?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Russian"
                 */
                name?: string;
              }[];
            };
            certificates?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fake trainer/scam"
               */
              name?: string;
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name: string;
              /**
               * @min 1
               * @max 9999
               */
              smallPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              mediumPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              highPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              maxPrice: number;
              /**
               * @min 1
               * @max 99
               */
              smallAmount: number;
              /**
               * @min 1
               * @max 99
               */
              mediumAmount: number;
              /**
               * @min 1
               * @max 99
               */
              highAmount: number;
              /**
               * @min 1
               * @max 99
               */
              maxAmount: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              goals: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 30
                 * @example "Gaol"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              image?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "Fake trainer/scam"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
              };
            };
            /**
             * @minLength 10
             * @maxLength 20
             * @example "+93247587346178"
             */
            phone?: string;
            experience?: number;
            images?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "filename"
               */
              filename?: string;
              /**
               * @maxLength 1000
               * @example "sfece"
               */
              key?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
              /** @format date */
              createdAt?: string;
            }[];
            videos?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "filename"
               */
              filename?: string;
              /**
               * @maxLength 1000
               * @example "sfece"
               */
              key?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
              /** @format date */
              createdAt?: string;
            }[];
            /** @format date */
            deletedAt?: string;
            settings?: object;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
          };
        },
        any
      >({
        path: `/trainers/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers
     * @name PutTrainersId
     * @summary Update trainer
     * @request PUT:/trainers/{id}
     * @secure
     */
    putTrainersId: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        firstName: string;
        experience: number;
        gender: "male" | "female" | "other";
        /**
         * @minLength 2
         * @maxLength 5000
         * @example "about"
         */
        about?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
        languages: string[];
        certificates: string[];
        images: string[];
        /**
         * @minLength 10
         * @maxLength 20
         * @example "+93247587346178"
         */
        phone: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        cityId: string;
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/trainers/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers
     * @name DeleteTrainersId
     * @summary Delete trainer entry
     * @request DELETE:/trainers/{id}
     * @secure
     */
    deleteTrainersId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/trainers/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers, booking
     * @name GetTrainersIdBooking
     * @summary Get trainers booking
     * @request GET:/trainers/{id}/booking
     * @secure
     */
    getTrainersIdBooking: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              status?: "finished" | "active" | "cancel" | "not_done";
              /** @format date */
              bookingDate?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              trainer?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                cityId: string;
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  /** @example "+07:00" */
                  utcOffset: string;
                };
                gender?: "male" | "female" | "other";
                /**
                 * @minLength 2
                 * @maxLength 5000
                 * @example "Alexandrov"
                 */
                about?: string;
                rating?: number;
                reviews?: {
                  rating?: number;
                  /**
                   * @minLength 2
                   * @maxLength 500
                   * @example "Fake trainer/scam"
                   */
                  text?: string;
                  user?: {
                    id?: string;
                    /**
                     * @minLength 3
                     * @maxLength 100
                     * @example "email@example.com"
                     */
                    email?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandr"
                     */
                    firstName?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandrov"
                     */
                    lastName?: string;
                    emailConfirm?: boolean;
                    gender?: "male" | "female" | "other";
                    /** @example "admin" */
                    role?: string;
                    /**
                     * @minLength 10
                     * @maxLength 20
                     * @example "Alexandrov"
                     */
                    phone?: string;
                    injures?: boolean;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    notification?: boolean;
                    pushId?: string;
                    socialId?: string;
                    stripeCustomerId?: string;
                    roleId?: string;
                    countryId?: string;
                    goalId?: string;
                    fileId?: string;
                    cityId?: string;
                    languageId?: string;
                    security?: string;
                    goal?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    country?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Germany"
                       */
                      name?: string;
                      /** @example "🇦🇩" */
                      flag?: string;
                      /**
                       * @minLength 2
                       * @maxLength 3
                       * @example "AG"
                       */
                      shortname?: string;
                    };
                    subscriptions?: {
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      id: string;
                      restOfSession?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      userId: string;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      subscriptionId: string;
                      subscription?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Fitnessssss"
                         */
                        name?: string;
                        smallPrice?: number;
                        mediumPrice?: number;
                        highPrice?: number;
                        maxPrice?: number;
                        smallAmount?: number;
                        mediumAmount?: number;
                        highAmount?: number;
                        maxAmount?: number;
                        /**
                         * @min 1
                         * @max 999999
                         */
                        loyaltyPoints?: number;
                        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                        fileId: string;
                        goals?: {
                          id?: string;
                          /**
                           * @minLength 2
                           * @maxLength 100
                           * @example "Gaol"
                           */
                          name?: string;
                        }[];
                      };
                    }[];
                    avatar?: string;
                    cards?: {
                      cardHolder?: string;
                      cardNumber?: string;
                      expiry?: string;
                    }[];
                    favoritesTrainer?: string[];
                    city?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    timeToNotification?: number;
                  };
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                dictionaryId: string;
                dictionary?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  trainerId: string;
                  languages?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Russian"
                     */
                    name?: string;
                  }[];
                };
                certificates?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fake trainer/scam"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name: string;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  smallPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  mediumPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  highPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  maxPrice: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  smallAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  mediumAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  highAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  maxAmount: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  goals: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 30
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  image?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "filename"
                     */
                    filename?: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "Fake trainer/scam"
                     */
                    key?: string;
                    /**
                     * @maxLength 100
                     * @example "type"
                     */
                    type?: string;
                  };
                };
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "+93247587346178"
                 */
                phone?: string;
                experience?: number;
                images?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @maxLength 1000
                   * @example "sfece"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                  /** @format date */
                  createdAt?: string;
                }[];
                /** @format date */
                deletedAt?: string;
                settings?: object;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              locationId: string;
              location?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Location name"
                 */
                name?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "address"
                 */
                address?: string;
                /**
                 * @min -90
                 * @max 90
                 */
                latitude?: number;
                /**
                 * @min -180
                 * @max 180
                 */
                longitude?: number;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "url"
                 */
                url?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
              };
              /**
               * @minLength 2
               * @maxLength 500
               * @example "comment"
               */
              comment?: string;
              /** @example "-03:00" */
              utcOffset?: string;
            }[];
          };
        },
        any
      >({
        path: `/trainers/${id}/booking`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trainers
     * @name PostTrainersIdRestore
     * @summary Restore deleted trainer
     * @request POST:/trainers/{id}/restore
     * @secure
     */
    postTrainersIdRestore: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
              cities?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                /** @example "+07:00" */
                utcOffset: string;
              }[];
            };
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            cityId: string;
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Paris"
               */
              name?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              /** @example "+07:00" */
              utcOffset: string;
            };
            gender?: "male" | "female" | "other";
            /**
             * @minLength 2
             * @maxLength 5000
             * @example "Alexandrov"
             */
            about?: string;
            rating?: number;
            reviews?: {
              rating?: number;
              /**
               * @minLength 2
               * @maxLength 500
               * @example "Fake trainer/scam"
               */
              text?: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            dictionaryId: string;
            dictionary?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              languages?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Russian"
                 */
                name?: string;
              }[];
            };
            certificates?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fake trainer/scam"
               */
              name?: string;
            }[];
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            subscription?: {
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name: string;
              /**
               * @min 1
               * @max 9999
               */
              smallPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              mediumPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              highPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              maxPrice: number;
              /**
               * @min 1
               * @max 99
               */
              smallAmount: number;
              /**
               * @min 1
               * @max 99
               */
              mediumAmount: number;
              /**
               * @min 1
               * @max 99
               */
              highAmount: number;
              /**
               * @min 1
               * @max 99
               */
              maxAmount: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              goals: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 30
                 * @example "Gaol"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              image?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "Fake trainer/scam"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
              };
            };
            /**
             * @minLength 10
             * @maxLength 20
             * @example "+93247587346178"
             */
            phone?: string;
            experience?: number;
            images?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "filename"
               */
              filename?: string;
              /**
               * @maxLength 1000
               * @example "sfece"
               */
              key?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
              /** @format date */
              createdAt?: string;
            }[];
            /** @format date */
            deletedAt?: string;
            settings?: object;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
          };
        },
        any
      >({
        path: `/trainers/${id}/restore`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  userSubscriptions = {
    /**
     * No description
     *
     * @tags user-subscriptions
     * @name GetUsersubscriptions
     * @summary List all subscriptions for user
     * @request GET:/user-subscriptions
     * @secure
     */
    getUsersubscriptions: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /** @example "2" */
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
            }[];
          };
        },
        any
      >({
        path: `/user-subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-subscriptions
     * @name PostUsersubscriptions
     * @summary Create new subscription by user
     * @request POST:/user-subscriptions
     * @secure
     */
    postUsersubscriptions: (
      body: {
        /** @example "2" */
        restOfSession?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        subscriptionId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /** @example "2" */
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            subscription?: {
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name: string;
              /**
               * @min 1
               * @max 9999
               */
              smallPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              mediumPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              highPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              maxPrice: number;
              /**
               * @min 1
               * @max 99
               */
              smallAmount: number;
              /**
               * @min 1
               * @max 99
               */
              mediumAmount: number;
              /**
               * @min 1
               * @max 99
               */
              highAmount: number;
              /**
               * @min 1
               * @max 99
               */
              maxAmount: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              goals: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 30
                 * @example "Gaol"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              image?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "Fake trainer/scam"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
              };
            };
          };
        },
        any
      >({
        path: `/user-subscriptions`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-subscriptions
     * @name GetUsersubscriptionsId
     * @summary Get subscription entry by id
     * @request GET:/user-subscriptions/{id}
     * @secure
     */
    getUsersubscriptionsId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /** @example "2" */
            restOfSession?: number;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            subscriptionId: string;
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            subscription?: {
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fitnessssss"
               */
              name: string;
              /**
               * @min 1
               * @max 9999
               */
              smallPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              mediumPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              highPrice: number;
              /**
               * @min 1
               * @max 9999
               */
              maxPrice: number;
              /**
               * @min 1
               * @max 99
               */
              smallAmount: number;
              /**
               * @min 1
               * @max 99
               */
              mediumAmount: number;
              /**
               * @min 1
               * @max 99
               */
              highAmount: number;
              /**
               * @min 1
               * @max 99
               */
              maxAmount: number;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              goals: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 30
                 * @example "Gaol"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              fileId: string;
              image?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "Fake trainer/scam"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
              };
            };
          };
        },
        any
      >({
        path: `/user-subscriptions/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-subscriptions
     * @name DeleteUsersubscriptionsId
     * @summary Delete subscription entry
     * @request DELETE:/user-subscriptions/{id}
     * @secure
     */
    deleteUsersubscriptionsId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/user-subscriptions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name GetUsers
     * @request GET:/users
     * @secure
     */
    getUsers: (
      query?: {
        query?: string;
        from?: number;
        to?: number;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            }[];
          };
        },
        any
      >({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name DeleteUsers
     * @summary Delete yourself
     * @request DELETE:/users
     * @secure
     */
    deleteUsers: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/users`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users, admin
     * @name GetUsersAdmins
     * @summary List admins
     * @request GET:/users/admins
     * @secure
     */
    getUsersAdmins: (
      query?: {
        query?: string;
        from?: number;
        to?: number;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            }[];
          };
        },
        any
      >({
        path: `/users/admins`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users, admin
     * @name PostUsersAdmins
     * @summary Create admin
     * @request POST:/users/admins
     * @secure
     */
    postUsersAdmins: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        lastName: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        firstName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/users/admins`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUsersGetme
     * @summary Get me
     * @request GET:/users/get-me
     * @secure
     */
    getUsersGetme: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/users/get-me`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUsersMybookings
     * @summary List all bookings for user
     * @request GET:/users/my-bookings
     * @secure
     */
    getUsersMybookings: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              status?: "finished" | "active" | "cancel" | "not_done";
              /** @format date */
              bookingDate?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              trainer?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                cityId: string;
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  /** @example "+07:00" */
                  utcOffset: string;
                };
                gender?: "male" | "female" | "other";
                /**
                 * @minLength 2
                 * @maxLength 5000
                 * @example "Alexandrov"
                 */
                about?: string;
                rating?: number;
                reviews?: {
                  rating?: number;
                  /**
                   * @minLength 2
                   * @maxLength 500
                   * @example "Fake trainer/scam"
                   */
                  text?: string;
                  user?: {
                    id?: string;
                    /**
                     * @minLength 3
                     * @maxLength 100
                     * @example "email@example.com"
                     */
                    email?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandr"
                     */
                    firstName?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandrov"
                     */
                    lastName?: string;
                    emailConfirm?: boolean;
                    gender?: "male" | "female" | "other";
                    /** @example "admin" */
                    role?: string;
                    /**
                     * @minLength 10
                     * @maxLength 20
                     * @example "Alexandrov"
                     */
                    phone?: string;
                    injures?: boolean;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    notification?: boolean;
                    pushId?: string;
                    socialId?: string;
                    stripeCustomerId?: string;
                    roleId?: string;
                    countryId?: string;
                    goalId?: string;
                    fileId?: string;
                    cityId?: string;
                    languageId?: string;
                    security?: string;
                    goal?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    country?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Germany"
                       */
                      name?: string;
                      /** @example "🇦🇩" */
                      flag?: string;
                      /**
                       * @minLength 2
                       * @maxLength 3
                       * @example "AG"
                       */
                      shortname?: string;
                    };
                    subscriptions?: {
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      id: string;
                      restOfSession?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      userId: string;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      subscriptionId: string;
                      subscription?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Fitnessssss"
                         */
                        name?: string;
                        smallPrice?: number;
                        mediumPrice?: number;
                        highPrice?: number;
                        maxPrice?: number;
                        smallAmount?: number;
                        mediumAmount?: number;
                        highAmount?: number;
                        maxAmount?: number;
                        /**
                         * @min 1
                         * @max 999999
                         */
                        loyaltyPoints?: number;
                        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                        fileId: string;
                        goals?: {
                          id?: string;
                          /**
                           * @minLength 2
                           * @maxLength 100
                           * @example "Gaol"
                           */
                          name?: string;
                        }[];
                      };
                    }[];
                    avatar?: string;
                    cards?: {
                      cardHolder?: string;
                      cardNumber?: string;
                      expiry?: string;
                    }[];
                    favoritesTrainer?: string[];
                    city?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    timeToNotification?: number;
                  };
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                dictionaryId: string;
                dictionary?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  trainerId: string;
                  languages?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Russian"
                     */
                    name?: string;
                  }[];
                };
                certificates?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fake trainer/scam"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name: string;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  smallPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  mediumPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  highPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  maxPrice: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  smallAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  mediumAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  highAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  maxAmount: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  goals: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 30
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  image?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "filename"
                     */
                    filename?: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "Fake trainer/scam"
                     */
                    key?: string;
                    /**
                     * @maxLength 100
                     * @example "type"
                     */
                    type?: string;
                  };
                };
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "+93247587346178"
                 */
                phone?: string;
                experience?: number;
                images?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @maxLength 1000
                   * @example "sfece"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                  /** @format date */
                  createdAt?: string;
                }[];
                /** @format date */
                deletedAt?: string;
                settings?: object;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              locationId: string;
              location?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Location name"
                 */
                name?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "address"
                 */
                address?: string;
                /**
                 * @min -90
                 * @max 90
                 */
                latitude?: number;
                /**
                 * @min -180
                 * @max 180
                 */
                longitude?: number;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "url"
                 */
                url?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
              };
              /**
               * @minLength 2
               * @maxLength 500
               * @example "comment"
               */
              comment?: string;
            }[];
          };
        },
        any
      >({
        path: `/users/my-bookings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUsersMysubscriptions
     * @summary List all subscriptions for user
     * @request GET:/users/my-subscriptions
     * @secure
     */
    getUsersMysubscriptions: (
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /** @example "2" */
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
            }[];
          };
        },
        any
      >({
        path: `/users/my-subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUsersId
     * @request GET:/users/{id}
     * @secure
     */
    getUsersId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            emailConfirm?: boolean;
            gender?: "male" | "female" | "other";
            /** @example "admin" */
            role?: string;
            /**
             * @minLength 10
             * @maxLength 20
             * @example "Alexandrov"
             */
            phone?: string;
            injures?: boolean;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            notification?: boolean;
            pushId?: string;
            socialId?: string;
            stripeCustomerId?: string;
            roleId?: string;
            countryId?: string;
            goalId?: string;
            fileId?: string;
            cityId?: string;
            languageId?: string;
            security?: string;
            goal?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            subscriptions?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name?: string;
                smallPrice?: number;
                mediumPrice?: number;
                highPrice?: number;
                maxPrice?: number;
                smallAmount?: number;
                mediumAmount?: number;
                highAmount?: number;
                maxAmount?: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                goals?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
              };
            }[];
            avatar?: string;
            cards?: {
              cardHolder?: string;
              cardNumber?: string;
              expiry?: string;
            }[];
            favoritesTrainer?: string[];
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            timeToNotification?: number;
          };
        },
        any
      >({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name DeleteUsersId
     * @summary Delete user entry
     * @request DELETE:/users/{id}
     * @secure
     */
    deleteUsersId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUsersIdBookings
     * @summary List all bookings for user
     * @request GET:/users/{id}/bookings
     * @secure
     */
    getUsersIdBookings: (
      id: string,
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              status?: "finished" | "active" | "cancel" | "not_done";
              /** @format date */
              bookingDate?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              trainer?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                cityId: string;
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  /** @example "+07:00" */
                  utcOffset: string;
                };
                gender?: "male" | "female" | "other";
                /**
                 * @minLength 2
                 * @maxLength 5000
                 * @example "Alexandrov"
                 */
                about?: string;
                rating?: number;
                reviews?: {
                  rating?: number;
                  /**
                   * @minLength 2
                   * @maxLength 500
                   * @example "Fake trainer/scam"
                   */
                  text?: string;
                  user?: {
                    id?: string;
                    /**
                     * @minLength 3
                     * @maxLength 100
                     * @example "email@example.com"
                     */
                    email?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandr"
                     */
                    firstName?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandrov"
                     */
                    lastName?: string;
                    emailConfirm?: boolean;
                    gender?: "male" | "female" | "other";
                    /** @example "admin" */
                    role?: string;
                    /**
                     * @minLength 10
                     * @maxLength 20
                     * @example "Alexandrov"
                     */
                    phone?: string;
                    injures?: boolean;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    notification?: boolean;
                    pushId?: string;
                    socialId?: string;
                    stripeCustomerId?: string;
                    roleId?: string;
                    countryId?: string;
                    goalId?: string;
                    fileId?: string;
                    cityId?: string;
                    languageId?: string;
                    security?: string;
                    goal?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    country?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Germany"
                       */
                      name?: string;
                      /** @example "🇦🇩" */
                      flag?: string;
                      /**
                       * @minLength 2
                       * @maxLength 3
                       * @example "AG"
                       */
                      shortname?: string;
                    };
                    subscriptions?: {
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      id: string;
                      restOfSession?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      userId: string;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      subscriptionId: string;
                      subscription?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Fitnessssss"
                         */
                        name?: string;
                        smallPrice?: number;
                        mediumPrice?: number;
                        highPrice?: number;
                        maxPrice?: number;
                        smallAmount?: number;
                        mediumAmount?: number;
                        highAmount?: number;
                        maxAmount?: number;
                        /**
                         * @min 1
                         * @max 999999
                         */
                        loyaltyPoints?: number;
                        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                        fileId: string;
                        goals?: {
                          id?: string;
                          /**
                           * @minLength 2
                           * @maxLength 100
                           * @example "Gaol"
                           */
                          name?: string;
                        }[];
                      };
                    }[];
                    avatar?: string;
                    cards?: {
                      cardHolder?: string;
                      cardNumber?: string;
                      expiry?: string;
                    }[];
                    favoritesTrainer?: string[];
                    city?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    timeToNotification?: number;
                  };
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                dictionaryId: string;
                dictionary?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  trainerId: string;
                  languages?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Russian"
                     */
                    name?: string;
                  }[];
                };
                certificates?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fake trainer/scam"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name: string;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  smallPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  mediumPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  highPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  maxPrice: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  smallAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  mediumAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  highAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  maxAmount: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  goals: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 30
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  image?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "filename"
                     */
                    filename?: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "Fake trainer/scam"
                     */
                    key?: string;
                    /**
                     * @maxLength 100
                     * @example "type"
                     */
                    type?: string;
                  };
                };
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "+93247587346178"
                 */
                phone?: string;
                experience?: number;
                images?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @maxLength 1000
                   * @example "sfece"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                  /** @format date */
                  createdAt?: string;
                }[];
                /** @format date */
                deletedAt?: string;
                settings?: object;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              locationId: string;
              location?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Location name"
                 */
                name?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "address"
                 */
                address?: string;
                /**
                 * @min -90
                 * @max 90
                 */
                latitude?: number;
                /**
                 * @min -180
                 * @max 180
                 */
                longitude?: number;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "url"
                 */
                url?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
              };
              /**
               * @minLength 2
               * @maxLength 500
               * @example "comment"
               */
              comment?: string;
            }[];
          };
        },
        any
      >({
        path: `/users/${id}/bookings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name PutUsersLanguage
     * @summary Select user language
     * @request PUT:/users/language
     * @secure
     */
    putUsersLanguage: (
      body: {
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/users/language`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name PutUsersPushid
     * @summary Update push id
     * @request PUT:/users/push-id
     * @secure
     */
    putUsersPushid: (
      body: {
        pushId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/users/push-id`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name PutUsersSelf
     * @summary Update yourself
     * @request PUT:/users/self
     * @secure
     */
    putUsersSelf: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandr"
         */
        firstName?: string;
        /**
         * @minLength 2
         * @maxLength 200
         * @example "Alexandrov"
         */
        lastName?: string;
        gender?: "male" | "female" | "other";
        /**
         * @minLength 10
         * @maxLength 20
         * @example "Alexandrov"
         */
        phone: string;
        injures?: boolean;
        notification?: boolean;
        pushId?: string;
        countryId?: string;
        goalId?: string;
        fileId?: string;
        cityId?: string;
        languageId?: string;
        timeToNotification?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            emailConfirm?: boolean;
            gender?: "male" | "female" | "other";
            /** @example "admin" */
            role?: string;
            /**
             * @minLength 10
             * @maxLength 20
             * @example "Alexandrov"
             */
            phone?: string;
            injures?: boolean;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            notification?: boolean;
            pushId?: string;
            socialId?: string;
            stripeCustomerId?: string;
            roleId?: string;
            countryId?: string;
            goalId?: string;
            fileId?: string;
            cityId?: string;
            languageId?: string;
            security?: string;
            goal?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            subscriptions?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name?: string;
                smallPrice?: number;
                mediumPrice?: number;
                highPrice?: number;
                maxPrice?: number;
                smallAmount?: number;
                mediumAmount?: number;
                highAmount?: number;
                maxAmount?: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                goals?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
              };
            }[];
            avatar?: string;
            cards?: {
              cardHolder?: string;
              cardNumber?: string;
              expiry?: string;
            }[];
            favoritesTrainer?: string[];
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            timeToNotification?: number;
          };
        },
        any
      >({
        path: `/users/self`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name PutUsersTrainerIdUnlike
     * @summary Delete trainer to favorite list
     * @request PUT:/users/trainer/{id}/unlike
     * @secure
     */
    putUsersTrainerIdUnlike: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/users/trainer/${id}/unlike`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name PutUsersTrainerIdLike
     * @summary Add trainer to favorite list
     * @request PUT:/users/trainer/{id}/like
     * @secure
     */
    putUsersTrainerIdLike: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/users/trainer/${id}/like`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name DeleteUsersLandingpage
     * @summary Delete yourself for landing page
     * @request DELETE:/users/landing-page
     * @secure
     */
    deleteUsersLandingpage: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email: string;
        /** @example "pa@s$word" */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            user?: string;
            /** @example "Success deleted" */
            message?: string;
          };
        },
        any
      >({
        path: `/users/landing-page`,
        method: "DELETE",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users, admin
     * @name DeleteUsersAdminsId
     * @summary Delete admin
     * @request DELETE:/users/admins/{id}
     * @secure
     */
    deleteUsersAdminsId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/users/admins/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  files = {
    /**
     * No description
     *
     * @tags files
     * @name GetFilesId
     * @summary Get file entry by id
     * @request GET:/files/{id}
     * @secure
     */
    getFilesId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "filename"
             */
            filename?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "Fake trainer/scam"
             */
            key?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        },
        any
      >({
        path: `/files/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags files
     * @name PutFilesId
     * @summary Update file entry
     * @request PUT:/files/{id}
     * @secure
     */
    putFilesId: (
      id: string,
      data: {
        /** image / video */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "filename"
             */
            filename?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "Fake trainer/scam"
             */
            key?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        },
        any
      >({
        path: `/files/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags files
     * @name DeleteFilesId
     * @summary Delete file entry
     * @request DELETE:/files/{id}
     * @secure
     */
    deleteFilesId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/files/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags files
     * @name PostFiles
     * @summary Create new file
     * @request POST:/files
     * @secure
     */
    postFiles: (data: any, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "filename"
             */
            filename?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "Fake trainer/scam"
             */
            key?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        },
        any
      >({
        path: `/files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  location = {
    /**
     * No description
     *
     * @tags location
     * @name GetLocationId
     * @summary Get location entry by id
     * @request GET:/location/{id}
     * @secure
     */
    getLocationId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Location name"
             */
            name?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "address"
             */
            address?: string;
            /**
             * @min -90
             * @max 90
             */
            latitude?: number;
            /**
             * @min -180
             * @max 180
             */
            longitude?: number;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "url"
             */
            url?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
              cities?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                /** @example "+07:00" */
                utcOffset: string;
              }[];
            };
          };
        },
        any
      >({
        path: `/location/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags location
     * @name PutLocationId
     * @summary Update location entry
     * @request PUT:/location/{id}
     * @secure
     */
    putLocationId: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Location name"
         */
        name?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "address"
         */
        address?: string;
        /**
         * @min -90
         * @max 90
         */
        latitude?: number;
        /**
         * @min -180
         * @max 180
         */
        longitude?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/location/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags location
     * @name DeleteLocationId
     * @summary Delete location entry
     * @request DELETE:/location/{id}
     * @secure
     */
    deleteLocationId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/location/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags location
     * @name GetLocationBycountryId
     * @summary List all locations by country
     * @request GET:/location/by-country/{id}
     * @secure
     */
    getLocationBycountryId: (
      id: string,
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Location name"
               */
              name?: string;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "address"
               */
              address?: string;
              /**
               * @min -90
               * @max 90
               */
              latitude?: number;
              /**
               * @min -180
               * @max 180
               */
              longitude?: number;
              /**
               * @minLength 2
               * @maxLength 1000
               * @example "url"
               */
              url?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
            }[];
          };
        },
        any
      >({
        path: `/location/by-country/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags location
     * @name PostLocation
     * @summary Create new location
     * @request POST:/location
     * @secure
     */
    postLocation: (
      body: {
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Location name"
         */
        name?: string;
        /**
         * @minLength 2
         * @maxLength 1000
         * @example "address"
         */
        address?: string;
        /**
         * @min -90
         * @max 90
         */
        latitude?: number;
        /**
         * @min -180
         * @max 180
         */
        longitude?: number;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        countryId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Location name"
             */
            name?: string;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "address"
             */
            address?: string;
            /**
             * @min -90
             * @max 90
             */
            latitude?: number;
            /**
             * @min -180
             * @max 180
             */
            longitude?: number;
            /**
             * @minLength 2
             * @maxLength 1000
             * @example "url"
             */
            url?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            countryId: string;
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
              cities?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                /** @example "+07:00" */
                utcOffset: string;
              }[];
            };
          };
        },
        any
      >({
        path: `/location`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags notifications
     * @name GetNotificationsByuser
     * @summary List all notification by user
     * @request GET:/notifications/by-user
     * @secure
     */
    getNotificationsByuser: (
      query?: {
        order?: string;
        query?: string;
        type?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        isRead?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fake trainer/scam"
               */
              title?: string;
              /**
               * @minLength 2
               * @maxLength 500
               * @example "Fake trainer/scam"
               */
              text?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
            }[];
          };
        },
        any
      >({
        path: `/notifications/by-user`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications
     * @name GetNotificationsUnread
     * @summary Unread notifications
     * @request GET:/notifications/unread
     * @secure
     */
    getNotificationsUnread: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /**
             * @min 0
             * @example 10
             */
            count?: number;
          };
        },
        any
      >({
        path: `/notifications/unread`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications
     * @name GetNotificationsId
     * @summary Get notification entry by id
     * @request GET:/notifications/{id}
     * @secure
     */
    getNotificationsId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fake trainer/scam"
             */
            title?: string;
            /**
             * @minLength 2
             * @maxLength 500
             * @example "Fake trainer/scam"
             */
            text?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        },
        any
      >({
        path: `/notifications/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications
     * @name DeleteNotificationsId
     * @summary Delete notification entry
     * @request DELETE:/notifications/{id}
     * @secure
     */
    deleteNotificationsId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/notifications/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications
     * @name PostNotifications
     * @summary Create new notification
     * @request POST:/notifications
     * @secure
     */
    postNotifications: (
      body: {
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        userId: string;
        /**
         * @minLength 2
         * @maxLength 100
         * @example "Fake trainer/scam"
         */
        title?: string;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        /**
         * @maxLength 100
         * @example "type"
         */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            /**
             * @minLength 2
             * @maxLength 100
             * @example "Fake trainer/scam"
             */
            title?: string;
            /**
             * @minLength 2
             * @maxLength 500
             * @example "Fake trainer/scam"
             */
            text?: string;
            /**
             * @maxLength 100
             * @example "type"
             */
            type?: string;
          };
        },
        any
      >({
        path: `/notifications`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications
     * @name PostNotificationsRead
     * @summary Read notifications
     * @request POST:/notifications/read
     * @secure
     */
    postNotificationsRead: (
      body: {
        ids?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Fake trainer/scam"
               */
              title?: string;
              /**
               * @minLength 2
               * @maxLength 500
               * @example "Fake trainer/scam"
               */
              text?: string;
              /**
               * @maxLength 100
               * @example "type"
               */
              type?: string;
            }[];
          };
        },
        any
      >({
        path: `/notifications/read`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  reviews = {
    /**
     * No description
     *
     * @tags reviews
     * @name GetReviewsId
     * @summary Get review entry by id
     * @request GET:/reviews/{id}
     * @secure
     */
    getReviewsId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @min 1
             * @max 5
             * @example 4
             */
            rating?: number;
            /**
             * @minLength 2
             * @maxLength 500
             * @example "Fake trainer/scam"
             */
            text?: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            trainerId: string;
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            userId: string;
            trainer?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              cityId: string;
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                /** @example "+07:00" */
                utcOffset: string;
              };
              gender?: "male" | "female" | "other";
              /**
               * @minLength 2
               * @maxLength 5000
               * @example "Alexandrov"
               */
              about?: string;
              rating?: number;
              reviews?: {
                rating?: number;
                /**
                 * @minLength 2
                 * @maxLength 500
                 * @example "Fake trainer/scam"
                 */
                text?: string;
                user?: {
                  id?: string;
                  /**
                   * @minLength 3
                   * @maxLength 100
                   * @example "email@example.com"
                   */
                  email?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandr"
                   */
                  firstName?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandrov"
                   */
                  lastName?: string;
                  emailConfirm?: boolean;
                  gender?: "male" | "female" | "other";
                  /** @example "admin" */
                  role?: string;
                  /**
                   * @minLength 10
                   * @maxLength 20
                   * @example "Alexandrov"
                   */
                  phone?: string;
                  injures?: boolean;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  notification?: boolean;
                  pushId?: string;
                  socialId?: string;
                  stripeCustomerId?: string;
                  roleId?: string;
                  countryId?: string;
                  goalId?: string;
                  fileId?: string;
                  cityId?: string;
                  languageId?: string;
                  security?: string;
                  goal?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  subscriptions?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    restOfSession?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    userId: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    subscriptionId: string;
                    subscription?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Fitnessssss"
                       */
                      name?: string;
                      smallPrice?: number;
                      mediumPrice?: number;
                      highPrice?: number;
                      maxPrice?: number;
                      smallAmount?: number;
                      mediumAmount?: number;
                      highAmount?: number;
                      maxAmount?: number;
                      /**
                       * @min 1
                       * @max 999999
                       */
                      loyaltyPoints?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      fileId: string;
                      goals?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Gaol"
                         */
                        name?: string;
                      }[];
                    };
                  }[];
                  avatar?: string;
                  cards?: {
                    cardHolder?: string;
                    cardNumber?: string;
                    expiry?: string;
                  }[];
                  favoritesTrainer?: string[];
                  city?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  timeToNotification?: number;
                };
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              dictionaryId: string;
              dictionary?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
                languages?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Russian"
                   */
                  name?: string;
                }[];
              };
              certificates?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fake trainer/scam"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
              /**
               * @minLength 10
               * @maxLength 20
               * @example "+93247587346178"
               */
              phone?: string;
              experience?: number;
              images?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @maxLength 1000
                 * @example "sfece"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
                /** @format date */
                createdAt?: string;
              }[];
              /** @format date */
              deletedAt?: string;
              settings?: object;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
            };
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            /** @example "2020-01-01T00:00:00.000Z" */
            createdAt?: number;
            /** @example "2020-01-01T00:00:00.000Z" */
            updatedAt?: number;
          };
        },
        any
      >({
        path: `/reviews/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags reviews
     * @name DeleteReviewsId
     * @summary Delete review entry
     * @request DELETE:/reviews/{id}
     * @secure
     */
    deleteReviewsId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/reviews/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags reviews
     * @name GetReviewsBytrainerId
     * @summary List all reviews by trainer
     * @request GET:/reviews/by-trainer/{id}
     * @secure
     */
    getReviewsBytrainerId: (
      id: string,
      query?: {
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @maxLength 256 */
        query?: string;
        order?: string;
        rating?: "critical" | "favourable";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @min 1
               * @max 5
               * @example 4
               */
              rating?: number;
              /**
               * @minLength 2
               * @maxLength 500
               * @example "Fake trainer/scam"
               */
              text?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              trainer?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                  cities?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Paris"
                     */
                    name?: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    countryId: string;
                    /** @example "+07:00" */
                    utcOffset: string;
                  }[];
                };
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                cityId: string;
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  /** @example "+07:00" */
                  utcOffset: string;
                };
                gender?: "male" | "female" | "other";
                /**
                 * @minLength 2
                 * @maxLength 5000
                 * @example "Alexandrov"
                 */
                about?: string;
                rating?: number;
                reviews?: {
                  rating?: number;
                  /**
                   * @minLength 2
                   * @maxLength 500
                   * @example "Fake trainer/scam"
                   */
                  text?: string;
                  user?: {
                    id?: string;
                    /**
                     * @minLength 3
                     * @maxLength 100
                     * @example "email@example.com"
                     */
                    email?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandr"
                     */
                    firstName?: string;
                    /**
                     * @minLength 2
                     * @maxLength 200
                     * @example "Alexandrov"
                     */
                    lastName?: string;
                    emailConfirm?: boolean;
                    gender?: "male" | "female" | "other";
                    /** @example "admin" */
                    role?: string;
                    /**
                     * @minLength 10
                     * @maxLength 20
                     * @example "Alexandrov"
                     */
                    phone?: string;
                    injures?: boolean;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    notification?: boolean;
                    pushId?: string;
                    socialId?: string;
                    stripeCustomerId?: string;
                    roleId?: string;
                    countryId?: string;
                    goalId?: string;
                    fileId?: string;
                    cityId?: string;
                    languageId?: string;
                    security?: string;
                    goal?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    country?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Germany"
                       */
                      name?: string;
                      /** @example "🇦🇩" */
                      flag?: string;
                      /**
                       * @minLength 2
                       * @maxLength 3
                       * @example "AG"
                       */
                      shortname?: string;
                    };
                    subscriptions?: {
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      id: string;
                      restOfSession?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      userId: string;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      subscriptionId: string;
                      subscription?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Fitnessssss"
                         */
                        name?: string;
                        smallPrice?: number;
                        mediumPrice?: number;
                        highPrice?: number;
                        maxPrice?: number;
                        smallAmount?: number;
                        mediumAmount?: number;
                        highAmount?: number;
                        maxAmount?: number;
                        /**
                         * @min 1
                         * @max 999999
                         */
                        loyaltyPoints?: number;
                        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                        fileId: string;
                        goals?: {
                          id?: string;
                          /**
                           * @minLength 2
                           * @maxLength 100
                           * @example "Gaol"
                           */
                          name?: string;
                        }[];
                      };
                    }[];
                    avatar?: string;
                    cards?: {
                      cardHolder?: string;
                      cardNumber?: string;
                      expiry?: string;
                    }[];
                    favoritesTrainer?: string[];
                    city?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    };
                    timeToNotification?: number;
                  };
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                dictionaryId: string;
                dictionary?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  trainerId: string;
                  languages?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Russian"
                     */
                    name?: string;
                  }[];
                };
                certificates?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fake trainer/scam"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name: string;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  smallPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  mediumPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  highPrice: number;
                  /**
                   * @min 1
                   * @max 9999
                   */
                  maxPrice: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  smallAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  mediumAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  highAmount: number;
                  /**
                   * @min 1
                   * @max 99
                   */
                  maxAmount: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  goals: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 30
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  image?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "filename"
                     */
                    filename?: string;
                    /**
                     * @minLength 2
                     * @maxLength 1000
                     * @example "Fake trainer/scam"
                     */
                    key?: string;
                    /**
                     * @maxLength 100
                     * @example "type"
                     */
                    type?: string;
                  };
                };
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "+93247587346178"
                 */
                phone?: string;
                experience?: number;
                images?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @maxLength 1000
                   * @example "sfece"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                  /** @format date */
                  createdAt?: string;
                }[];
                /** @format date */
                deletedAt?: string;
                settings?: object;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
              };
              user?: {
                id?: string;
                /**
                 * @minLength 3
                 * @maxLength 100
                 * @example "email@example.com"
                 */
                email?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandr"
                 */
                firstName?: string;
                /**
                 * @minLength 2
                 * @maxLength 200
                 * @example "Alexandrov"
                 */
                lastName?: string;
                emailConfirm?: boolean;
                gender?: "male" | "female" | "other";
                /** @example "admin" */
                role?: string;
                /**
                 * @minLength 10
                 * @maxLength 20
                 * @example "Alexandrov"
                 */
                phone?: string;
                injures?: boolean;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                notification?: boolean;
                pushId?: string;
                socialId?: string;
                stripeCustomerId?: string;
                roleId?: string;
                countryId?: string;
                goalId?: string;
                fileId?: string;
                cityId?: string;
                languageId?: string;
                security?: string;
                goal?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                subscriptions?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  restOfSession?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  userId: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  subscriptionId: string;
                  subscription?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Fitnessssss"
                     */
                    name?: string;
                    smallPrice?: number;
                    mediumPrice?: number;
                    highPrice?: number;
                    maxPrice?: number;
                    smallAmount?: number;
                    mediumAmount?: number;
                    highAmount?: number;
                    maxAmount?: number;
                    /**
                     * @min 1
                     * @max 999999
                     */
                    loyaltyPoints?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    fileId: string;
                    goals?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Gaol"
                       */
                      name?: string;
                    }[];
                  };
                }[];
                avatar?: string;
                cards?: {
                  cardHolder?: string;
                  cardNumber?: string;
                  expiry?: string;
                }[];
                favoritesTrainer?: string[];
                city?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                };
                timeToNotification?: number;
              };
              /** @example "2020-01-01T00:00:00.000Z" */
              createdAt?: number;
              /** @example "2020-01-01T00:00:00.000Z" */
              updatedAt?: number;
            }[];
          };
        },
        any
      >({
        path: `/reviews/by-trainer/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags reviews
     * @name GetReviewsBytrainerIdStats
     * @summary List all reviews by trainer group by rating
     * @request GET:/reviews/by-trainer/{id}/stats
     * @secure
     */
    getReviewsBytrainerIdStats: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /**
               * @min 1
               * @max 5
               * @example 4
               */
              rating?: number;
              /**
               * @min 0
               * @max 500
               * @example 4
               */
              rating_count?: number;
            }[];
          };
        },
        any
      >({
        path: `/reviews/by-trainer/${id}/stats`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags reviews
     * @name PostReviews
     * @summary Create new review
     * @request POST:/reviews
     * @secure
     */
    postReviews: (
      body: {
        rating?: number;
        /**
         * @minLength 2
         * @maxLength 500
         * @example "Fake trainer/scam"
         */
        text?: string;
        /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
        trainerId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
            id: string;
            /**
             * @min 1
             * @max 5
             * @example 4
             */
            rating?: number;
            /**
             * @minLength 2
             * @maxLength 500
             * @example "Fake trainer/scam"
             */
            text?: string;
            trainer?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              countryId: string;
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
                cities?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Paris"
                   */
                  name?: string;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  countryId: string;
                  /** @example "+07:00" */
                  utcOffset: string;
                }[];
              };
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              cityId: string;
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Paris"
                 */
                name?: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                countryId: string;
                country?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Germany"
                   */
                  name?: string;
                  /** @example "🇦🇩" */
                  flag?: string;
                  /**
                   * @minLength 2
                   * @maxLength 3
                   * @example "AG"
                   */
                  shortname?: string;
                };
                /** @example "+07:00" */
                utcOffset: string;
              };
              gender?: "male" | "female" | "other";
              /**
               * @minLength 2
               * @maxLength 5000
               * @example "Alexandrov"
               */
              about?: string;
              rating?: number;
              reviews?: {
                rating?: number;
                /**
                 * @minLength 2
                 * @maxLength 500
                 * @example "Fake trainer/scam"
                 */
                text?: string;
                user?: {
                  id?: string;
                  /**
                   * @minLength 3
                   * @maxLength 100
                   * @example "email@example.com"
                   */
                  email?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandr"
                   */
                  firstName?: string;
                  /**
                   * @minLength 2
                   * @maxLength 200
                   * @example "Alexandrov"
                   */
                  lastName?: string;
                  emailConfirm?: boolean;
                  gender?: "male" | "female" | "other";
                  /** @example "admin" */
                  role?: string;
                  /**
                   * @minLength 10
                   * @maxLength 20
                   * @example "Alexandrov"
                   */
                  phone?: string;
                  injures?: boolean;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  notification?: boolean;
                  pushId?: string;
                  socialId?: string;
                  stripeCustomerId?: string;
                  roleId?: string;
                  countryId?: string;
                  goalId?: string;
                  fileId?: string;
                  cityId?: string;
                  languageId?: string;
                  security?: string;
                  goal?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  country?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Germany"
                     */
                    name?: string;
                    /** @example "🇦🇩" */
                    flag?: string;
                    /**
                     * @minLength 2
                     * @maxLength 3
                     * @example "AG"
                     */
                    shortname?: string;
                  };
                  subscriptions?: {
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    id: string;
                    restOfSession?: number;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    userId: string;
                    /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                    subscriptionId: string;
                    subscription?: {
                      id?: string;
                      /**
                       * @minLength 2
                       * @maxLength 100
                       * @example "Fitnessssss"
                       */
                      name?: string;
                      smallPrice?: number;
                      mediumPrice?: number;
                      highPrice?: number;
                      maxPrice?: number;
                      smallAmount?: number;
                      mediumAmount?: number;
                      highAmount?: number;
                      maxAmount?: number;
                      /**
                       * @min 1
                       * @max 999999
                       */
                      loyaltyPoints?: number;
                      /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                      fileId: string;
                      goals?: {
                        id?: string;
                        /**
                         * @minLength 2
                         * @maxLength 100
                         * @example "Gaol"
                         */
                        name?: string;
                      }[];
                    };
                  }[];
                  avatar?: string;
                  cards?: {
                    cardHolder?: string;
                    cardNumber?: string;
                    expiry?: string;
                  }[];
                  favoritesTrainer?: string[];
                  city?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  };
                  timeToNotification?: number;
                };
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              dictionaryId: string;
              dictionary?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
                languages?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Russian"
                   */
                  name?: string;
                }[];
              };
              certificates?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fake trainer/scam"
                 */
                name?: string;
              }[];
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name: string;
                /**
                 * @min 1
                 * @max 9999
                 */
                smallPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                mediumPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                highPrice: number;
                /**
                 * @min 1
                 * @max 9999
                 */
                maxPrice: number;
                /**
                 * @min 1
                 * @max 99
                 */
                smallAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                mediumAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                highAmount: number;
                /**
                 * @min 1
                 * @max 99
                 */
                maxAmount: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                goals: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 30
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                image?: {
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  id: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "filename"
                   */
                  filename?: string;
                  /**
                   * @minLength 2
                   * @maxLength 1000
                   * @example "Fake trainer/scam"
                   */
                  key?: string;
                  /**
                   * @maxLength 100
                   * @example "type"
                   */
                  type?: string;
                };
              };
              /**
               * @minLength 10
               * @maxLength 20
               * @example "+93247587346178"
               */
              phone?: string;
              experience?: number;
              images?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 1000
                 * @example "filename"
                 */
                filename?: string;
                /**
                 * @maxLength 1000
                 * @example "sfece"
                 */
                key?: string;
                /**
                 * @maxLength 100
                 * @example "type"
                 */
                type?: string;
                /** @format date */
                createdAt?: string;
              }[];
              /** @format date */
              deletedAt?: string;
              settings?: object;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
            };
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
          };
        },
        any
      >({
        path: `/reviews`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  stripe = {
    /**
     * No description
     *
     * @tags STRIPE
     * @name GetStripeAccounts
     * @summary Get connected accounts
     * @request GET:/stripe/accounts
     * @secure
     */
    getStripeAccounts: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/accounts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE, stripe for mobile
     * @name GetStripePm
     * @summary Get payment methods
     * @request GET:/stripe/pm
     * @secure
     */
    getStripePm: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/pm`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE, stripe for mobile
     * @name GetStripePubkey
     * @summary Return pub key for stripe
     * @request GET:/stripe/pub-key
     * @secure
     */
    getStripePubkey: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/pub-key`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE, stripe for mobile
     * @name GetStripeLinkId
     * @summary Get link
     * @request GET:/stripe/link/{id}
     * @secure
     */
    getStripeLinkId: (id?: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/link/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE, stripe for mobile
     * @name GetStripePaymentId
     * @summary Get payment
     * @request GET:/stripe/payment/{id}
     * @secure
     */
    getStripePaymentId: (id?: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/payment/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE
     * @name GetStripeAccountsConnectaccountRefresh
     * @summary Refresh link for connect account and redirect
     * @request GET:/stripe/accounts/connect-account/refresh
     * @secure
     */
    getStripeAccountsConnectaccountRefresh: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/accounts/connect-account/refresh`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE, stripe for mobile
     * @name PostStripeCreatelink
     * @summary Create payment link
     * @request POST:/stripe/create-link
     * @secure
     */
    postStripeCreatelink: (
      body: {
        subscriptionId: string;
        numberOfSession: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/stripe/create-link`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE
     * @name PostStripeAccountsConnectaccount
     * @summary This method is called when the artist wants to connect his bank account.
     * @request POST:/stripe/accounts/connect-account
     * @secure
     */
    postStripeAccountsConnectaccount: (
      body: {
        /** @maxLength 50 */
        accountId?: string;
        returnLink?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/stripe/accounts/connect-account`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE, stripe for mobile
     * @name PostStripePmSavecardintent
     * @summary This method is called when the user wants to save their card for future payments.
     * @request POST:/stripe/pm/save-card-intent
     * @secure
     */
    postStripePmSavecardintent: (params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/pm/save-card-intent`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE
     * @name PostStripeAccountsDefaultAccountid
     * @summary Set default account
     * @request POST:/stripe/accounts/default/{accountId}
     * @secure
     */
    postStripeAccountsDefaultAccountid: (accountId?: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/accounts/default/${accountId}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE
     * @name DeleteStripeAccountsAccountid
     * @summary Delete connected account
     * @request DELETE:/stripe/accounts/{accountId}
     * @secure
     */
    deleteStripeAccountsAccountid: (accountId?: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/accounts/${accountId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags STRIPE, stripe for mobile
     * @name DeleteStripePmId
     * @summary Delete payment method
     * @request DELETE:/stripe/pm/{id}
     * @secure
     */
    deleteStripePmId: (id?: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/stripe/pm/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  timeSlots = {
    /**
     * No description
     *
     * @tags time-slots
     * @name GetTimeslotsBytrainerId
     * @summary List all timeslots by trainer
     * @request GET:/time-slots/by-trainer/{id}
     * @secure
     */
    getTimeslotsBytrainerId: (
      id: string,
      query?: {
        query?: string;
        /** @format date */
        from?: string;
        /** @format date */
        to?: string;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @format date
               * @example "2020-01-01"
               */
              date?: string;
              /** @example "10:00" */
              time?: string;
              /** @example "sunday" */
              dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
              /** @example true */
              isAvilable?: boolean;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
            }[];
          };
        },
        any
      >({
        path: `/time-slots/by-trainer/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slots
     * @name PostTimeslotsBytrainerId
     * @summary Create new time slot by trainer
     * @request POST:/time-slots/by-trainer/{id}
     * @secure
     */
    postTimeslotsBytrainerId: (
      id: string,
      body: {
        monday?: {
          /**
           * @min 0
           * @max 24
           * @example 9
           */
          from?: number;
          /**
           * @min 0
           * @max 24
           * @example 18
           */
          to?: number;
        }[];
        tuesday?: {
          /**
           * @min 0
           * @max 24
           * @example 9
           */
          from?: number;
          /**
           * @min 0
           * @max 24
           * @example 18
           */
          to?: number;
        }[];
        wednesday?: {
          /**
           * @min 0
           * @max 24
           * @example 9
           */
          from?: number;
          /**
           * @min 0
           * @max 24
           * @example 18
           */
          to?: number;
        }[];
        thursday?: {
          /**
           * @min 0
           * @max 24
           * @example 9
           */
          from?: number;
          /**
           * @min 0
           * @max 24
           * @example 18
           */
          to?: number;
        }[];
        friday?: {
          /**
           * @min 0
           * @max 24
           * @example 9
           */
          from?: number;
          /**
           * @min 0
           * @max 24
           * @example 18
           */
          to?: number;
        }[];
        saturday?: {
          /**
           * @min 0
           * @max 24
           * @example 9
           */
          from?: number;
          /**
           * @min 0
           * @max 24
           * @example 18
           */
          to?: number;
        }[];
        sunday?: {
          /**
           * @min 0
           * @max 24
           * @example 9
           */
          from?: number;
          /**
           * @min 0
           * @max 24
           * @example 18
           */
          to?: number;
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @format date
               * @example "2020-01-01"
               */
              date?: string;
              /** @example "10:00" */
              time?: string;
              /** @example "sunday" */
              dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
              /** @example true */
              isAvilable?: boolean;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
            }[];
          };
        },
        any
      >({
        path: `/time-slots/by-trainer/${id}`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slots
     * @name GetTimeslotsBytrainerIdAvailable
     * @summary List all available timeslots by trainer
     * @request GET:/time-slots/by-trainer/{id}/available
     * @secure
     */
    getTimeslotsBytrainerIdAvailable: (
      id: string,
      query?: {
        query?: string;
        /** @format date */
        from?: string;
        /** @format date */
        to?: string;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              /**
               * @format date
               * @example "2020-01-01"
               */
              date?: string;
              /** @example "10:00" */
              time?: string;
              /** @example "sunday" */
              dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
              /** @example true */
              isAvilable?: boolean;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              trainerId: string;
            }[];
          };
        },
        any
      >({
        path: `/time-slots/by-trainer/${id}/available`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slots
     * @name GetTimeslotsBytrainerIdAdmin
     * @summary List all timeslots by trainer
     * @request GET:/time-slots/by-trainer/{id}/admin
     * @secure
     */
    getTimeslotsBytrainerIdAdmin: (
      id: string,
      query: {
        query?: string;
        order?: string;
        /**
         * @min 0
         * @default 10
         */
        limit?: number;
        /**
         * @min 0
         * @default 0
         */
        offset?: number;
        /** @format date */
        month: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example 10 */
            count?: number;
            items?: {
              monday?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @format date
                 * @example "2020-01-01"
                 */
                date?: string;
                /** @example "10:00" */
                time?: string;
                /** @example "sunday" */
                dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                /** @example true */
                isAvilable?: boolean;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
              }[];
              tuesday?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @format date
                 * @example "2020-01-01"
                 */
                date?: string;
                /** @example "10:00" */
                time?: string;
                /** @example "sunday" */
                dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                /** @example true */
                isAvilable?: boolean;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
              }[];
              wednesday?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @format date
                 * @example "2020-01-01"
                 */
                date?: string;
                /** @example "10:00" */
                time?: string;
                /** @example "sunday" */
                dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                /** @example true */
                isAvilable?: boolean;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
              }[];
              thursday?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @format date
                 * @example "2020-01-01"
                 */
                date?: string;
                /** @example "10:00" */
                time?: string;
                /** @example "sunday" */
                dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                /** @example true */
                isAvilable?: boolean;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
              }[];
              friday?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @format date
                 * @example "2020-01-01"
                 */
                date?: string;
                /** @example "10:00" */
                time?: string;
                /** @example "sunday" */
                dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                /** @example true */
                isAvilable?: boolean;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
              }[];
              saturday?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @format date
                 * @example "2020-01-01"
                 */
                date?: string;
                /** @example "10:00" */
                time?: string;
                /** @example "sunday" */
                dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                /** @example true */
                isAvilable?: boolean;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
              }[];
              sunday?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                /**
                 * @format date
                 * @example "2020-01-01"
                 */
                date?: string;
                /** @example "10:00" */
                time?: string;
                /** @example "sunday" */
                dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                /** @example true */
                isAvilable?: boolean;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                trainerId: string;
              }[];
            };
          };
        },
        any
      >({
        path: `/time-slots/by-trainer/${id}/admin`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slots
     * @name DeleteTimeslotsId
     * @summary Delete time slot entry
     * @request DELETE:/time-slots/{id}
     * @secure
     */
    deleteTimeslotsId: (id: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/time-slots/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name PostAuthChangepassword
     * @summary Change password
     * @request POST:/auth/change-password
     * @secure
     */
    postAuthChangepassword: (
      body: {
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        oldPassword: string;
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        newPassword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
        },
        any
      >({
        path: `/auth/change-password`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthLogout
     * @summary Logout
     * @request POST:/auth/logout
     * @secure
     */
    postAuthLogout: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
        },
        any
      >({
        path: `/auth/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthRefreshtokens
     * @summary Refresh tokens
     * @request POST:/auth/refresh-tokens
     * @secure
     */
    postAuthRefreshtokens: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/auth/refresh-tokens`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthSignin
     * @summary Log in
     * @request POST:/auth/sign-in
     * @secure
     */
    postAuthSignin: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email: string;
        /** @example "pa@s$word" */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/auth/sign-in`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthSignup
     * @summary Sign up
     * @request POST:/auth/sign-up
     * @secure
     */
    postAuthSignup: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email: string;
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        password: string;
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        repeatPassword: string;
        /** @example "123gewrewijr321" */
        pushId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/auth/sign-up`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthRestorepassword1
     * @summary Restore password step 1
     * @request POST:/auth/restore-password/1
     * @secure
     */
    postAuthRestorepassword1: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            user?: {
              id?: string;
              /**
               * @minLength 3
               * @maxLength 100
               * @example "email@example.com"
               */
              email?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandr"
               */
              firstName?: string;
              /**
               * @minLength 2
               * @maxLength 200
               * @example "Alexandrov"
               */
              lastName?: string;
              emailConfirm?: boolean;
              gender?: "male" | "female" | "other";
              /** @example "admin" */
              role?: string;
              /**
               * @minLength 10
               * @maxLength 20
               * @example "Alexandrov"
               */
              phone?: string;
              injures?: boolean;
              /**
               * @min 1
               * @max 999999
               */
              loyaltyPoints?: number;
              notification?: boolean;
              pushId?: string;
              socialId?: string;
              stripeCustomerId?: string;
              roleId?: string;
              countryId?: string;
              goalId?: string;
              fileId?: string;
              cityId?: string;
              languageId?: string;
              security?: string;
              goal?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              country?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Germany"
                 */
                name?: string;
                /** @example "🇦🇩" */
                flag?: string;
                /**
                 * @minLength 2
                 * @maxLength 3
                 * @example "AG"
                 */
                shortname?: string;
              };
              subscriptions?: {
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                id: string;
                restOfSession?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                userId: string;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                subscriptionId: string;
                subscription?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Fitnessssss"
                   */
                  name?: string;
                  smallPrice?: number;
                  mediumPrice?: number;
                  highPrice?: number;
                  maxPrice?: number;
                  smallAmount?: number;
                  mediumAmount?: number;
                  highAmount?: number;
                  maxAmount?: number;
                  /**
                   * @min 1
                   * @max 999999
                   */
                  loyaltyPoints?: number;
                  /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                  fileId: string;
                  goals?: {
                    id?: string;
                    /**
                     * @minLength 2
                     * @maxLength 100
                     * @example "Gaol"
                     */
                    name?: string;
                  }[];
                };
              }[];
              avatar?: string;
              cards?: {
                cardHolder?: string;
                cardNumber?: string;
                expiry?: string;
              }[];
              favoritesTrainer?: string[];
              city?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Gaol"
                 */
                name?: string;
              };
              timeToNotification?: number;
            };
            /**
             * @minLength 8
             * @maxLength 30
             * @example "pa@s$word"
             */
            newPassword?: string;
            /** @example "111111" */
            verificationCode?: number;
          };
        },
        any
      >({
        path: `/auth/restore-password/1`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthRestorepassword2
     * @summary Restore password step 2
     * @request POST:/auth/restore-password/2
     * @secure
     */
    postAuthRestorepassword2: (
      body: {
        /** @example "3e09ceed489255166ca022987d32fb46bf846fa92a29cbbd8330705d0fbd3f4e" */
        token: string;
        /**
         * @min 100000
         * @max 999999
         * @example 123653
         */
        code: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
        },
        any
      >({
        path: `/auth/restore-password/2`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthRestorepassword3
     * @summary Restore password step 3
     * @request POST:/auth/restore-password/3
     * @secure
     */
    postAuthRestorepassword3: (
      body: {
        /** @example "3e09ceed489255166ca022987d32fb46bf846fa92a29cbbd8330705d0fbd3f4e" */
        token: string;
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        password: string;
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        confirmPassword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            id?: string;
            /**
             * @minLength 3
             * @maxLength 100
             * @example "email@example.com"
             */
            email?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandr"
             */
            firstName?: string;
            /**
             * @minLength 2
             * @maxLength 200
             * @example "Alexandrov"
             */
            lastName?: string;
            emailConfirm?: boolean;
            gender?: "male" | "female" | "other";
            /** @example "admin" */
            role?: string;
            /**
             * @minLength 10
             * @maxLength 20
             * @example "Alexandrov"
             */
            phone?: string;
            injures?: boolean;
            /**
             * @min 1
             * @max 999999
             */
            loyaltyPoints?: number;
            notification?: boolean;
            pushId?: string;
            socialId?: string;
            stripeCustomerId?: string;
            roleId?: string;
            countryId?: string;
            goalId?: string;
            fileId?: string;
            cityId?: string;
            languageId?: string;
            security?: string;
            goal?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            country?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Germany"
               */
              name?: string;
              /** @example "🇦🇩" */
              flag?: string;
              /**
               * @minLength 2
               * @maxLength 3
               * @example "AG"
               */
              shortname?: string;
            };
            subscriptions?: {
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              id: string;
              restOfSession?: number;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              userId: string;
              /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
              subscriptionId: string;
              subscription?: {
                id?: string;
                /**
                 * @minLength 2
                 * @maxLength 100
                 * @example "Fitnessssss"
                 */
                name?: string;
                smallPrice?: number;
                mediumPrice?: number;
                highPrice?: number;
                maxPrice?: number;
                smallAmount?: number;
                mediumAmount?: number;
                highAmount?: number;
                maxAmount?: number;
                /**
                 * @min 1
                 * @max 999999
                 */
                loyaltyPoints?: number;
                /** @example "34da67e3-fbf6-41e7-91f4-adc8aa35c9a0" */
                fileId: string;
                goals?: {
                  id?: string;
                  /**
                   * @minLength 2
                   * @maxLength 100
                   * @example "Gaol"
                   */
                  name?: string;
                }[];
              };
            }[];
            avatar?: string;
            cards?: {
              cardHolder?: string;
              cardNumber?: string;
              expiry?: string;
            }[];
            favoritesTrainer?: string[];
            city?: {
              id?: string;
              /**
               * @minLength 2
               * @maxLength 100
               * @example "Gaol"
               */
              name?: string;
            };
            timeToNotification?: number;
          };
        },
        any
      >({
        path: `/auth/restore-password/3`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth, admin
     * @name PostAuthSigninAdmin
     * @summary Log in for admin
     * @request POST:/auth/sign-in/admin
     * @secure
     */
    postAuthSigninAdmin: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email: string;
        /** @example "pa@s$word" */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/auth/sign-in/admin`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth, admin
     * @name PostAuthSignupAdmin
     * @summary Sign up admin
     * @request POST:/auth/sign-up/admin
     * @secure
     */
    postAuthSignupAdmin: (
      body: {
        /**
         * @minLength 3
         * @maxLength 100
         * @example "email@example.com"
         */
        email: string;
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        password: string;
        /**
         * @minLength 8
         * @maxLength 30
         * @example "pa@s$word"
         */
        repeatPassword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/auth/sign-up/admin`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthSignupApple
     * @summary Sign up apple
     * @request POST:/auth/sign-up/apple
     * @secure
     */
    postAuthSignupApple: (
      body: {
        /** @example "123gewrewijr321" */
        idToken: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/auth/sign-up/apple`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name PostAuthSignupGoogle
     * @summary Sign up google
     * @request POST:/auth/sign-up/google
     * @secure
     */
    postAuthSignupGoogle: (
      body: {
        /** @example "123gewrewijr321" */
        idToken: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
          result?: {
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
            access?: string;
            /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpnZmdmZ2YiLCJpYXQiOjE1MTYyMzkwMjJ9.r-tzuuBbuYfe2birJuqAH0eYhtzkNOs2tqLMI6-NPW8" */
            refresh?: string;
          };
        },
        any
      >({
        path: `/auth/sign-up/google`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),
  };
  verificationCode = {
    /**
     * No description
     *
     * @tags verification-code
     * @name PostVerificationcodeCheck
     * @summary Check valid verification code
     * @request POST:/verification-code/check
     * @secure
     */
    postVerificationcodeCheck: (
      body: {
        /** @example "111111" */
        code?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
        },
        any
      >({
        path: `/verification-code/check`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags verification-code
     * @name PostVerificationcodeCreate
     * @summary Create new verification code
     * @request POST:/verification-code/create
     * @secure
     */
    postVerificationcodeCreate: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          ok?: boolean;
        },
        any
      >({
        path: `/verification-code/create`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags booking, admin
     * @name PutAdminBookingIdCancel
     * @summary Cancel booking entry
     * @request PUT:/admin/booking/{id}/cancel
     * @secure
     */
    putAdminBookingIdCancel: (
      id: string,
      body: {
        /**
         * @minLength 2
         * @maxLength 500
         * @example "comment"
         */
        comment: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/admin/booking/${id}/cancel`,
        method: "PUT",
        body: body,
        secure: true,
        ...params,
      }),
  };
}
