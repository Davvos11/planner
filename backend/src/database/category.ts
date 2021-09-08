import {getModelForClass, prop, Ref} from "@typegoose/typegoose";
import {User} from "./user";

export class Category {
    @prop({required: true})
    public title?: string

    @prop({required: true})
    public owner: Ref<User>
}

export const CategoryModel = getModelForClass(Category)