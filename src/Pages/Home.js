import React, { useEffect, useState } from "react";
import axios from "axios";
import Statistics from "../components/Statistics";
import Filter from "../components/Filter";
import Table from "../components/Table";

const Home = () => {
	const [accounts, setAccounts] = useState([]);
	const [filter, setFilter] = useState("");
	const [filteredAccounts, setFilteredAccounts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios("http://localhost:5000/data")
			.then((response) => {
				setAccounts(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	}, [isModalOpen]);

	const filterByStatus = (event) => {
		const status = event.target.value;

		setFilter(status);

		if (status === "") {
			return;
		}

		const filteredAccounts = accounts.filter(
			(account) => account.status === status
		);
		setFilteredAccounts(filteredAccounts);
	};

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<Statistics accounts={accounts} />
			<Filter filterByStatus={filterByStatus} />
			<Table
				accounts={!!filter ? filteredAccounts : accounts}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
		</div>
	);
};

export default Home;
