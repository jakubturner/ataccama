export const getKeys = (rows: any) => {
    return getCols(rows[0])
}

export const getCols = (row: any) => {
    return Object.keys(row.data)
}


export const getRecords = (row: any, childTable: string) => {
    return row.kids[childTable].records || []
}


export const getInheritName = (row: any) => {
    return Object.keys(row.kids)[0]
}

export const getRowId = (row: any) => {
    return Object.values(row.data)[0]
}

