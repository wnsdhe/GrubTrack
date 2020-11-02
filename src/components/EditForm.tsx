import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {EditTrans} from '../services/puts/index'
import { transactions } from "../services/gets/index"

async function editor(setData: any) {
  let transData =
  {
    "id": Number((document.getElementById("Eid") as HTMLInputElement).value),
    "userid": (document.getElementById("EID") as HTMLInputElement).value,
    "foodWaste": (document.getElementById("EFoodWaste") as HTMLInputElement).checked,
    "pickup": (document.getElementById("EPickup") as HTMLInputElement).checked,
    "amountlbs": Number((document.getElementById("EAmountlbs") as HTMLInputElement).value),
    "status": (document.getElementById("EStatus") as HTMLInputElement).value,
    "flag": (document.getElementById("EFlag") as HTMLInputElement).checked,
  }
  let id = Number((document.getElementById("Eid") as HTMLInputElement).value)
  let user = (document.getElementById("EID") as HTMLInputElement).value
  await EditTrans(transData, id, user)
  transactions(user).then(rest => {
    setData(rest)
  })
}

let EditForm = (props: any) => {
  
  return (
    <div>
      <Dialog open={props.edit} onClose={props.handleEditClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit a existing transaction, please fill each field correctly.
          </DialogContentText>
          <FormControlLabel
            control={
              <Checkbox
                id="EFoodWaste"
                color="default"
                checked={props.data.foodWaste}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            }
            label="FoodWaste"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="EPickup"
                color="default"
                checked={props.data.pickup}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            }
            label="Pick Up"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="EFlag"
                color="default"
                checked={props.data.flag}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            }
            label="Flag"
          />
          <TextField
            required  
            margin="dense"
            id="EID"
            label="UserID"
            type="text"
            value={props.data.userid}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="Eid"
            label="ID"
            type="text"
            placeholder={props.data.id}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="EAmountlbs"
            label="Amount(lbs)"
            type="number"
            placeholder={props.data.amountlbs}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="EStatus"
            label="Status"
            type="text"
            placeholder={props.data.status}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => editor(props.setData)} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}


export default EditForm;