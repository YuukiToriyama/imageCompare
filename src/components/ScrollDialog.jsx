/* ScrollDialog.jsx */

import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ScrollDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.descriptionElement = React.createRef();
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    /*	
        componentDidUpdate(prevPrep, prevState) {
            if (prevState.open !== this.state.open) {
                if (this.descriptionElement.current != null) {
                    this.descriptionElement.current.focus();
                }
            }
        }
        */

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>{this.props.label}</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent dividers={true}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={this.descriptionElement}
                            tabIndex={-1}
                        >
                            {this.props.content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            OK
						</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ScrollDialog;