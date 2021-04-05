// #region Remote Data
/**
 * initialises state for remote data in the form { data: obj_or_array, isInit: true }
 *
 * @param {*} obj
 * @returns { data: obj, isInit: true }
 */
export const initState = (obj) => {
    return Array.isArray(obj)
        ? {
            data: [],
            isInit: true
        }
        : {
            data: {},
            isInit: true
        }
}
/**
 * updates the remote data state, with response, error, and fetching states
 *
 * @param {*} payload
 * @returns { data: obj_or_array, isLoading | isSuccess | isError }
 */
export const setState = (payload) => {
    if (payload.url) {
        return {
            data: [], // TODO: cater for {}
            isLoading: true
        }
    } else if (payload.data) {
        return {
            data: payload.data,
            isSuccess: true
        }
    } else if (payload.error) {
        return {
            error: payload.error,
            isError: true
        }
    } else {
        return {
            data: payload,
            isLoading: true
        }
    }
}
// #endregion

// #region Resource manipulation
// Arrays, using index

export const accessItem = (collection, index) => (
    collection[index]
)

export const createItem = (collection, member) => ([
    ...collection,
    member
])
export const updateItem = (collection, index, member) => ([
    ...collection.slice(0, index),
    { ...collection[index], ...member },
    ...collection.slice(index + 1, collection.length)
])
export const deleteItem = (collection, index) => (
    collection.filter((item, i) => i !== index)
)
// ----------------------
// REST, using id
export const accessMember = (collection, id) => (
    collection.slice().filter(item => item.id === id).pop()
)
export const createMember = (collection, member) => ([
    ...collection,
    {
        // TODO: cater for number & GUID
        id: collection[collection.length].id + 1,
        ...member
    }
])
export const updateMember = (collection, id, member) => (
    collection.map(item => item.id === id ? member : item)
)
export const deleteMember = (collection, id) => (
    collection.filter(item => item.id !== id)
)
// #endregion

export default {
    initState,
    setState,
    // array elements (index)
    accessItem,
    createItem,
    updateItem,
    deleteItem,
    // resource elements (id)
    accessMember,
    createMember,
    updateMember,
    deleteMember
}
