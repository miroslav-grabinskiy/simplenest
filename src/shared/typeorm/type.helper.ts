import { Column, ColumnOptions, ColumnType } from 'typeorm';

const mysqlSqliteTypeMapping: { [key: string]: ColumnType } = {
    'mediumtext': 'text',
    'timestamp': 'datetime',
    'mediumblob': 'blob'
};

export function resolveDbType(mySqlType: ColumnType): ColumnType {
    const isTestEnv = process.env.NODE_ENV === 'test';
    if (isTestEnv && <string>mySqlType in mysqlSqliteTypeMapping) {
        return mysqlSqliteTypeMapping[mySqlType.toString()];
    }
    return mySqlType;
}

export function DbAwareColumn(columnOptions: ColumnOptions) {
    if (columnOptions.type) {
        columnOptions.type = resolveDbType(columnOptions.type);
    }
    return Column(columnOptions);
}