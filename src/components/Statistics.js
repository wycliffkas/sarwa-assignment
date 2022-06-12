import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Statistics = ({ accounts }) => {
	const [balsGroupedByStatus, setBalsGroupedByStatus] = useState([]);
	const [statusGroupedByCount, setStatusGroupedByCount] = useState({});

	const groupBalancesByStatus = (accounts) => {
		let result = [];
		accounts.reduce((res, value) => {
			if (!res[value.status]) {
				res[value.status] = { status: value.status, balance: 0 };
				result.push(res[value.status]);
			}
			res[value.status].balance += value.balance;
			return res;
		}, {});

		setBalsGroupedByStatus(result);
	};

	const groupStatusByCount = (accounts) => {
		const result = accounts.reduce(
			(c, { status: key }) => ((c[key] = (c[key] || 0) + 1), c),
			{}
		);

		setStatusGroupedByCount(result);
	};

	useEffect(() => {
		groupBalancesByStatus(accounts);
	}, [accounts]);

	useEffect(() => {
		groupStatusByCount(accounts);
	}, [accounts]);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
				mt: "20px",
        mb: "20px"
			}}>
			<Box>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 16, fontWeight: "bold" }}
							color="text.secondary"
							gutterBottom>
							Total Balance
						</Typography>

						{balsGroupedByStatus.map((group) => (
							<Typography variant="body2" key={group.status}>
								{`${group.status} : ${group.balance}`}
							</Typography>
						))}
					</CardContent>
				</Card>
			</Box>

			<Box>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 16, fontWeight: "bold" }}
							color="text.secondary"
							gutterBottom>
							Total Accounts
						</Typography>

						<Typography variant="body2">
							approved: {statusGroupedByCount.approved}
						</Typography>

						<Typography variant="body2">
							closed: {statusGroupedByCount.closed}
						</Typography>

						<Typography variant="body2">
							funded: {statusGroupedByCount.funded}
						</Typography>

						<Typography variant="body2">
							pending: {statusGroupedByCount.pending}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
};

export default Statistics;
