import {getModelForClass, prop, Ref} from "@typegoose/typegoose";
import {Category} from "./category";
import {Event} from "./event";
import {User} from "./user";

export class Deadline {
    @prop({required: true})
    public title?: string

    @prop({required: true})
    public category?: Ref<Category>

    @prop({required: true})
    public timestamp?: Date

    @prop()
    public events: Ref<Event>[] = []

    @prop({required: true})
    public owner: Ref<User>
}

export const DeadlineModel = getModelForClass(Deadline);