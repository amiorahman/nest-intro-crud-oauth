import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface User extends mongoose.Document {
    _id: string;
    user_name: string;
    user_pass: string;
}
