import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/**
 *
 * @param {{
 * open;
 * heading;
 * mainText;
 * agreeText;
 * disagreeText;
 * onClose;
 * onAccept;
 * }}
 *
 */

export default function DialogCommon({
  open,
  heading,
  mainText,
  agreeText,
  disagreeText,
  onClose,
  onAccept,
}) {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText>{mainText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{disagreeText}</Button>
          <Button onClick={onAccept} autoFocus>
            {agreeText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
