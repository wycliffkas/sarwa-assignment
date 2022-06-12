import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	borderRadius: 2
};

const MainModal = ({
	onHandleClose,
	selectedAccount,
	handleStatusUpdate,
	onChangeStatus,
	isModalOpen
}) => {
	return (
		<>
			<Modal
				open={isModalOpen}
				onClose={onHandleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h3">
						Edit Status
					</Typography>
					<Typography variant="body2">ID: {selectedAccount.id}</Typography>
					<Typography variant="body2">Name: {selectedAccount.name}</Typography>
					<FormControl sx={{ m: "15px 2px", width: 140 }}>
						<InputLabel id="demo-simple-select-helper-label">Status</InputLabel>

						<Select
							onChange={onChangeStatus}
							value={selectedAccount.status}
							labelId="demo-simple-select-helper-label"
							label="Status"
							id="demo-simple-select-helper"
							sx={{ height: "30px" }}>
							<MenuItem value="pending">pending</MenuItem>
							<MenuItem value="approved">approved</MenuItem>
							<MenuItem value="funded">funded</MenuItem>
							<MenuItem value="closed">closed</MenuItem>
						</Select>
					</FormControl>

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-around",
							width: "200px"
						}}>
						<Button variant="contained" onClick={handleStatusUpdate}>
							Update
						</Button>
						<Button variant="outlined" onClick={onHandleClose}>
							Cancel
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};

export default MainModal;
