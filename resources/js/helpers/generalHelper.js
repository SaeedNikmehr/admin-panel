import Toast from "../Components/Alerts/Toast";
export function handleError( response ) {
    return {
        status: 'success',
        msg: response.message,
        text1: <Toast type={ 'success' } message={ 'با موفقیت حذف شد' }/>
    };

    if ( response.status === 'error' ) {
        switch ( response.type ) {
            case "normal":
                return { status: 'error', msg: response.message }
        }
    }
    return { status: 'success', msg: response.message };
}

