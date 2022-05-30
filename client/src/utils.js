import React from "react";
import { message, notification, Divider } from 'antd';
const NETWORK_ERROR = `NETWORK ERROR..! This site can’t be reached`;
const MESSAGE_CLOSE_POP_TIMINGS=2;

export const addAlert = (response) => {

    return message.success({
        content: response && response.data && response.data && response.data.message ? response.data.message : `Record has been added successfully`,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: MESSAGE_CLOSE_POP_TIMINGS,
    })
}

export const deleteAlert = (response) => {
    return message.error({
        content: response && response.data && response.data && response.data.message ? response.data.message : `Record has been deleted successfully`,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: MESSAGE_CLOSE_POP_TIMINGS,
    })
}

export const updateAlert = (response) => {
    return message.success({
        content: response && response.data && response.data && response.data.message ? response.data.message : `Record has been updated successfully`,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: MESSAGE_CLOSE_POP_TIMINGS,
    })
}


export const HttpErrorAlert = (props) => {
    handleHTTPError(props)
}

const execute401Handler = (props, error) => {

    return message.error({
        content: error.response && error.response.data && error.response.data.err && `${error.response.data.err.message}`,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: 1,
    })
}

const execute400Handler = (props, error) => {

    return message.error({
        content: error.response && error.response.data && error.response.data.err && error.response.data.err.message,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: 1,
    })
}

const execute404Handler = (props, error) => {

    return message.error({
        content: error.response && error.response.data && error.response.data.err && error.response.data.err.message,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: 1,
    })
}

const execute500Handler = (props, error) => {

    return message.error({
        content: "Oops something went wrong!",
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: 1,
    })
}

const executeOtherErrorHandler = (props, error) => {

    return message.error({
        content: error.response && error.response.data && error.response.data.msg && error.response.data.msg,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: 1,
    })
}

const networkError = (props, error) => {
    return <div className="internet-error">
        {notification.error({
            style: { width: 300, color: '#FF0000', backgroundColor: '#FFBABA' },
            message: 'ERROR..!',
            placement: 'topLeft',
            description: NETWORK_ERROR
        })}
        <Divider />
    </div>
}

const execute405Handler = (props, error) => {
    return message.error({
        content: error.response && error.response.data && error.response.data.msg && error.response.data.msg,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: MESSAGE_CLOSE_POP_TIMINGS,
    })
}


const execute409Handler = (props, error) => {
    return message.error({
        content: error.response && error.response.data && error.response.data.msg && error.response.data.msg,
        className: 'custom-class',
        style: {
            marginTop: '20vh',
        },
        duration: MESSAGE_CLOSE_POP_TIMINGS,
    })
}

export const handleHTTPError = (error, props) => {


    if (error.response === undefined) {

        return networkError(props, error)
    }
    else if (error.response.status === 400) {

        return execute400Handler(props, error);
    }
    else if (error.response.status === 401) {

        return execute401Handler(props, error);
    }
    else if (error.response.status === 404) {

        return execute404Handler(props, error);
    }
    else if (error.response.status === 500) {

        return execute500Handler(props, error);

    } else if (error.response.status === 405) {

        return execute405Handler(props, error);

    } else if (error.response.status === 409) {

        return execute409Handler(props, error);

    } else {

        return executeOtherErrorHandler(props, error);
    }
}



export const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
export const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};