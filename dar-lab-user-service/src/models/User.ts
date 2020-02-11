import { Model, Table, Column } from "sequelize-typescript";

@Table({
    tableName: 'users',
    timestamps: false
})
class User extends Model<User> {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number;
    
    @Column
    username: string;
    
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    password: string;
}
export default User;