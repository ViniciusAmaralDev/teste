import { Realm, createRealmContext } from "@realm/react";

export class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  // the Task.generate() method creates Task objects with fields with default values
  static generate(description: string, title: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      title,
      isComplete: false,
      createdAt: new Date(),
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string",
      title: "string?",
      isComplete: { type: "bool", default: false },
      createdAt: "date",
    },
  };
}

const config = {
  schema: [Task],
};
export default createRealmContext(config);
