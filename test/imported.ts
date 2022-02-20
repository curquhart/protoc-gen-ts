/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: test/_/imported.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace importdirective {
    export class Imported extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new Imported({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Imported {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Imported();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Imported {
            return Imported.deserialize(bytes);
        }
    }
    export namespace Imported {
        export class SubMessage extends pb_1.Message {
            constructor(data?: any[] | {
                key?: Imported.SubMessage.MyEnum;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("key" in data && data.key != undefined) {
                        this.key = data.key;
                    }
                }
            }
            get key() {
                return pb_1.Message.getField(this, 1) as Imported.SubMessage.MyEnum;
            }
            set key(value: Imported.SubMessage.MyEnum) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data: {
                key?: Imported.SubMessage.MyEnum;
            }) {
                const message = new SubMessage({});
                if (data.key != null) {
                    message.key = data.key;
                }
                return message;
            }
            toObject() {
                const data: {
                    key?: Imported.SubMessage.MyEnum;
                } = {};
                if (this.key != null) {
                    data.key = this.key;
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.key !== undefined)
                    writer.writeEnum(1, this.key);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SubMessage {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SubMessage();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.key = reader.readEnum();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): SubMessage {
                return SubMessage.deserialize(bytes);
            }
        }
        export namespace SubMessage {
            export enum MyEnum {
                VALUE = 0,
                VALUE2 = 1
            }
        }
    }
}