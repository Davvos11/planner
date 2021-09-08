import {getModelForClass, prop, Ref} from "@typegoose/typegoose";
import {Category} from "./category";
import {User} from "./user";

export class Event {
    @prop({required: true})
    public title?: string;

    @prop({required: true})
    public start?: Date

    @prop({required: true})
    public end?: Date

    @prop({required: true})
    public category?: Ref<Category>

    @prop({required: true})
    public owner: Ref<User>
}

export const EventModel = getModelForClass(Event)