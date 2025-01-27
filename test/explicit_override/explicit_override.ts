/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: test/_/explicit_override/explicit_override.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ExplicitOverrideMessage extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        example?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("example" in data && data.example != undefined) {
                this.example = data.example;
            }
        }
    }
    get example() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set example(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        example?: number;
    }): ExplicitOverrideMessage {
        const message = new ExplicitOverrideMessage({});
        if (data.example != null) {
            message.example = data.example;
        }
        return message;
    }
    toObject() {
        const data: {
            example?: number;
        } = {};
        if (this.example != null) {
            data.example = this.example;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.example != 0)
            writer.writeUint32(1, this.example);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExplicitOverrideMessage {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExplicitOverrideMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.example = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static override deserializeBinary(bytes: Uint8Array): ExplicitOverrideMessage {
        return ExplicitOverrideMessage.deserialize(bytes);
    }
}
