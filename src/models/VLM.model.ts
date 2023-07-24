import { DateTime } from "luxon";
import { IsVLMRecord } from "./interfaces/VLM.interface";
import { v4 as uuid } from "uuid";

export class VLMRecord extends Object implements IsVLMRecord {
  pk?: string;
  sk?: string = uuid();
  ts?: EpochTimeStamp = DateTime.now().toUnixInteger();
  [k: string]: any;

  constructor(obj: object) {
    super();
    Object.entries(obj).forEach(([key, value]) => {
      if (!(key in this)) {
        (this as any)[key] = value;
      }
    });
  }
}