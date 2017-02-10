import React, { PropTypes } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from 'react-mdl';

const UploadDialog = ({ openDialog, onClickCancel, onClickUpload, children }) => {
  return (
    <Dialog open={openDialog} onCancel={onClickCancel} style={{ maxWidth: 600, width: '100%' }}>
      <DialogTitle>Upload</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button type='button' onClick={onClickUpload}>Upload</Button>
        <Button type='button' onClick={onClickCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

UploadDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickUpload: PropTypes.func.isRequired,
  children: PropTypes.node,
};

UploadDialog.defaultProps = {
  openDialog: false,
  onClickCancel: () => {},
  onClickUpload: () => {},
};

export default UploadDialog;
