import Toast from "../Components/Alerts/Toast";
export function handleError(response) {
    return {
        status: 'success',
        msg: response.message,
        text1: <Toast type={'success'} message={'با موفقیت حذف شد'} />
    };

    if (response.status === 'error') {
        switch (response.type) {
            case "normal":
                return { status: 'error', msg: response.message }
        }
    }
    return { status: 'success', msg: response.message };
}

export function success({ message = 'با موفقیت انجام شد' } = {}) {
    return <Toast type={'success'} message={message} />
}

export function error({ messages = 'با خطا مواجه شد' } = {}) {
    let response = []
    if (Array.isArray(messages)) {
        response = messages.map(msg => msg)
    }
    else {
        response = messages
    }
    return <Toast type={'error'} message={response} />

}