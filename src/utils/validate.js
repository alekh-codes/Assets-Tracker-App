export function validate(formData){
    let err={};

    if(!formData.assets.trim()){
        err.assets = "Asset name is required";
    }

    if(!formData.category.trim()){
        err.category = "Category is required";
    }

    if(!formData.department.trim()){
        err.department = "Department is required";
    }

    if(!formData.status){
        err.status = "Please select a status";
    }

    return err;

}