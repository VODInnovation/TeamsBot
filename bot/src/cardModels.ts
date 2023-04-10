/**
 * Adaptive Card data model. Properties can be referenced in an adaptive card via the `${var}`
 * Adaptive Card syntax.
 */
export interface CardData {
  title: string;
  body: string;
}

export interface CacherData {
  FormInfo: FormInfo
  Order: Order;
}

export interface FormInfo {
  title: string;
}

export interface Order {
  questions: Question[];
}

export interface Question {
  question: string;
  items: Item[];
}

export interface Item {
  choice: string;
  value: string;
}

export interface SubmitResponseData {
  title: string,
  actionData: SubmitActionData
}

export interface SubmitActionData {
  AssetEnvVal: string,
  AssetTypeVal: string,
  AssetNameVal: string
}