import { Model, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./User";

@Table({
    tableName: 'tokens',
    timestamps: false
})
class Token extends Model<Token> {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number;
    
    @ForeignKey(() => User)
    @Column({
        field: 'user_id'
    })
    userId: number;

    @BelongsTo(() => User, 'userId')
    user: User;

    @Column
    token: string;
}
export default Token;