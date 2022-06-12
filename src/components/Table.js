import React, { useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MainModal from "./MainModal";
import Button from "@mui/material/Button";

const MainTable = ({ accounts, setIsModalOpen, isModalOpen }) => {
	const [selectedAccount, setSelectedAccount] = useState({});

	const handleOpenEditModal = (id) => {
		axios
			.get(`http://localhost:5000/data/${id}`)
			.then((account) => {
				setSelectedAccount(account.data);
				setIsModalOpen(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleClose = () => {
		setIsModalOpen(false);
		selectedAccount({});
	};

	const handleStatusUpdate = () => {
		axios
			.put(`http://localhost:5000/data/${selectedAccount.id}`, selectedAccount)
			.then((account) => {
				setSelectedAccount({});
				setIsModalOpen(false);
			})
			.catch((error) => {
				console.log(error);
				setIsModalOpen(false);
			});
	};

	const onChangeStatus = (event) => {
		setSelectedAccount((prevState) => ({
			...prevState,
			status: event.target.value
		}));
	};

	return (
		<div>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Balance</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{accounts.map((account) => (
							<TableRow key={account.id}>
								<TableCell>{account.id}</TableCell>
								<TableCell>{account.name}</TableCell>
								<TableCell>{account.balance}</TableCell>
								<TableCell>{account.status}</TableCell>
								<TableCell>
									<Button
										variant="text"
										onClick={() => handleOpenEditModal(account.id)}>
										Edit
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<MainModal
				onHandleClose={handleClose}
				selectedAccount={selectedAccount}
				handleStatusUpdate={handleStatusUpdate}
				onChangeStatus={onChangeStatus}
				isModalOpen={isModalOpen}
			/>
		</div>
	);
};

export default MainTable;
