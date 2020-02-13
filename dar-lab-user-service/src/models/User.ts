import { Model, Table, Column, DefaultScope, Scopes } from "sequelize-typescript";

@DefaultScope(() => ({
    attributes: ['id', 'username', 'firstName', 'lastName']
}))

@Scopes(() => ({
    withPassword: {
        attributes: ['id', 'username', 'password']
    }
}))

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