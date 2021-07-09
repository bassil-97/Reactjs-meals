import React, { Fragment } from 'react';
import ReacrDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

export default function Modal(props) {

    const portalElement = document.getElementById('overlays');

    return (
        <Fragment>
            {ReacrDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReacrDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}
