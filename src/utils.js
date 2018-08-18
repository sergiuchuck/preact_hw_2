//file contains some generally useful functions

//it happens that preact fails in case if key has name 'ref'
//so, need to rename it if it is the case
export function rename_dangerous_keys(data) {
    if ("ref" in data) {
        return rename_key_in_object(data, "ref", "ref_renamed_because_preact_cannot_process_initial_key");
    }
    else {
        return data;
    }
}

//https://stackoverflow.com/a/14592469/10222982
function rename_key_in_object(o, old_key, new_key) {
    if (old_key !== new_key) {
        Object.defineProperty(o, new_key,
            Object.getOwnPropertyDescriptor(o, old_key));
        delete o[old_key];
    }
    return o;
}